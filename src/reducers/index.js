import { combineReducers } from 'redux';

import users from "./usersReducer";
import menu from "./menuReducer";
import registrationForm from "./registrationFormReducer";
import successMessage from "./successMessageReducer";
import joke from "./jokeReducer";

export default combineReducers({
    users,
    menu,
    registrationForm,
    successMessage,
    joke,
});