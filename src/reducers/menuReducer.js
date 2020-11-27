import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

const menuReducer = (state = initialState.menu, action) => {
    switch (action.type) {
        case types.menu.SHOW:
            return {
                ...state,
                active: true,
            };

        case types.menu.HIDE:
            return {
                ...state,
                active: false,
            };

        default:
            return state;
    }
};

export default menuReducer;