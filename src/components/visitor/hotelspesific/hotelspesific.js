import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "http://localhost:8888/get-establishment.php?id=";

export default function Hotelspesific(props) {
    const {id}=useParams();
    const [hotel, updateHotel] = useState([]);

    useEffect(() => {
        fetch(API_URL+id)
        .then(response => response.json())
        .then((json) => {
            updateHotel(json);
        })
        .catch(error => console.log(error));
    }, [id]);
    return (
        <div className="hotelspesific">
            <img src={hotel.imageUrl} alt="hotels" style={{width: "100px", height: "100px"}}/>
            <h1 className="hotels--establishmentName">{hotel.establishmentName}</h1>
            <p className="hotels--description">{hotel.description}</p>
        </div>
    )
}
