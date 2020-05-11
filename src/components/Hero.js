import React from 'react';
import SearchHotels from "./SearchHotels.js";

function Hero(props) {
  return (
          <div className={props.classes}>
                <div className="hero__heading">
                    <h1>{props.title}</h1>
                    <p className="hero__subheading">{props.text}</p>
                    {
                        props.showSearch ?
                        <SearchHotels handleSearch={props.searchFunction}/>
                        :
                        <h1></h1>
                    }
                </div>
          </div>
      );
    }

export default Hero;
