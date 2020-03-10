import React,{useState} from 'react';
import {Input,Form} from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import '../components/SearchBar/'
import '../StudentGriv/form.scss'
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
    <Upload >
        <Button>
        <UploadOutlined /> Upload
        </Button>
    </Upload>
        <div>
        <Button type="primary" className="btn" onClick={handleSubmit}>Submit</Button></div>
      </Form>

    );
}

export default StudentForm;