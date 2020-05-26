import React from 'react';
import { Link } from 'react-router-dom';
import checked from './../image/checked.png';


export default function Success(props) {
    return (
        <div className="success">
            <h1 className="success__headline">Thank you!</h1>
            <p className="success__message">We've received your message and we'll get back to your within 24 hours.</p>
            <img className="success__image" src={checked} alt="checked.png" />
            <div className="container">
            <div className="center">
                <Link to={"/"} className="success__button">Back to home</Link>
            </div>
            </div>
        </div>
    )
}
