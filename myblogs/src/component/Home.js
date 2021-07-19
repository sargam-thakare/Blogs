import React, { Component } from 'react';
import '../css/home.css'
import firebase from "firebase"
import { Link, useHistory, Redirect } from 'react-router-dom';

export default class Header extends Component {
  render() {
     
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <Link to="/Home">      <li className="current"><a style={{ fontSize:"20px"}}  className="smoothscroll" href="#home">Home</a></li></Link>
               {/* <li><a className="smoothscroll"style={{ fontSize:"20px"}}  href="#about">About</a></li> */}
             {/* <li><a className="smoothscroll"style={{ fontSize:"20px"}}  href="#resume">Resume</a></li> */}
             
               <li><a className="smoothscroll" style={{ fontSize:"20px"}} href="#portfolio"><button   id="signout" className="smoothscroll" style={{ fontSize:"20px"}} onClick={() => firebase.auth().signOut()}>Signjjjjjjjj out!</button> </a></li>
                  
                  
                      </ul>
         </nav>

         <div className="row banner">
            <div className=" ">
               <h1 style={{color:"black",fontSize:"50px"}}  >Welcome to Blogs {firebase.auth().currentUser.displayName}  </h1>
               <Link to="/ExercisesList">      <button id="enter"> start blogging</button> </Link>
               <br/><br/><br/>
               <h3 style={{color:'black', fontFamily:'sans-serif '}}>  
               </h3>
               <hr/> 
               <ul className="social">
             
                 
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}