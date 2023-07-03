from sqlalchemy.orm import Session

from models import User, Pet
from users.schemas import UserCreate, UserUpdate


class UserService:
    def get_users(db: Session, skip: int = 0, limit: int = 100):
        return db.query(User).offset(skip).limit(limit).all()

    def get_user_id(db: Session, user_id: int):
        return db.query(User).filter(User.id == user_id).first()

    def get_user(db: Session, user_email: str):
        return db.query(User).filter(User.email == user_email).first()

    def delete_user(db: Session, user_id: int):
        delete_data = db.query(User).filter(User.id == user_id).first()
        delete_data_dependents = db.query(Pet).filter(Pet.dono_id == user_id).all()
        for dependent in delete_data_dependents:
            db.delete(dependent)

        db.delete(delete_data)
        db.commit()
        return delete_data

    def update_user(db: Session, user_id: int, data: UserUpdate):
        updateData = data.dict(exclude_unset=True)

        db.query(User).filter(User.id == user_id).update(
            updateData, synchronize_session=False
        )
        db.commit()
        return data

    def create_user(db: Session, user: UserCreate):
        fake_hashed_password = user.password + "notreallyhashed"
        db_user = User(
            email=user.email,
            hashed_password=fake_hashed_password,
            nome=user.nome,
            cpf=user.cpf,
            endereco=user.endereco,
            telefone=user.telefone,
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
