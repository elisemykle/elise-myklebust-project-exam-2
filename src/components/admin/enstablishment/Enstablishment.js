import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
	Enstablisment: yup
	.string()
	.required()
	.min(2, "Required field"),
	EnstablishmentEmail: yup
	.string()
	.required()
	.min(5, "Invalid email address"),
	ImageURL: yup
	.string()
	.required()
	.min(2, "Invalid URL"),
	Price: yup
	.string()
	.required()
	.min(10, "Required field"),
	Maxguests: yup
	.string()
	.required()
	.min(10, "Required field"),
	Guests: yup
	.string()
	.required()
	.min(10, "Required field"),
	Latitude: yup
	.string()
	.required()
	.min(10, "Invalid Google Latitude"),
	Longitude: yup
	.string()
	.required()
	.min(10, "Invalid Google Longitude"),
	Description: yup
	.string()
	.required()
	.min(10, "Required field"),
	id: yup
	.string()
	.required()
	.min(10, "Required field"),
});

export default function Enstablishment(props){
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
				<Hero title="Admin" text="" classes="hero hero--contact" showSearch={false}/>

				<div className="contact__contact--page">
					<h1 className="contact__h1">Add Enstablishment</h1>
				</div>
				<label className="form__label--enstablisment">Enstablisment Name</label>
				<input className="form__input--enstablisment" name="firstname" placeholder="Enstablisment name" ref={register}/>
				{errors.firstname && <p className="error__message">Required field</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Establishment Email</label>
				<input className="form__input--enstablisment" name="lastname" placeholder="Example@example.com" ref={register}/>
				{errors.lastname && <p className="error__message">Invalid email address</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Image URL</label>
				<input className="form__input--enstablisment" name="emailadress" placeholder="https://images.unsplash.com/photo" ref={register}/>
				{errors.emailadress && <p className="error__message">Invalid URL</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Price per person per night ($)</label>
				<input className="form__input--enstablisment" type="number" name="number" placeholder="0" ref={register}/>
				{errors.emailadress && <p className="error__message">Required field</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Max guests</label>
				<input className="form__input--enstablisment" type="number" name="number" placeholder="0" ref={register}/>
				{errors.emailadress && <p className="error__message">Required field</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Google Coordinates Latitude:</label>
				<input className="form__input--enstablisment" name="emailadress" placeholder="60.4058" ref={register}/>
				{errors.emailadress && <p className="error__message">Invalid Google Latitude</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Google Coordinates Longitude</label>
				<input className="form__input--enstablisment" name="emailadress" placeholder="87.5976" ref={register}/>
				{errors.emailadress && <p className="error__message">Invalid Google Longitude</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Description</label>
				<input className="form__input--enstablisment" name="emailadress" placeholder="About the hotels" ref={register}/>
				{errors.emailadress && <p className="error__message">Required field</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">ID</label>
				<input className="form__input--enstablisment" type="number" name="number" placeholder="0" ref={register}/>
				{errors.emailadress && <p className="error__message">Required field</p>}
			</div>

			<div className="contact__page">
				<label className="form__label--enstablisment">Self-catering</label>
				<input className="form__input--enstablisment" type="checkbox" name="checkbox" ref={register}/>
				<label>True</label>
				<input className="form__input--enstablisment" type="checkbox" name="checkbox" ref={register}/>
				<label>False</label>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<button className="contact__button" type="submit">Submit</button>
			<div className="enquiries">
				<h1 className="enquiries__clients">Enquiries from clients</h1>
			</div>

			<div className="messages">
				<h1 className="messages_clients">Messages from clients</h1>
			</div>
		</form>
	)
}
