import React from 'react'
import './Menus.css'
import { FcHome, FcAbout, FcGraduationCap, FcManager, FcAutomatic, FcContacts, FcApproval } from "react-icons/fc";
import { Link } from 'react-scroll';

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <div>
                    <div className="navbar-profile-pic">
                        <img src="/photo.jpg" alt="Profile pic" />
                    </div>

                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home">
                                    <FcHome />Home
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="about">
                                    <FcAbout />About
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="workexperience">
                                    <FcManager />Work Experience
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="techstack">
                                    <FcAutomatic />Tech Stack
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="projects">
                                    <FcApproval />Projects
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="education">
                                    <FcGraduationCap />Education
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="contact">
                                    <FcContacts />Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcHome title='Home' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcAbout title='About' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcManager title='Work Experience' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcAutomatic title='Tech Stack' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcGraduationCap title='Education' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcApproval title='Projects' />
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <FcContacts title='Contact' />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Menus;