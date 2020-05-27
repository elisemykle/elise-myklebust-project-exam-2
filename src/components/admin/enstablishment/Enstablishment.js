import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
	enstablisment: yup
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
				<label className="form__label">Enstablisment Name</label>
				<input className="form__input" name="firstname" placeholder="Enstablisment name" ref={register}/>
				{errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Establishment Email</label>
				<input className="form__input" name="lastname" placeholder="Example@example.com" ref={register}/>
				{errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Image URL</label>
				<input className="form__input" name="emailadress" placeholder="https://images.unsplash.com/photo" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Price per person per night ($)</label>
				<input className="form__input" type="number" name="number" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Max guests</label>
				<input className="form__input" type="number" name="number" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Google Coordinates Latitude:</label>
				<input className="form__input" name="emailadress" placeholder="60.4058" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Google Coordinates Longitude</label>
				<input className="form__input" name="emailadress" placeholder="87.5976" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Description</label>
				<input className="form__input" name="emailadress" placeholder="About the hotels" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">ID</label>
				<input className="form__input" type="number" name="number" ref={register}/>
				{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
			</div>

			<div className="contact__page">
				<label className="form__label">Self-catering</label>
				<input className="form__input" type="checkbox" name="checkbox" ref={register}/>
				<label>True</label>
				<input className="form__input" type="checkbox" name="checkbox" ref={register}/>
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
