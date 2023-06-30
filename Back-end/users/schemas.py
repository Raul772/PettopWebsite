from pydantic import BaseModel

class PetBase(BaseModel):
    nome: str
    raca: str

class PetCreate(PetBase):
    pass

class Pet(PetBase):
    id: int
    dono_id: int

    class Config:
        orm_mode = True


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

