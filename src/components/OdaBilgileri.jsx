import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import '../index.css';
import büyüklük from "../images/büyüklük.PNG";
import balayı from "../images/balayı.PNG";
import denizhavuz from "../images/denizhavuz.PNG";
import yemeiçme from "../images/yemeiçme.PNG";

const OdaBilgileri = () => {
    return (
        <Container>
                <Accordion>
                    <Row>
                    <Col xs={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <img src={büyüklük}/>
                                BÜYÜKLÜK BİLGİSİ
                            </Accordion.Header>
                            <Accordion.Body>
                                1.040.500 m² alan üzerine kurulu tesisin, 531 odası bulunuyor.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Col>
                    <Col xs={6} style={{padding: 20}}>
                    <Accordion.Item>
                        <Accordion.Header>
                            <img src={denizhavuz}/>
                            DENİZ&HAVUZ
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
                    <Col xs={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <img src={balayı}/>
                                BALAYI
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
                    <Col xs={6} style={{padding: 20}}>
                        <Accordion.Item>
                            <Accordion.Header>
                                <img src={yemeiçme}/>
                                YEME&İÇME
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>07.00-10.00 Kahvaltı</ListGroup.Item>
                                    <ListGroup.Item>10.00-11.00 Geç Kahvaltı</ListGroup.Item>
                                    <ListGroup.Item>11.00-22.00 Pastane</ListGroup.Item>
                                    <ListGroup.Item>12.30-16.00 Snack Menü (Food Park)</ListGroup.Item>
                                    <ListGroup.Item>12.30-14.30 Öğlen Yemeği</ListGroup.Item>
                                    <ListGroup.Item>12.30-16.00 Donut House</ListGroup.Item>
                                    <ListGroup.Item>12.30-18.00 Dondurma</ListGroup.Item>
                                    <ListGroup.Item>12.30-18.00 Gözleme (Beach Snack)</ListGroup.Item>
                                    <ListGroup.Item>18.30-21.00 Akşam Yemeği</ListGroup.Item>
                                    <ListGroup.Item>19.00-22.00 A la Carte Restoranlar</ListGroup.Item>
                                    <ListGroup.Item>20.45-00.00 Tomorrow Land Bar</ListGroup.Item>
                                    <ListGroup.Item>00.00-03.00 Gece Büfesi</ListGroup.Item>
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