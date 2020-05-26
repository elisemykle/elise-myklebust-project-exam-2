import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";

const schema = yup.object().shape({
	firstname: yup
        .string()
		.required()
		.min(2, "Required, minimum 2 characters"),
	lastname: yup
        .string()
		.required()
		.min(2, "Required, minimum 2 characters"),
	emailadress: yup
		.string()
		.required()
		.min("Required, must be in a valid email format"),
	message: yup
		.string()
		.required()
		.min(10, "Required, minimum 10 characters"),
});


export default function Enquiry(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {
    }
    return(
        <div className="contact" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__page">
                <Hero title="Enquiry" text="" classes="hero hero--contact" showSearch={false}/>
                <div className="contact__contact--page">
                    <h1 className="contact__h1">Make your reservation</h1>
                </div>
                <label className="form__label">Establishment:</label>
                <input className="form__input" name="firstname" placeholder="Enter your first name" ref={register}/>
                {errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </div>
            <div className="contact__page">
                <label className="form__label">Full name</label>
                <input className="form__input" name="lastname" placeholder="Enter your last name" ref={register}/>
                {errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </div>
			<div className="contact__page">
                <label className="form__label">Email adress</label>
                <input className="form__input" name="emailadress" placeholder="Example@example.com" ref={register}/>
                {errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
            </div>
        	<div className="contact__page">
                <label className="form__label">Check-in:</label>
				<input className="form__input" type="date" name="date" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid date.</p>}
            </div>
            <div className="contact__page">
                <label className="form__label">Check-out:</label>
				<input className="form__input" type="date" name="date" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid date.</p>}
            </div>
            <button className="contact__button" type="submit">Send</button>
        </div>
        )
}
