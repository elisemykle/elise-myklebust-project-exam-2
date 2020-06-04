import React from 'react';

function Hero(props) {
    return (
        <div className={props.classes}>
            <div className="hero__heading">
                <h1>{props.title}</h1>
                <p className="hero__subheading">{props.text}</p>
            </div>
            <div className="hero__extra">
                {props.children}
            </div>
        </div>
    );
}

export default Hero;
