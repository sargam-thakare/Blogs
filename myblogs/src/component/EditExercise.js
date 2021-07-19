import React, { Component } from 'react';
import axios from "axios";
import { Route, BrowserRouter as Router, Link, Switch, history } from 'react-router-dom';

//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-datepicker/dist/react-datepicker';
class EditExercise extends Component {
    constructor(props) {
        super();
        this.state = {
            blogname: "",
            description: "",
            date: "",
           
        }
        this.onchangeblogname = this.onchangeblogname.bind(this);
        this.onchangedescription = this.onchangedescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
   
    }
    componentDidMount() {

        console.log("in edit hhhdhdhhd")
        axios.get('http://localhost:5000/blogs/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    blogname: res.data.blogname,
                    description: res.data.description,
                    date: res.data.date
                     
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const blog = {
            blogname: this.state.blogname,
           description: this.state.description,
            date: this.state.date
            
        }
        console.log(blog);
        axios.post('http://localhost:5000/blogs/update/' + this.props.match.params.id, blog)
            .then(res => console.log(res.data));
        // window.location = "/ExerciseList";
        this.props.history.push("/ExercisesList");
    }
    render() {
        return (
            <div className="container">
                <br></br>
                <br></br> <br></br>
                  
                <h3 style={{textAlign:"center",color:"#076e83"}}>Edit Blog </h3>

                 
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Blog Name: </label> <br></br>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.blogname}
                            onChange={this.onchangeblogname}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Blog Description </label>
                        <br/> 
                        {/* <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onchangedescription}
                        /> */}
                         <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="6"
    value={this.state.description} required
    onChange={this.onchangedescription}></textarea>
                    </div>
                    <div className="form-group" style={{width:'200px'}}>
                        <label>  Date: </label>
                        <br/>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                     <br/>
                    <div className="form-group">
                        <input type="submit" value="Edit Blog  " className="btn btn-info" style={{ color:"white" }}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default EditExercise;