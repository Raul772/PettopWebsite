from fastapi import FastAPI, status

from config import Base, engine
from models import *

from users.controller import usersRouter

app = FastAPI()


Base.metadata.create_all(bind=engine)

@app.get("/")
async def getHome():
    return {"message": "Hello, World!"}

app.include_router(usersRouter)
