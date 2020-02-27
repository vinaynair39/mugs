import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import windowSize from 'react-window-size';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

import './Layout.scss';

const { Content } = Layout;

const DashboardLayout = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {props.windowWidth >= 800 ? <SideBar/> : <NavBar />
      }
      <Layout>
        <Content style={{backgroundColor: "#fff"}}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default windowSize(DashboardLayout);