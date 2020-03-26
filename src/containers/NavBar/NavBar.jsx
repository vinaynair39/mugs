import React, { useState, useEffect } from 'react';
import { Drawer, Button, Layout, Menu, Breadcrumb, Icon } from 'antd';

import './NavBar.scss';
import { useLocation, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout, collapsed as setCollapsed } from '../../actions/auth';

const { SubMenu } = Menu;
const { Header } = Layout;


const NavBar = (props) => {
  const [visible, setvisible] = useState(false);
  const isCollapsed = useSelector(state => state.auth.collapsed)
  const [collapsed, setThisCollapsed] = useState(isCollapsed);
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const {pathname} = useLocation()
  const onCollapse = collapsed => {
      console.log(collapsed)
      dispatch(setCollapsed(collapsed))
      setThisCollapsed(collapsed);
  };
  const userType = useSelector(state => state.auth.userType);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
      console.log(pathname)
      if (pathname === "/selected"){
          setOpen(true)
      }
  }, [])

  return (
    <>
      <Header style={{ background: "#fff", padding: " 0 1rem", display: "flex", alignItems: "center", height: "8vh" }}>
        <Button style={{ position: "absolute" }} onClick={() => setvisible(true)} >
          <Icon type={'menu'} />
        </Button>
        <div className="NavBar-logo">

          <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" />
        </div>
      </Header>
      <Drawer
        placement="left"
        closable={true}
        onClose={() => setvisible(false)}
        visible={visible}

      >
        <div className="Layout-logo">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" />
        </div>
        <Menu selectedKeys={[pathname]} defaultOpenKeys={open && ['sub1']} mode="inline" style={{ marginTop: "1rem", border: "none" }}>
          <Menu.Item style={{ marginTop: "0", paddingTop: "0" }} key="1">
            <Icon type="database" />
            <span key="1"><NavLink style={{ color: "#5a6270" }} to="/dashboard">View Grievances</NavLink></span>
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
            <Menu.Item key="2"><NavLink to="/selected">Selected</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/processing">Under Process</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/pending">Pending</NavLink></Menu.Item>
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
            <span onClick={() => dispatch(startLogout())}>Logout</span>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default NavBar;