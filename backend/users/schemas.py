from pydantic import BaseModel

from pets.schemas import Pet

class UserBase(BaseModel):
    email: str
    nome: str
    cpf: str
    endereco: str
    telefone: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    pets: list[Pet] = []

    class Config:
        orm_mode = True

