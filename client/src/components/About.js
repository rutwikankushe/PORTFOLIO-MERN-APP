import React from 'react';
import {Helmet} from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import {
	REDIRECT_FALSE,
	REMOVE_MESSAGE,
	SET_LOADER,
	CLOSE_LOADER,
	SET_MESSAGE,
} from '../store/types/PostTypes'; //imp for edit profile
import { fetchProfile } from "../store/asyncMethods/PostMethods"; //imp for edit profile

export const About = () => {
    const {
		user: { _id, email }
	} = useSelector((state) => state.AuthReducer); //imp for edit profile
    const { redirect, message, loading } = useSelector(
		(state) => state.PostReducer
	);//imp for edit profile
    const dispatch = useDispatch();
    useEffect(() => {
		if (redirect) {
			dispatch({ type: REDIRECT_FALSE });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: REMOVE_MESSAGE });
		}
		dispatch(fetchProfile(_id));
	}, [message]);
    return ( 
        <div >
            <Helmet>
                <title>About-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
        <p>WELCOM</p>
        <h1>This is About Page</h1>
        </div>
    )
}

export default About