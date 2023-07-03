from fastapi import APIRouter, Depends, status

from sqlalchemy.orm import Session

from config import get_db
from users.service import UserService
from users.schemas import UserCreate, UserUpdate

usersRouter = APIRouter(prefix="/users", tags=["Users"])


@usersRouter.get("/", status_code=status.HTTP_200_OK)
async def get_all(db: Session = Depends(get_db)):
    return UserService.get_users(db=db)


@usersRouter.get("/{key}", status_code=status.HTTP_200_OK)
async def get_one(key: int, db: Session = Depends(get_db)):
    return UserService.get_user_id(db=db, user_id=key)


@usersRouter.get("/email/{key}", status_code=status.HTTP_200_OK)
async def get_one(key: str, db: Session = Depends(get_db)):
    return UserService.get_user(db=db, user_email=key)


@usersRouter.patch("/{key}", status_code=status.HTTP_200_OK)
async def get_one(key: int, data: UserUpdate, db: Session = Depends(get_db)):
    return UserService.update_user(db=db, user_id=key, data=data)


@usersRouter.post("/cadastro", status_code=status.HTTP_200_OK)
async def create(data: UserCreate, db: Session = Depends(get_db)):
    return UserService.create_user(db=db, user=data)


@usersRouter.delete("/{key}", status_code=status.HTTP_200_OK)
async def delete(key: int, db: Session = Depends(get_db)):
    return UserService.delete_user(db=db, user_id=key)
