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

function App() {
  return (
      <Router className="App">
           <Navigation />
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
