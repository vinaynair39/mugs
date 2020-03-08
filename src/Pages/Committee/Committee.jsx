import React ,{Component} from 'react';
import Layout from '../../containers/Layout/Layout';
import './committee.scss'
import Grievances from './Grievances';

class Committee extends Component{
        state = {
            data :[
                {id:1,name : "Sam", date : "8/3/2020", subject : 'Fees issue'},
                {id:2,name : "Manish", date : "8/3/2020", subject : 'Curriculum issue'},
                {id:3,name : "Rita", date : "8/3/2020", subject : 'Irregular water supply in college'},
                {id:4,name : "Bruce", date : "8/3/2020", subject: "Reduce the number of lecture"},
                {id:5,name : "Shyam", date : "8/3/2020", subject: "Reduce the number of lecture"}
            ]
    }


    render(){
        return(
            <Layout>
                    <div className="content">
                        <Grievances data={this.state.data}/>
                    </div>
            </Layout>
        )
}
}

export default Committee