
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from config import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key = True, index = True)
    email = Column(String, unique = True, index = True)
    hashed_password = Column(String)
    nome = Column(String)
    cpf = Column(String, unique = True, index = True)
    endereco = Column(String, unique = True)
    telefone = Column(String)
    Admin = Column(Boolean)
    is_active = Column(Boolean, default = True)
    pets = relationship("Pet", back_populates = "dono")
    
class Pet(Base):
    __tablename__ = "pets"

    id = Column(Integer, primary_key = True, index = True)
    nome = Column(String, index = True)
    raca = Column(String)
    dono_id = Column(Integer, ForeignKey("users.id"))
    dono = relationship("User", back_populates = "pets")