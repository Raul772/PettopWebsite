from sqlalchemy import Column, Float, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from config import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    nome = Column(String)
    cpf = Column(String, index=True)
    endereco = Column(String, unique=True)
    telefone = Column(String)
    Admin = Column(Boolean, index=True)
    is_active = Column(Boolean, default=True)
    pets = relationship("Pet", back_populates="dono")


class Pet(Base):
    __tablename__ = "pets"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    tipo = Column(String)
    raca = Column(String)
    tamanho = Column(String)
    dono_id = Column(Integer, ForeignKey("users.id"))
    dono = relationship("User", back_populates="pets")


class Servico(Base):
    __tablename__ = "servicos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    valor = Column(Float)
    descricao = Column(String)

 
class Agendamento(Base):
    __tablename__ = "agendamentos"

    id = Column(Integer, primary_key=True, index=True)
    service_id = Column(Integer)
    date = Column(DateTime)
    dono_id = Column(Integer, index=True)
    pet_id = Column(Integer, index=True)
