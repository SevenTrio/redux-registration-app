import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { loadUsersFromStorage } from "../../actions/usersActions";
import './App.scss'

import Header from "../Header/Header";
import Routes from "../Routes/Routes";

const App = ({ addUser, users }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("App useEffect");
        dispatch(loadUsersFromStorage())
    }, [dispatch])

    return (
        <Router>
            <Header/>
            <div className="App-ContentWrapper">
                <Routes addUser={addUser} userList={users}/>
            </div>
        </Router>
    )
}

export default App;
