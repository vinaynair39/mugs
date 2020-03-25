import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Result, Button } from 'antd';


const NotFound = () => {
    let path = "";
    const userType = useSelector(state => state.auth.userType)
      if(userType === "secretary")
        path = '/dashboard'
      else if(userType === "student")  
        path = '/student/dashboard'
      else
        path = '/committee/dashboard'
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><Link to={path}>Back Home</Link></Button>}
        />
     );
}

export default NotFound;