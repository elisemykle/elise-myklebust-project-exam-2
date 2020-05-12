import React, { useState, useEffect } from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import aboutbergenImg from "../../../image/aboutbergen.png"
import Hero from "../../Hero.js";

{/* link til listen av hoteller og innhold */}
const API_URL = "http://localhost:8888/get-establishments.php";

    function Home() {
        const [hotels, updateHotels] = useState([]);
        const [filterHotels, updateFilterHotels] = useState([]);
        const [searchValue, updateSearchValue] = useState("");

        useEffect(() => {
            fetch(API_URL)
            .then(response => response.json())
            .then((json) => {
                updateHotels(json);
                updateFilterHotels(json);
            })
            .catch(error => console.log(error));
        }, []);

        const searchHotels = function(){
            const searchText = searchValue.toLowerCase();
            const filterArray = hotels.filter((hotel) => {
                const lowerCaseName = hotel.establishmentName.toLowerCase();
                if(lowerCaseName.includes(searchText)){
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
                <Hero title="Stop paying more than other hotel guests" text="Find the best hotels, b&b’s and guesthouses in Bergen city." classes="hero" />
                <h1>Home</h1>
                <input type="text" onChange={(e) => {
                        updateSearchValue(e.target.value);
                        searchHotels();
                    }
                }/>
                <button onClick={() => searchHotels()}>test</button>
                {
                    filterHotels.map((hotel, index) =>
                        <div key={index}>
                            <img src={hotel.imageUrl} alt="gigr" style={{width: "100px", height: "100px"}}/>
                            <h1>{hotel.establishmentName}</h1>
                        </div>
                    )
                }
            </div>
        );
    }

    export default Home;
