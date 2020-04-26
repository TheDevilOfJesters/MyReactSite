import React, {} from 'react';
import '../CSS/Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button";




const Navigation = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg" fixed={"top"}>
                <Navbar.Brand href="/">Jessie Foley</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Container className={"buttonLinks"}>
                            <NavLink to={"/"}><Button>Home</Button></NavLink>
                            <NavLink to="/about"><Button>About</Button></NavLink>
                            <NavLink to="/digires"><Button>Digital Resume</Button></NavLink>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;