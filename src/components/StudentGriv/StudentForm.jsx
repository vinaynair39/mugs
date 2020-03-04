import React from 'react';
import {Input,Form} from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import '../components/SearchBar/'
import '../StudentGriv/form.scss'
let StudentForm=()=>{
    return(
       <Form className="student">
        <Form.Item label="Title" className="box">
        <Input />
      </Form.Item>
        <Form.Item label="Description" className="box_des">
        <Input.TextArea />
        </Form.Item>
    <Upload >
        <Button>
        <UploadOutlined /> Upload
        </Button>
        </Upload>
        <div>
        <Button type="primary" className="btn">Submit</Button></div>
       </Form>

    );
}

export default StudentForm;