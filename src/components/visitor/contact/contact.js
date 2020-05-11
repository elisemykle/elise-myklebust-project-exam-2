import React from 'react';
import Hero from "../../Hero.js";

export default function Contact(props) {
    return (
        <div className="page">
            <Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
            <h1 className="contact__h1">Contact</h1>
        </div>
    )
}
