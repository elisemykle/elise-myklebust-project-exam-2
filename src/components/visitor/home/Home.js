import React, { useState, useEffect } from 'react';
import Hero from "../../Hero.js";
import { Link } from 'react-router-dom';

// API call som henter informasjonen fra en url-kobling
const API_URL = "https://elisemdesign.no/project-exam-2-master/get-establishments.php";

// Home komponenten
function Home() {
    // States
    const [hotels, updateHotels] = useState([]);
    const [filterHotels, updateFilterHotels] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Henter dataene fra API'et
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            updateHotels(json);
            updateFilterHotels(json);
        })
        .catch(error => console.log(error));
    }, []);

    // Filterer listen med hoteller ut i fra hva man har søkt i søkeboksen(kan søke med både stor og små bokstaver)
    const typeAheadSearch = function(searchValue){
        const lowercaseSearchValue = searchValue.toLowerCase();
        const filterArray = hotels.filter((hotel) => {
            const lowercaseEstablishmentName = hotel.establishmentName.toLowerCase();
            return lowercaseEstablishmentName.includes(lowercaseSearchValue);
        });
        updateFilterHotels(filterArray);
    }

    // Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden
    return (
        <div className="home">
            <Hero title="Stop paying more than other hotel guests" text="Find the best hotels, b&b’s and guesthouses in Bergen city." classes="hero hero--frontpage">
                <div className="search__bar row">
                    <input className="search__input col-auto" type="text" placeholder="Search for hotels here..."
                    onInput={() => setShowResults(true)}
                        onChange={(e) => {
                            typeAheadSearch(e.target.value);
                        }
                    } />
                    {showResults && (
                        <div className="search__results">
                            <div className="results__list">
                                {/* Map method looper gjennom en liste og gjør noe med hvert enkelt element i listen*/}
                                {filterHotels.map((hotel, index) => {
                                    return(
                                        <Link key={index} className="results__hotel row" to={"/Hotelspesific/" + hotel.id}>
                                            <img src={hotel.imageUrl} className="results__image" alt="hotel" />
                                            <p className="results__name">{hotel.establishmentName}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </Hero>

            <div className="row about__page">
                <h1 className="about__h1">About Bergen city</h1>
                <div className="col-m-12">
                    <p className="aboutbergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur euismod ligula id consequat. Vestibulum sagittis erat id blandit dictum. Vestibulum augue arcu, efficitur id tempor quis, viverra et risus. Pellentesque a dolor rhoncus, sagittis mauris ut, sodales orci. Curabitur maximus augue ut justo vulputate, id imperdiet arcu elementum. Cras sed ultricies nunc. Integer mollis diam a nisl aliquam eleifend. Donec tempus erat ligula, ut porttitor dolor tristique et. Cras tempor nulla id nisl tempus, sit amet euismod turpis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam erat nunc, pellentesque vitae dui non, auctor pretium mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur euismod ligula id consequat. Vestibulum sagittis erat id blandit dictum. Vestibulum augue arcu, efficitur id tempor quis, viverra et risus. Pellentesque a dolor rhoncus, sagittis mauris ut, sodales orci. Curabitur maximus augue ut justo vulputate, id imperdiet arcu elementum. Cras sed ultricies nunc. Integer mollis diam a nisl aliquam eleifend. Donec tempus erat ligula, ut porttitor dolor tristique et. Cras tempor nulla id nisl tempus, sit amet euismod turpis elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam erat nunc, pellentesque vitae dui non, auctor pretium mi.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;
