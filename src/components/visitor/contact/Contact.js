import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

/* Validere for å bekrefte om objektet er gyldig(om det tilfredsstiller skjema og valideringer)*/
const schema = yup.object().shape({
	fullname: yup
	.string()
	.required()
	.min(2, "Must be minimum 2 characters"),
	emailadress: yup
	.string().email()
	.required(),
	message: yup
	.string()
	.required()
	.min(2, "Must be minimum 2 characters"),
});

// Contact komponenten
export default function Contact(props){
	// States
	const API_URL = "http://elisemdesign.no/project-exam-2-master/contact-success.php";
	const history = useHistory();
	const [clientName, setClientName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	/* Onsubit funksjonen er en hendelse som oppstår når skjemaet validerer. Deretter blir dataene lastet opp til serveren. */
	function onSubmit() {
		fetch(API_URL,{
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			/* Datane som skal sendes til PHP, æøå blir omgjort. */
			body: 'clientName=' + encodeURIComponent(clientName) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message)
		})
		.then(() => {
			/* Blir sendt videre til Success om skjemaet valideres riktig uten error */
			history.push("/Success");
		})
		.catch((error) => {
			/* Console.log lar deg se feilmeldinger i console om noe skulle gå galt*/
			console.log("Noe gikk galt");
		});
	}

	/* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
	return(
		<div className="contact">
			<Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
			<div className="row contact__contact--page">
				<h1 className="contact__h1">Any questions ?</h1>
				<div className="col-12">
					<p className="contact__text">Get in touch with our turist agency by completing the form down below. Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.
					</p>
				</div>
			</div>

			<form className="row row--contact contact__form"  onSubmit={handleSubmit(onSubmit)}>
				<div className="col-6 col-m-12">
					<label className="form__label--contact">Full name</label>
					<input className="form__input--contact" name="fullname" placeholder="Enter your first name"
						ref={register} onChange={ event => setClientName(event.target.value) } />
					{errors.fullname && <p className="error__message--contact">{errors.fullname.message}</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label--contact">Email adress</label>
					<input className="form__input--contact" name="emailadress" placeholder="Example@example.com" ref={register} onChange={ event => setEmail(event.target.value) } />
					{errors.emailadress && <p className="error__message--contact">{errors.emailadress.message}</p>}
				</div>

				<div className="col-12">
					<label className="form__label--contact">Message</label>
					<textarea className="message__input--contact" name="message" placeholder="Please enter your message here..." ref={register} onChange={ event => setMessage(event.target.value) } />
					{errors.message && <p className="error__message--contact">{errors.message.message}</p>}
				</div>
				<div className="col-12">
					<button className="contact__button" type="submit">Send message</button>
				</div>
			</form>
		</div>
	)
}
