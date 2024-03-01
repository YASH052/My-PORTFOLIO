import React from 'react'
import { useTheme } from '../context/ThemeContext';
import './home.css'
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Resume from '../assets/docs/updated resume yash.pdf'
const Home = () => {
    const [theme, setTheme] = useTheme();
    const handletheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));

    }
    return (
        <>
            <div className="container-fluid home-container" id="home">
                <div className="theme-btn" onClick={handletheme}>
                    {theme === 'light' ? (<BsFillMoonStarsFill size={30} />) : (<BsFillSunFill size={30} />)}
                </div>
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
