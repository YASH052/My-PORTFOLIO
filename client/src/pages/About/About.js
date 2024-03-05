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
                        <p>I am passionate and dedicated with a strong foundation in C++, MERN stack development, and SQL. I bring fresh perspectives and a hunger for learning to every project I undertake.

                            Skills:
                            C++: Proficient in object-oriented programming, data structures, and algorithms.

                            MERN Stack: Skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Capable of handling both frontend and backend development tasks.

                            SQL: Proficient in designing and querying relational databases using SQL. </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
