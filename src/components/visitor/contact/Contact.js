import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
	fullname: yup
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
	const [clientName, setClientName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
	function onSubmit() {
		//history.push("/Success");
		uploadData(clientName, email, message);
	}

	function uploadData(clientName,email, message) {
	console.log(clientName+email+message);
	}

	return(
		<form className="contact__form"  onSubmit={handleSubmit(onSubmit)}>
			<div className="contact__page">
				<Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
				<div className="contact__contact--page">
					<h1 className="contact__h1">Any questions ?</h1>
					<p className="contact__text">Get in touch with our turist agency by completing the form down below. Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.
					</p>
				</div>

			<div className="contact__page">
				<label className="form__label">Full name</label>
				<input className="form__input" name="fullname" placeholder="Enter your first name"
				 ref={register} onChange={ event => setClientName(event.target.value) } />
				{errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
			</div>
		</div>

			<div className="contact__page">
				<label className="form__label">Email adress</label>
				<input className="form__input" name="emailadress" placeholder="Example@example.com" ref={register} onChange={ event => setEmail(event.target.value) } />
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Message</label>
				<input className="message__input" as="textarea" name="message" placeholder="Please enter your message here..." ref={register} onChange={ event => setMessage(event.target.value) } />
				{errors.message && <p className="error__message">Please enter in minimum 10 characters.</p>}
			</div>
			<button className="contact__button" type="submit">Submit</button>
		</form>
	)
}
