import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import '../index.css';
import balayı from "../images/balayı.PNG";
import Col from "react-bootstrap/Col";
import {faVectorSquare, faSwimmer, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OdaBilgileri = () => {
    return (
        <Container>
            <Accordion>
                <Row>
                    <Col xs={12} sm={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <Row>
                                    <Col xs={12}>
                                        <FontAwesomeIcon icon={faVectorSquare} className="icon-set"/>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12}>
                                        <b>BÜYÜKLÜK BİLGİSİ</b>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body className="accordion-details">
                                 1.040.500 m² alan üzerine kurulu tesisin, 531 odası bulunuyor.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={12} sm={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <Row>
                                    <Col xs={12}>
                                        <FontAwesomeIcon icon={faSwimmer} className="icon-set"/>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12}>
                                        <b>DENİZ&HAVUZ</b>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Mavi Bayraklı</ListGroup.Item>
                                    <ListGroup.Item>Kum Plaj</ListGroup.Item>
                                    <ListGroup.Item>Açık Havuz</ListGroup.Item>
                                    <ListGroup.Item>Kapalı Havuz</ListGroup.Item>
                                    <ListGroup.Item>Çocuk Havuzu</ListGroup.Item>
                                    <ListGroup.Item>Kapalı Çocuk Havuzu</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={12} sm={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <Row>
                                    <Col xs={12}>
                                        <img src={balayı} width={28} height={28}/>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12}>
                                        <b>BALAYI</b>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Konaklama boyunca 1 defa odaya kahvaltı servisi,</ListGroup.Item>
                                    <ListGroup.Item>Giriş gününde odaya çikolata tabağı ikramı,</ListGroup.Item>
                                    <ListGroup.Item>Giriş gününde odaya zengin türk tatlı tabağı
                                        ikramı,</ListGroup.Item>
                                    <ListGroup.Item>Giriş gününde odaya zengin türk tatlı tabağı
                                        ikramı,</ListGroup.Item>
                                    <ListGroup.Item>Giriş gününde odaya şampanya ikramı,</ListGroup.Item>
                                    <ListGroup.Item>Özel tasarım şampanya kadehleri (Mr.&Mrs.),</ListGroup.Item>
                                    <ListGroup.Item>Oda süslemesi,</ListGroup.Item>
                                    <ListGroup.Item>Çubuk Bıyık/Dudak Totemleri,</ListGroup.Item>
                                    <ListGroup.Item>Özel tasarım bornoz (Mr.&Mrs.),</ListGroup.Item>
                                    <ListGroup.Item>Odaya kart gönderimi,</ListGroup.Item>
                                    <ListGroup.Item>Spa & pavillon rezervasyonlarında %10 özel indirim</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={12} sm={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <Row>
                                    <Col xs={12}>
                                        <FontAwesomeIcon icon={faUtensils} className="icon-set"/>
                                        <br/><br/>
                                    </Col>
                                    <Col xs={12}>
                                        <b>YEME&İÇME</b>
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b style={{color: "#333"}}>07.00-10.00</b> Kahvaltı</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>10.00-11.00</b> Geç Kahvaltı</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>11.00-22.00</b> Pastane</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>12.30-16.00</b> Snack Menü (Food Park)</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>12.30-14.30</b> Öğlen Yemeği</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>12.30-16.00</b> Donut House</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>12.30-18.00</b> Dondurma</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>12.30-18.00</b> Gözleme (Beach Snack)</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>18.30-21.00</b> Akşam Yemeği</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>19.00-22.00</b> A la Carte Restoranlar</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>20.45-00.00</b> Tomorrow Land Bar</ListGroup.Item>
                                    <ListGroup.Item><b style={{color: "#333"}}>00.00-03.00</b> Gece Büfesi</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                </Row>
            </Accordion>
        </Container>

    )
};

export default OdaBilgileri;