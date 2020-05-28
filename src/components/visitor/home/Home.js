import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from "../../Hero.js";

const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishments.php";

function Home() {
    const [hotels, updateHotels] = useState([]);
    const [filterHotels, updateFilterHotels] = useState([]);
    const [searchValue, updateSearchValue] = useState("");

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            updateHotels(json);
            //updateFilterHotels(json);
        })
        .catch(error => console.log(error));
    }, []);

    const searchHotels = function(){
        const searchText = searchValue.toLowerCase();
        if(searchText === "") {
            updateFilterHotels([]);
            return;
        }
        const filterArray = hotels.filter((hotel) => {
            const lowerCaseName = hotel.establishmentName.toLowerCase();
            if(lowerCaseName.indexOf(searchText)){
                return true;
            }
            else {
                return false;
            }
        });
        updateFilterHotels(filterArray);
    }

    return (
        <div className="home">
            <Hero title="Stop paying more than other hotel guests" text="Find the best hotels, b&b’s and guesthouses in Bergen city." classes="hero">
                <div className="search__bar row">
                    <input className="search--box col-auto" type="text" placeholder="Search for hotels here..." onChange={(e) => {
                            updateSearchValue(e.target.value);
                            searchHotels();
                        }
                    }/>
                    <button className="search--button" onClick={() => searchHotels()}>Search</button>
                </div>
            </Hero>

            <div className="about">
                <h1 className="about__h1">About Bergen city</h1>
                <p className="aboutbergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo turpis. Fusce quis enim ante. Etiam cursus nibh sit amet massa tempus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eget consectetur nulla. Maecenas nec rhoncus urna, volutpat lobortis neque. Aenean sapien dui, scelerisque at mi id, feugiat tincidunt arcu. Curabitur lobortis felis sit amet efficitur cursus.</p>
                <p className="aboutbergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo turpis. Fusce quis enim ante. Etiam cursus nibh sit amet massa tempus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eget consectetur nulla. Maecenas nec rhoncus urna, volutpat lobortis neque. Aenean sapien dui, scelerisque at mi id, feugiat tincidunt arcu. Curabitur lobortis felis sit amet efficitur cursus.</p>
            </div>
            {
                filterHotels.map((hotel, index) =>
                <div key={index}>
                    <Link to={"/Hotelspesific/" + hotel.id} className="card__readmore">
                        <h1>{hotel.establishmentName}</h1>
                    </Link>
                </div>
            )
        }
    </div>
);
}

export default Home;