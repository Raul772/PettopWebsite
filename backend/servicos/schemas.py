from pydantic import BaseModel
from typing import Optional


class ServicoBase(BaseModel):
    nome: str
    valor: float
    descricao: str


class Servico(ServicoBase):
    id: int
    active: bool 

    class Config:
        orm_mode = True


class ServicoCreate(ServicoBase):
    pass

class ServicoUpdate(BaseModel):
    nome: Optional[str]
    valor: Optional[float]
    descricao: Optional[str]
    active: Optional[bool]
