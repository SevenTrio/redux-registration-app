import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import './Joke.scss'

const Joke = ({ joke }) => {
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