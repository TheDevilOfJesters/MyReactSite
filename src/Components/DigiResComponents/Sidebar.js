import React from 'react'
import '../../CSS/Sidebar.css'
import Profile from "./SidebarComponents/Profile";
import Contact from "./SidebarComponents/Contact";
import Education from "./SidebarComponents/Education";
// import Interests from "./SidebarComponents/Interests";
import Button from "react-bootstrap/Button";

const Sidebar = () => {
    return (

        <div className={"sidebar-wrapper"}>
            <Profile/>
            <div className={"stuffs"}>
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-11">
                        <Contact/>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-11">
                        <Education/>
                    </div>
                </div>
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-11">
                        {/*<Interests/>*/}
                    </div>
                </div>
            </div>
            <div className={"download container-block"}>
                <Button>
                    <a href={process.env.PUBLIC_URL + '/otherfiles/FoleyJessieCP.docx'}>Download My Resume</a>
                </Button>
            </div>
        </div>

        // <FontAwesomeIcon icon={faLinkedin}/> <a className="LI-simple-link" href={"https://www.linkedin.com/in/jessie-j-foley"}>Jessie J. Foley</a>
    //            <img className="profile" src={process.env.PUBLIC_URL + '/images/profile.JPG'} alt="" />
    );
};


export default Sidebar
