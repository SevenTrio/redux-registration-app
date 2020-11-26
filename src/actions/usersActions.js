import * as types from '../constants/actionsTypes';
import { v4 as uuid } from 'uuid';

export const loadUsersFromStorage = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user) => {
        user.timeStamp = new Date(user.timeStamp);
    });

    return {
        type: types.users.LOAD_FROM_STORAGE,
        payload: users
    };
}

export const addUser = (user) => {
    if (!user.id) user.id = uuid();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    return {
        type: types.users.ADD,
        payload: user
    };
}

