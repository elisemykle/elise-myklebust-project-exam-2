import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from "../../Hero.js";

/* link til listen av hoteller og innhold */
const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishments.php";

// Hotels komponenten
function Hotels() {
    // States
    const [hotels, updateHotels] = useState([]);

    // Henter dataene fra API'et
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            updateHotels(json);
        })
        /* Console.log lar deg se feilmeldinger i console om noe skulle gå galt*/
        .catch(error => console.log(error));
    }, []);

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="hotels__hero">
            <Hero title="The Hotels" text="Choose between your hotels, b&b’s and guesthouses to stay at." classes="hero" />

            <div className="row">
                {
                    hotels.map((hotel, index) =>
                    <div key={index}>
                        <div className="col-6">
                            <div className="card">
                                <img src={hotel.imageUrl} className="card__image" alt="hotels"/>
                                <div className="card__body">
                                    <h2 className="card__title">{hotel.establishmentName}</h2>
                                    <hr className="card__line"/>
                                    <p className="card__description">{hotel.description}</p>
                                    <Link to={"/Hotelspesific/" + hotel.id} className="card__readmore">read more</Link>
                                </div>
                            </div>
                            <Link to={"/Enquiry/"} className="card__button">Book now</Link>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
);
}

export default Hotels;
