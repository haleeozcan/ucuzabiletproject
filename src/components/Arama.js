import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

const Arama = () => {
    return (
        <Container className="otelinfo">
            <Row>
                <Col xs={12} md={3} style={{padding: 20}}>
                    Alaturka Pansiyon <br/>
                    <Icon.GeoAltFill size={20} className="location-icon"/>
                    Kemer Göynük, Antalya
                </Col>
                <Col xs={12} md={6} style={{padding: 20, fontSize: 12,}}>
                    Anasayfa / Antalya Otelleri / Belek Otelleri / İskele Mevkii, Belek Otelleri / Alaturka Pansiyon
                </Col>
                <Col xs={12} md={3} style={{padding: 20, fontSize: 12,}}>
                    <Icon.Share size={16}/>
                    Paylaş
                    <Icon.Heart size={16}/>
                    Beğen
                </Col>
            </Row>
        </Container>
    )
};

export default Arama;