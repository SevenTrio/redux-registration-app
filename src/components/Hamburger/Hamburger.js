import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu, showMenu } from "../../actions/menuActions";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Blackout from "../Blackout/Blackout";
import Menu from '../Menu/Menu'
import './Hamburger.scss'

const Hamburger = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.menu.active);

    const handleMenuButtonClick = () => {
        open ? dispatch(hideMenu()) : dispatch(showMenu());
    };

    const handleClose = () => {
        if (open) dispatch(hideMenu());
    }

    return (
        <Fragment>
            <ClickAwayListener onClickAway={handleClose}>
                <div className="Hamburger">
                    <button
                        className={`Hamburger-Button ${open ? "Hamburger-Button_open" : ""}`}
                        onClick={handleMenuButtonClick}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <Menu open={open} duration={300} handleClose={handleClose}/>
                </div>
            </ClickAwayListener>

            <Blackout open={open} duration={300} />
        </Fragment>
    )
}

export default Hamburger;