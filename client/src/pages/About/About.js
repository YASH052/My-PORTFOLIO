import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <div className='about'>
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src="/photo.jpg" alt="Profile_Pic" />
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                        <h1>About Me!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consectetur ratione eius explicabo. Ipsum, ex expedita, enim iusto accusantium debitis soluta minus laborum reprehenderit corrupti ipsam officia? A, repudiandae laudantium?</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
