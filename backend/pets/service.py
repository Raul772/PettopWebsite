from sqlalchemy.orm import Session

from models import Pet
from pets.schemas import PetCreate


class PetService():
    def get_all(db:Session):
        return db.query(Pet).all()

    def get_pets(db:Session, dono_id:int):
        return db.query(Pet).filter(Pet.dono_id == dono_id).all()
    
    def get_pet(db:Session, pet_id:int):
        return db.query(Pet).filter(Pet.id == pet_id).first()
    
    def create_pet(db:Session, pet:PetCreate, dono_id:int):
        db_pet = Pet(
            nome=pet.nome,
            raca=pet.raca,
            dono_id=dono_id
        )
        db.add(db_pet)
        db.commit()
        db.refresh(db_pet)
        return db_pet
    


    