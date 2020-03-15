import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { Upload, Button } from 'antd';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import './GrievanceForm.scss'
import Lightbox from 'react-image-lightbox';


let StudentForm = () => {

  const [values, setValues] = useState({ title: "", description: "" });
  const [images, onImages] = useState([]);
  const [newUrl, onImageUrlChange] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0)
  const [show, setShow] = useState(false)

  const formData = new FormData()

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  // const handleEditPicture = () => {
  //   const fileInput = document.getElementById('imageChange');
  //   fileInput.click();
  // }
  // const onImageChange = (e) => {
  //   const url = !!e.target.files[0] && URL.createObjectURL(e.target.files[0]);
  //   onImageUrlChange([...newUrl, url]);
  // }

  const upload = ({ file, fileList }) => {
    onImages([...images, file]);
  }

  const onSubmit = async () => {
    if(!!images){
      images.map(image => formData.append('image', image))
    } 
    formData.append('title', values.title)
    formData.append('description', values.description)
    const res = await axios.post('http://localhost:2000/api/grievance/add', formData);
  }

  const showImage = () => {
    return (
      <Lightbox
        mainSrc={newUrl[photoIndex]}
        nextSrc={newUrl[photoIndex + 1]}
        prevSrc={newUrl[photoIndex - 1]}
        onCloseRequest={() => setShow(false)}
        onMovePrevRequest={() =>
          setPhotoIndex(photoIndex - 1)
        }
        onMoveNextRequest={() =>
          setPhotoIndex(photoIndex + 1)
        }
      />
    )
  }

  return (
    <Form className="GrievanceForm" >
      {/* {show && showImage()} */}
      <Form.Item>
        <Input name='title' value={values.title} onChange={handleChange} />
      </Form.Item>
      <Form.Item  className="box_des">
        <Input.TextArea rows="12" name='description' value={values.description} onChange={handleChange} />
      </Form.Item>
      <Form.Item>
        <span>Necessary documents:</span> 
        <Upload beforeUpload={() => {
          return false
        }} onChange={(file, files) => upload(file)} >
          <Button>
            <UploadOutlined /> Click to Upload
    </Button>
        </Upload>
      </Form.Item>
      <div>
        {/* <Button className="btn" onClick={() => setShow(true)}>Show Uploaded Images</Button> */}
        <Button type="primary" className="btn" onClick={onSubmit}>Submit</Button>
      </div>
    </Form >
  );
}

export default StudentForm;