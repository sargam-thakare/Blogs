 
import $, { timers } from 'jquery';
import { Link, useHistory, Redirect } from 'react-router-dom';
import firebase from "firebase"
import '../css/home.css'
import blogger from './blogger.png'
 
// import Footer from './Footer';
// import 'font-awesome/css/font-awesome.min.css';
// import { useSelector, useDispatch } from 'react-redux';
// import logout from '../action/logout'
// import logout_faculty from '../action/faculty_logout';
// import user_name from '../action/user_name';
// import Swal from 'sweetalert2';

function NavBar(props) {

let name=firebase.auth().currentUser.displayName;

let firstname=name.split(" //s");
    return (
        <div>
            <div className="wrapper  ">
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark       fixed-top">
                    <div className="container-fluid">
                    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                   <div id="logo">
                    <img src={blogger} width="40" alt="logo"  ></img>
                    </div> 

                    <div className="     ">
                            <ul className="nav navbar-nav   ">
                            <li className="nav-item active" style={{float:'left',display:"left",justifyContent:"left",left:0}}>
                                 </li>
                                <li className="nav-item active">
                                    <Link to="/"> <a className="nav-link" href="#">Home</a></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/ExercisesList">    <a style={{textDecoration:'none'}} className="nav-link" >All Blogs</a></Link>
                                </li>
                             

                                <li className="nav-item  ">
                                    <Link to={"/profile/" + props.id}>   <a className="nav-link" href="#">Hi, {firstname}</a></Link>
                                </li>

                                <li className="nav-item" style={{alignItems:"center",display:"flex-end",justifyContent:"flex-end"}}>
                                     {/* <button  id="signout" className="nav-link"onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
                                </li>

                                
                                <button style={{height:'40px',marginLeft:'400px',alignItems:'center'}} id="signout" className=" nav-item"onClick={() => firebase.auth().signOut()}>Sign out!</button>

                            </ul>


                            </div>
                        </div>
                    </div>
                </nav>

            </div>

            


           
        </div>
    );
}
export default NavBar;
