from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llama_index.llms.llama_api import LlamaAPI
import uvicorn

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = "LL-Z9aX5exV9cx8eVPIWfIPSwQAVwQC5PkJA5gpzmepj6mbPqJPHKQkm46ABTuWBDLT"

llm = LlamaAPI(api_key=api_key)

class Message(BaseModel):
    text: str

@app.post("/chat")
async def chat(message: Message):
    prompt = f"You are a productivity coach. User said: '{message.text}'. Respond as a productivity coach."
    response = llm.complete(prompt)
    return {"response": response}

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

