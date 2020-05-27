import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

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
	.min(5, "Required, must be in a valid email format"),
	message: yup
	.string()
	.required()
	.min(10, "Required, minimum 10 characters"),
});

export default function Contact(props){
	const history = useHistory();
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
	function onSubmit() {
		history.push("/Success");
	}
	return(
		<form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
			<div className="contact__page">
				<Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
				<div className="contact__contact--page">
					<h1 className="contact__h1">Any questions ?</h1>
					<p className="contact__text">Get in touch with our turist agency by completing the form down below. Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.
					</p>
				</div>
				<label className="form__label">First name</label>
				<input className="form__input" name="firstname" placeholder="Enter your first name" ref={register}/>
				{errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Last name</label>
				<input className="form__input" name="lastname" placeholder="Enter your last name" ref={register}/>
				{errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Email adress</label>
				<input className="form__input" name="emailadress" placeholder="Example@example.com" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Message</label>
				<input className="message__input" as="textarea" name="message" placeholder="Please enter your message here..." ref={register}/>
				{errors.message && <p className="error__message">Please enter in minimum 10 characters.</p>}
			</div>
			<button className="contact__button" type="submit">Submit</button>
		</form>
	)
}
