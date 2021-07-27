import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { updateImageAction } from '../store/asyncMethods/PostMethods';
import { RESET_UPDATE_IMAGE_ERRORS } from '../store/types/PostTypes';
export const EditImage = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const dispatch = useDispatch();
	const { updateImageErrors } = useSelector((state) => state.UpdateImage);
    const { redirect } = useSelector((state) => state.PostReducer);
    const [state, setState] = useState({
        image: '',
        imagePreview: '',
        imageName: '',
    });
    const fileHandle = (e) => {
        if (e.target.files.length !== 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    imagePreview: reader.result,
                    image: e.target.files[0],
                    imageName: e.target.files[0].name,
                });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const updateImage = (e) => {
        // const{image}=state;
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id);
        formData.append('image', state.image);
        dispatch(updateImageAction(formData));
        // console.log(formData.get("id"))
        // console.log(formData.get('image'))
    };
    useEffect(() => {
		if (updateImageErrors.length !== 0) {
			updateImageErrors.map((error) => toast.error(error.msg));
			dispatch({ type: RESET_UPDATE_IMAGE_ERRORS });
		}
	}, [updateImageErrors]);
    useEffect(() => {
		if (redirect) {
			push('/dashboard');
		}
	}, [redirect]);
    return (
        < >
            <Helmet>
                <title>EditImage-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
            <Toaster
                position='top-right'
                reverseOrder={false}
                toastOptions={
                    {
                    "closeButton": true,
                    style: {
                        fontSize: '14px',
                    },
                }}
            />
            <div class="banner-area" id="home">
                <div class="banner-table">
                    <div class="banner-table-cell">
                        <div class="welcome-text">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12">
                                        <section class="intro animate-scale section-padding-title">
                                            <form id="myform" onSubmit={updateImage}>
                                                <div class="img-area">
                                                    <label htmlFor='image'>
                                                        {state.imagePreview ? <img src={state.imagePreview} /> : <img src="https://i.ibb.co/WGd34Vs/depositphotos-134255626-stock-illustration-avatar-male-profile-gray-person.jpg" alt="" />}
                                                    </label>
                                                    <input type='file' name='image' id='image' onChange={fileHandle} />
                                                </div>
                                                <span style={{ display: "none" }} >{state.imageName}</span>
                                                <div className="col text-center">
                                                        <button type="submit" form="myform" value="Submit"  className="btn btn-reg  py-2 pull-center"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="ml-2">Submit</span></button>
                                                    </div>
                                            </form>
                                        </section>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditImage