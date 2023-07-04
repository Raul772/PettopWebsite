from pydantic import BaseModel
from typing import Optional

from pets.schemas import Pet

class UserBase(BaseModel):
    email: str
    nome: str
    cpf: Optional[str] = "Não Informado"
    endereco: Optional[str] = "Não Informado"
    telefone: Optional[str] = "Não Informado"

class UserUpdate(BaseModel):
    email: Optional[str]
    nome: Optional[str]
    cpf: Optional[str]
    endereco: Optional[str]
    telefone: Optional[str]


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

