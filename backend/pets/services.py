from sqlalchemy.orm import Session

from models import Pet
from pets.schemas import PetCreate, PetUpdate


class PetService:
    def get_all(db: Session):
        return db.query(Pet).all()

    def get_pets(db: Session, dono_id: int):
        return db.query(Pet).filter(Pet.dono_id == dono_id).all()

    def get_pet(db: Session, pet_id: int):
        return db.query(Pet).filter(Pet.id == pet_id).first()

    def delete_pet(db: Session, pet_id: int):
        delete_data = db.query(Pet).filter(Pet.id == pet_id).first()
        db.delete(delete_data)
        db.commit()
        return delete_data

    def create_pet(db: Session, pet: PetCreate, dono_id: int):
        db_pet = Pet(nome=pet.nome, 
                     raca=pet.raca, 
                     dono_id=dono_id,
                     tipo=pet.tipo,
                     tamanho=pet.tamanho)

        db.add(db_pet)
        db.commit()
        db.refresh(db_pet)
        return db_pet

    def update_pet(db: Session, pet_id: int, data: PetUpdate):
        updateData = data.dict(exclude_unset=True)
        db.query(Pet).filter(Pet.id == pet_id).update(
            updateData, synchronize_session=False
        )
        db.commit()
        return data
