from fastapi import APIRouter
from pydantic import BaseModel
from services.url_analyzer import analyze_url

router = APIRouter()

class URLRequest(BaseModel):
    url: str   # same as frontend

@router.post("/detect-url")
def detect_url(data: URLRequest):
    return analyze_url(data.url)
