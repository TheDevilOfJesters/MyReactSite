import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

import '../../CSS/Experience.css'

const Experience = () => {
    return (
            <section className="section experiences-section">
                <h2 className="section-title">
                    <span className="icon-holder"><FontAwesomeIcon icon={faBriefcase}/></span>Experience</h2>
                <Container className={"expcon"}>
                <div className="item">
                    <div className="row">
                        <div className="col-md-8">
                            <span className="job-title">TA Student Worker</span>
                        </div>
                        <div className="col-md-4">
                            <span className="time">Febuary 2019 - March 2020</span>
                        </div>
                    </div>
                    <div className="row company">
                        <div className="col-xs-11">
                            <div>Pittsburgh Technical College</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="details">
                                <p>
                                    <ul>
                                        <li>Placeholder</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className={"expDiv"}/>
                </div>


                <div className="item">
                    <div className="row">
                        <div className="col-md-8">
                            <span className="job-title">Systems Technician/ HelpDesk</span>
                        </div>
                        <div className="col-md-4">
                            <span className="time">October 2017 - December 2017</span>
                        </div>
                    </div>
                    <div className="row company">
                        <div className="col-xs-12">
                            <div>Diamond Pharmacy Services & Medical Supply</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="details">
                                <p>
                                    <ul>
                                        <li>Assisted to resolve technical issues internally and externally</li>
                                        <li>Navigated VMWare's vSphere environment to monitor virtualized servers</li>
                                        <li>Navigated and worked with active directory for user account management</li>
                                        <li>Worked with Widows-based networking</li>
                                        <li>Worked with and learned from other team members to resolve tech issues</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className={"expDiv"}/>
                </div>
                <div className="item">
                    <div className="row">
                        <div className="col-md-8">
                            <span className="job-title">Student Tech Support Technician</span>
                        </div>
                        <div className="col-md-4">
                            <span className="time">February 2015 - June 2017</span>
                        </div>
                    </div>
                    <div className="row company">
                        <div className="col-xs-12">
                            <div>City Charter High School</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="details">
                                <p>
                                    <ul>
                                        <li>Repaired and/or replaced laptop hardware</li>
                                        <li>Troubleshot software issues</li>
                                        <li>Cloned drives every break for next semester</li>
                                        <li>Coordinated with other members to complete tasks and meet deadlines</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className={"expDiv"}/>
                </div>


                <div className="item">
                    <div className="row">
                        <div className="col-md-8">
                            <span className="job-title">Student Intern</span>
                        </div>
                        <div className="col-md-4">
                            <span className="time">April 2016 - July 2016</span>
                        </div>
                    </div>
                    <div className="row company">
                        <div className="col-xs-12">
                            <div>Carnegie Mellon University</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="details">
                                <p>
                                    <ul>
                                        <li>Learned to use Linux Command Terminal</li>
                                        <li>Worked with Microsoft Micro:Bit using C++, MicroPython and Visual Block
                                            editor languages
                                        </li>
                                        <li>Programed wireless communication between two microprocessor</li>
                                        <li>Learned to use GitHub and Stack Overflow to allow mentor to monitor my
                                            progress
                                        </li>
                                        <li>Learned to work in a group running multiple simultaneous projects</li>
                                        <li>Learned the skills to succeed in a workplace environment</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className={"expDiv"}/>
                </div>
                </Container>
            </section>
    );
};

export default Experience;