import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';

import { postRegister } from '../../store/asyncMethods/AuthMethods';

const Register = (props) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        cpassword: '',
    });
    const { loading, registerErrors, user } = useSelector(
        (state) => state.AuthReducer
    );
    const dispatch = useDispatch();
    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const userRegister = async (e) => {
        e.preventDefault();
        dispatch(postRegister(state));


    };
    useEffect(() => {
        if (registerErrors.length > 0) {
            registerErrors.map((error) => toast.error(error.msg));
        }
        if (user) {
            props.history.push('/dashboard')
        }
    }, [registerErrors, user]);

    return (
        < >
            <Helmet>
                <title>Register-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
            <div className="container">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <div className="row py-5 mt-4 align-items-center">




                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto ">
                        <div class="one">
                            <h1>Register Here </h1>
                        </div>
                        <form >
                            <div className="row">
                               

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-envelope text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"
                                        value={state.email}
                                        onChange={handleInputs}
                                    />
                                </div>


                              
                               






                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-lock text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"
                                        value={state.password}
                                        onChange={handleInputs}
                                    />
                                </div>


                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <i className="fa fa-lock text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="passwordConfirmation" type="text" name="cpassword" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md"
                                        value={state.cpassword}
                                        onChange={handleInputs}
                                    />
                                </div>


                                <div className="form-group col-lg-12 mx-auto mb-0">
                                    <a href="#" className="btn btn-reg btn-block py-2" onClick={userRegister}>
                                        <span className="font-weight-bold" >{loading ? 'Create MY Account' : 'Registering  ........'}</span>
                                    </a>
                                </div>


                                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div className="border-bottom w-100 ml-5"></div>
                                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div className="border-bottom w-100 mr-5"></div>
                                </div>




                                <div className="text-center w-100">
                                    <p className="text-muted font-weight-bold">Already Registered? <Link to="/login" className="text-primary ml-2">Login</Link></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Register