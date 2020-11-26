import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsersFromStorage } from "../../actions/usersActions";

import App from "./App";

class AppContainer extends Component {
    componentDidMount() {
        this.props.loadUsersFromStorage()
    }

    render() {
        return <App/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsersFromStorage: () => dispatch(loadUsersFromStorage()),
    };
};

export default connect(null, mapDispatchToProps)(AppContainer);
