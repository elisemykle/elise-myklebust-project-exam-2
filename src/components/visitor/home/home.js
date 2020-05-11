import React from 'react';
import { Col, Row, Image, Container} from 'react-bootstrap';
import aboutbergenImg from "../../../image/aboutbergen.png"

export default function Home(props) {
    return (
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
    )
}
