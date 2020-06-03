import React from "react";
import {NavLink} from "react-router-dom";

export default function Navigation(props) {
    return (
        <nav className="nav">
            <div className="nav__left">
                <NavLink to="/" className="navigation__icon">Holidaze</NavLink>
            </div>
            <div className="nav__right">
                <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">Home</NavLink>
                <NavLink to="/Hotels" exact activeClassName="nav__link--active" className="nav__link">Hotels</NavLink>
                <NavLink to="/Contact" exact activeClassName="nav__link--active" className="nav__link">Contact</NavLink>
                <NavLink to="/Login" exact activeClassName="nav__link--active" className="nav__link">Login</NavLink>
            </div>
        </nav>
    )
}
