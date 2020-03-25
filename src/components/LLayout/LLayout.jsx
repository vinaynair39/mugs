import React from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarSmall from '../Navbar/NavbarSmall'
import windowSize from 'react-window-size';
import Footer from '../footer/Footer'

import "./LLayout.scss"


const LLayout = (props) =>{
    return(
        <div className="LLayout">
            {props.windowWidth <= 700 ? <NavbarSmall/> : <Navbar/> }
            {props.children}
            <Footer/>
        </div>
    )
}

export default windowSize(LLayout);