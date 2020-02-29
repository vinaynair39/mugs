import React, { useState } from 'react';
import Link from 'react-router-dom/Link';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './SideBar.scss'

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ background: "#fff", boxShadow: "2px 0 5px -2px #aaaaaa" }}>
                <div className="SideBar-logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></Link>
                </div>
                <Menu defaultSelectedKeys={['1']} mode="inline" style={{ marginTop: "1rem", border: "none", background: "#fff" }}>
                    <Menu.Item style={{ marginTop: "0", paddingTop: "0"}} key="1">
                        <Icon type="database" />
                        <span  key="1"><Link to="/" style={{color: "#5a6270"}}>View Grievances</Link></span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="desktop" />
                                <span>Activity</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2" style={{backgroundColor: "#fff"}}><Link to="/selected">Selected</Link></Menu.Item>
                        <Menu.Item key="3">Under Process</Menu.Item>
                        <Menu.Item key="4">Pending</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Commmitee</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">View</Menu.Item>
                        <Menu.Item key="6">Add/Remove</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7">
                        <Icon type="logout" />
                        <span>Logout</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
}

export default SideBar;