import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJoke } from "../../actions/jokeActions";

import Joke from "./Joke";

class JokeContainer extends Component {
    componentDidMount() {
        console.log("Joke did mount");
        this.props.loadJoke();
    }

    render() {
        return (
            <Joke joke={this.props.joke}/>
        );
    }
}

const mapStateToProps = (state) => ({
    joke: state.joke,
});

const mapDispatchToProps = dispatch => {
    return {
        loadJoke: () => dispatch(loadJoke())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeContainer);