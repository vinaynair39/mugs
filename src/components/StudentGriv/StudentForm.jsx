import React,{useState} from 'react';
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
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("")
  let handleSubmit=(e)=>{
    console.log(title,desc);
  }

  let handleTitle=(e)=>{
    setTitle(e.target.value);
  }

  let handleDesc=(e)=>{
    setDesc(e.target.value);
  }
    return(
      <Form className="student" >
        <Form.Item label="Title" className="box">
        <Input onChange={handleTitle} />
      </Form.Item>
        <Form.Item label="Description" className="box_des">
        <Input.TextArea onChange={handleDesc} />
        </Form.Item>
      <Form.Item label="Upload Required Documents:">
    <Upload {...props} >
      <Button className="upbtn">
        <UploadOutlined /> Upload
      </Button>
    </Upload>
        <div>
        <Button type="primary" className="btn" onClick={handleSubmit}>Submit</Button></div>
      </Form>


    );
}

export default StudentForm;