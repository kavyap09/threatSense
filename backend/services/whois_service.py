import whois

def check_whois(url):
    try:
        domain_info = whois.whois(url)
        return {
            "domain_age": domain_info.creation_date,
            "registrar": domain_info.registrar
        }
    except:
        return {"error": "WHOIS lookup failed"}