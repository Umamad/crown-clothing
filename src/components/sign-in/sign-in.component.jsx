import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value }, console.log(this.state) );
    }

    render(){
        return (
            <div className="sign-in">
                <h1>Alredy have an account?</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required onChange={this.handleChange} />
                    <label>Email</label>
                    <input type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
                    <label>Password</label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignIn;