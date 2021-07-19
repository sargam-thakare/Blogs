import React, { Component } from "react"
 
import './App.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import CreateBlog from "./component/CreateBlog"
import { Route, BrowserRouter as Router, Link, Switch, history } from 'react-router-dom';
import NavBar from "./component/NavBar"
 import 'bootstrap/dist/css/bootstrap.min.css';

 import CreateExercise from './component/CreateExercise'; 
 import EditExercise from './component/EditExercise';
 import ExercisesList from './component/ExercisesList';
 import ExerciseStud from './component/ExerciseStud';
 import ViewBlog from './component/ViewBlog';

 import Home from './component/Home';


firebase.initializeApp({
  apiKey: "AIzaSyDQnTB8qKEc8oI-UPkbM5DfZcIPCFBxO-8",
  authDomain: "friendly-magnet-319316.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
   
        {this.state.isSignedIn ? (
           <Router>
           <div>
             {/* LOGGED WILL BE TRUE IF STUDENT LOGS IN || FACULTY WILL BE TRUE IF FACULTY LOGS IN */}
             <NavBar  ></NavBar>
              <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/ExercisesList" component={ExercisesList} />
               <Route path="/CreateExercise" component={CreateExercise} />
               <Route path="/edit/:id" component={EditExercise} />
               <Route path="/ViewBlog/:id" component={ViewBlog} />

               {/* <Route path="/home" component={Home} />
              
               <Route path="/photogallery" component={PhotoGallery} />
               <Route path="/contact" component={Contact} /> */}
                 
               
             </Switch>
   
   
           </div>
   
         </Router>
    // <span>


          //   <div>Signed In!</div>
          //   <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
           
          //   <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          //   <img
          //     alt="profile picture"
          //     src={firebase.auth().currentUser.photoURL}
          //   />
          // </span>
        ) :
         (
           <div className="d-flex">
         <p className="App2"> <h2  id="welcome">Welcome to Myblogs</h2></p>
            <div id="popup">
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}

          />
          </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
