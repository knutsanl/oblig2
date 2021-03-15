import './sign-up.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            repeatedPassword: ''
        };
    };
    render() {
        return (
            <div className="signUpForm">
                <form action='#' onSubmit={this.doesPasswordsMatch}>
                    <h3>Sign Up</h3>
                    <label>
                        Name:
                        <input type="text" placeholder="First name" required />
                    </label>
                    <label>
                        Surname:
                        <input type="text" placeholder="Last name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="Email" required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}
                            pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" required
                            title="Must contain at least one char and one number and be 8 characters long!" />
                    </label>
                    <label>
                        Repeat password:
                        <input type="password" placeholder="Repeat Password" onChange={this.handleRepeatedPasswordChange} required />
                    </label>
                    <label>
                        Role (Student or Teacher)
                    </label>
                    <p>
                        <select>
                            <option>Student</option>
                            <option>Teacher</option>
                        </select>
                    </p>
                    <input type="submit" value="submit" />
                </form> 
                <p><Link to="/login">Already a user? Log in here</Link> </p>
            </div>
        )
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleRepeatedPasswordChange = (event) => {
        this.setState({ repeatedPassword: event.target.value });
    }
    doesPasswordsMatch = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.repeatedPassword) {
            console.log("Verry nice");
        }
        else {
            alert('Passwords does not match');
            return
        }
    }
}

export default SignUp;