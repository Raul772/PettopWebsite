from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# DATABASE_URL = "sqlite:///./petshop_database.db"
DATABASE_URL = ""

engine = create_engine(
    "mysql+mysqldb://pettopapi:Raul88199262/@pettop.mysql.database.azure.com:3306/pettopbd",
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally: 
        db.close()
