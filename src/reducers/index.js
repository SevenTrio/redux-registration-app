import { combineReducers } from 'redux';

import users from "./usersReducer";
import menu from "./menuReducer";
import registrationForm from "./registrationFormReducer";
import successMessage from "./successMessageReducer";

export default combineReducers({
    users,
    menu,
    registrationForm,
    successMessage,
});