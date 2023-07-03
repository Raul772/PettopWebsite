from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from config import get_db

from servicos.schemas import ServicoCreate
from servicos.services import ServicosService

servicosRouter = APIRouter(prefix="/servicos", tags=["Servicos"])

@servicosRouter.get("/", status_code=status.HTTP_200_OK)
def get_all(db:Session = Depends(get_db)):
    return ServicosService.get_all(db=db)

@servicosRouter.get("/{key}", status_code=status.HTTP_200_OK)
def get_all(key, db:Session = Depends(get_db)):
    return ServicosService.get_one(db=db, id=key)

@servicosRouter.post("/cadastro", status_code=status.HTTP_200_OK)
def create(data: ServicoCreate, db:Session = Depends(get_db)):
    return ServicosService.create(db=db, data=data)