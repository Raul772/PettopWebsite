from pydantic import BaseModel


class ServicoBase(BaseModel):
    nome: str
    valor: float
    descricao: str


class Servico(ServicoBase):
    id: int

    class Config:
        orm_mode = True


class ServicoCreate(ServicoBase):
    pass
