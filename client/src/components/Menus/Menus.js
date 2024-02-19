import React from 'react'
import './Menus.css'
import { FcHome, FcAbout, FcGraduationCap, FcManager, FcAutomatic, FcContacts, FcApproval } from "react-icons/fc";

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <><div className="navbar-profile-pic">
                    <img src="/photo.jpg"
                        alt="Profile pic"
                    />
                </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcHome />Home</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcAbout />About</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                < FcManager />Work Experience</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcAutomatic />Tech Stack</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcGraduationCap />Education</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcApproval />Projects</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcContacts />Contact</div>
                        </div>
                    </div>
                </>
            ) : (
                <><div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcHome title='Home' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcAbout title='About' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            < FcManager title='Work Experience' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcAutomatic title='Tech Stack' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcGraduationCap title='Education' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcApproval title='Projects' /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcContacts title='Contact' /></div>
                    </div>
                </div></>
            )
            }
        </>
    );
}

export default Menus
