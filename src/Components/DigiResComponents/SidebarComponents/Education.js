import React from 'react';
import '../../../CSS/Sidebar-Education.css'

const Education = () => {
    return (
        <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            <div className="item">
                <div className="degree">Associates <br/>Computer Programming</div>
                <div className="meta">Pittsburgh Technical College</div>
                <div className="time">2018 - 2020</div>
            </div>
            <div className="item">
                <div className="degree">High School</div>
                <div className="meta">City Charter High School</div>
                <div className="time">2013 - 2017</div>
            </div>
        </div>
    );
};

export default Education;