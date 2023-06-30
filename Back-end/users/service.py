from sqlalchemy.orm import Session

from models import User
from users.schemas import UserCreate

class UserService:
    def get_users(db: Session, skip: int = 0, limit: int = 100):
      return db.query(User).offset(skip).limit(limit).all()
    
    def get_user(db: Session, user_id: int):
      return db.query(User).filter(User.id == user_id).first()
    
    def get_user(db: Session, user_email: str):
      return db.query(User).filter(User.email == user_email).first()

    def create_user(db: Session, user: UserCreate):
      fake_hashed_password = user.password + "notreallyhashed"
      db_user = User(email = user.email, 
        hashed_password=fake_hashed_password, 
        nome=user.nome,
        cpf=user.cpf,
        endereco=user.endereco,
        telefone=user.telefone)
      db.add(db_user)
      db.commit()
      db.refresh(db_user)
      return db_user