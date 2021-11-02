import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

const OtelAdı = () => {

    return (
        <div className="otelinfo">
            <Container>
                <Row>
                    <Col xs={12} md={3} style={{padding: 20}}>
                        <h5 style={{fontWeight:800}}>Alaturka Pansiyon</h5>
                        <Row className="align-items-center" style={{fontSize: 14}}>
                            <Col sm={12}>
                                <Icon.GeoAltFill size={20} className="location-icon"/>
                                Kemer Göynük, Antalya
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={12} md={6} style={{padding: 20, fontSize: 12}}>
                        Anasayfa / Antalya Otelleri / Belek Otelleri / İskele Mevkii, Belek Otelleri / Alaturka Pansiyon
                    </Col>
                    <Col xs={12} md={3} style={{padding: 20, fontSize: 12, textAlign: "right"}}>
                        <Icon.Share size={16} className="space"/>
                        <span style={{marginRight: 10}}>Paylaş</span>
                        <Icon.Heart size={16} className="space"/>
                        <span className="space">Beğen</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default OtelAdı;