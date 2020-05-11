import React from 'react';
import Skills from './DigiResComponents/Skills'
import Summary from './DigiResComponents/Summary'
import Experience from './DigiResComponents/Experience'
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import Sidebar from "./DigiResComponents/Sidebar";
import '../CSS/DigiRes.css'
import 'react-bootstrap/Col'

const DigiRes = () => {
    return (
        <div className={"wrapper"}>
            <Container>
                <Navigation/>
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-1">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-11">
                        <div className="main-wrapper">
                            <Summary/>
                            <hr className={"devider"}/>
                            <Skills/>
                            <hr className={"devider"}/>
                            <Experience/>
                            <hr className={"devider"}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DigiRes;