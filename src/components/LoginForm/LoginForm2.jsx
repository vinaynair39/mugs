import React from 'react';
import { Typography,Input,Divider,Menu, Dropdown, Button, Icon, message} from 'antd';
 import './LoginForm2.scss'
 import loginImg from "../../logo.svg";
import { Link } from 'react-router-dom';
import Register from '../RegisterForm/RegisterForm2';
import AnchorLink from 'antd/lib/anchor/AnchorLink';
import RegisterForm2 from '../RegisterForm/RegisterForm2';
const { Text } = Typography;
export class LoginForm2 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        {/* <img src={loginImg} alt="IMG"/> */}
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="Username">Email</label>
                            <input type="text" name="email" placeholder="Enter your Email" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Username">Password</label>
                            <input type="password" name="password" placeholder="Password" required></input>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="footer">
                <button type="button" className="btn" >Login</button>
                <Link to="/register"  exact={true}>Register Here</Link>
            </div>
            </div>
            

            </div>
        );
    }
}

export default(LoginForm2);



