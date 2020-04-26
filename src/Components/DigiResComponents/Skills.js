import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import '../../CSS/Skills.css'

const Skills = () => {
    return (
        <section className="skills-section section">
            <h2 className="section-title">
                <span className="icon-holder"><i><FontAwesomeIcon icon={faRocket}/></i></span>Skills
            </h2>
            <div id="skills">
                <h5>Programming Languages</h5>
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>HTML/CSS</li>
                    <li>Google App Script</li>
                </ul>
                <h5>Tools/Software</h5>
                <ul>
                    <li>NetBeans</li>
                    <li>GitHub</li>
                    <li>Notepad++</li>
                    <li>Microsoft Visual Studio</li>
                    <li>Microsoft Office Suite</li>
                    <li>Visual Studio Code</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;