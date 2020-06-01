import React, { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

/* Validere for å bekrefte om objektet er gyldig(om det tilfredsstiller skjema og valideringer)*/
const schema = yup.object().shape({
	establishmentname: yup
	.string()
	.required(),
	fullname: yup
	.string()
	.required()
	// Sjekker at navnet bare inneholder bokstaver og ikke tall
	.matches(/\w+\s\w+/, {
		message: "Not a valid name"
	}),
	emailadress: yup
	.string()
	.email()
	.required(),
	date1: yup
	.date()
	.typeError("Invalid date")
	.required(),
	date2: yup
	.date()
	.typeError("Invalid date")
	.required()
});

export default function Enquiry(props){
	const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishments.php";
	const API_URL_ENQUIRY = "https://elisemdesign.no/project-exam-2-master/enquiry-success.php";
	const history = useHistory();
	const [hotels ,updateHotels] = useState([]);
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	/* Onsubit funksjonen er en hendelse som oppstår når man prøver å sende inn et skjema. Hvis funksjonen returnerer riktig, blir skjemaet sendt inn, ellers sender den ikke dataene. */
	function onSubmit(item) {
		/* Laget en Date variabel for å kunne forkorte ned datoen til å kun vise år, måneder og dager.*/
		var ci= new Date(item.date1);
		var checkindate= ci.getFullYear()+"-"+ci.getMonth()+"-"+ci.getDay();
		var co= new Date(item.date2);
		var checkoutdate= co.getFullYear()+"-"+co.getMonth()+"-"+co.getDay();

		fetch(API_URL_ENQUIRY,{
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			/* Datane som skal sendes til PHP, å blir omgjort. */
			body: 'establishment=' + encodeURIComponent(item.establishmentname) + '&clientName=' + encodeURIComponent(item.fullname) + '&email=' + encodeURIComponent(item.emailadress) + '&checkin=' + encodeURIComponent(checkindate) + '&checkout=' + encodeURIComponent(checkoutdate)
		})
		.then(() => {
			/* Blir sendt videre til Success om skjemaet valideres riktig uten error */
			history.push("/Success");
			return;
		})
		.catch(() => {
			/* Console.log lar deg generere ut tilpassendes feilmeldinger om noe skulle gå galt*/
			console.log("Noe gikk galt");
		});
	}

	useEffect(() => {
		fetch(API_URL)
		.then(response => response.json())
		.then((json) => {
			updateHotels(json);
		})
		.catch(error => console.log(error));
	}, []);

	/* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
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
					<label className="form__label--enquiry">Establishment</label>
						<select className="form__custom" name="establishmentname" ref={register}>
							{
								hotels.map((hotel, index) => <option key={index}>
								{hotel.establishmentName}</option>)
							}
						</select>
					{errors.establishmentname && <p className="error__message">Required field</p>}
				</div>
				<div className="col-6 col-m-12">
					<label className="form__label--enquiry">Full name</label>
					<input className="form__input--enquiry" name="fullname" placeholder="Enter your full name" ref={register}/>
					{errors.fullname && <p className="error__message">{errors.fullname.message}</p>}
				</div>

				<div className="col-12">
					<label className="form__label--enquiry">Email adress</label>
					<input className="form__input--enquiry" name="emailadress" placeholder="Example@example.com" ref={register}/>
					{errors.emailadress && <p className="error__message">{errors.emailadress.message}</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label--enquiry">Check-in</label>
					<input className="form__input--enquiry" type="date" name="date1" ref={register}/>
					{errors.date1 && <p className="error__message">{errors.date1.message}</p>}
				</div>

				<div className="col-6 col-m-12">
					<label className="form__label--enquiry">Check-out</label>
					<input className="form__input--enquiry" type="date" name="date2" ref={register}/>
					{errors.date2 && <p className="error__message">{errors.date2.message}</p>}
				</div>
				<button className="enquiry__button" type="submit">Submit</button>
			</form>
		</div>
	)
}
