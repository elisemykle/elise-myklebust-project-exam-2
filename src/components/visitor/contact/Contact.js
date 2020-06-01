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
	const API_URL = "http://elisemdesign.no/project-exam-2-master/contact-success.php";
	const history = useHistory();
	const [clientName, setClientName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
	function onSubmit() {
		if(uploadData(clientName, email, message)) {
			history.push("/Success");
		} else{
			console.log("Noe gikk galt");
		}
	}

	async function uploadData(clientName,email, message) {
		fetch(API_URL,{
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			/* Datane som skal sendes til PHP, æøå blir omgjort. */
			body: 'clientName=' + encodeURIComponent(clientName) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message)
		})
		.then(() => {
			return true;
		})
		.catch((error) => {
			console.log(error);
			return false;
		});
	}

	return(
		<div className="contact">
			<Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
			<div className="contact__contact--page">
				<h1 className="contact__h1">Any questions ?</h1>
				<p className="contact__text">Get in touch with our turist agency by completing the form down below. Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.
				</p>
			</div>

			<form className="row contact__form"  onSubmit={handleSubmit(onSubmit)}>
				<div className="col-6 col-m-12">
					<label className="form__label--contact">Full name</label>
					<input className="form__input--contact" name="fullname" placeholder="Enter your first name"
						ref={register} onChange={ event => setClientName(event.target.value) } />
					{errors.firstname && <p className="error__message--contact">Please enter minimum 2 characters.</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label--contact">Email adress</label>
					<input className="form__input--contact" name="emailadress" placeholder="Example@example.com" ref={register} onChange={ event => setEmail(event.target.value) } />
					{errors.emailadress && <p className="error__message--contact">Please enter in a valid email format.</p>}
				</div>

				<div className="col-12">
					<label className="form__label--contact">Message</label>
					<textarea className="message__input--contact" name="message" placeholder="Please enter your message here..." ref={register} onChange={ event => setMessage(event.target.value) } />
					{errors.message && <p className="error__message--contact">Please enter in minimum 10 characters.</p>}
				</div>
				<button className="contact__button" type="submit">Submit</button>
			</form>
		</div>
	)
}
