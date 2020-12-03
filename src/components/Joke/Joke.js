import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJoke } from "../../actions/jokeActions";
import CircularProgress from '@material-ui/core/CircularProgress';
import './Joke.scss'

const Joke = () => {
    const dispatch = useDispatch();
    const joke = useSelector((state) => state.joke);

    useEffect(() => {
        console.log("Joke useEffect");
        dispatch(loadJoke())
    }, [dispatch])

    if (joke.isError) return null;

    return (
        <div className="Joke">
            {joke.isLoading
                ?
                    <CircularProgress size={40} className="Joke-Preloader"/>
                :
                    <span className="Joke-Text">
                        <b>Interesting to know:</b> {joke.value} 😎
                    </span>
            }
        </div>
    )
}

export default Joke