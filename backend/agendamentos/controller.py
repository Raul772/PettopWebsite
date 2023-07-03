from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from config import get_db

from agendamentos.services import (
    AgendamentoService,
    AgendamentoCreate,
    AgendamentoUpdate,
)


agendamentoRouter = APIRouter(prefix="/agendamento", tags=["Agendamento"])


@agendamentoRouter.get("/", status_code=status.HTTP_200_OK)
def get_all(db: Session = Depends(get_db)):
    return AgendamentoService.get_all(db=db)


@agendamentoRouter.get("/{id}", status_code=status.HTTP_200_OK)
def get_one(id, db: Session = Depends(get_db)):
    return AgendamentoService.get_one(db=db, id=id)


@agendamentoRouter.delete("/{id}", status_code=status.HTTP_200_OK)
def delete(id, db: Session = Depends(get_db)):
    return AgendamentoService.delete(db=db, id=id)


@agendamentoRouter.patch("/{id}", status_code=status.HTTP_200_OK)
def update(id, data: AgendamentoUpdate, db: Session = Depends(get_db)):
    return AgendamentoService.update(db=db, id=id, data=data)


@agendamentoRouter.post("/", status_code=status.HTTP_200_OK)
def create(data: AgendamentoCreate, db: Session = Depends(get_db)):
    return AgendamentoService.create(db=db, data=data)
