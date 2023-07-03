from sqlalchemy.orm import Session

from agendamentos.schemas import AgendamentoCreate, AgendamentoUpdate
from models import Agendamento


class AgendamentoService:
    def get_all(db: Session):
        return db.query(Agendamento).all()

    def get_one(db: Session, id: int):
        return db.query(Agendamento).filter(Agendamento.id == id).first()

    def delete(db: Session, id: int):
        delete_data = db.query(Agendamento).filter(Agendamento.id == id).first()
        db.delete(delete_data)
        db.commit()
        return delete_data

    def update(db: Session, id: int, data: AgendamentoUpdate):
        update_data = data.dict(exclude_unset=True)
        db.query(Agendamento).filter(Agendamento.id == id).update(
            update_data, synchronize_session=False
        )
        db.commit()
        return data

    def create(db: Session, data: AgendamentoCreate):
        db_agendamento = Agendamento(
            service_id=data.service_id,
            date=data.date,
            dono_id=data.dono_id,
            pet_id=data.pet_id,
        )
        db.add(db_agendamento)
        db.commit()
        db.refresh(db_agendamento)
        return db_agendamento
