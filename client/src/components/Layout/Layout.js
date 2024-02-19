import Home from '../../pages/Home'
import Menus from '../Menus/Menus';
import './Layout.css'
import React, { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Layout = () => {
    const [toggle, settoggle] = useState(true)

    //change toggle
    const handleToggle = () => {
        settoggle(!toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
                    <div className="sidebar-toggle-icons">

                        <p onClick={handleToggle}>
                            {
                                toggle ? (<AiOutlineDoubleLeft size={30} />) : (<AiOutlineDoubleRight size={30} />)
                            }
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
