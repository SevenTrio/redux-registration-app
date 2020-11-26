import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case types.users.LOAD_FROM_STORAGE:
            return [
                ...state, ...action.payload
            ];

        case types.users.ADD:
            return [
                ...state, action.payload
            ];

        default:
            return state;
    }
};