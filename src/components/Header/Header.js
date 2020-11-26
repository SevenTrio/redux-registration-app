import React from "react";
import './Header.scss'

import Hamburger from "../Hamburger/HamburgerContainer";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Wrapper">
                <Hamburger/>
            </div>
        </div>
    );
};

export default Header;