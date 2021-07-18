import axios from 'axios';

import {
	CREATE_ERRORS,
	REMOVE_ERRORS,
	SET_LOADER,
	CLOSE_LOADER,
	REDIRECT_TRUE,
	REDIRECT_FALSE,
	SET_MESSAGE,
	REMOVE_MESSAGE,
	SET_POSTS,
	SET_POST,
	POST_REQUEST,
	EDIT_ERRORS,
	SET_UPDATE_ERRORS,
	UPDATE_IMAGE_ERROR,
	SET_DETAILS,
	
} from '../types/PostTypes';

export const createAction = (postData) => {
    return async(dispatch,getState)=>{
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({type: SET_LOADER});
        try {
            const config = {
				headers: {
					Authorization: `Bearer ${token}`, //jwt Format Bearer
				},
				
			};

            const { data : { msg },
		} = await axios.post('/create_profile',postData,config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({type: REMOVE_ERRORS})
			dispatch({type: REDIRECT_TRUE});
			dispatch({type: SET_MESSAGE, payload: msg });
          

            
        } catch (error) {
			console.log(error.response)
			const {errors}= error.response.data;
			
			dispatch({type: CLOSE_LOADER});
            dispatch({type: CREATE_ERRORS, payload: errors});
			
            
        }
    }



};

export const fetchProfile = (id) => {
	return async (dispatch,getState) =>{
		const {AuthReducer: { token }} = getState();
		dispatch({type: SET_LOADER});
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`, //jwt Format Bearer
				},
			};
			const {data : {response}} = await axios.get(`/user_profiles/${id}`, config);
			console.log(response);
			dispatch({type: CLOSE_LOADER});
			dispatch({type: SET_POSTS, payload: response});
		} catch (error) {
			dispatch({type: CLOSE_LOADER});
			
		}
	}
}