import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './App.scss'

import Header from "../Header/Header";
import Routes from "../Routes/Routes";

const App = () => {
    return (
        <Router>
            <Header/>
            <div className="App-ContentWrapper">
                <Routes/>
            </div>
        </Router>
    )
}

export default App;
