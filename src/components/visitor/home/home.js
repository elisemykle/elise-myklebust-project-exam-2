import React, { useState, useEffect } from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import aboutbergenImg from "../../../image/aboutbergen.png"
import Hero from "../../Hero.js";
import SearchHotels from "../../SearchHotels.js";

const API_URL = "http://localhost:8888/get-establishments.php";

export default function Home() {

    const [loading, updateLoading] = useState([true]);

    const [establishments, updateEstablishments] = useState([]);

    const [filterEstablishments, updateFilterEstablishments] = useState([]);

    useEffect(() => {

        // Fetch the data at API
        fetch(API_URL)

        // Parse data as json
        .then(response => response.json())

        // Update the state
        .then((json) => {
        // Update our list
        updateEstablishments(json);
        updateFilterEstablishments(json);
        console.log(json);
        })

        // Log any errors to the console
        .catch(error => console.log(error))
        .finally(() => updateLoading(false))
    }, []);

    const searchEstablishments=function(event,queryText){
        event.preventDefault();
        const searchText = queryText.toLowerCase();

        const filterArray = establishments.filter((establishment) => {

            const lowerCaseName = establishment.establishmentName.toLowerCase();


            if(lowerCaseName.includes(searchText)){
                return true;
            }

            return false;
        });

        updateFilterEstablishments(filterArray);
    };


    return (
        <div>
            <Hero title="Stop paying more than other hotel guests" text="Find the best hotels, b&b’s and guesthouses in Bergen city." classes="hero" showSearch={true}/>
            {
                loading ?
                <h2>pages loading</h2>
                :
                <Container>
                <Row>
                  <Col xs={12} md={6}>
                      <div className="page">
                      <h1 className="home__h1">About Bergen city</h1>
                      <Image src={aboutbergenImg} className="about--bergen" alt="aboutbergenimg" fluid/>
                          <p className="aboutbergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo turpis. Fusce quis enim ante. Etiam cursus nibh sit amet massa tempus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eget consectetur nulla. Maecenas nec rhoncus urna, volutpat lobortis neque. Aenean sapien dui, scelerisque at mi id, feugiat tincidunt arcu. Curabitur lobortis felis sit amet efficitur cursus.</p>
                          <p className="aboutbergen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo turpis. Fusce quis enim ante. Etiam cursus nibh sit amet massa tempus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eget consectetur nulla. Maecenas nec rhoncus urna, volutpat lobortis neque. Aenean sapien dui, scelerisque at mi id, feugiat tincidunt arcu. Curabitur lobortis felis sit amet efficitur cursus.</p>
                          </div>
                  </Col>
                </Row>
                </Container>
            }
        </div>
    )
}
