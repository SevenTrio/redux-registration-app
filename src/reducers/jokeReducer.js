import initialState from '../constants/initialState';
import * as types from '../constants/actionsTypes';

const jokeReducer = (state = initialState.joke, action) => {
    switch (action.type) {
        case types.joke.SET:
            return { ...state, value: action.payload };

        case types.joke.LOAD_START:
            return {...state, isLoading: true};

        case types.joke.LOAD_SUCCESS:
            return {...state, isLoading: false, isError: false};

        case types.joke.LOAD_FAIL:
            return {...state, isLoading: false, isError: true};

        default:
            return state;
    }
};

export default jokeReducer;