import './App.css';
import Header from "./components/Header";
import OdaSecenekleri from "./components/OdaSecenekleri";
import OdaBilgileri from "./components/OdaBilgileri";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab'
import GenelBilgi from "./components/GenelBilgi";
import OtelAdı from "./components/OtelAdı";
import Container from "react-bootstrap/Container";
import OdaFotograflari from "./components/OdaFotograflari";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header className="App-header">
            </Header>
            <OtelAdı/>
            <OdaFotograflari/>
            <Container>
                <Tabs defaultActiveKey="odasecenekleri" id="uncontrolled-tab-example" className="mb-3"
                      transition={false}
                >
                    <Tab eventKey="odasecenekleri" title="Oda Seçenekleri">
                        <GenelBilgi/>
                        <OdaSecenekleri/>
                        <OdaBilgileri/>
                    </Tab>
                    <Tab eventKey="genelbilgi" title="Genel Bilgi">
                        Genel Bilgi
                    </Tab>
                    <Tab eventKey="tesisolanaklari" title="Tesis Olanakları">
                        Tesis Olanakları
                    </Tab>
                    <Tab eventKey="detaylibilgi" title="Detaylı Bilgi">
                        Detaylı Bilgi
                    </Tab>
                    <Tab eventKey="yorumlar" title="Yorumlar">
                        Yorumlar
                    </Tab>
                </Tabs>
            </Container>

        </div>
    );
}

export default App;
