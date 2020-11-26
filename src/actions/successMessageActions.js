import * as types from '../constants/actionsTypes';

export const showSuccessMessage = () => {
    return (dispatch) => {
        dispatch({
            type: types.successMessage.SHOW,
        });

        setTimeout(() => {
            dispatch(hideSuccessMessage());
        }, 3000)
    };
}

export const hideSuccessMessage = () => {
    return {
        type: types.successMessage.HIDE,
    };
}

