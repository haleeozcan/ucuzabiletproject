import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import photo1 from "../images/photo1.PNG";
import photo2 from "../images/photo2.PNG";
import photo3 from "../images/photo3.PNG";
import otelpuan from "../images/otelpuan.png";
import photo4 from "../images/photo4.PNG";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTh} from "@fortawesome/free-solid-svg-icons";

const OdaFotograflari = () => {
    return (
        <Container style={{marginTop: -10}}>
            <Row>
                <Col xs={12} md={7}>
                    <div className="head-text">
                        <Image src={photo1} rounded width="100%" height={410}/>
                        <div className='text-on-image'>
                            <img src={otelpuan} width={"80%"}/>
                            <br/>
                            <b style={{fontSize: 20}}>9.5</b> <span style={{fontSize: 14}}>Puan</span>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={5}>
                    <Image src={photo2} rounded width="100%" height={180}/>
                    <br/>
                    <br/>
                    <Row>
                        <Col xs={6} md={6}>
                            <Image src={photo3} rounded width="100%" height={205}/>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="photo-number">
                                <Image src={photo4} rounded width="100%" height={205}/>
                                <Button className="photonumber-text">
                                    <FontAwesomeIcon icon={faTh} className="location-icon"/> <b style={{fontSize: 14}}>+14
                                    Fotoğraf</b>
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Col>

            </Row>
        </Container>
    )
};

export default OdaFotograflari;