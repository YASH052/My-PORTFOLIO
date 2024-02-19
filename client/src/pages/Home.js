import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../assets/docs/updated resume yash.pdf'
const Home = () => {
    return (
        <>
            <div className="container-fluid home-container">
                <div className="container home-content">
                    <h2>Hi🙋‍♂️ I'm a</h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['FullStack Developer!', 'MERN Stack Developer!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="home-button">
                        <button className='btn btn-hire'>Hire Me!</button>
                        <a className='btn btn-resume' href={Resume} download='Yash_Sharma_Resume'>My Resume!</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
