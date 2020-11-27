import React, { Component } from "react";
import { connect } from "react-redux";

import SuccessMessage from "./SuccessMessage";

class SuccessMessageContainer extends Component {
    render() {
        return (
            <SuccessMessage show={this.props.show}/>
        );
    }
}

const mapStateToProps = (state) => ({
    show: state.successMessage.show,
});


export default connect(mapStateToProps, null)(SuccessMessageContainer);