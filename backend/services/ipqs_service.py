import requests
import os

API_KEY = os.getenv("IPQS_API_KEY")

def check_ipqs(url):
    endpoint = f"https://ipqualityscore.com/api/json/url/{API_KEY}/{url}"

    response = requests.get(endpoint)
    return response.json()