import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Registration from "../Registration/RegistrationContainer";
import ClientList from "../ClientList/ClientListContainer";
import AboutMe from "../AboutMe/AboutMe";

const Routes = () => {
    return(
        <Switch>
            <Route path="/add-user" exact>
                <Registration/>
            </Route>
            <Route path="/user-list" exact>
                <ClientList/>
            </Route>
            <Route path="/about-me" exact>
                <AboutMe/>
            </Route>
            <Route path="/">
                <Redirect to="/user-list"/>
            </Route>
        </Switch>
    )
}

export default Routes;