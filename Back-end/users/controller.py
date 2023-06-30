from fastapi import APIRouter, Depends, status

from sqlalchemy.orm import Session

from config import get_db
from users.service import UserService
from users.schemas import UserCreate

usersRouter = APIRouter(prefix="/users", tags=["Users"])

@usersRouter.get("/", status_code=status.HTTP_200_OK)
async def get_all(db:Session=Depends(get_db)):
    return UserService.get_users(db=db)

@usersRouter.post("/cadastro", status_code=status.HTTP_200_OK)
async def create(data:UserCreate ,db:Session=Depends(get_db)):
    return UserService.create_user(db=db, user=data)

@usersRouter.get("/{id}", status_code=status.HTTP_200_OK)
async def get_one(id:int ,db:Session=Depends(get_db)):
    return UserService.get_user(db=db, id=id)
