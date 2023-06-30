from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware

from config import Base, engine
from models import *

from users.controller import usersRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)

@app.get("/")
async def getHome():
    return {"message": "Hello, World!"}

app.include_router(usersRouter)
