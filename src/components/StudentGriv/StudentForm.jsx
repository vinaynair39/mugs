import React from 'react';
import {Input,Form} from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import '../components/SearchBar/'
import '../StudentGriv/form.scss'
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'pdf',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};


let StudentForm=()=>{
    return(
      <div className="container">
       <Form className="student" onSubmit={this.handleSubmit}>
        <Form.Item label="Title" className="box">
        <Input />
      </Form.Item>
        <Form.Item label="Description" className="box_des">
        <Input.TextArea className="desc"/>
        </Form.Item>
      <Form.Item label="Upload Required Documents:">
    <Upload {...props} >
      <Button className="upbtn">
        <UploadOutlined /> Upload
      </Button>
    </Upload>
    </Form.Item>
        <Button type="primary" className="btn">Submit</Button>
       </Form>
       </div>
       

    );
}

export default StudentForm;