import React from 'react';
import Hero from "../../Hero.js";

export default function Hotels(props) {
    return (
        <div className="page">
            <Hero title="Hotels" text="Choose between your hotels, b&b’s and guesthouses to stay at." classes="hero hero--hotels" showSearch={false}/>
            <h1 className="hotels__h1">Hotels</h1>
        </div>
    )
}
