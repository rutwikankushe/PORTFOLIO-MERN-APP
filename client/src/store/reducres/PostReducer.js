import{
    SET_LOADER,
	CLOSE_LOADER,
	CREATE_ERRORS,
	REMOVE_ERRORS,
	REDIRECT_TRUE,
	REDIRECT_FALSE,
	SET_MESSAGE,
	REMOVE_MESSAGE,
	SET_POSTS,
	SET_POST,
	POST_REQUEST,
	POST_RESET,
	RESET_UPDATE,
	SET_UPDATE_ERRORS,
	RESET_UPDATE_ERRORS,
	UPDATE_IMAGE_ERROR,
	RESET_UPDATE_IMAGE_ERRORS,
	SET_DETAILS,
	COMMENTS,
} from '../types/PostTypes'

const initState ={
    loading: false,
	createErrors: [],
	redirect: false,
	message: '',
	user_profiles:[],
	User_profile:[],
	userProfileStatus: false,
	editErrors: [],
	updateImageErrors: [],
	
}

export const PostReducer = (state = initState, action) => {
    const {type,payload} = action;
    if (type === SET_LOADER) {
		return { ...state, loading: true };
	} else if (type === CLOSE_LOADER) {
		return { ...state, loading: false };
	} else if (type === CREATE_ERRORS) {
		return { ...state, createErrors: payload };
	} else if (type === REDIRECT_TRUE) {
		return { ...state, redirect: true };
	} else if (type === REDIRECT_FALSE) {
		return { ...state, redirect: false };
	} else if (type === SET_MESSAGE) {
		return { ...state, message: action.payload };
	} else if (type === REMOVE_MESSAGE) {
		return { ...state, message: '' };
	} else if (type === REMOVE_ERRORS) {
		return { ...state, createErrors: [] };
	}  else {
		return state;
	}
	
		
	
};

export const FetchUserProfile = (state = initState , action) => {
	const { type, payload } = action;
	if (type === SET_POSTS) {
		return {
			...state,
			user_profiles : payload,
			
		};
		
	} else {
		return state;
	}
	
};

export const fetchUserDetails = (state = initState , action) => {
	const { type, payload } = action;
	if (type === SET_POST) {
		return {
			...state,
			User_profile : payload,
			
		};
		
	} else if(type === POST_REQUEST) {
		return {...state,userProfileStatus: true}
	}else if(type === POST_RESET) {
		return {...state,userProfileStatus: false}
	}
	
	
	else{
		return state;
	}
	
};
export const UpdateProfile = (state = initState, action) =>{
	const {type, payload} =action;
	if(type === SET_UPDATE_ERRORS) {
		return {...state, editErrors: payload };

	}else if(type=== RESET_UPDATE_ERRORS){
		return {
			...state,
			editErrors:[],
		}
	}
	
	else {
		return state;
	}
}
export const UpdateImage = (state = initState, action) => {
	const { payload, type } = action;
	if (type === UPDATE_IMAGE_ERROR) {
		return {
			...state,
			updateImageErrors: payload,
		};
	} else if (type === RESET_UPDATE_IMAGE_ERRORS) {
		return {
			...state,
			updateImageErrors: [],
		};
	} else {
		return state;
	}
};

