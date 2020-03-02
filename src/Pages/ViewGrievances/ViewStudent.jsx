import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import windowSize from 'react-window-size';
import{ NavBar} from '../../containers/NavBar/StudentNav';
import {SideBar} from '../../containers/SideBar/StudentSideBar';

import '../../containers/Layout/Layout.scss';

const { Content } = Layout;

const ViewStudent = (props) => {
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

export default windowSize(ViewStudent);