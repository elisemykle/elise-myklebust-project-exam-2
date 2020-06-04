import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishment.php?id=";

// Hotelspesific komponenten
export default function Hotelspesific() {
    // States
    const {id}=useParams();
    const [hotel, updateHotel] = useState([]);

    // Henter dataene fra API'et
    useEffect(() => {
        fetch(API_URL+id)
        .then(response => response.json())
        .then((json) => {
            updateHotel(json);
        })
        /* Console.log lar deg se feilmeldinger i console om noe skulle gå galt*/
        .catch(error => console.log(error));
    }, [id]);

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="row hotelspesific">
            <div className="col-6">
                <img src={hotel.imageUrl} className="hotelspesific__image" alt="hotel" />
            </div>
            <div className="col-6">
                <h1 className="hotelspesific__establishmentName">{hotel.establishmentName}</h1>
                <hr className="hotelspesific__line"/>
                <p className="hotelspesific__description">{hotel.description}</p>
                <p className="hotelspesific__price">Price per night/room:</p>
                <p className="hotelspesific__price">{hotel.price} $ </p>
                <p className="hotelspesific__questions">Any questions? Reach out to us via email down below:</p>
                <a href="mailto:{this.props.email}" className="hotelspesific__email">{hotel.establishmentEmail}</a>
                <div className="col-12">
                <Link to={"/Enquiry/" + hotel.id} className="hotelspesific__button">Make an enquiry</Link>
                </div>
        </div>
        <div className="col-12">
        <iframe className="hotelspesific__map" title="google kart" frameBorder="0" src={"https://www.google.com/maps/embed/v1/place?q=" + hotel.googleLat+", "+hotel.googleLong + "&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}></iframe>
    </div>
</div>
    )
}
