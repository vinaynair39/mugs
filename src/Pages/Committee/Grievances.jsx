import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import { Card} from 'antd';
import './committee.scss'

export default class Grievances extends Component{

    info = (name) =>{
        window.alert("Proceed for "+name)
    }

    render(){
        const {data} = this.props
        const grievance = data.map(content => {
            return(
                <div className="content" key={content.id}>
                       <Link to={'Innerinfo/'+content.id}> 
                       <Card  className="card"style={{ width: 350, marginTop: 16 }} onClick={() => this.info(content.name)}>
                            <h3>Name : {content.name} </h3><br/>
                            <h3>Date : {content.date} </h3><br/>
                            <h3>Subject : {content.subject}</h3><br/>
                            {/* yaha pe normally dikhna chaihiye but yaha kya ho raha hai no idea . this is for your pc but dusre ke pc mai jyaada variations nahi aana chahiye*/}
                        </Card>
                        </Link>
                </div>
            )
        })

        return( 
            <div className="parent">{grievance}</div>
        )
    }

}