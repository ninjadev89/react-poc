import React, { Component } from 'react';

export class Signup extends Component {
 // static displayName = Layout.name;
 constructor(props) {
    super();
    this.state = {
        signupdata: {},
        error: false,
        userCreated: false
    }
 }

 handleOnChange = (e) => {
    const {name, value} = e.target;
    const {signupdata} = this.state;
    this.setState({
        ...this.state,
        signupdata: {
            ...signupdata,
            [name]: value
        },
        userCreated: false
    })
 }

 validateForm = () => {
    const {signupdata} = this.state;
    const {phoneNumber, emailId, password} = signupdata;
    return phoneNumber && emailId && password ? true : false;
 }

 createAccount = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
        this.setState({
            userCreated: true,
            signupdata: {}
        })
    } 
    return false;
 }

  render () {
    const {signupdata, userCreated} = this.state;
    const {phoneNumber, emailId, password} = signupdata;
    
    return (
        <div class="registerWrapper">
            <div class="registerContainer">
            {!userCreated ?
                <>
                <h3 class="formTitle">Sign up</h3>
                <div class="formContainer">
                    <div class="registerLeftwrapper">
                    <form id="registrationForm">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="phoneNumber" id="phoneNumber" aria-describedby="phoneNumber" placeholder="Mobile Number " onChange={e => this.handleOnChange(e)} value={phoneNumber}/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" name="emailId" id="emailId" aria-describedby="emailHelp" placeholder="Email ID" onChange={e => this.handleOnChange(e)} value={emailId}/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={e => this.handleOnChange(e)} value={password}/>
                        </div>
                     <button type="submit" class="btn btn-primary btn-registration" disabled={!this.validateForm()} onClick={this.createAccount}>create account</button>
                    </form>
                </div>
                <span>or</span>
                <div class="registerRightwrapper">
                    <button type="button" class="btn btn-primary btn-register-facebook">register with facebook </button>
                    <p class="signinInfo">Already a member? <a href="#login" title="login" class="signInLink">Signin here</a></p>
                </div>
                </div>
                </>
                : <h3 class="formTitle">Sign up successful</h3>
            }
            </div>      
            </div>
        );
    }
}

export default Signup;