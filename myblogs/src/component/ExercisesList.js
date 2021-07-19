import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import firebase from "firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'



const Blog = props => (
    <div className="col-lg-4 col-md-4 col-10 w-30 h-500">
    <div className="card">
        <h5 className="card-header">{props.blog.blogname}</h5>
        <div className="card-body">
            <h5 className="card-title">{props.blog.date}</h5>
            <p className="card-text">

            {props.blog.description.length> 150? props.blog.description.substring(0,150):
            props.blog.description}
               {props.blog.description.length> 150?

               <a style={{cursor:"pointer",color:"blue", textDecoration:"none"}}>
                   <Link to={"/ViewBlog/" + props.blog._id}  > read more</Link></a>
               
               :""}
                
                </p>

         </div> 
         <div id="buttons">
         <button id="edit" className="btn btn-outline-info btn-sm"><Link to={"/edit/" + props.blog._id} style={{ color: "white",width:"20px" }}>Edit</Link></button>  <button id="delete" className="btn btn-sm btn-danger" onClick={() => { props.deleteExercise(props.blog._id) }}>Delete</button>
         </div>
        </div>

            

             
            
        
    </div>
)
class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            email: firebase.auth().currentUser.email
        }
        this.deleteExercise = this.deleteExercise.bind(this);
        this.sentext=this.sentext.bind(this);
    }

    
  sentext (){
    if(this.props.blog.description.length>10)
    return this.props.blog.description.substring(0,10);
    else
    return this.props.blog.description
}
    componentDidMount() {

        const email1 = firebase.auth().currentUser.email;
        const res = axios.get('http://localhost:5000/blogs/', { params: { email: email1 } })

            //  axios.get('http://localhost:5000/blogs/',this.state.email)


            .then(res => {

                console.log("exerlist " + res.data)
                this.setState({ blogs: res.data })
            })
            .catch(error => console.log(error));
    }
    deleteExercise(id) {
        axios.delete('http://localhost:5000/blogs/' + id)
            .then(res => console.log(res.data));

        this.setState({ blogs: this.state.blogs.filter(el => el._id !== id) })
    }
    exercisesList() {
        return this.state.blogs.map(currentexercise => {
            return <Blog blog={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }
    render() {
        return (

            <div id="content">
                <input type="hidden" value={this.state.email} name="email"></input>
                <div id="content3">

                    <div className=" ">
                        <div className="container">
                           
                            <Link to="/CreateExercise">    <button className="btn btn-info" style={{ float: 'right',color:"white" }}>Add blog </button></Link>

                            <h3 style={{textAlign:"center",color:"#076e83"}}> MyBlogs</h3>
                            

                            <table className="table">
                                
                                {/* <thead className="thead-light">
                                    <tr>
                                        <th>Blogname</th>
                                        <th>descripion </th>
                                        <th>Date</th>

                                        <th>Action</th>
                                    </tr>
                                </thead> */}

                                <tbody>
                                    <div className="container ">
                                        <div className="row  ">
                                          
                                                {this.exercisesList()}
                                            </div>
                                         
                                    </div>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ExercisesList;

