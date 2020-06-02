import React from 'react';
import { Link } from 'react-router-dom';

export default function Success(props) {
    return (
        <div className="row success">
            <div className="col-6 col-m-12">
                <h1 className="success__headline">Thank you!</h1>
                <p className="success__message">We've received your message and we'll get back to your within 24 hours.</p>


                        <Link to={"/"} className="success__button">Back to home</Link>


            </div>
        </div>
    )
}
