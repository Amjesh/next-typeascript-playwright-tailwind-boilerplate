from fastapi import APIRouter
from src.schemas.user import User, ShowUser

router = APIRouter(
    prefix="/user",
    tags=['Users']
)


@router.post('/', response_model=ShowUser)
def create_user(request: User):
    return request


@router.get('/{id}')
def get_user(id: int):
    return id
