import React, { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';
import MessageList from "../message/MessageList.js";
import EnquiryList from "../enquirylist/EnquiryList.js";
import AddEstablishment from "../addestablishment/AddEstablishment.js";

const schema = yup.object().shape({
	establishmentname: yup
	.string()
	.required()
	.min(2, "Required field"),
	establismentemail: yup
	.string()
	.required()
	.min(5, "Invalid email address"),
	imageurl: yup
	.string()
	.required()
	.min(2, "Invalid URL"),
	price: yup
	.string()
	.required()
	.min(10, "Required field"),
	maxguests: yup
	.string()
	.required()
	.min(10, "Required field"),
	Guests: yup
	.string()
	.required()
	.min(10, "Required field"),
	latitude: yup
	.string()
	.required()
	.min(10, "Invalid Google Latitude"),
	longitude: yup
	.string()
	.required()
	.min(10, "Invalid Google Longitude"),
	description: yup
	.string()
	.required()
	.min(10, "Required field"),
	id: yup
	.string()
	.required()
	.min(10, "Required field"),
	selfcateringtrue: yup
	.string()
	.required()
	.min(10, "Required field"),
	selfcateringfalse: yup
	.string()
	.required()
	.min(10, "Required field"),
});

export default function Enstablishment(props){
	const API_URL = "http://elisemdesign.no/project-exam-2-master/get-establishments.php";
	const history = useHistory();
	const [enquiries ,updateEnquiries] = useState([]);
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(item) {
		fetch(API_URL,{
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			/* Datane som skal sendes til PHP, å blir omgjort. */
			body: 'establishmentName=' + encodeURIComponent(item.establishmentname) + '&fullname=' + encodeURIComponent(item.fullname) + '&email=' + encodeURIComponent(item.emailadress) + '&checkin=' + encodeURIComponent(item.date1) + '&checkout=' + encodeURIComponent(item.date2)
		})
		history.push("/Success");
	}

	useEffect(() => {
		fetch(API_URL)
		.then(response => response.json())
		.then((json) => {
			updateEnquiries(json);
		})
		.catch(error => console.log(error));
	}, []);

	return(
		<div className="admin">
			<form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
				<div className="contact__page">
					<Hero title="Admin" text="" classes="hero hero--contact" showSearch={false}/>

					<div className="contact__contact--page">
						<h1 className="contact__h1">Add Establishment</h1>
					</div>
					<label className="form__label--enstablisment">Establisment Name</label>
					<input className="form__input--enstablisment" name="establishmentname" placeholder="Enstablisment name" ref={register}/>
					{errors.establishmentname && <p className="error__message">Required field</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Establishment Email</label>
					<input className="form__input--enstablisment" name="establismentemail" placeholder="Example@example.com" ref={register}/>
					{errors.establismentemail && <p className="error__message">Invalid email address</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Image URL</label>
					<input className="form__input--enstablisment" name="imageurl" placeholder="https://images.unsplash.com/photo" ref={register}/>
					{errors.imageurl && <p className="error__message">Invalid URL</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Price per person per night ($)</label>
					<input className="form__input--enstablisment" type="number" name="price" placeholder="0" ref={register}/>
					{errors.price && <p className="error__message">Required field</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Max guests</label>
					<input className="form__input--enstablisment" type="number" name="maxguests" placeholder="0" ref={register}/>
					{errors.maxguests && <p className="error__message">Required field</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Google Coordinates Latitude:</label>
					<input className="form__input--enstablisment" name="latitude" placeholder="60.4058" ref={register}/>
					{errors.latitude && <p className="error__message">Invalid Google Latitude</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Google Coordinates Longitude</label>
					<input className="form__input--enstablisment" name="longitude" placeholder="87.5976" ref={register}/>
					{errors.longitude && <p className="error__message">Invalid Google Longitude</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Description</label>
					<input className="form__input--enstablisment" name="description" placeholder="About the hotels" ref={register}/>
					{errors.description && <p className="error__message">Required field</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">ID</label>
					<input className="form__input--enstablisment" type="number" name="id" placeholder="0" ref={register}/>
					{errors.id && <p className="error__message">Required field</p>}
				</div>

				<div className="contact__page">
					<label className="form__label--enstablisment">Self-catering</label>
					<input className="form__input--enstablisment" type="checkbox" name="selfcateringtrue" ref={register}/>
					{errors.selfcateringtrue && <p className="error__message">Required field</p>}
					<label>True</label>
					<input className="form__input--enstablisment" type="checkbox" name="selfcateringfalse" ref={register}/>
					<label>False</label>
					{errors.selfcateringfalse && <p className="error__message">Required field</p>}
				</div>

				<button className="contact__button" type="submit">Submit</button>
			</form>
			<div className="messages">
				<div className="messages__list">
					<MessageList/>
				</div>
			</div>
			<div className="enquiries">
				<div className="enquiries__list">
					<EnquiryList/>
				</div>
			</div>
		</div>
	)
}
