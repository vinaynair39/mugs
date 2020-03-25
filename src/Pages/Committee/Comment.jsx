import React from 'react';
import './Comment.scss';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { Modal } from 'antd';
import Profile from './profile.png'
const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      {/*<Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" className="Comment_button">
          <p style={{textAlign:'center',fontSize:'18px'}}>Add Comment</p>
        </Button>
      </Form.Item>*/}
    </div>
  );

  class AddComment extends React.Component {
    state = {
      comments: {},
      submitting: false,
      value: '',
      visible: false,
      confirmLoading: false,
    };
  
    handleSubmit = () => {
      if (!this.state.value) {
        return;
      }
       
      this.setState({
        submitting: true,
        confirmLoading: true,
      });
  
      setTimeout(() => {
        this.setState({
          submitting: false,
          value: '',
          visible: false,
          confirmLoading: false,
          comments: 
            {
              author: 'Vivek',
              avatar: <Avatar src={Profile} alt="Han Solo"/>,
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            }
        });
      }, 3000);
      console.log(this.state.comments);
      this.props.add(this.state.comments);
    };
  
    handleChange = e => {
      this.setState({
        value: e.target.value,
      });
    };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    //  handleOk = () => {
      
    //   });
    //   setTimeout(() => {
    //     this.setState({
    //       visible: false,
    //       confirmLoading: false,
    //     });
    //   }, 2000);
    // };
  
    handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
    };
    render() {
      const { comments, submitting, value } = this.state;
      const { visible, confirmLoading } = this.state;
      return (
        <div className="Comment_main">
          <Button type="primary" onClick={this.showModal} className="Comment_mainbutton" style={{backgroundColor:"#17252A",color:"#fff"}}>
            <span style={{marginLeft:"2%"}}>Add Suggestions</span>
          </Button>
          <Modal
            title="Add your suggestion regarding this topic"
            visible={visible}
            // centered={true} 
            // maskClosable={false}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            // mask={false}
            footer={[
                <Button onClick={this.handleSubmit} className="Comment_innerbutton" htmlType="submit" loading={submitting} style={{backgroundColor:"#17252A",color:"#fff"}}>
                  Add Comment
                </Button>,
              ]}
            className="Comment_modal"
          >
            <div className="Comment_commentBox">
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment 
                avatar={
                  <Avatar
                    src={Profile}
                    alt="User"
                  />
                }
              content={
                <Editor
                  onChange={this.handleChange}
                  // onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
              />
            </div>
          </Modal>
        </div>
      );
    }
  }
  export default AddComment  