import React, { Component } from 'react';
import axios from "axios";
import firebase from "firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'

import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
class CreateExercise extends Component {
    constructor(props) {
        super();
        this.state = {
            blogname: "",
            description: "",
            date: ""
        }


        this.onchangeblogname = this.onchangeblogname.bind(this);
        this.onchangedescription = this.onchangedescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
    }

    onchangeblogname(e) {
        this.setState({  blogname: e.target.value })
    }
    onchangedescription(e) {
        this.setState({  description: e.target.value })
    }
    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }
     
    onSubmit(e) {
        e.preventDefault();

       var email1= firebase.auth().currentUser.email
       console.log(email1+"          emailllllllllllllllllllll");


        const blog = {
            email: firebase.auth().currentUser.email,
            blogname: this.state.blogname,
            description: this.state.description,
            date: this.state.date,

           
        }
        console.log(blog);
        axios.post('http://localhost:5000/blogs/add', blog)
            .then(res => console.log(res.data));
            this.props.history.push('/ExercisesList');
    }
    render() {
        return (
            <div id="content">

            <div id="content3">
                <div className="card">
                   
            <div className="container">
                <h3 style={{textAlign:"center",color:"#076e83"}}> Create New blog</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Blog Name </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.blogname}
                            onChange={this.onchangeblogname}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <div class="form-group">
  
  <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="6"
    value={this.state.description} required
    onChange={this.onchangedescription}></textarea>
</div>

                        {/* <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onchangedescription}
                        /> */}
                    </div>

                    <div className="form-group" style={{width:'200px'}}>
                        <label>Date </label>
                        <input
                            type="date" required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Save" style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="btn btn-info" style={{  color:"white" }} />
                    </div>
                </form>
            </div>
            </div></div></div>

        );
    }
}
export default CreateExercise;