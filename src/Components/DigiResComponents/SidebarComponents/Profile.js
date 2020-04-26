import React from 'react';
import '../../../CSS/Sidebar-Profile.css'

const Profile = () => {
    return (
        <div className="profile-container">
            <img className="profile" src={process.env.PUBLIC_URL + '/images/profile.JPG'} alt="" />
            <h1 className="name">Jessie Foley</h1>
            <h3 className="tagline">Computer Programmer</h3>
            <sub>Full Time Geek</sub>
        </div>
    );
};
export default Profile;
