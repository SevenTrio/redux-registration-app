import * as types from '../constants/actionsTypes';

const setJoke = (joke) => ({
    type: types.joke.SET,
    payload: joke,
});

const loadJokeStart = () => ({
    type: types.joke.LOAD_START,
});

const loadJokeSuccess = () => ({
    type: types.joke.LOAD_SUCCESS,
});

const loadJokeFail = () => ({
    type: types.joke.LOAD_FAIL,
});

export const loadJoke = () => {
    return (dispatch) => {
        dispatch(loadJokeStart());
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then((joke) => {
                dispatch(setJoke(joke.value));
                dispatch(loadJokeSuccess());
            })
            .catch((e) => dispatch(loadJokeFail()));
    };
};