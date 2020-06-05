import React from 'react';
import { Link } from 'react-router-dom';

export default function Success(props) {
    return (
        <div className="success">
            <h1 className="row success__headline">Thank you!</h1>
            <div className="col-6 col-m-12">
            <p className="success__message">We've received your submission and we'll get back to your within 24 hours.</p>
            </div>
            <div className="col-12">
                <Link to={"/"} className="success__button">Back to home</Link>
            </div>
        </div>
    )
}
