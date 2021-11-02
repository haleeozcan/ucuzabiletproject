import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/logo.PNG";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHotel, faPlane} from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import {faUser} from "@fortawesome/free-regular-svg-icons";

const Head = () => {
    return (
        <Navbar expand="lg" bg="white">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <FontAwesomeIcon icon={faPlane}/>
                        <Nav.Link href="">UÇAK</Nav.Link>
                        <FontAwesomeIcon icon={faHotel}/>
                        <Nav.Link href="">OTEL</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Online İşlemler" id="basic-nav-dropdown">
                            <NavDropdown.Item>Online İşlemler 1</NavDropdown.Item>
                            <NavDropdown.Item>Online İşlemler 2</NavDropdown.Item>
                        </NavDropdown>
                        <FontAwesomeIcon icon={faUser}/>
                        <Nav.Link href="">Giriş Yap / Üye Ol</Nav.Link>
                        <NavDropdown title="TRY" id="basic-nav-dropdown">
                            <NavDropdown.Item active>TRY</NavDropdown.Item>
                            <NavDropdown.Item>EUR</NavDropdown.Item>
                            <NavDropdown.Item>USD</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Head;
