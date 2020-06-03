import React, { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from 'react-router-dom';

/* Validere for å bekrefte om objektet er gyldig(om det tilfredsstiller skjema og valideringer)*/
const schema = yup.object().shape({
    establishmentname: yup
    .string()
    .required()
    .min(2, "Required field"),
    establishmentemail: yup
    .string()
    .required()
    .min(5, "Invalid email address"),
    imageurl: yup
    .string()
    .required()
    .min(2, "Invalid URL"),
    price: yup
    .string()
    .required(),
    maxguests: yup
    .string()
    .required(),
    latitude: yup
    .string()
    .required(),
    longitude: yup
    .string()
    .required(),
    description: yup
    .string()
    .required()
    .min(10, "Required field"),
    id: yup
    .string()
    .required(),
    selfcatering: yup
    .boolean()
    .required()
});

export default function AddEstablishment(props) {
    const API_URL = "http://elisemdesign.no/project-exam-2-master/get-establishments.php";
    const [establishmentname, setEstablishmentname ] = useState([]);
    const [establismentemail, setEstablishmentemail ] = useState([]);
    const [imageurl, setImageurl ] = useState([]);
    const [price, setPrice ] = useState([]);
    const [maxguests, setMaxguests ] = useState([]);
    const [guests, setGuests ] = useState([]);
    const [latitude, setLatitude ] = useState([]);
    const [longitude, setLongitude ] = useState([]);
    const [description, setDescription ] = useState([]);
    const [id, setId] = useState([]);
    const [selfcatering, setSelfcatering] = useState([]);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    /* Onsubit funksjonen er en hendelse som oppstår når man prøver å sende inn et skjema. Hvis funksjonen returnerer riktig, blir skjemaet sendt inn, ellers sender den ikke dataene. */
    function onSubmit(item) {
        /*
        fetch(API_URL,{
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            // Datane som skal sendes til PHP, å blir omgjort.
            body: 'establishmentName=' + encodeURIComponent(item.establishmentname) + '&establismentEmail=' + encodeURIComponent(item.establismentemail) + '&imageUrl=' + encodeURIComponent(item.imageurl) + '&price=' + encodeURIComponent(item.price) + '&maxGuests=' + encodeURIComponent(item.maxguests) + '&googleLat=' + encodeURIComponent(item.latitude) + '&googleLong=' + encodeURIComponent(item.longitude) + '&description=' + encodeURIComponent(item.description) + '&id=' + encodeURIComponent(item.id) + '&selfCatering=' + encodeURIComponent(item.selfcatering)
        })
        /* Blir sendt videre til Success om skjemaet valideres riktig uten error
        history.push("/Success"); */
        console.log(establishmentname);
    }

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="addestablishment">
        <div className="establishment__list">
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__page">
        <div className="contact__contact--page">
        <h1 className="contact__h1">Add Establishment</h1>
        </div>
        <label className="form__label--enstablisment">Establishment Name</label>
        <input className="form__input--enstablisment" name="establishmentname" placeholder="Enstablisment name" ref={register} onChange={ event => setEstablishmentemail (event.target.value) } />
        {errors.establishmentname && <p className="error__message">Required field</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Establishment Email</label>
        <input className="form__input--enstablisment" name="establishmentemail" placeholder="Example@example.com" ref={register} onChange={ event => setEstablishmentemail (event.target.value) } />
        {errors.establishmentemail && <p className="error__message">Invalid email address</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Image URL</label>
        <input className="form__input--enstablisment" name="imageurl" placeholder="https://images.unsplash.com/photo" ref={register} onChange={ event => setImageurl (event.target.value) } />
        {errors.imageurl && <p className="error__message">Invalid URL</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Price per person per night ($)</label>
        <input className="form__input--enstablisment" type="number" name="price" placeholder="0"
        ref={register} onChange={ event => setPrice (event.target.value) } />
        {errors.price && <p className="error__message">Required field</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Max guests</label>
        <input className="form__input--enstablisment" type="number" name="maxguests" placeholder="0" ref={register} onChange={ event => setMaxguests (event.target.value) } />
        {errors.maxguests && <p className="error__message">Required field</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Google Coordinates Latitude:</label>
        <input className="form__input--enstablisment" name="latitude" placeholder="60.4058"
        ref={register} onChange={ event => setLatitude (event.target.value) } />
        {errors.latitude && <p className="error__message">Invalid Google Latitude</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Google Coordinates Longitude</label>
        <input className="form__input--enstablisment" name="longitude" placeholder="87.5976"
        ref={register} onChange={ event => setLongitude (event.target.value) } />
        {errors.longitude && <p className="error__message">Invalid Google Longitude</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Description</label>
        <input className="form__input--enstablisment" name="description" placeholder="About the hotels" ref={register} onChange={ event => setDescription (event.target.value) } />
        {errors.description && <p className="error__message">Required field</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">ID</label>
        <input className="form__input--enstablisment" type="number" name="id" placeholder="0"
        ref={register} onChange={ event => setId (event.target.value) } />
        {errors.id && <p className="error__message">Required field</p>}
        </div>

        <div className="contact__page">
        <label className="form__label--enstablisment">Self-catering</label>
        <input className="form__input--enstablisment" type="checkbox" name="selfcatering"
        ref={register} onChange={ event => setSelfcatering (event.target.value) } />
        {errors.selfcatering && <p className="error__message">Required field</p>}
        </div>

        <button className="contact__button" type="submit">Submit</button>
        </form>
    </div>
</div>
    )
}
