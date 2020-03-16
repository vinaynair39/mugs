import React,{Component} from 'react'
import LLayout from '../LLayout/LLayout'
import './about.scss'
class About extends Component{
    render(){
        return(
            <LLayout>
                <div className="about_style">
                    <h3>About Us</h3>
                    <p>The University of Mumbai (known earlier as University of Bombay) is one of the oldest and premier Universities in India.
                    It was established in 1857 consequent upon “Wood’s Education Dispatch”, and it is one amongst the first three Universities 
                    in India. As a sequel to the change in the name of the city from Bombay to Mumbai, the name of the University has been changed 
                    from “University of Bombay” to “University of Mumbai”, vide notification issued by the Government of Maharashtra and published 
                    in the Government Gazette dated 4th September, 1996.The University was accorded 5 star status in 2001 & ‘A’ grade status in April 
                    2012 by the National Assessment and Accreditation Council (NAAC).</p>
                </div>
            </LLayout>
        )
    }
}

export default About
 