import Header from '../Header';
import Footer from '../Footer';

import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
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
    const [auth, setAuth] = useState(true)

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted")
        if (!isLogin) {
            dispatch(signup(form, history));
        } else {
            try {
                setAuth(await dispatch(signin(form, history)));
            } catch (error) {
                console.log(error)
            }
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
                <h1 className='page-title'>{isLogin ? 'Login' : 'Register'}</h1>
                <form className="infoform" onSubmit={handleSubmit}>
                    <h2 className="page-header">{isLogin ? 'Login' : 'Register'}</h2>
                    <div className="infoform input-section">
                        {isLogin ? null :

                            <div>
                                <input type="text" name="firstName"

                                    className="textbox"
                                    placeholder="First Name"
                                    aria-label="First Name" onChange={handleChange} />
                                <input type="text"
                                    className="textbox"
                                    placeholder="Last Name"
                                    aria-label="Last Name" name="lastName" onChange={handleChange} />
                            </div>

                        }                    <div>
                            <input type="text" name="email" aria-label="email"
                                className="textbox"
                                placeholder="email"
                                onChange={handleChange} />
                        </div>
                        <div>
                            <input type="password" name="password"
                                className="textbox"
                                placeholder="password"
                                aria-label="password" onChange={handleChange} />
                        </div>
                        {isLogin ? null :
                            <div>
                                <input type="password" name="verifyPassword"
                                    aria-label="Verify Password"
                                    className="textbox"
                                    placeholder="Verify Password"
                                    onChange={(e) => {
                                        if (e.target.value !== form.password) {
                                            setPassMatch(false)
                                            console.log('doesnt match')
                                        } else {
                                            setPassMatch(true)
                                            console.log('it matches')
                                        }
                                    }} />
                            </div>
                        }
                        {!auth ? <p>Login has failed. Please try again</p> : null}
                    </div>
                    <div>
                        <button className="button" type="submit">Submit</button>
                        <button className="button" type="button" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</button>
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
        </div >
    )
}

export default Login

