import React from 'react';
import './EmptyDashboard.scss'
import { useLocation, Link } from 'react-router-dom';

const EmptyDashboard = () => {
    const location = useLocation();
    let data = '';
    let subdata = ''
    switch (location.pathname) {
        case '/dashboard':
            data = 'Looks Like We Have No More Grievances!'
            break;
        case '/selected':
            data = 'Looks Like We Have No More Selected Grievances.'
            subdata = <p>Go To <Link to="/dashboard">Dashboard</Link> To Select More!</p>
            break;
        case '/processing':
            data = 'Looks Like We Have No More Processing Grievances.'
            subdata = <p>Go To <Link to="/dashboard">Dashboard</Link> To Select More!</p>
            break;
        case '/pending':
            data = 'Looks Like We Have No More Pending Grievances.'
            subdata = <p>Go To <Link to="/dashboard">Dashboard</Link> To Select More!</p>
            break;
        case '/status':
            data = 'Looks like ou have not posted any grievance yet!.'
            subdata = <p>Click <Link to="/student">here</Link> To add one!</p>
            break;
        default:
            data = '';
            break;
    }
    return (
        <div className="EmptyDashboard animated fadeIn">
            <img src={process.env.PUBLIC_URL + '/empty.svg'} alt="" />
            <span>{data}</span>
            {subdata}

        </div>
    );
}

export default EmptyDashboard;