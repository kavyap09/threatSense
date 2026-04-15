import pickle
import re

model_bundle = pickle.load(open("model/threatsense_model.pkl", "rb"))

nb_model = model_bundle["nb_model"]
lr_model = model_bundle["lr_model"]
vectorizer = model_bundle["vectorizer"]

def clean_text(text):
    text = text.lower()
    text = re.sub(r"http\S+", " url ", text)
    text = re.sub(r"\d+", " num ", text)
    text = re.sub(r"[^\w\s₹]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def predict_message(msg):
    cleaned_msg = clean_text(msg)
    msg_tfidf = vectorizer.transform([cleaned_msg])

    nb_p = nb_model.predict_proba(msg_tfidf)[:, 1]
    lr_p = lr_model.predict_proba(msg_tfidf)[:, 1]

    final_p = float(0.3 * nb_p + 0.7 * lr_p)

    if final_p >= 0.7:
        prediction = "Phishing"
        risk_level = "High"
    elif final_p <= 0.3:
        prediction = "Safe"
        risk_level = "Low"
    else:
        prediction = "Suspicious"
        risk_level = "Medium"

    contains_url = bool(re.search(r"http|www|\.com|\.in", msg.lower()))
    contains_number = bool(re.search(r"\d", msg))

    if "bank" in msg.lower() or "account" in msg.lower():
        attack_type = "Banking Scam"
    elif "otp" in msg.lower():
        attack_type = "OTP Scam"
    elif "link" in msg.lower() or contains_url:
        attack_type = "Malicious Link"
    elif "update" in msg.lower():
        attack_type = "Urgency Attack"
    else:
        attack_type = "General"

    return {
        "message": msg,
        "prediction": prediction,
        "confidence": round(final_p, 2),
        "risk_level": risk_level,
        "attack_type": attack_type,
        "contains_url": contains_url,
        "contains_number": contains_number
    }