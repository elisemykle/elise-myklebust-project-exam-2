import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
	establishment: yup
	.string()
	.required()
	.min(2, "Required, minimum 2 characters"),
	fullname: yup
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
	date1: yup
	.date()
	.required(),
	date2: yup
	.date()
	.required()
});

export default function Enquiry(props){
	const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishments.php";
	const history = useHistory();
	const [establishmentName, setestablishmentName] = useState("");
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
	function onSubmit() {
		if(uploadEstablishment(establishmentName, fullname, email, checkin, checkout)) {
			history.push("/Success");
		} else{
			console.log("Noe gikk galt");
		}
	}

	async function uploadEstablishment(establishmentName, fullname, email, checkin, checkout) {
		fetch(API_URL,{
			method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
			/* Datane som skal sendes til PHP, æøå blir omgjort. */
			body: 'establishmentName=' + encodeURIComponent(establishmentName) + '&fullname=' + encodeURIComponent(fullname) + '&email=' + encodeURIComponent(email) + '&checkin=' + encodeURIComponent(checkin) + '&checkout=' + encodeURIComponent(checkout)
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
		<div className="enquiry">
			<div className="enquiry__heading">
				<Hero title="Enquiry" text="" classes="hero hero--contact" showSearch={false}/>
				<div className="enquiry__enquiry--page">
					<h1 className="enquiry__h1">Make your reservation</h1>
				</div>
			</div>
			<form className="row enquiry__form" onSubmit={handleSubmit(onSubmit)}>
				<div className="col-6 col-m-12">
					<label className="form__label">Establishment</label>
					<input className="form__input" name="firstname" placeholder="Enter establishment name" ref={register}/>
					{errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label">Full name</label>
					<input className="form__input" name="lastname" placeholder="Enter your full name" ref={register}/>
					{errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
				</div>

				<div className="col-12">
					<label className="form__label">Email adress</label>
					<input className="form__input" name="emailadress" placeholder="Example@example.com" ref={register}/>
					{errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label">Check-in:</label>
					<input className="form__input" type="date" name="date1" ref={register}/>
					{errors.emailadress && <p className="error__message">Please enter in a valid date.</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label">Check-out:</label>
					<input className="form__input" type="date" name="date2" ref={register}/>
					{errors.emailadress && <p className="error__message">Please enter in a valid date.</p>}
				</div>
				<button className="enquiry__button" type="submit">Submit</button>
			</form>
		</div>
	)
}
