import React, { useState } from 'react';
import { Input, Form, Modal } from 'antd';
import { Upload, Button } from 'antd';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import './GrievanceForm.scss'
import Lightbox from 'react-image-lightbox';
import Done from '../Empty/Done';
import { useDispatch, useSelector } from 'react-redux';
import { setErrors } from '../../actions/secretary';
import { unsetErrors } from '../../actions/auth';
import { history } from '../../routers/AppRouter';


let StudentForm = (props) => {

  const [images, onImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0)
  const [res, setRes] = useState(null)

  const { getFieldDecorator } = props.form;


  const formData = new FormData()
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error);


  const upload = ({ file, fileList }) => {
    onImages([...images, file]);
    console.log(images)
  }

  const onRemove = (file) => {
    console.log(file)
    onImages(images.filter(image => image.uid !== file.uid))
  }

  const onSubmit = async () => {
    props.form.validateFieldsAndScroll( async (err, values) => {
      if (!err) {
        if (!!images) {
          images.map(image => formData.append('image', image))
        }
        formData.append('title', values.title)
        formData.append('description', values.description)
        try {
          setRes(await axios.post('http://localhost:2000/api/grievance/add', formData))
        } catch (error) {
          dispatch(setErrors(
            error.response ?
              (error.response.data.message === "request entity too large" ? 'The file size is too big! Try compressing the images and then submit' : '')
              : ""
          ))
        }
      }
  });
  }


  function errorModal(message) {
    Modal.error({
      title: message
    });
    dispatch(unsetErrors());
  }

  function successModal(message) {
    Modal.success({
      title: message
    });
    dispatch(unsetErrors());
  }

  return (
    <Form className="GrievanceForm" >
      {res && console.log('hey',res.data.success)}
      {!!res && res.data.success && history.push('/success')}
      {!!error && errorModal(error)}
      <Form.Item>
        {getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please Enter The Title!' }],
        })(<Input name='title' placeholder="Enter a short title for your grievance ( e.g. I got more percent still didn't get the admission )" />)}
      </Form.Item>
      <Form.Item className="box_des">
        {getFieldDecorator('description', {
                          rules: [{ required: true, message: 'Please Enter The Description!' }],
          })(<Input.TextArea rows="8" placeholder="Enter a brief description of your grievance" name='description' />)}
      </Form.Item>
      <Form.Item className="GrievanceForm__flex">
        <div>
          <span>Necessary documents:</span>
        </div>
        <Upload onRemove={onRemove} beforeUpload={() => {
          return false
        }} onChange={(file, files) => upload(file)} >
          <Button>
            <UploadOutlined /> Click to Upload
        </Button>
        </Upload>
      </Form.Item>
      <div>
        <Button type="primary" className="btn" onClick={onSubmit}>Submit</Button>
      </div>
    </Form >
  );
}

export default Form.create({ name: 'studentForm' })(StudentForm);
