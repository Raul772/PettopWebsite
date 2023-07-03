from sqlalchemy.orm import Session


from models import Servico
from servicos.schemas import ServicoCreate

class ServicosService:
    def get_all(db:Session):
        return db.query(Servico).all()
    
    def get_one(db:Session, id: int):
        return db.query(Servico).filter(Servico.id == id).first() 
    
    def create(db:Session, data:ServicoCreate):
        
        db_Servico = Servico(
            nome = data.nome,
            valor = data.valor,
            descricao = data.descricao
        )
        db.add(db_Servico)
        db.commit()
        db.refresh(db_Servico)
        return db_Servico