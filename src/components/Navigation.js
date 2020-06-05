import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

// Navigation komponenten
export default function Navigation(props) {
    // States
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        return (
            <nav className="nav nav--show">
                <div className="nav__left">
                    <NavLink to="/" className="navigation__icon">Holidaze</NavLink>
                </div>
                <div className="nav__right nav__right--show">
                    <i className="nav__menuToggle" onClick={() => setShowMenu(true)}>[=]</i>
                    <div className="nav__links nav__links--show">
                        <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link nav__link--mobile">Home</NavLink>
                        <NavLink to="/Hotels" exact activeClassName="nav__link--active" className="nav__link nav__link--mobile">Hotels</NavLink>
                        <NavLink to="/Contact" exact activeClassName="nav__link--active" className="nav__link nav__link--mobile">Contact</NavLink>
                        <NavLink to="/Login" exact activeClassName="nav__link--active" className="nav__link nav__link--mobile">Login</NavLink>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <div className="nav__left">
                    <NavLink to="/" className="navigation__icon">Holidaze</NavLink>
                </div>
                <div className="nav__right">
                    <i className="nav__menuToggle" onClick={() => setShowMenu(true)}></i>
                    <div className="nav__links">
                        <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">Home</NavLink>
                        <NavLink to="/Hotels" exact activeClassName="nav__link--active" className="nav__link">Hotels</NavLink>
                        <NavLink to="/Contact" exact activeClassName="nav__link--active" className="nav__link">Contact</NavLink>
                        <NavLink to="/Login" exact activeClassName="nav__link--active" className="nav__link">Login</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}
