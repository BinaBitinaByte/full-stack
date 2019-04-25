import React, {Component} from 'react';
import { signup } from '../ducks/auth'; //importing function signup & we use connect to connect the backend & front
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//basic form component & needs to be in local state so 
//instead of a functional component, we are going to make it a class component
class Signup extends Component{
    constructor(props){
        super(props);
        this.state= {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({ [e.target.name]:
        e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        //this function is coming from auth reducer & is expecting username&pw
        this.props.signup(this.state.username,
            this.state.password)
    }
    render() {
        console.log(this.props);
        if(this.props.auth.username){
            return <Redirect to="/account" />
        }
        return (
            <div>
                   {/* return <h1>Signup</h1> */}
                <h1>Sign-Up</h1>
                <form onSubmit= {this.handleSubmit}>
                    <label>Username
                        <input
                        onChange={this.handleChange}
                      value={this.state.username}
                      name="username"
                      />
                      </label>
                      <label>
                          Password
                      
                      <input
                      onChange={this.handleChange}
                      value={this.state.password}
                      name= "password"
                      type="password"
                      />
                        </label>
                        <button>Submit</button>
                </form>
            </div>
        )
    }
 
    
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {signup} ) (Signup); //{}

 