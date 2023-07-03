from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware

from config import Base, engine
from models import *

from users.controller import usersRouter
from pets.controller import petsRouter
from servicos.controller import servicosRouter
from agendamentos.controller import agendamentoRouter

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
app.include_router(petsRouter)
app.include_router(servicosRouter)
app.include_router(agendamentoRouter)