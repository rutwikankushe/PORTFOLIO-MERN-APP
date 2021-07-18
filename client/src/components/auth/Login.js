import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import {postLogin} from "../../store/asyncMethods/AuthMethods";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const dispatch = useDispatch();
    const { loginErrors, loading } = useSelector((state) => state.AuthReducer);
    const [state, setState] = useState({
		email: '',
		password: '',
	});
    const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
    const userLogin = (e) => {
		e.preventDefault();
		dispatch(postLogin(state));
	};
    useEffect(() => {
		if (loginErrors.length > 0) {
			loginErrors.map((error) => toast.error(error.msg));
		}
	}, [loginErrors]);
    return ( 
        < >
         <Helmet>
                <title>Login-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
       <div className="container">
      
    <div className="row py-5 mt-4 align-items-center">
    
    <Toaster
                    position="top-right"
                    reverseOrder={true}
                />
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto ">
        <div class="one">
              <h1>Login Now</h1>
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
                    <div className="input-group col-lg-12 mb-4">
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

                    
                   
                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-reg btn-block py-2" onClick={userLogin}>
                            <span className="font-weight-bold">{loading ? 'Login' :'Loggin In ....' }</span>
                        </a>
                    </div>

                    
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                   
                    
                   
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Create New Account ! <Link to="/signup" className="text-primary ml-2">Register</Link></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
        </>
    )
}

export default Login