import React from 'react';
import './css/style.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navigation from './components/Navigation.js';
import Home from "./components/visitor/home/Home.js";
import Contact from "./components/visitor/contact/Contact.js";
import Hotels from "./components/visitor/hotels/Hotels.js";
import Login from "./components/admin/login/Login.js";
import Footer from "./components/Footer.js";
import Hotelspesific from "./components/visitor/hotelspesific/Hotelspesific.js";
import Enquiry from "./components/visitor/enquiry/Enquiry.js";

function App() {
  return (
      <div className="page">
      <Router className="App">
           <Navigation />
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Hotels" component={Hotels}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Hotelspesific/:id" component={Hotelspesific}/>
              <Route path="/Enquiry" component={Enquiry}/>
          </Switch>
        <Footer />
      </Router>
      </div>
      );
    }

export default App;
