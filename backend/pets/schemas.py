from pydantic import BaseModel


class PetBase(BaseModel):
    nome: str
    raca: str

class Pet(PetBase):
    id: int
    dono_id: int

    class Config:
        orm_mode = True

class PetCreate(PetBase):
    pass