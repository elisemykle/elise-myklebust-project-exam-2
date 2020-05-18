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

                        {
                            hotels.map((hotel, index) =>
                                <div key={index}>
                                    <img src={hotel.imageUrl} className="hotels--image" alt="hotels"/>
                                    <h1 className="hotels--establishmentName">{hotel.establishmentName}</h1>
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
