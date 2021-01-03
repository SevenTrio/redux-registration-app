import * as types from '../constants/actionsTypes';
import { addUser } from "./usersActions";
import { showSuccessMessage } from "./successMessageActions";

export const setFieldError = (fieldName, error) => {
    return {
        type: types.registrationForm.SET_FIELD_ERROR,
        payload: {
            name: fieldName,
            error: error,
        }
    }
}

export const setFieldValue = (field) => {
    let name = field.name;
    let value = field.type === "checkbox" ? field.checked : field.value;
    return {
        type: types.registrationForm.SET_FIELD_VALUE,
        payload: {
            name: name,
            value: value,
        }
    }
}

export const clearFieldError = (field) => {
    return {
        type: types.registrationForm.SET_FIELD_ERROR,
        payload: {
            name: field.name,
            error: "",
        }
    }
}

export const validateField = (field) => {
    const value = field.type === "checkbox" ? field.checked : field.value;
    const name = field.name;

    if (!(/\S/).test(value)) {
        return {
            type: types.registrationForm.VALIDATE_FIELD,
            payload: {
                name: name,
                error: "This field cannot be empty",
                validated: false,
            }
        }
    }

    let isValid;
    let errorMessage = "";

    switch(name) {
        case 'userName':
            isValid = /^[A-Z ]*$/i.test(value);
            if (!isValid) errorMessage = "The user name can only contain letters and spaces";
            break;

        case 'userGender':
            isValid = ["Male", "Female", "Non-binary"].includes(value);
            if (!isValid) errorMessage = `${value} it's not valid gender`;
            break;

        case 'userCreditCard':
            isValid = /^[0-9]{16}$/.test(value.replace(/\s+/g, ''));
            if (!isValid) errorMessage = "This card is not valid";
            break;

        default:
            break;
    }

    return {
        type: types.registrationForm.VALIDATE_FIELD,
        payload: {
            name: name,
            error: errorMessage,
            validated: isValid,
        }
    }
}

export const submitForm = () => {
    return (dispatch, getState) => {
        const state = getState();
        let isFormValid = true;

        for (let name in state.registrationForm.validated) {
            if (state.registrationForm.validated.hasOwnProperty(name)) {
                if (!state.registrationForm.validated[name]) {
                    isFormValid = false;
                    if (!state.registrationForm.errors[name].length) {
                        dispatch(setFieldError(name, "This field cannot be empty"))
                    }
                }
            }
        }

        if (isFormValid) {
            dispatch(addUser({...state.registrationForm.user, timeStamp: new Date()}));
            dispatch(clearForm());
            dispatch(showSuccessMessage());
        }
    }
}

export const clearForm = () => {
    return {
        type: types.registrationForm.CLEAR_FORM
    }
}

