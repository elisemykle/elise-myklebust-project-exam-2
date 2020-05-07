import React from 'react';
import './css/style.scss';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/visitor/home/Home.js";
import Contact from "./components/visitor/contact/Contact.js";
import Enquiry from "./components/visitor/enquiry/Enquiry.js";
import Hotels from "./components/visitor/hotels/Hotels.js";
import Hotelspesific from "./components/visitor/hotelspesific/Hotelspesific.js";
import Enstablishment from "./components/admin/enstablishment/Enstablishment.js";
import Login from "./components/admin/login/Login.js";
import Message from "./components/admin/message/Message.js";

function App() {
  return (
      <Router className="App">
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
          <div className="nav--container">
                <div className="hero--heading">
                    <h1>Stop paying more than other hotel guests</h1>
                    <p className="hero--subheading">Find the best hotels, b&b’s and guesthouses in Bergen City.</p>
                </div>
          </div>
          <Switch>
              <Route path="/" exact component={Home}>
              </Route>
              <Route path="/Hotels" component={Hotels}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/Login" component={Login}/>
          </Switch>
      </Router>
      );
    }

export default App;
