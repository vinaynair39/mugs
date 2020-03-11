import React,{Component} from 'react';
import Layout from '../../containers/Layout/Layout';
import moment from 'moment';
import App from './Comment';
import './innerinfo.scss';
import CommentOther from './CommentOther';
import { Collapse } from 'antd';
class Innerinfo extends Component{

    state = {
        comments : [
            {id:'1',commenthere:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Rakesh',photo:'no photo'},
            {id:'2',commenthere:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Sam',photo:'no photo'},
            {id:'3',commenthere:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Rita',photo:'no photo'},
            {id:'4',commenthere:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Harry',photo:'no photo'},
            {id:'5',commenthere:'Approved by me. All document are confirmed and the student can be continued for the further process.',name : 'Dabolkar',photo:'no photo'},
        ],
        head : `Comments Section`,
        head1: `Show Comments`,
        keyval: 1,
        toggle:false
    }
    callBack = (e) =>{
        if(this.state.toggle==true){
            // alert('henlo ji');
            /*this.setState({keyval:1});
            this.setState({head : `Comments`});*/
            this.setState({toggle:false});
        }
        else{
            // alert('hello ji');
            /*this.setState({keyval:2});
            this.setState({head:`Show Comments`});*/
            this.setState({toggle:true});
        }
      }
 
    add = (comment) =>{
        comment.id = Math.random()
        comment.photo = 'NO PHOTO' 
        console.log(comment)
        const newData  = [...this.state.comments, comment]
        this.setState({
            comments : newData
        })
    }
    render(){
    const { Panel } = Collapse;
    // const text = `Hehehehehehehehehehehehehehehehe`;
    
    // var headnew = `Comments`;
    
        // const {name,subject,desc,subm,college} = this.state.data;
        return(
            <Layout>
                <div className="Innerinfo_sep">
                <div className="Innerinfo_row1">
                <div className="Innerinfo_infomain">
                <div className="Innerinfo_showName">
                    <h3><b>Name:</b></h3><span>Vivek</span>
                </div><br/>
                <div className="Innerinfo_showCollege">
                    <h3><b>College:</b></h3><span>Ramrao Adik Institute of Technology</span> 
                </div><br/>
                <div className="Innerinfo_showSubj">
                <h3><b>Subject:</b></h3><span>Computer Networks</span>
                </div><br/>
                <div className="Innerinfo_showDesc">
                <h3><b>Description:</b></h3><span>Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                </div><br/>
                {/* <div className="showDate">
                    {subm}
                </div> */}
                </div>
                <br/><br/>
                <App add={this.add}/>
                </div>
                <div className="Innerinfo_row2">
                <Collapse onChange={this.callBack}>
                    <Panel header={this.state.toggle?this.state.head:this.state.head1} key={this.state.keyval} className="Innerinfo_panel">
                        <CommentOther comment = {this.state.comments}/>
                    </Panel>
                </Collapse>    
                </div>
                </div>
            </Layout>
        ); 
    }
}
export default Innerinfo;
