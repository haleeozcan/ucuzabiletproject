import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import logo from "../images/logo.PNG";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <img src={logo} />
                        <FontAwesomeIcon icon={faPlane} />
                        <Nav.Link href="">UÇAK</Nav.Link>
                        <FontAwesomeIcon icon={faHotel} />
                        <Nav.Link href="">OTEL</Nav.Link>
                        <NavDropdown title="Online İşlemler" id="basic-nav-dropdown">
                            <NavDropdown.Item>Online İşlemler 1</NavDropdown.Item>
                            <NavDropdown.Item>Online İşlemler 2</NavDropdown.Item>
                        </NavDropdown>
                        <FontAwesomeIcon icon={faUser} />
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
    )
};

export default Header;