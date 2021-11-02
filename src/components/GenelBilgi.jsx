import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import '../index.css';
import Col from "react-bootstrap/Col";
import * as Icon from 'react-bootstrap-icons';
import {faUserCheck, faWater, faUmbrellaBeach, faCertificate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import check from "../images/check.png";
import map from "../images/map.PNG";

const GenelBilgi = () => {
    return (
        <Container>
            <Row>
                <h5><b>Genel Bilgi</b></h5>
                <Col sm={12} md={8} style={{padding: 20, fontSize: 14}}>
                    <Row>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <FontAwesomeIcon icon={faUserCheck} className="list-icon"/>
                                </Col>
                                <Col xs={6}>
                                    <b>Çocuk Dostu</b>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <FontAwesomeIcon icon={faWater} className="list-icon"/>
                                </Col>
                                <Col xs={6}>
                                    <b>Denizi Kum</b>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className="list-icon"/>
                                </Col>
                                <Col xs={6}>
                                    <b>Özel Plaj</b>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Row className="align-items-center">
                                <Col lg={2}>
                                    <FontAwesomeIcon icon={faCertificate} className="list-icon"/>
                                </Col>
                                <Col xs={8}>
                                    <b>Güvenli Turizm Sertifikalı Otel</b>
                                </Col>
                            </Row>
                        </Col>
                        Granada Luxury Hotel Belek, Akdeniz'in eşşiz denizi ve ferah atmosferinde lüks ve eğlence
                        dolu bir tatil yapmak isteyenleri, büyük bir misafirperverlikle karşılıyor.
                        <br/>
                        <br/>
                        Birbirinden şık ve konforlu odalarıyla rahat bir tatilin adresi olan tesis denize kısa bir
                        mesafede hizmet veriyor. Plaja shuttle servis sunan tesisin kendisine ait bir kum plajı var.
                        Berrak denizi ve aquaparkıyla tesis,her yaştan misafirine yaz eğlencesini doyasıya yaşatıyor.
                        <br/>
                        <br/>
                        Tesis, Türk ve dünya mutfaklarının eşsiz lezzetlerini sunan zengin mutfağı ve gün boyu
                        serinletici içeceklerin yanı sıra lezzetli atıştırmalıklar sunan snack alanlarıyla önce çıkıyor.
                    </Row>
                </Col>
                <Col xs={12} md={4} style={{padding: 20, fontSize:14}}>
                    <Container className="safe">
                        <img src={check} width={"25"} height={"25"} className="location-icon"/>
                        <b>Güvenli Turizm Sertifikalı Tesis</b> 🛈
                    </Container>
                    <img src={map} className="map-photo"/>
                </Col>
            </Row>
        </Container>

    )
};

export default GenelBilgi;

