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
        default:
            data = '';
            break;
    }
    return (
        <div className="EmptyDashboard">
            <img src={process.env.PUBLIC_URL + '/empty.svg'} alt="" />
            <span>{data}</span>
            {subdata}

        </div>
    );
}

export default EmptyDashboard;