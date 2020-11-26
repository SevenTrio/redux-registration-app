import React, { Component } from "react";
import { connect } from 'react-redux';
import { hideMenu, showMenu } from "../../actions/menuActions";

import Hamburger from "./Hamburger";

class HamburgerContainer extends Component {
    handleMenuButtonClick = () => {
        this.props.open ? this.props.hideMenu() : this.props.showMenu();
    };

    handleClose = () => {
        if (this.props.open) this.props.hideMenu();
    }

    render() {
        return (
            <Hamburger
                open={this.props.open}
                handleMenuButtonClick={this.handleMenuButtonClick}
                handleClose={this.handleClose}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    open: state.menu.active
});

const mapDispatchToProps = dispatch => {
    return {
        showMenu: () => dispatch(showMenu()),
        hideMenu: () => dispatch(hideMenu()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerContainer);