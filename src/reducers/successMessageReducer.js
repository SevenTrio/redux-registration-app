import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

const successMessageReducer = (state = initialState.successMessage, action) => {
    switch (action.type) {
        case types.successMessage.SHOW:
            return {
                ...state,
                show: true,
            };

        case types.successMessage.HIDE:
            return {
                ...state,
                show: false,
            };

        default:
            return state;
    }
};

export default successMessageReducer;