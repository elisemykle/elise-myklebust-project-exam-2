import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from 'react-router-dom';

/* Validere for å bekrefte om objektet er gyldig(om det tilfredsstiller skjema og valideringer)*/
const schema = yup.object().shape({
    establishmentname: yup
    .string()
    .required()
    .min(2),
    establishmentemail: yup
    .string().email()
    .required(),
    imageurl: yup
    .string()
    .required()
    .min(2),
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
    .min(10),
    id: yup
    .string()
    .required(),
    selfcatering: yup
    .boolean()
    .required()
});

export default function AddEstablishment(props) {
    const API_URL = "http://elisemdesign.no/project-exam-2-master/add-establishments-success.php";
    const [establishmentname, setEstablishmentname ] = useState("");
    const [establishmentemail, setEstablishmentemail ] = useState("");
    const [imageurl, setImageurl ] = useState("");
    const [price, setPrice ] = useState("");
    const [maxguests, setMaxguests ] = useState("");
    const [latitude, setLatitude ] = useState("");
    const [longitude, setLongitude ] = useState("");
    const [description, setDescription ] = useState("");
    const [id, setId] = useState("");
    const [selfcatering, setSelfcatering] = useState("");
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    /* Onsubit funksjonen er en hendelse som oppstår når man prøver å sende inn et skjema. Hvis funksjonen returnerer riktig, blir skjemaet sendt inn, ellers sender den ikke dataene. */
    function onSubmit() {
        fetch(API_URL,{
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            // Datane som skal sendes til PHP, å blir omgjort.
            body: 'establishmentName=' + encodeURIComponent(establishmentname) + '&establishmentEmail=' + encodeURIComponent(establishmentemail) + '&imageUrl=' + encodeURIComponent(imageurl) + '&price=' + encodeURIComponent(price) + '&maxGuests=' + encodeURIComponent(maxguests) + '&googleLat=' + encodeURIComponent(latitude) + '&googleLong=' + encodeURIComponent(longitude) + '&description=' +
            encodeURIComponent(description) + '&id=' + encodeURIComponent(id) + '&selfCatering=' + encodeURIComponent(selfcatering)
        })
        .then(()=>{
            history.push("/Success");
        })
        .catch(()=>{
            console.log("Noe gikk galt");
        });
    }

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="addestablishment">
            <form className="row addestablishment__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12">
                    <h1 className="addestablishment__h1">Add Establishment</h1>
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Establishment Name</label>
                        <input className="form__input--admin" name="establishmentname" placeholder="Enstablisment name" ref={register} onChange={ event => setEstablishmentname (event.target.value) } />
                        {errors.establishmentname && <p className="error__message">{errors.establishmentname.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Establishment Email</label>
                        <input className="form__input--admin" name="establishmentemail" placeholder="Example@example.com" ref={register} onChange={ event => setEstablishmentemail (event.target.value) } />
                        {errors.establishmentemail && <p className="error__message">{errors.establishmentemail.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Image URL</label>
                        <input className="form__input--admin" name="imageurl" placeholder="https://images.unsplash.com/photo" ref={register} onChange={ event => setImageurl (event.target.value) } />
                        {errors.imageurl && <p className="error__message">{errors.imageurl.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Price per person per night ($)</label>
                        <input className="form__input--admin" type="number" name="price" placeholder="0"
                            ref={register} onChange={ event => setPrice (event.target.value) } />
                        {errors.price && <p className="error__message">{errors.price.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Max guests</label>
                        <input className="form__input--admin" type="number" name="maxguests" placeholder="0" ref={register} onChange={ event => setMaxguests (event.target.value) } />
                        {errors.maxguests && <p className="error__message">{errors.maxguests.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Google Coordinates Latitude:</label>
                        <input className="form__input--admin" name="latitude" placeholder="60.4058"
                            ref={register} onChange={ event => setLatitude (event.target.value) } />
                        {errors.latitude && <p className="error__message">{errors.latitude.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Google Coordinates Longitude</label>
                        <input className="form__input--admin" name="longitude" placeholder="87.5976"
                            ref={register} onChange={ event => setLongitude (event.target.value) } />
                        {errors.longitude && <p className="error__message">{errors.longitude.message}</p>}
                    </div>
                </div>

                <div className="col-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Description</label>
                        <input className="form__input--admin" name="description" placeholder="About the hotels" ref={register} onChange={ event => setDescription (event.target.value) } />
                        {errors.description && <p className="error__message">{errors.description.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">ID</label>
                        <input className="form__input--admin" type="number" name="id" placeholder="0"
                            ref={register} onChange={ event => setId (event.target.value) } />
                        {errors.id && <p className="error__message">{errors.id.message}</p>}
                    </div>
                </div>

                <div className="col-6 col-m-12">
                    <div className="addestablishment__formgroup">
                        <label className="form__label--admin">Self-catering:</label>
                        <input className="form__input--admin" type="checkbox" name="selfcatering"
                            ref={register} onChange={ event => setSelfcatering (event.target.value) } />
                        {errors.selfcatering && <p className="error__message">{errors.selfcatering.message}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <button className="addestablishment__button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
