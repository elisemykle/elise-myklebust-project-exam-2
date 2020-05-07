import React from 'react';
import './css/style.scss';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import {Container, Nav, Navbar,} from "react-bootstrap";
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
          <Navbar bg="dark" variant="dark" expand="lg">
              <NavLink to="/" exact>
                  <Navbar.Brand>Holidaze - tourism agency</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink to="/" exact className="nav-link">Home</NavLink>
                      <NavLink to="/Hotels" className="nav-link">Hotels</NavLink>
                          <NavLink to="/Contact" exact className="nav-link">Contact</NavLink>
                          <NavLink to="/Login" className="nav-link">Login</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container>
              <Switch>
                  <Route path="/" exact component={Home}>
                  </Route>
                  <Route path="/Hotels" component={Hotels}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/Login" component={Login}/>
              </Switch>
          </Container>
      </Router>
      );
    }

export default App;
