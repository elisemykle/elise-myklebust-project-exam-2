import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const API_URL = "http://elisemdesign.no/project-exam-2-master/get-establishment.php?id=";

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
            <h1 className="hotelspesific__establishmentName">{hotel.establishmentName}</h1>
            <img src={hotel.imageUrl} className="hotelspesific__image" alt="hotel" />
            <p className="hotelspesific__description">{hotel.description}</p>
            <a href="mailto:{this.props.email}" className="hotelspesific__email">{hotel.establishmentEmail}</a>
            <Link to={"/Enquiry/" + hotel.id} className="hotelspesific__button">Make an enquiry</Link>
        </div>
    )
}
