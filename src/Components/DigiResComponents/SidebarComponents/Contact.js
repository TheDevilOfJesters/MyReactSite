import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import '../../../CSS/Sidebar-Contact.css'

const Contact = () => {
    return (
        <div className="contact-container container-block">
            <h2 className="container-block-title">CONTACT</h2>
            <ul className="list-unstyled contact-list">
                <li className="email">
                    <FontAwesomeIcon icon={faEnvelope}/><a href="mailto: jessiejfoley5537@gmail.com" title="jessiejfoley5537@gmail.com">Mail Me</a>
                </li>
                <li className="website">
                    <FontAwesomeIcon icon={faGlobe}/><NavLink to={"/"}>jessiejfoley.com</NavLink>
                </li>
                <li className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin}/> <a className="LI-simple-link" href={"https://www.linkedin.com/in/jessie-j-foley"}>Jessie J. Foley</a>
                </li>
                <li className="github">
                    <FontAwesomeIcon icon={faGithub}/><a href="https://github.com/TheDevilOfJesters">TheDevilOfJesters</a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;