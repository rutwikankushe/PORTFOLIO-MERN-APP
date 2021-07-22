import axios from 'axios';
import { data } from 'jquery';

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
			
			dispatch({type: CLOSE_LOADER});
			dispatch({type: SET_POSTS, payload: response});
			
		} catch (error) {
			dispatch({type: CLOSE_LOADER});
			
		}
	}
};
export const  fetchUserDetails = (id) => {
	return async (dispatch,getState) =>{
		const {AuthReducer: { token }} = getState();
		
		const config = {
			headers: {
				Authorization: `Bearer ${token}`, //jwt Format Bearer
			},
		};
		dispatch({type: SET_LOADER});
		try {
			const {data : { User_profile}} = await axios.get(`/User_profile/${id}`, config);
		
			dispatch({type: CLOSE_LOADER});
			dispatch({type: SET_POST, payload: User_profile});
			dispatch({type: POST_REQUEST});
			
		} catch (error) {
			dispatch({type: CLOSE_LOADER});
		
			
		}
	}
};

export const updateAction = (editData) => {
	return async(dispatch,getState)=>{
		const {AuthReducer: { token }} = getState();
		
		const config = {
			headers: {
				Authorization: `Bearer ${token}`, //jwt Format Bearer
			},
		};
		dispatch({type: SET_LOADER});
		try {
			const {data} = await axios.post('/update_profile',editData, config);
			dispatch({type: CLOSE_LOADER});
			dispatch({type: REDIRECT_TRUE});
			dispatch({type: SET_MESSAGE, payload: data.msg});
		
		} catch (error) {
			const {
				response: {
					data: { errors },
				},
			} = error;
			dispatch({type: CLOSE_LOADER});
			dispatch({type: SET_UPDATE_ERRORS, payload: errors});
			console.log(error.response)
		}

	}

}

// export const updateImageAction = (updateData) => {
// 	return async (dispatch, getState) => {
// 		const {
// 			AuthReducer: { token },
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		};
// 		dispatch({ type: SET_LOADER });
// 		try {
// 			const {data: {msg}} = await axios.post('/updateImage', updateData, config);
// 			dispatch({ type: CLOSE_LOADER });
// 			dispatch({type: REDIRECT_TRUE});
// 			dispatch({type: SET_MESSAGE, payload: msg});
// 			console.log(data);
			
// 		} catch (error) {
// 			const{response : {data : {errors}} } = error;
// 			dispatch({ type: CLOSE_LOADER });
// 			dispatch({type: UPDATE_IMAGE_ERROR, payload:errors})
// 			console.log(error.response)
			
// 		}
// 	};
// };
export const updateImageAction = (updateData) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		dispatch({ type: SET_LOADER });
		try {
			const {
				data: { msg },
			} = await axios.post('/updateImage', updateData, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: REDIRECT_TRUE });
			dispatch({ type: SET_MESSAGE, payload: msg });
		} catch (error) {
			const {
				response: {
					data: { errors },
				},
			} = error;
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: UPDATE_IMAGE_ERROR, payload: errors });
		}
	};
};