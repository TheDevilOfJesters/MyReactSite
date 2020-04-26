import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
// import '../../CSS/DigiRes-Summary.css'

const Summary = () => {
    return (
        <section className="section summary-section">
            <h2 className="section-title">
                        <span className="icon-holder">
                            <FontAwesomeIcon icon={faUser}/>
                        </span>Career
                Profile
            </h2>
            <div className="summary">
                <p className="SummaryParagraph">
                    I enjoy challenging and meaningful long term projects that usually involve learning new
                    skills.
                    I have a plethora of hobbies and projects ranging from 3D printing to tinkering with open
                    sourced code on GitHub.
                </p>
            </div>
        </section>
    );
};

export default Summary;