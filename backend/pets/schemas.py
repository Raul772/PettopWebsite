from pydantic import BaseModel
from typing import Optional


class PetBase(BaseModel):
    nome: str
    raca: Optional[str]
    tipo: Optional[str]
    tamanho: Optional[str]


class Pet(PetBase):
    id: int
    dono_id: int

    class Config:
        orm_mode = True


class PetCreate(PetBase):
    pass


class PetUpdate(BaseModel):
    nome: Optional[str]
    raca: Optional[str]
    tipo: Optional[str]
    tamanho: Optional[str]
