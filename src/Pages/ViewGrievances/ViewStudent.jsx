import React, { useState } from 'react';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import windowSize from 'react-window-size';
import Layout from '../../containers/Layout/StudentLayout';
import StudentForm from '../../components/StudentGriv/StudentForm'
import '../../containers/Layout/Layout.scss';

const { Content } = Layout;

const ViewStudent = (props) => {
  return (
    <Layout>
      <StudentForm style={{height: "100vh"}}/>
      </Layout>
  );
}

export default windowSize(ViewStudent);