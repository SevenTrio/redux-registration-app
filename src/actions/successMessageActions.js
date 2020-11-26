import * as types from '../constants/actionsTypes';

export const showSuccessMessage = () => {
    return {
        type: types.successMessage.SHOW,
    };
}

export const hideSuccessMessage = () => {
    return {
        type: types.successMessage.HIDE,
    };
}

