import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import '../index.css';
import Col from "react-bootstrap/Col";
import * as Icon from 'react-bootstrap-icons';

const GenelBilgi = () => {
    return (
        <Container>
            <Row>
                <Col xs={8} style={{padding: 20}}>
                    <Row>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Icon.People size={40} className="icon"/>
                            Çocuk Dostu
                        </Col>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Icon.Water size={40} className="icon"/>
                            Denizi Kum
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Icon.Umbrella size={40} className="icon"/>
                            Özel Plaj
                        </Col>
                        <Col xs={6} style={{padding: (0, 0, 0, 20)}}>
                            <Icon.Building size={40} className="icon"/>
                            Güvenli Turizm Sertifikalı Otel
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
                        serinletici
                        içeceklerin yanı sıra lezzetli atıştırmalıklar sunan snack alanlarıyla önce çıkıyor.
                    </Row>
                </Col>
                <Col xs={4} style={{padding: 20}}>
                    <Container className="safe">
                        <Icon.CheckCircle size={20}/>
                        Güvenli Turizm Sertifikalı Tesis 🛈
                    </Container>
                </Col>
            </Row>
        </Container>

    )
};

export default GenelBilgi;

