import datetime
from services.virustotal_service import check_virustotal
from services.ipqs_service import check_ipqs
from services.whois_service import check_whois


def analyze_url(url):
    try:
        vt = check_virustotal(url) or {}
        ipqs = check_ipqs(url) or {}
        whois_data = check_whois(url) or {}

        vt_score = 0
        ipqs_score = 0
        whois_score = 0
        reasons = []

        # =========================
        # 🔴 1. VirusTotal (40%)
        # =========================
        vt_str = str(vt).lower()

        if "malicious" in vt_str:
            vt_score = 40
            reasons.append("VirusTotal flagged as malicious")
        elif "suspicious" in vt_str:
            vt_score = 25
            reasons.append("VirusTotal marked as suspicious")

        # =========================
        # 🔴 2. IPQS (30%)
        # =========================
        risk = ipqs.get("risk_score", 0)

        if ipqs.get("phishing"):
            ipqs_score = 30
            reasons.append("IPQS detected phishing")
        elif risk > 70:
            ipqs_score = 25
            reasons.append("High IPQS risk score")
        elif risk > 40:
            ipqs_score = 15
            reasons.append("Moderate IPQS risk")
        else:
            ipqs_score = 5

        # =========================
        # 🔴 3. WHOIS (30%)
        # =========================
        creation_date = whois_data.get("domain_age")

        if creation_date:
            if isinstance(creation_date, list):
                creation_date = creation_date[0]

            try:
                age_days = (datetime.datetime.now() - creation_date).days

                if age_days < 30:
                    whois_score = 30
                    reasons.append("Very new domain (<30 days)")
                elif age_days < 180:
                    whois_score = 20
                    reasons.append("Recently registered domain")
                else:
                    whois_score = 5
            except:
                whois_score = 10
                reasons.append("WHOIS parsing error")
        else:
            whois_score = 10
            reasons.append("WHOIS data unavailable")

        # =========================
        # 🔥 FINAL SCORE
        # =========================
        total_score = vt_score + ipqs_score + whois_score

        # =========================
        # 🔥 FINAL DECISION
        # =========================
        if total_score >= 70:
            prediction = "Phishing"
            risk_level = "High"
        elif total_score >= 40:
            prediction = "Suspicious"
            risk_level = "Medium"
        else:
            prediction = "Safe"
            risk_level = "Low"

        return {
            "prediction": prediction,
            "confidence": round(total_score / 100, 2),
            "risk_level": risk_level,
            "attack_type": "Malicious URL",
            "contains_url": True,
            "score_breakdown": {
                "virustotal": vt_score,
                "ipqs": ipqs_score,
                "whois": whois_score,
                "total": total_score
            },
            "reasons": reasons,
            "sources": {
                "virustotal": vt,
                "ipqs": ipqs,
                "whois": whois_data
            }
        }

    except Exception as e:
        # 🔥 NEVER CRASH BACKEND
        return {
            "prediction": "Suspicious",
            "confidence": 0.5,
            "risk_level": "Medium",
            "attack_type": "Error Handling",
            "contains_url": True,
            "reasons": [f"Error occurred: {str(e)}"]
        }