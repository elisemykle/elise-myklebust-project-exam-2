import React from 'react';
import './App.css';
import './src/css/style.scss';

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
    <div className="App">
      <header className="App-header">
        <p>
          velkommen
        </p>
        <Home />
      </header>
    </div>
  );
}

export default App;
