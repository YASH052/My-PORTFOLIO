import React from 'react'
import './Projects.css'
const Projects = () => {
    return (
        <>
            <div className="projects">
                <h2 className='col-12 mt-3 mb-1 text-center'>Top Projects</h2>
                <hr />
                <p className='pb-3 text-center'>👉Here is my top three projects with source code:
                    <p></p>
                    <p>Restaurant Backend System (MERN Stack):</p>
                    We have developed a comprehensive backend system for a restaurant management application using the MERN stack.
                    Implemented user authentication, restaurant and menu management, order processing, and reporting functionalities.
                    Utilized MongoDB for data storage, Express.js for server-side logic, React.js for the frontend interface, and Node.js for backend development.
                    Incorporated features such as user authentication, CRUD operations on restaurant data, menu item management, and order tracking.
                    <p></p>
                    <p>An E-commerce Application (MERN Stack):</p>
                    Led the development of an e-commerce platform from concept to deployment using the MERN stack.
                    Designed and implemented a user-friendly frontend interface using React.js with Redux for state management.
                    We have developed a robust backend system with Express.js and Node.js, handling user authentication, product management, cart functionality, and order processing.
                    Integrated payment gateways for secure and seamless transactions, ensuring a smooth shopping experience for users.
                    Utilized MongoDB Atlas for cloud-based database storage and management, ensuring scalability and reliability.</p>
                <div className="row" id='ads'>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src='/1.jpg' alt="projects" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">MongoDB</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">React</span>

                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">An E-Commerce Website</h5>
                                </div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/YASH052/Fullstack-E-Commerce-web-App" className="ad-btn" >view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img src='/amazone.jpg' alt="projects" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">HTML</span>
                                <span className="card-detail-badge">CSS</span>
                                {/* <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">React</span> */}

                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">Amazon Frontend</h5>
                                </div>
                                <a target="_blank" rel="noreferrer" href="https://yash052.github.io/Amazon-Front-end-/" className="ad-btn" >view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src='/1.jpg' alt="projects" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">MongoDB</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">React</span>

                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">An E-Commerce Website</h5>
                                </div>
                                <a target="_blank" rel="noreferrer" href="https://github.com/YASH052/Fullstack-E-Commerce-web-App" className="ad-btn" >view</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Projects
