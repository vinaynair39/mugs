import React ,{Component}from 'react';
import Layout from '../../containers/Layout/Layout';
import Profile from '../../containers/SideBar/profile.png'
import {Card} from 'antd'
import './commentOther.scss';


class CommentOther extends Component{

    constructor(){
        super()
        this.state = {
            comment : [
                {id:'1',comment:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Rakesh',photo:Profile},
                {id:'2',comment:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Sam',photo:Profile},
                {id:'3',comment:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Rita',photo:Profile},
                {id:'4',comment:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Harry',photo:Profile},
                {id:'5',comment:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Dabolkar',photo:Profile},
            ]
        }
    }

    //jo bhi data tu input dega from comment box
    //Comment.jsx se state pass kar iss compoenent me 
    //props se waha se iss function me 
    //listening or not? 
    /*
    addComment = (passedState) =>
    {
        let newComment = [...this.state.comment, passedState]
        this.setState({
            comment : newComment 
        })
    }

    */

    render(){
        return(
            <div>
                {this.state.comment.map(content => (
                    <Card className="CommentOther_main" key={content.id}> 
                    <div className="CommentOther_parent">
                        <div className="CommentOther_column1">
                            <img style={{height:50,width:50}} src={content.photo}/>
                            <p>12:34 am</p>
                        </div>
                        <div className="CommentOther_column2">
                           <div className="CommentOther_row1"><h2>{content.name}</h2></div>
                            <div className="CommentOther_row2"><p>{content.comment}</p></div>
                        </div>
                    </div>
                    </Card>
                ))}
            </div>
        )
    }
}

export default CommentOther;