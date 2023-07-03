from pydantic import BaseModel
from typing import Optional
from datetime import date


class AgendamentoBase(BaseModel):
    date: date
    dono_id: int
    pet_id: int
    service_id: int


class Agendamento(AgendamentoBase):
    id: int

    class Config:
        orm_mode = True

class AgendamentoCreate(AgendamentoBase):
    pass


class AgendamentoUpdate(BaseModel):
    date: Optional[date]
    dono_id: Optional[int]
    pet_id: Optional[int]
    service_id: Optional[int]
