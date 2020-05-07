import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Navigation(props) {
    const [hamburger, setHamburger] = useState(false);
    if (hamburger) {
        return (
            <nav className="nav--mobile">
               <NavLink to="/" exact>
               </NavLink>
               <button className="nav__menuToggler--mobile" onClick={() => setHamburger(false)}/>
               <div className="nav__right--mobile">
                   <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link--mobile">Home</NavLink>
                   <NavLink to="/Hotels" exact exact activeClassName="nav__link--active" className="nav__link--mobile">Hotels</NavLink>
                   <NavLink to="/Contact" exact exact activeClassName="nav__link--active" className="nav__link--mobile">Contact</NavLink>
                   <NavLink to="/Login" exact exact activeClassName="nav__link--active" className="nav__link--mobile">Login</NavLink>
               </div>
            </nav>
        )
    } else{
        return (
            <nav className="nav">
               <NavLink to="/" exact>
               </NavLink>
               <button className="nav__menuToggler" onClick={() => setHamburger(true)}/>
               <div className="nav__right">
                   <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">Home</NavLink>
                   <NavLink to="/Hotels" exact exact activeClassName="nav__link--active" className="nav__link">Hotels</NavLink>
                   <NavLink to="/Contact" exact exact activeClassName="nav__link--active" className="nav__link">Contact</NavLink>
                   <NavLink to="/Login" exact exact activeClassName="nav__link--active" className="nav__link">Login</NavLink>
               </div>
           </nav>
        )
    }
}
