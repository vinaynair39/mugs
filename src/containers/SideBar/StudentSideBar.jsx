import React, { useState } from 'react';
import Link from 'react-router-dom/Link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './SideBar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout,  collapsed as setCollapsed} from '../../actions/auth';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {

    const isCollapsed = useSelector(state => state.auth.collapsed)
    const [collapsed, setThisCollapsed] = useState(isCollapsed);
    const dispatch = useDispatch();
    const onCollapse = collapsed => {
        console.log(collapsed)
        dispatch(setCollapsed(collapsed))
        setThisCollapsed(collapsed);
    };


    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ boxShadow: "2px 0 5px -2px #aaaaaa" }}>
                <div className="SideBar-logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></Link>
                </div>
                <Menu defaultSelectedKeys={['1']} theme="dark" mode="inline" style={{ marginTop: "1rem", border: "none" }}>
                    <Menu.Item style={{ marginTop: "0", paddingTop: "0" }} key="1">
                        <Icon type="database" />
                        <span>Apply Grievances</span>
                        <Link to="viewstudent" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="team" />
                        <span>Status</span>
                        <Link to="/status" />
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => dispatch(startLogout())}>
                        <Icon type="logout" />
                        <span>Logout</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
}

export { SideBar };