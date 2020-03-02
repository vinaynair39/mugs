import React,{useState} from 'react';
import { Typography,Input,Divider,Menu, Dropdown, Button, Icon, message} from 'antd';
 import './LoginForm2.scss'
 import loginImg from "../../logo.svg";
import { Link } from 'react-router-dom';
import Register from '../RegisterForm/RegisterForm2';
import AnchorLink from 'antd/lib/anchor/AnchorLink';
import RegisterForm2 from '../RegisterForm/RegisterForm2';
const { Text } = Typography;

let LoginForm2=(props)=>{
    const[mail,setMail]=useState("");

        return(
            <div className="container">
            <div className="base-container" ref={props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        {/* <img src={loginImg} alt="IMG"/> */}
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="Username">Email</label>
                            <input type="text"  placeholder="Enter your Email" value={mail} onChange={(e)=>setMail(e.target.value)} />
                        <div>{mail.includes('@')?"":"Invalid Email"}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Username">Password</label>
                            <input type="password" name="password" placeholder="Password" required></input>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="footer">
                <button type="button" className="btn" >Login</button>
                <Link to="/register"  exact={true} className="submit_button">Register Here</Link>
            </div>
            </div>
            

            </div>
        );
    }


export default(LoginForm2);



