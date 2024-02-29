import React from 'react'
import './Projects.css'
const Projects = () => {
    return (
        <>
            <div className="projects">
                <h2 className='col-12 mt-3 mb-1 text-center'>Top Projects</h2>
                <hr />
                <p className='pb-3 text-center'>👉Here is my top three projects with source code Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam natus vero beatae earum illo rerum ea deserunt! Accusantium cupiditate veniam reprehenderit, et blanditiis corporis asperiores aliquam inventore, quisquam, earum pariatur? </p>
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
            </div>

        </>
    )
}

export default Projects
