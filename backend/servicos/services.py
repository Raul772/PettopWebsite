from sqlalchemy.orm import Session


from models import Servico
from servicos.schemas import ServicoCreate, ServicoUpdate


class ServicosService:
    def get_all(db: Session):
        return db.query(Servico).all()

    def get_one(db: Session, id: int):
        return db.query(Servico).filter(Servico.id == id).first()

    def delete(db: Session, id: int):
        delete_data = db.query(Servico).filter(Servico.id == id).first()
        db.delete(delete_data)
        db.commit()
        return delete_data

    def update(db: Session, id: int, data: ServicoUpdate):
        update_data = data.dict(exclude_unset=True)

        db.query(Servico).filter(Servico.id == id).update(
            update_data, synchronize_session=False
        )
        db.commit()
        return data

    def create(db: Session, data: ServicoCreate):
        db_Servico = Servico(nome=data.nome, valor=data.valor, descricao=data.descricao)
        db.add(db_Servico)
        db.commit()
        db.refresh(db_Servico)
        return db_Servico
