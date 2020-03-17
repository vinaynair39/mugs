import React from 'react';
import {Link} from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import './navbarsmall.scss'
const NavbarSmall = () =>{
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="startpage">Home</Link>
                    </Menu.Item>    
                    <Menu.Item key="1">
                        <Link to="About">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="Contact">Contact</Link>
            </Menu.Item>
        </Menu>
      );
    return(
        <div className="navbarsmall_parent">
            <ul>
            <li><img  className="navbar_logo animated fadeIn" src={process.env.PUBLIC_URL + '/logo.svg'}/></li>
            <li className="navbar_heading animated fadeIn"><h2>Student Grievance Portal</h2></li>
                <div className="navbarsmall_dropdown">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                    </Dropdown>
                </div>
            </ul>
        </div>
    )
}

export default NavbarSmall;
