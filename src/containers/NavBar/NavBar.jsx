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
        <Button  style={{position: "absolute"}} onClick={() => setvisible(true)} >
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
        <Menu defaultSelectedKeys={['1']} mode="inline" style={{ marginTop: "1rem", border: "none" }}>
                    <Menu.Item style={{ marginTop: "0", paddingTop: "0" }} key="1">
                        <Icon type="database" />
                        <span>View Grievances</span>
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
                        <Menu.Item key="2">Selected</Menu.Item>
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
      </Drawer>
    </>
  );
}

export default NavBar;