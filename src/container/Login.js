import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const handletLogin = () => {

    }

    const handleSignup = () => {

    }
    return (
        <section id="appointment" className="appointment d-flex">
            <div className="container">
                <div className='section-title'>
                    {
                        reset === true ?
                            <h2>Forget Password</h2> :
                            userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                    }
                </div>
                <div className='php-email-form'>
                    <div className='row align-items-center justify-content-center'>
                        {
                            userType === 'Login' ? null
                                :
                                <div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div>
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Password" data-rule="Password" data-msg="Please enter an Password" />
                            <div className="validate" />
                        </div>
                        {
                            userType === 'Login' ?
                                <div className='text-center buttons'>
                                    <span>Create New Account</span><button onClick={() => setUserType('Signup')}>Login</button>
                                </div>
                                :
                                <div className='text-center'>
                                    <span>Already have Account</span><button onClick={() => setUserType('Login')}>Signup</button>
                                </div>

                        }
                        {
                            userType === "Signup" ? null :
                            <NavLink to="/forgetPassword" className="forget">Forgot password?</NavLink>
                        }

                        <div className="text-center buttonss"><button>Make appointment</button></div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;