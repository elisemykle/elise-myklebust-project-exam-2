import React from 'react';
import './css/style.scss';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Navigation from './components/Navigation.js';
import Home from "./components/visitor/home/Home.js";
import Contact from "./components/visitor/contact/Contact.js";
import Enquiry from "./components/visitor/enquiry/Enquiry.js";
import Hotels from "./components/visitor/hotels/Hotels.js";
import Hotelspesific from "./components/visitor/hotelspesific/Hotelspesific.js";
import Enstablishment from "./components/admin/enstablishment/Enstablishment.js";
import Login from "./components/admin/login/Login.js";
import Message from "./components/admin/message/Message.js";
import Footer from "./components/Footer.js";
import SearchHotels from "./components/SearchHotels.js";

function App() {
  return (
      <Router className="App">
           <Navigation />
          <div className="hero">
                <div className="hero__heading">
                    <h1>Stop paying more than other hotel guests</h1>
                    <p className="hero__subheading">Find the best hotels, b&b’s and guesthouses in Bergen City.</p>
                </div>
          </div>
          <Switch>
              <Route path="/" exact component={Home}>
              </Route>
              <Route path="/Hotels" component={Hotels}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/Login" component={Login}/>
          </Switch>
        <Footer />
      </Router>
      );
    }

export default App;
