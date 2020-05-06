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
      <div className="home__page">
         <Router className="home__layout">
         <div className="nav__container">
             <div className="hero__heading">
                 <h1>Elise Myklebust</h1>
                 <h2>Portfolio</h2>
                 <div className="heading__scrolldown">
                     <a href="#content">Scroll down</a>
                 </div>
             </div>
         </div>
         <Navbar className="nav__bar" bg="transparent" variant="light" expand="lg">
           <Navbar.Toggle className="custom-toggler" aria-controls="basic__navbar-nav" />
           <Navbar.Collapse className="custom-collapse" id="basic__navbar-nav">
             <Nav className="ml-auto">
               <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">HOME</NavLink>
               <NavLink to="/About" exact activeClassName="nav__link--active" className="nav__link">ABOUT</NavLink>
               <NavLink to="/Cv" exact activeClassName="nav__link--active" className="nav__link">CV</NavLink>
               <NavLink to="/Contact" exact activeClassName="nav__link--active" className="nav__link">CONTACT</NavLink>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
           <Container>
             <Switch>
               <Route exact path="/">
                 <Home />
               </Route>
               <Route exact path="/Hotels">
                 <About />
               </Route>
               <Route exact path="/Enstablishment">
                 <Contact/>
               </Route>
               <Route exact path="/Login">
                 <Cv/>
               </Route>
             </Switch>
         </Container>
     </Router>
   </div>
  );
}

export default App;
