from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from config import get_db
from pets.service import *
from pets.schemas import *

petsRouter = APIRouter(prefix="/pets", tags=["Pets"])

@petsRouter.get("/all", status_code=status.HTTP_200_OK)
def get_all(db:Session=Depends(get_db)):
    return PetService.get_all(db=db)

@petsRouter.get("/all/{key}", status_code=status.HTTP_200_OK)
def get_all(key, db:Session=Depends(get_db)):
    return PetService.get_pets(db=db, dono_id=key)

@petsRouter.post("/cadastro/{key}", status_code=status.HTTP_200_OK)
def create(key, data:PetCreate, db:Session=Depends(get_db)):
    return PetService.create_pet(db=db, pet=data, dono_id=key)

@petsRouter.get("/one/{key}", status_code=status.HTTP_200_OK)
def get_one(key, db:Session=Depends(get_db)):
    return PetService.get_pet(db=db, pet_id=key)