import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import oda1 from "../images/oda1.PNG";
import oda2 from "../images/oda2.PNG";
import oda3 from "../images/oda3.PNG";
import check from "../images/check.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faVectorSquare} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import {faChild} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.PNG";

const OdaSecenekleri = () => {
    const rooms = [
        {
            id: 1,
            src: oda1,
            roomName: "Superior Kara Manzaralı",
            bedDetail: "Çift Kişilik tek geniş yatak",
            peopleNumber: "3 Kişilik",
            m: "80 m²",
        },
        {
            id: 2,
            src: oda2,
            roomName: "Superior Family Plus",
            bedDetail: "Çift Kişilik tek geniş yatak",
            peopleNumber: "3 Kişilik",
            m: "80 m²",
        },
        {
            id: 3,
            src: oda3,
            roomName: "Deniz Manzaralı",
            bedDetail: "Çift Kişilik tek geniş yatak",
            peopleNumber: "3 Kişilik",
            m: "80 m²",
        },
    ]

    return (
        <Container>
            Oda Seçenekleri
            {rooms.map(id =>
                <Card key={id} className="room-card">
                    <Row>
                        <Col xs={12} md={3} style={{padding: (20, 20, 0, 20)}}>
                            <Card.Img variant="top" src={id.src}/>
                        </Col>
                        <Col md={12} lg={3}>
                            <Card.Body style={{textAlign: "left"}}>
                                <Card.Title><b style={{fontSize: 16}}>{id.roomName}</b></Card.Title>
                                <Card.Text><FontAwesomeIcon icon={faBed} className="location-icon"/>{id.bedDetail}
                                </Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faUsers} className="location-icon"/>{id.peopleNumber}
                                </Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faVectorSquare} className="location-icon"/>{id.m}
                                </Card.Text>
                                <Button className="detail-room">
                                    <div>Detaylı Oda Bilgisi <FontAwesomeIcon icon={faArrowRight}
                                                                              style={{color: "#FDC60D"}}/></div>
                                </Button>{' '}
                            </Card.Body>
                        </Col>
                        <Col md={12} lg={6} style={{padding: (30, 30, 0, 30)}}>
                            <Card>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <Card.Body style={{textAlign: "left"}}>
                                            <Card.Text>
                                                <Row className="align-items-center">
                                                    <Col sm={12} md={2}>
                                                        <FontAwesomeIcon icon={faUtensils}
                                                                         className="odakahvaltı-icon"/>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <span>Oda Kahvaltı</span>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Text className="bordering"><FontAwesomeIcon icon={faChild} className="location-icon"/>0-6
                                                Yaş 1 Çocuk Ücretsiz</Card.Text>
                                            <Card.Text className="bordering"><img src={check} width={"15"} height={"15"}
                                                                                  className="location-icon"/>
                                                Ücretsiz İptal</Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col xs={12} sm={6} style={{marginTop: 20}}>
                                        <Card.Body style={{textAlign: "right"}}>
                                            <Card.Text style={{color: "#848484"}}>3 Gece İçin Toplam:</Card.Text>
                                            <Card.Title><b>1900 TL</b></Card.Title>
                                            <Button className="select-room"><b>ODAYI SEÇ</b></Button>{' '}
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>

    )
};

export default OdaSecenekleri;