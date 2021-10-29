import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import oda1 from "../images/oda1.PNG";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const OdaSecenekleri = () => {
    return (
        <Container>
            Oda Seçenekleri
            <Card>
                <Row>
                    <Col xs={12} md={3} style={{padding: 20}}>
                        <Card.Img variant="top" src={oda1}/>
                    </Col>
                    <Col xs={6} md={3}>
                        <Card.Body style={{textAlign: "left"}}>
                            <Card.Title>Superior Kara Manzaralı</Card.Title>
                            <Card.Text>Çift Kişilik tek geniş yatak</Card.Text>
                            <Card.Text>3 kişilik</Card.Text>
                            <Card.Text>80 m²</Card.Text>
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
        </Container>

    )
};

export default OdaSecenekleri;