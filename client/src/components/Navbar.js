import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';

const Navbar = () => {
    const { user } = useSelector((state) => state.AuthReducer);
	
    const { user_profiles } = useSelector((state) => state.FetchUserProfile);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('myToken');
        dispatch({ type: LOGOUT });
    };

    const divStyle ={
        style: "dispaly:none",
    }
   

    const Links = user ? (
        <>
            <li className="nav-item px-3 active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link " to="/contact">Contact</Link>

            </li>
            {/* <li className="nav-item px-3">
                <Link className="nav-link " to="/profile"> Profile</Link>
            </li> */}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">






                    {/* {(user_profiles.length > 0 ? (<Link class="dropdown-item" to="/createprofile" >Create Profile</Link>) : <Link class="dropdown-item"  >Edit Profile</Link>


                    )} */}
                    {user_profiles.length > 0 ?
                    user_profiles.map(user_profile =>
                     (<Link class="dropdown-item"  to={`/edit/${user_profile.userId}`}>Edit Profile</Link> )
                    ) 
                    :  
                    
                    <Link class="dropdown-item"  to="/createprofile" >Create Profile</Link> 
                   
                    }
















                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#">Settings</a>


                </div>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link "><span onClick={logout}>Logout</span></a>
            </li>
        </>
    ) : (
        <>
            <li className="nav-item px-3 active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link " to="/contact">Contact</Link>

            </li>
            <li className="nav-item px-3">
                <Link className="nav-link " to="/login">Login</Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link " to="/register">Registration</Link>
            </li>
        </>
    );

    return (
        < >
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a href="index.html" class="navbar-brand"><span class="logo">PORTFOLIO<span>MAKERS'S</span></span></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {Links}

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar