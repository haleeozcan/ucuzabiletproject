import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/logo.PNG";
import tr from "../images/trflag.png";
import en from "../images/en.png";
import de from "../images/de.png";
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
                    <Nav className="me-auto align-items-center">
                        <FontAwesomeIcon icon={faPlane}/>
                        <Nav.Link href="" className="double-space">UÇAK</Nav.Link>
                        <FontAwesomeIcon icon={faHotel}/>
                        <Nav.Link href="">OTEL</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center" style={{fontSize: 14}}>
                        <NavDropdown title="Online İşlemler" id="basic-nav-dropdown" className="double-space">
                            <NavDropdown.Item>Online İşlemler 1</NavDropdown.Item>
                            <NavDropdown.Item>Online İşlemler 2</NavDropdown.Item>
                        </NavDropdown>
                        <FontAwesomeIcon icon={faUser}/>
                        <Nav.Link href="" className="double-space">Giriş Yap / Üye Ol</Nav.Link>
                        <NavDropdown title={<span><img src={tr} width={20} height={20}/>
                            TRY </span>} align="end" id="dropdown-menu-align-end">
                            <NavDropdown.Item>
                                <img src={tr} width={20} height={20} className="space"/>
                                TRY</NavDropdown.Item>
                            <NavDropdown.Item><img src={en} width={20} height={20} className="space"/>
                                EN</NavDropdown.Item>
                            <NavDropdown.Item> <img src={de} width={20} height={20} className="space"/>
                                DE</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Head;
