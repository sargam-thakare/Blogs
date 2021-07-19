import React, { Component } from "react"
import { Link } from 'react-router-dom';



class CreateBlog extends Component {

    render() {
        return (

            <div>

                <div id="content">
                    <div id="content3">
                        <div className="card">
                            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                                <div className="collpase navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="navbar-item">
                                            <Link to="/" className="nav-link">Exercises</Link>
                                        </li>
                                        <li className="navbar-item">
                                            <Link to="/createassignment" className="nav-link">Create Exercise Log</Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                        </div></div>
                </div>
            </div>
        );



    }

}
export default CreateBlog