import React from 'react';

export default function Navigation(props) {
    return (
        <nav className="nav__bar">
           <NavLink to="/" exact>
           </NavLink>
           <button className="nav__menuToggler"/>
           <div className="nav__right">
               <NavLink to="/" exact activeClassName="nav--link__active" className="nav--link">Home</NavLink>
               <NavLink to="/Hotels" exact exact activeClassName="nav--link__active" className="nav--link">Hotels</NavLink>
               <NavLink to="/Contact" exact exact activeClassName="nav--link__active" className="nav--link">Contact</NavLink>
               <NavLink to="/Login" exact exact activeClassName="nav--link__active" className="nav--link">Login</NavLink>
           </div>
       </nav>
    )
}
