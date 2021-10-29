import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import oda1 from "../images/oda1.PNG";
import oda2 from "../images/oda2.PNG";
import oda3 from "../images/oda3.PNG";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

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
                <Card key={id}>
                    <Row>
                        <Col xs={12} md={3} style={{padding: 20}}>
                            <Card.Img variant="top" src={id.src}/>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card.Body style={{textAlign: "left"}}>
                                <Card.Title>{id.roomName}</Card.Title>
                                <Card.Text>{id.bedDetail}</Card.Text>
                                <Card.Text>{id.peopleNumber}</Card.Text>
                                <Card.Text>{id.m}</Card.Text>
                                <Button>Detaylı Oda Bilgisi</Button>{' '}
                            </Card.Body>
                        </Col>
                        <Col xs={6} md={6} style={{padding: 40}}>
                            <Card>
                                <Row>
                                    <Col xs={6}>
                                        <Card.Body style={{textAlign: "left"}}>
                                            <Card.Title>Oda Kahvaltı</Card.Title>
                                            <Card.Text>0-6 Yaş 1 Çocuk Ücretsiz</Card.Text>
                                            <Card.Text>Ücretsiz İptal</Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col xs={6}>
                                        <Card.Body style={{textAlign: "left"}}>
                                            <Card.Text>3 Gece İçin Toplam:</Card.Text>
                                            <Card.Title>1900 TL</Card.Title>
                                            <Button>ODAYI SEÇ</Button>{' '}
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