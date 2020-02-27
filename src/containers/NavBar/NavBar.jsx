import React, { useState } from 'react';
import { Drawer, Button, Layout, Menu, Breadcrumb, Icon } from 'antd';

import './NavBar.scss';

const { SubMenu } = Menu;
const { Header } = Layout;


const NavBar = (props) => {
  const [visible, setvisible] = useState(false)

  return (
    <>
      <Header style={{ background: "#fff", padding: " 0 1rem", display: "flex", alignItems: "center", height: "8vh" }}>
        <Button onClick={() => setvisible(true)} >
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
        <Menu defaultSelectedKeys={['1']}>
          <Menu.Item style={{ marginTop: "0", paddingTop: "0" }} key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default NavBar;