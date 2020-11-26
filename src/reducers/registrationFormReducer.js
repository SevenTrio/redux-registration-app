import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

export default (state = initialState.registrationForm, action) => {
    switch (action.type) {
        case types.registrationForm.SET_FIELD_VALUE:
            return {
                ...state,
                user: {...state.user, [action.payload.name]: action.payload.value},
            };

        case types.registrationForm.SET_FIELD_ERROR:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
            };

        case types.registrationForm.VALIDATE_FIELD:
            return {
                ...state,
                errors: {...state.errors, [action.payload.name]: action.payload.error},
                validated: {...state.validated, [action.payload.name]: action.payload.validated},
            };

        case types.registrationForm.CLEAR_FORM:
            return {
                ...initialState.registrationForm,
            };

        default:
            return state;
    }
};