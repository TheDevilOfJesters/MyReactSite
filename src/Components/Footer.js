import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import '../CSS/Footer.css'

const footer = () => {
    return (
        <footer className="font-small pt-4 mt-4">
            <div className="footer footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="http://jessiejfoley.com/">Jessie Foley</a><FontAwesomeIcon icon = {faHeart}/>
                </Container>
            </div>
        </footer>
    );
};

export default footer;