import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import windowSize from 'react-window-size';
import './Layout.scss';
import NavBar from './NavBar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DashboardLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed( collapsed );
  };
  return (
    <Layout style={{ minHeight: '100vh'}}>
        {props.windowWidth >= 800 ? <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{background: "#fff"}}>
          <div className="Layout-logo">
            <img src={process.env.PUBLIC_URL + '/logo.svg'} alt=""/>
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item  style={{marginTop: "0", paddingTop: "0"}} key="1">
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
        </Sider> : <NavBar/>
      }
        <Layout>
          <Content>
            {props.children}
          </Content>
        </Layout>
      </Layout>
  );
}

export default windowSize(DashboardLayout);