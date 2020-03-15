import React, { useState } from 'react';
import Link from 'react-router-dom/Link';
import { startLogout, collapsed as setCollapsed } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Profile from './profile.png'
import { history } from '../../routers/AppRouter'

import './SideBar.scss'

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
    const userType = useSelector(state => state.auth.userType);
    const user = useSelector(state => state.auth.user);



    // const userType = "secretary";
    const userName = user.name;
    return (
        <>
            {userType === "committee" ? (<Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ boxShadow: "2px 0 5px -2px #aaaaaa" }}>
                <div className="SideBar-logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></Link>
                </div>

                <div className="SideBar-profile">
                    <img src={user.imageUrl} alt="" />
                    {!collapsed && <span>{userName}</span>}
                </div>

                <Menu defaultSelectedKeys={['1']} theme="dark" mode="inline" style={{ marginTop: "1rem", border: "none"  }}>
                    <Menu.Item key="3">
                        <Icon type="team" />
                        <span>Current</span>
                        {/* <Link to="/committee"/> */}
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="team" />
                        <span>Upcomming</span>
                        {/* <Link to="/committee"/> */}
                    </Menu.Item>

                    <Menu.Item key="5 ">
                        <Icon type="logout" />
                        <span onClick={() => dispatch(startLogout())}>Logout</span>
                    </Menu.Item>
                </Menu>{/*second condition goes here */}
            </Sider>) : (
                    <>
                        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ boxShadow: "2px 0 5px -2px #aaaaaa" }}>
                            <div className="SideBar-logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></Link>
                            </div>
                            <Menu defaultSelectedKeys={['1']} theme="dark" mode="inline" style={{ marginTop: "1rem", border: "none" }}>
                                <Menu.Item style={{ marginTop: "0", paddingTop: "0" }} key="1">
                                    <Icon type="database"/>
                                    <span>View Grievances</span>
                                    <Link to="/" />
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
                                    <Menu.Item key="2" ><Link to="/selected">Selected</Link></Menu.Item>
                                    <Menu.Item key="3" ><Link to="/processing">Under Process</Link></Menu.Item>
                                    <Menu.Item key="4" ><Link to="/pending">Pending</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5">
                                    <Icon type="team" />
                                    <span>Committee</span>
                                    <Link to="/committee" />
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Icon type="arrow-left" />
                                    <span onClick={() => history.goBack()}>Back</span>
                                </Menu.Item>
                                <Menu.Item key="8" onClick={() => dispatch(startLogout())}>
                                    <Icon type="logout" />
                                    <span>Logout</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    </>
                )
            }
        </>
    );
}
export default SideBar;