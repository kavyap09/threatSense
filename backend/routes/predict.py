from fastapi import APIRouter
from pydantic import BaseModel
from services.model import predict_message  # ✅ FIXED

router = APIRouter()

class MessageRequest(BaseModel):
    message: str

@router.post("/predict")
def detect_message(data: MessageRequest):
    return predict_message(data.message)