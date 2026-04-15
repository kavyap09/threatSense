import requests
import os

API_KEY = os.getenv("VIRUSTOTAL_API_KEY")

def check_virustotal(url):
    endpoint = "https://www.virustotal.com/api/v3/urls"

    response = requests.post(
        endpoint,
        headers={"x-apikey": API_KEY},
        data={"url": url}
    )

    return response.json()