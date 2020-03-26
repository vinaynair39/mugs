import React, { useState } from 'react';
import windowSize from 'react-window-size';
import Layout from '../../containers/Layout/StudentLayout';
import StudentForm from '../../components/StudentGriv/StudentForm'
import './ViewStudent.scss'

const ViewStudent = (props) => {
  return (
    <Layout>
      <div className="ViewStudent animated fadeIn">
        <StudentForm />
      </div>
    </Layout>
  );
}

export default windowSize(ViewStudent);