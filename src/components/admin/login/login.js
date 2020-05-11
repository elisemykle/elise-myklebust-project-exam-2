import React from 'react';
import Hero from "../../Hero.js";

export default function Login(props) {
    return (
        <div className="page">
            <Hero title="Login" text="" classes="hero hero--login" showSearch={false}/>
            <h1 className="login__h1">Login</h1>
        </div>
    )
}
