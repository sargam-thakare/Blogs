import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Exercise = props => (
    <tr>
        <td>{props.exercise.Subject}</td>
        <td>{props.exercise.Assignment_no}</td>
        <td>{props.exercise.Start_Date}</td>
        <td>{props.exercise.Submission_Date}</td>
        <td>
             <button className="btn btn-success" >Submit</button>
        </td>
    </tr>
)
class ExerciseStud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }
        this.deleteExercise = this.deleteExercise.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:5000/blogs/')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch(error => console.log(error));
    }
    deleteExercise(id) {
        axios.delete('http://localhost:8000/blogs/' + id)
            .then(res => console.log(res.data));
        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id) })
    }
    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }
    render() {
        return (
              
            <div id="content">
            <div id="content3">
                <div className="card">
            <div className="container">
<br/>
           {/* <Link to="/createexercise">    <button class="btn btn-primary" style={{float:'right'}}>add exercise </button></Link>  */}
               
                <h3> Assignments</h3>
                <br/>
                <table className="table">
                    <br/>
                    <thead className="thead-light">
                        <tr>
                            <th>Subject</th>
                            <th>Assignment number</th>
                            <th>Start Date</th>
                            <th>Submission Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
            </div></div></div>
        );
    }
}
export default ExerciseStud;

