import React from 'react';
import { Carousel } from 'antd';
import './Carousel.scss'
import Classroom from './classroom.png'
import Download from './classroom.jpg'
import University from './university.jpg'
import Graduate from './graduate.jpg'

const CCarousel =()=>{
    return(
        <Carousel autoplay className="animated fadeIn">
            <div>
              <img src={Graduate}/>
            </div>
            <div>
              <img src={Download}/>
            </div>
            <div>
              <img src={University}/>
            </div>
      </Carousel>
    )
}

export default CCarousel;