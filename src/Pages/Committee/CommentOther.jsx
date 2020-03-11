import React ,{Component}from 'react';
import Layout from '../../containers/Layout/Layout';
import Profile from '../../containers/SideBar/profile.png'
import {Card} from 'antd'
import './commentOther.scss';


class CommentOther extends Component{

    constructor(){
        super()
        this.state = {
            othercomments:[]
        }
    }
    // addComment = (props) =>
    // {
    //     const {photo,name,commenthere} = this.props.comment;
    //     const {add} = this.props;
    //     // let newComment = [...this.state.comment, passedState]
    //     this.setState({
    //         othercomments : [
    //             {
    //                 commenthere : commenthere,
    //                 name : name,
    //                 photo : photo,
    //             },
    //             ...this.state.comments,
    //         ]
    //     });
    // }
    
    render(){
         return(
            <div onLoad={this.addComment}>
                {this.props.comment.map(content => (
                    <Card className="CommentOther_main" key={content.id}> 
                    <div className="CommentOther_parent">
                        <div className="CommentOther_column1">
                            <img style={{height:50,width:50}} src={content.photo}/>
                            <p>12:34 am</p>
                        </div>
                        <div className="CommentOther_column2">
                           <div className="CommentOther_row1"><h2>{content.name}</h2></div>
                            <div className="CommentOther_row2"><p>{content.commenthere}</p></div>
                        </div>
                    </div>
                    </Card>
                ))}
            </div>
        )
    }
}

export default CommentOther;