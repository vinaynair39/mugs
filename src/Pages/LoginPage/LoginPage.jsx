import React from 'react';
import windowSize from 'react-window-size'
import LoginForm2 from '../../components/LoginForm/LoginForm2';

// import NavBar from '../../containers/NavBar/NavBar';
import './LoginPage.scss'

// class LoginPage extends React.component{
//     constructor(props){
//         super(props)
//             this.state= {
//                 isLogginActive:true,
//             }
//         }

//         render(){
//             const { isLoggingActive}= this.state;
//             return(
//                 <div className="App">
//                     <div className="login">
//                         <div className="container" ref={ref=(this.container=ref)}>
//                             {isLoggingActive && (
//                             <LoginForm2 containerRef={(ref)=>(this.current=ref)}/> )}
//                             {/*register*/}
//                         </div>
//                         <RightSide
//                             current={current}
//                                     containerRef={ref => (this.rightSide = ref)}
//                         />
//                     </div>
//                 </div>
//             );
//         }
// }
// const RightSide= props=>{
//     return( <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
//         <div className="inner-container">
// <div className="text">{props.current}</div>
//         </div>
//     </div>);
// };

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            {/* {props.windowWidth > 1200 && <img src={process.env.PUBLIC_URL + '/login.svg'} alt="" />} */}
            <LoginForm2/>
        </div>
    );
}

export default windowSize(LoginPage);