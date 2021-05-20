import Header from '../Header';
import Footer from '../partials/Footer';

import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { AUTH } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


import { signin, signup } from '../../actions/auth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true)
    const [passMatch, setPassMatch] = useState(null)
    const [form, setForm] = useState(initialState);

    /*     const googleSuccess = async (res) => {
            const result = res?.profileObj;
            const token = res?.tokenId;
    
            try {
                dispatch({ type: AUTH, data: { result, token } });
    
                history.push('/');
            } catch (error) {
                console.log(error);
            }
        } */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        if (!isLogin) {
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    /* 
        const googleError = () => {
    
            console.log('sign in was unsuccessful')
        } */

    return (
        <div>

            <Header />
            <div className="page-content">
                <h1>{isLogin ? 'Login!' : 'Register'}</h1>
                <form onSubmit={handleSubmit}>
                    {isLogin ? null :
                        <div>
                            <label>
                                <p>First Name</p>
                                <input type="text" name="firstName" onChange={handleChange} />
                            </label>
                            <label>
                                <p>Last Name</p>
                                <input type="text" name="lastName" onChange={handleChange} />
                            </label>
                        </div>

                    }
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" onChange={handleChange} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password" onChange={handleChange} />
                    </label>
                    {isLogin ? null :
                        <div>
                            <label>
                                <p>Verify Password</p>
                                <input type="password" name="verifyPassword" onChange={(e) => {
                                    if (e.target.value !== form.password) {
                                        setPassMatch(false)
                                        console.log('doesnt match')
                                    } else {
                                        setPassMatch(true)
                                        console.log('it matches')
                                    }
                                }} />
                            </label>

                        </div>

                    }
                    <div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</button>
                    </div>

                </form>
                {/*                 <GoogleLogin
                    clientId="ID"
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            variant="contained">
                            Google Sign In
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy="single_host_origin"
                /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Login

