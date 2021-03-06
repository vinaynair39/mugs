import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss'
const Navbar = () =>{
    return(
        <div className="navbar_style">
            <ul>
            <li><img className="navbar_logo animated fadeIn" src={process.env.PUBLIC_URL + '/logo.svg'}/></li>
            <li className="navbar_heading animated fadeIn"><h2>Student Grievance Portal</h2></li>
                <div className="navbar_parent animated fadeIn">
                    <li ><Link to="startpage">Home</Link></li>
                    <li ><Link to="About">About</Link></li>
                    <li ><Link to="Contact">Contact</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;

// style={{float:'right'}}