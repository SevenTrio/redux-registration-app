import React, { Component } from "react";
import { connect } from 'react-redux';

import ClientList from "./ClientList";

class ClientListContainer extends Component {
    render() {
        return (
            <ClientList userList={this.props.users}/>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps, null)(ClientListContainer);