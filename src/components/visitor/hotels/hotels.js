import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from "../../Hero.js";

/* link til listen av hoteller og innhold */
const API_URL = "http://localhost:8888/get-establishments.php";

    function Hotels() {
        const [hotels, updateHotels] = useState([]);

        useEffect(() => {
            fetch(API_URL)
            .then(response => response.json())
            .then((json) => {
                updateHotels(json);
            })
            .catch(error => console.log(error));
        }, []);

                return (
                    <div className="hotels">
                        <Hero title="The Hotels" text="Choose between your hotels, b&b’s and guesthouses to stay at." classes="hero" />

                        <div className="card">
                                <img className="card__image" src="https://media-cdn.tripadvisor.com/media/photo-s/11/d0/74/4a/sunset-beach-hotel.jpg" alt="hotel" />
                            <div className="card__body">
                                <h2 className="card__title"> Sunset Beach</h2>
                                <hr className="card__line"/>
                                <p className="card__description">Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below.</p>
                                <p className="card__readmore">read more</p>
                            </div>
                        </div>
                        <p className="card__button">Book now</p>


                        {
                            hotels.map((hotel, index) =>
                                <div key={index}>
                                    <h1 className="hotels--establishmentName">{hotel.establishmentName}</h1>
                                    <img src={hotel.imageUrl} className="hotels--image" alt="hotels"/>
                                    <p className="hotels--description">{hotel.description}</p>
                                    <Link to={"/Hotelspesific/" + hotel.id} className="hotels--readmore">read more</Link>
                                    <Link to={"/Hotelspesific/" + hotel.id} className="hotels--button">Book now</Link>
                                </div>

                            )
                        }
                    </div>
                );
            }

export default Hotels;
