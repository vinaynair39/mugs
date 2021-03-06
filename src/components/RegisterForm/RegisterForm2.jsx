import React, { useState } from 'react';
import { Typography, Input, Divider, Menu, Dropdown, Button, Icon, message } from 'antd';
import './RegisterForm.scss';
import { useDispatch } from 'react-redux';
import { startSignUp } from '../../actions/auth';
const { Text } = Typography;

/*
-student details
    -name
    -gender
    -password
    confirm password
-college details
    -college name
    -roll number
-contact details
    -email
    -phone number
*/


let RegisterForm2=(props)=>{
    const [name,setName]=useState("");
    const [gender,setGender]=useState("none");
    const [password,setPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [email,setEmail]=useState(" ");
    const [number,setNumber]=useState("");
    const [collegeName,setCollegeName]=useState("Select the college");
    const [rollno,setRollno]=useState("");
    const [isValid,setIsValid]=useState(true)
    
    const menu = (
        <Menu onClick={handleMenuCollege}>
        <Menu.Item key="rait">
            <Icon type="user" />
            rait
        </Menu.Item>
            <Menu.Item key="SIES">
                <Icon type="user" />
                SIES
        </Menu.Item>
            <Menu.Item key="Pillais">
                <Icon type="user" />
                Pillais
        </Menu.Item>
        </Menu>
    );
    const menu1 = (
        <Menu onClick={handleMenuGender}>
        <Menu.Item key="male">
            <Icon type="user" />
            mail
        </Menu.Item>
        <Menu.Item key="female">
            <Icon type="user" />
            female
        </Menu.Item>
        </Menu>
    );
    function handleMenuCollege(e) {
        const {key}=e;
        message.info(`${key} is selected`);
        setCollegeName(key);
        // console.log('click', e);
    }
    function handleMenuGender(e) {
        const {key}=e;
        message.info(`${key} is selected`);
        setGender(key);
       // console.log('click', e);
    }
    function checkValidity(){
        // let data={name,gender,password,email,mobile:number,college:collegeName,rollNo:rollno}
        // useDispatch(startSignUp(data));
        if(password===confirmPassword&&email.includes('@')&&number.length>10){
           //dispatch if true
            setIsValid(false)
        }else{
            //don't submit
        }
        
    }
    // function handleSubmit(e)
    // {   e.preventDefault();
    //       let studentData={
    //     email,gender,name,password,rollno,collegeName,number
    //     }
    //     setFormData(JSON.stringify(studentData));
    //     console.log(formData)
    // }
    function handlePassword(e){
        
        setconfirmPassword(e.target.value)
        checkValidity();
    }

    function handlemail(e){
        
        setEmail(e.target.value)
        checkValidity();
    }

    function handlePhone(e){
        
        setNumber(e.target.value)
        checkValidity();
    }


return(
    <div className="register">
        <div className="register_heading flex-bottom"><Text >Student Registration</Text></div><Divider/>
        <div className="register_student "><div><Text className="side-heading">Student details</Text> </div>
        <div className="register_student-1">
            <div className="spacing">
            <Text>Full Name</Text>
            <Input placeholder="Full Name" onChange={(e)=>setName(e.target.value)} value={name} />
            </div> 
            <div className="spacing">
            <Text>Gender</Text>
            <br/>
            {/* <Input placeholder="gender" onChange={(e)=>setGender(e.target.value)} value={gender} /> */}
            <Dropdown overlay={menu1}  trigger={['click']} onChange={(e)=>setGender(e.target.value)} value={gender}>
            <Button>
            {gender}<Icon type="down" />
            </Button>
            </Dropdown>
            </div>
            
            <div className="spacing">
            <Text>Password</Text>
            <Input.Password placeholder="input password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
            
            <div className="spacing">
            <Text>Confirm Password</Text>
            <Input.Password placeholder="Confirm password" onChange={handlePassword} value={confirmPassword} />
            <div>{password===confirmPassword?"":"*Password Doesn't Match"}</div>
            </div>
            
        </div>
        </div><Divider/>
        <div className="register_contact"><div><Text className="side-heading" >Contact Details</Text></div>
        <div className="register_student-1">
        <div className="spacing">
            <Text>Email Address</Text>
            <Input placeholder="Email address"  onChange={handlemail} value={email}/>
            <div>{email.includes('@')?"":"*Invalid Email"}</div>
            </div> 
            <div className="spacing">
            <Text>Phone Number</Text>
            <Input placeholder="Phone Number"  onChange={handlePhone} value={number}  />
            <div>{number.length>=10?"":"*invalid phone number"}</div>
            </div>
        </div>
    </div><Divider/>
        <div className="register_college"><div><Text className="side-heading">College Details</Text></div>
        <div className="register_student-1">
        <div className="spacing">
        <Text>Name of the College</Text><br/>
        <Dropdown overlay={menu}  trigger={['click']} onChange={(e)=>setCollegeName(e.target.value.key)} value={collegeName}>
        <Button>
        {collegeName}<Icon type="down" />
        </Button>
        </Dropdown>
        </div>
        <div className="spacing">
        <Text>Roll Number</Text>
        <Input placeholder="Roll Number"  onChange={(e)=>setRollno(e.target.value)} value={rollno} />
        </div>
        </div> 
        </div><Divider/>
        <div className="actions">
        <Button size={"large"}>Cancel</Button>
        <Button type="Primary" size={"large"} onClick={checkValidity} disabled={isValid}>Submit</Button>
        </div>
    </div>
);
}

export default RegisterForm2