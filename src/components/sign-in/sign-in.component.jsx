import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }

    handleSubmit =async event =>{
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className="sign-in">
                <h1>Alredy have an account?</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleBtn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;