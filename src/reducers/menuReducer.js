import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

export default (state = initialState.menu, action) => {
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