import React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails, updateAction } from '../store/asyncMethods/PostMethods';
import { POST_RESET, RESET_UPDATE, RESET_UPDATE_ERRORS } from '../store/types/PostTypes';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loader from './Loader';
export const Edit = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const [value, setValue] = useState('');
    const [state, setState] = useState({
        image: '',
        name: '',
        phone: '',
        age: '',
        address: '',
        city: '',
        user_state: '',
        zipcode: '',
        hobby: '',
        school_name: '',
        subject_name: '',
        passing_year: '',
        school_aggregate: '',
        college_name: '',
        college_course: '',
        college_branch: '',
        college_passing_year: '',
        college_aggregate: '',
        Degree_college_name: '',
        Degree_college_course: '',
        Degree_college_branch: '',
        Degree_college_passing_year: '',
        Degree_college_aggregate: '',
        Instiute_name: '',
        Instiute_course: '',
        Instiute_branch: '',
        Instiute_passing_year: '',
        Instiute_aggregate: '',
        first_project_name: '',
        first_project_start_date: '',
        first_project_end_date: '',
        first_project_desription: '',
        first_project_key_technologies: '',
        second_project_name: '',
        second_project_start_date: '',
        second_project_end_date: '',
        second_project_desription: '',
        second_project_key_technologies: '',
        third_project_name: '',
        third_project_start_date: '',
        third_project_end_date: '',
        third_project_desription: '',
        third_project_key_technologies: '',
        fourth_project_name: '',
        fourth_project_start_date: '',
        fourth_project_end_date: '',
        fourth_project_desription: '',
        fourth_project_key_technologies: '',
        skill_1: '',
        skill_1_percentage: '',
        skill_2: '',
        skill_2_percentage: '',
        skill_3: '',
        skill_3_percentage: '',
        skill_4: '',
        skill_4_percentage: '',
        skill_5: '',
        skill_5_percentage: '',
        skill_6: '',
        skill_6_percentage: '',
        skill_7: '',
        skill_7_percentage: '',
        skill_8: '',
        skill_8_percentage: '',
    });
    const dispatch = useDispatch();
    const { loading, redirect } = useSelector(state => state.PostReducer);
    const { User_profile, userProfileStatus } = useSelector(state => state.fetchUserDetails);
    const { editErrors } = useSelector(state => state.UpdateProfile);
    useEffect(() => {
        if (userProfileStatus) {
            setState({
                image: User_profile.image,
                name: User_profile.name,
                email: User_profile.email,
                phone: User_profile.phone,
                age: User_profile.age,
                address: User_profile.address,
                city: User_profile.city,
                user_state: User_profile.user_state,
                zipcode: User_profile.zipcode,
                hobby: User_profile.hobby,
                school_name: User_profile.school_name,
                subject_name: User_profile.subject_name,
                passing_year: User_profile.passing_year,
                school_aggregate: User_profile.school_aggregate,
                college_name: User_profile.college_name,
                college_course: User_profile.college_course,
                college_branch: User_profile.college_branch,
                college_passing_year: User_profile.college_passing_year,
                college_aggregate: User_profile.college_aggregate,
                Degree_college_name: User_profile.Degree_college_name,
                Degree_college_course: User_profile.Degree_college_course,
                Degree_college_branch: User_profile.Degree_college_branch,
                Degree_college_passing_year: User_profile.Degree_college_passing_year,
                Degree_college_aggregate: User_profile.Degree_college_aggregate,
                Instiute_name: User_profile.Instiute_name,
                Instiute_course: User_profile.Instiute_course,
                Instiute_branch: User_profile.Instiute_branch,
                Instiute_passing_year: User_profile.Instiute_passing_year,
                Instiute_aggregate: User_profile.Instiute_aggregate,
                first_project_name: User_profile.first_project_name,
                first_project_start_date: User_profile.first_project_start_date,
                first_project_end_date: User_profile.first_project_end_date,
                first_project_desription: User_profile.first_project_desription,
                first_project_key_technologies: User_profile.first_project_key_technologies,
                second_project_name: User_profile.second_project_name,
                second_project_start_date: User_profile.second_project_start_date,
                second_project_end_date: User_profile.second_project_end_date,
                second_project_desription: User_profile.second_project_desription,
                second_project_key_technologies: User_profile.second_project_key_technologies,
                third_project_name: User_profile.third_project_name,
                third_project_start_date: User_profile.third_project_start_date,
                third_project_end_date: User_profile.third_project_end_date,
                third_project_desription: User_profile.third_project_desription,
                third_project_key_technologies: User_profile.third_project_key_technologies,
                fourth_project_name: User_profile.fourth_project_name,
                fourth_project_start_date: User_profile.fourth_project_start_date,
                fourth_project_end_date: User_profile.fourth_project_end_date,
                fourth_project_desription: User_profile.fourth_project_desription,
                fourth_project_key_technologies: User_profile.fourth_project_key_technologies,
                skill_1: User_profile.skill_1,
                skill_1_percentage: User_profile.skill_1_percentage,
                skill_2: User_profile.skill_2,
                skill_2_percentage: User_profile.skill_2_percentage,
                skill_3: User_profile.skill_3,
                skill_3_percentage: User_profile.skill_3_percentage,
                skill_4: User_profile.skill_4,
                skill_4_percentage: User_profile.skill_4_percentage,
                skill_5: User_profile.skill_5,
                skill_5_percentage: User_profile.skill_5_percentage,
                skill_6: User_profile.skill_6,
                skill_6_percentage: User_profile.skill_6_percentage,
                skill_7: User_profile.skill_7,
                skill_7_percentage: User_profile.skill_7_percentage,
                skill_8: User_profile.skill_8,
                skill_8_percentage: User_profile.skill_8_percentage,
                userId: User_profile.userId,
            })
            setValue(User_profile.body);
            dispatch({ type: POST_RESET });
        } else {
            dispatch(fetchUserDetails(id));
        }
    }, [User_profile]);
    const updateProfile = e => {
        e.preventDefault();
        dispatch(updateAction({
            image: state.image,
            name: state.name,
            email: state.email,
            phone: state.phone,
            age: state.age,
            address: state.address,
            city: state.city,
            user_state: state.user_state,
            zipcode: state.zipcode,
            hobby: state.hobby,
            school_name: state.school_name,
            subject_name: state.subject_name,
            passing_year: state.passing_year,
            school_aggregate: state.school_aggregate,
            college_name: state.college_name,
            college_course: state.college_course,
            college_branch: state.college_branch,
            college_passing_year: state.college_passing_year,
            college_aggregate: state.college_aggregate,
            Degree_college_name: state.Degree_college_name,
            Degree_college_course: state.Degree_college_course,
            Degree_college_branch: state.Degree_college_branch,
            Degree_college_passing_year: state.Degree_college_passing_year,
            Degree_college_aggregate: state.Degree_college_aggregate,
            Instiute_name: state.Instiute_name,
            Instiute_course: state.Instiute_course,
            Instiute_branch: state.Instiute_branch,
            Instiute_passing_year: state.Instiute_passing_year,
            Instiute_aggregate: state.Instiute_aggregate,
            first_project_name: state.first_project_name,
            first_project_start_date: state.first_project_start_date,
            first_project_end_date: state.first_project_end_date,
            first_project_desription: state.first_project_desription,
            first_project_key_technologies: state.first_project_key_technologies,
            second_project_name: state.second_project_name,
            second_project_start_date: state.second_project_start_date,
            second_project_end_date: state.second_project_end_date,
            second_project_desription: state.second_project_desription,
            second_project_key_technologies: state.second_project_key_technologies,
            third_project_name: state.third_project_name,
            third_project_start_date: state.third_project_start_date,
            third_project_end_date: state.third_project_end_date,
            third_project_desription: state.third_project_desription,
            third_project_key_technologies: state.third_project_key_technologies,
            fourth_project_name: state.fourth_project_name,
            fourth_project_start_date: state.fourth_project_start_date,
            fourth_project_end_date: state.fourth_project_end_date,
            fourth_project_desription: state.fourth_project_desription,
            fourth_project_key_technologies: state.fourth_project_key_technologies,
            skill_1: state.skill_1,
            skill_1_percentage: state.skill_1_percentage,
            skill_2: state.skill_2,
            skill_2_percentage: state.skill_2_percentage,
            skill_3: state.skill_3,
            skill_3_percentage: state.skill_3_percentage,
            skill_4: state.skill_4,
            skill_4_percentage: state.skill_4_percentage,
            skill_5: state.skill_5,
            skill_5_percentage: state.skill_5_percentage,
            skill_6: state.skill_6,
            skill_6_percentage: state.skill_6_percentage,
            skill_7: state.skill_7,
            skill_7_percentage: state.skill_7_percentage,
            skill_8: state.skill_8,
            skill_8_percentage: state.skill_8_percentage,
            id:User_profile._id,
        }))
    };
    useEffect(() => {
        if (editErrors.length !== 0) {
            editErrors.map((error) => toast.error(error.msg));
            dispatch({ type: RESET_UPDATE_ERRORS });
        }
    }, [editErrors]);
    useEffect(() => {
        if (redirect) {
            push('/dashboard');
        }
    }, [redirect]);
    return !loading ? <>
        <Helmet>
            <title>Edit Profile-PORTFOLIO MAKER'S</title>
            <meta name='description' content="Portfolio Maker Free" ></meta>
        </Helmet>
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                style: {
                    fontSize: '10px',
                }
            }}
        />
        <div className="container emp-profile">
            <form onSubmit={updateProfile}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={`/images/${User_profile.image}`} alt={User_profile.image} />
                            <div className="file btn btn-lg btn-primary">
                                <Link to={`/updateImage/${User_profile._id}`}>Update image</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="profile-head">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="project-tab" data-toggle="tab" href="#project" role="tab" aria-controls="project" aria-selected="true">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Skills</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Name</label>
                                        <input type="text" name="name" className="form-control" onChange={(e) => setState({ ...state, name: e.target.value })} value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} id="name" placeholder="User Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Phone</label>
                                        <input type="text" name="phone" className="form-control" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} id="phone" placeholder="" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputAge">Age</label>
                                        <input type="text" name="age" className="form-control" value={state.age} onChange={(e) => setState({ ...state, age: e.target.value })} id="age" placeholder="Age" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" name="address" className="form-control" value={state.address} onChange={(e) => setState({ ...state, address: e.target.value })} id="address" placeholder="1234 Main St" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputCity">City</label>
                                        <input type="text" name="city" className="form-control" value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} id="city" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="user_state" name="user_state" className="form-control" value={state.user_state} onChange={(e) => setState({ ...state, user_state: e.target.value })}>
                                            <option >Choose...</option>
                                            <option>Maharastra</option>
                                            <option>Maharastra</option>
                                            <option>Maharastra</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" name="zipcode" className="form-control" value={state.zipcode} onChange={(e) => setState({ ...state, zipcode: e.target.value })} id="zipcode" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">Hobby</label>
                                    <textarea cols="100" rows="5" type="text" name="hobby" className="form-control" value={state.hobby} onChange={(e) => setState({ ...state, hobby: e.target.value })} id="hobby" placeholder="Hobby" ></textarea>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="list_wrapper">
                                    <p>10th details</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">School Name</label>
                                            <input type="text" name="school_name" className="form-control" value={state.school_name} id="school_name" onChange={(e) => setState({ ...state, school_name: e.target.value })} placeholder="College Name" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Subjects</label>
                                            <input type="text" name="subject_name" className="form-control" value={state.subject_name} id="subject_name" onChange={(e) => setState({ ...state, subject_name: e.target.value })} placeholder="Course Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Year </label>
                                            <input type="text" name="passing_year" className="form-control" value={state.passing_year} id="passing_year" onChange={(e) => setState({ ...state, passing_year: e.target.value })} placeholder="Year " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Aggregate </label>
                                            <input type="text" name="school_aggregate" className="form-control" value={state.school_aggregate} id="school_aggregate" onChange={(e) => setState({ ...state, school_aggregate: e.target.value })} placeholder="Aggregate " />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper">
                                    <p>12th details</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">College Name</label>
                                            <input type="text" name="college_name" className="form-control" value={state.college_name} id="college_name" onChange={(e) => setState({ ...state, college_name: e.target.value })} placeholder="College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Course Name</label>
                                            <input type="text" name="college_course" className="form-control" value={state.college_course} id="college_course" onChange={(e) => setState({ ...state, college_course: e.target.value })} placeholder="Course Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Branch </label>
                                            <input type="text" name="college_branch" className="form-control" value={state.college_branch} id="college_branch" onChange={(e) => setState({ ...state, college_branch: e.target.value })} placeholder="Branch " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Year </label>
                                            <input type="text" name="college_passing_year" className="form-control" value={state.college_passing_year} id="college_passing_year" onChange={(e) => setState({ ...state, college_passing_year: e.target.value })} placeholder="Year " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Aggregate </label>
                                            <input type="text" name="college_aggregate" className="form-control" value={state.college_aggregate} id="college_aggregate" onChange={(e) => setState({ ...state, college_aggregate: e.target.value })} placeholder="Aggregate " />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper">
                                    <p>Degree details</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">College Name</label>
                                            <input type="text" name="Degree_college_name" className="form-control" value={state.Degree_college_name} id="Degree_college_name" onChange={(e) => setState({ ...state, Degree_college_name: e.target.value })} id="name" placeholder="College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Course Name</label>
                                            <input type="text" name="Degree_college_course" className="form-control" value={state.Degree_college_course} id="Degree_college_course" onChange={(e) => setState({ ...state, Degree_college_course: e.target.value })} placeholder="Course Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Branch </label>
                                            <input type="text" name="Degree_college_branch" className="form-control" value={state.Degree_college_branch} id="Degree_college_branch" onChange={(e) => setState({ ...state, Degree_college_branch: e.target.value })} placeholder="Branch " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Year </label>
                                            <input type="text" name="Degree_college_passing_year" className="form-control" value={state.Degree_college_passing_year} id="Degree_college_passing_year" onChange={(e) => setState({ ...state, Degree_college_passing_year: e.target.value })} placeholder="Year " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Aggregate </label>
                                            <input type="text" name="Degree_college_aggregate" className="form-control" value={state.Degree_college_aggregate} id="Degree_college_aggregate" onChange={(e) => setState({ ...state, Degree_college_aggregate: e.target.value })} placeholder="Aggregate " />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper">
                                    <p>Higher Studies details(Optional)</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Instiute Name</label>
                                            <input type="text" name="Instiute_name" className="form-control" value={state.Instiute_name} id="Instiute_name" onChange={(e) => setState({ ...state, Instiute_name: e.target.value })} placeholder="College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Course Name</label>
                                            <input type="text" name="Instiute_course" className="form-control" value={state.Instiute_course} id="Instiute_course" onChange={(e) => setState({ ...state, Instiute_course: e.target.value })} placeholder="Course Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Branch </label>
                                            <input type="text" name="Instiute_branch" className="form-control" value={state.Instiute_branch} id="Instiute_branch" onChange={(e) => setState({ ...state, Instiute_branch: e.target.value })} placeholder="Branch " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Year </label>
                                            <input type="text" name="Instiute_passing_year" className="form-control" value={state.Instiute_passing_year} id="Instiute_passing_year" onChange={(e) => setState({ ...state, Instiute_passing_year: e.target.value })} placeholder="Year " />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">Aggregate </label>
                                            <input type="text" name="Instiute_aggregate" className="form-control" value={state.Instiute_aggregate} id="Instiute_aggregate" onChange={(e) => setState({ ...state, Instiute_aggregate: e.target.value })} placeholder="Aggregate " />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <div className="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab">
                                <div className="list_wrapper1">
                                    <p>#1</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputCollege">Project Title</label>
                                            <input type="text" name="first_project_name" className="form-control" value={state.first_project_name} id="first_project_name" onChange={(e) => setState({ ...state, first_project_name: e.target.value })} id="first_project_name" placeholder="Enter College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">Start Date</label>
                                            <input type="date" name="first_project_start_date" className="form-control" value={state.first_project_start_date} onChange={(e) => setState({ ...state, first_project_start_date: e.target.value })} id="first_project_start_date" placeholder="Start Date" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">End Date</label>
                                            <input type="date" name="first_project_end_date" className="form-control" value={state.first_project_end_date} onChange={(e) => setState({ ...state, first_project_end_date: e.target.value })} id="first_project_end_date" placeholder="End Date" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Description</label>
                                            <textarea cols="100" rows="5" type="text" name="first_project_desription" className="form-control" value={state.first_project_desription} onChange={(e) => setState({ ...state, first_project_desription: e.target.value })} id="first_project_desription" placeholder="Description" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputAge">key Technologies Used</label>
                                            <input type="text" name="first_project_key_technologies" className="form-control" value={state.first_project_key_technologies} onChange={(e) => setState({ ...state, first_project_key_technologies: e.target.value })} id="inputAge" placeholder="key Technologies" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper1">
                                    <p>#2</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputCollege">Project Title</label>
                                            <input type="text" name="second_project_name" className="form-control" value={state.second_project_name} onChange={(e) => setState({ ...state, second_project_name: e.target.value })} id="second_project_name" placeholder="Enter College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">Start Date</label>
                                            <input type="date" name="second_project_start_date" className="form-control" value={state.second_project_start_date} onChange={(e) => setState({ ...state, second_project_start_date: e.target.value })} id="second_project_start_date" placeholder="Start Date" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">End Date</label>
                                            <input type="date" name="second_project_end_date" className="form-control" value={state.second_project_end_date} onChange={(e) => setState({ ...state, second_project_end_date: e.target.value })} id="second_project_end_date" placeholder="End Date" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Description</label>
                                            <textarea type="text" cols="100" rows="5" name="second_project_desription" className="form-control" value={state.second_project_desription} onChange={(e) => setState({ ...state, second_project_desription: e.target.value })} id="second_project_desription" placeholder="Description" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputAge">key Technologies Used</label>
                                            <input type="text" name="second_project_key_technologies" className="form-control" value={state.second_project_key_technologies} onChange={(e) => setState({ ...state, second_project_key_technologies: e.target.value })} id="second_project_key_technologies" placeholder="key Technologies" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper1">
                                    <p>#3</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputCollege">Project Title</label>
                                            <input type="text" name="third_project_name" className="form-control" value={state.third_project_name} onChange={(e) => setState({ ...state, third_project_name: e.target.value })} id="third_project_name" placeholder="Enter College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">Start Date</label>
                                            <input type="date" name="third_project_start_date" className="form-control" value={state.third_project_start_date} onChange={(e) => setState({ ...state, third_project_start_date: e.target.value })} id="third_project_start_date" placeholder="Start Date" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">End Date</label>
                                            <input type="date" name="third_project_end_date" className="form-control" value={state.third_project_end_date} onChange={(e) => setState({ ...state, third_project_end_date: e.target.value })} id="third_project_end_date" placeholder="End Date" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Description</label>
                                            <textarea type="text" cols="100" rows="5" name="third_project_desription" className="form-control" value={state.third_project_desription} onChange={(e) => setState({ ...state, third_project_desription: e.target.value })} id="third_project_desription" placeholder="Description" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputAge">key Technologies Used</label>
                                            <input type="text" name="third_project_key_technologies" className="form-control" value={state.third_project_key_technologies} onChange={(e) => setState({ ...state, third_project_key_technologies: e.target.value })} id="third_project_key_technologies" placeholder="key Technologies" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="list_wrapper1">
                                    <p>#4</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="inputCollege">Project Title</label>
                                            <input type="text" name="fourth_project_name" className="form-control" value={state.fourth_project_name} onChange={(e) => setState({ ...state, fourth_project_name: e.target.value })} id="fourth_project_name" placeholder="Enter College Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">Start Date</label>
                                            <input type="date" name="fourth_project_start_date" className="form-control" value={state.fourth_project_start_date} onChange={(e) => setState({ ...state, fourth_project_start_date: e.target.value })} id="fourth_project_start_date" placeholder="Start Date" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputCollege">End Date</label>
                                            <input type="date" name="fourth_project_end_date" className="form-control" value={state.fourth_project_end_date} onChange={(e) => setState({ ...state, fourth_project_end_date: e.target.value })} id="fourth_project_end_date" placeholder="End Date" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputEmail4">Description</label>
                                            <textarea type="text" cols="100" rows="5" name="fourth_project_desription" className="form-control" value={state.fourth_project_desription} onChange={(e) => setState({ ...state, fourth_project_desription: e.target.value })} id="fourth_project_desription" placeholder="Description" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="inputAge">key Technologies Used</label>
                                            <input type="text" name="fourth_project_key_technologies" className="form-control" value={state.fourth_project_key_technologies} onChange={(e) => setState({ ...state, fourth_project_key_technologies: e.target.value })} id="fourth_project_key_technologies" placeholder="key Technologies" />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 1</label>
                                            <input type="text" name="skill_1" className="form-control" value={state.skill_1} onChange={(e) => setState({ ...state, skill_1: e.target.value })} id="skill_1" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_1_percentage" className="form-control" value={state.skill_1_percentage} onChange={(e) => setState({ ...state, skill_1_percentage: e.target.value })} id="skill_1_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 2</label>
                                            <input type="text" name="skill_2" className="form-control" value={state.skill_2} onChange={(e) => setState({ ...state, skill_2: e.target.value })} id="skill_2" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_2_percentage" className="form-control" value={state.skill_2_percentage} onChange={(e) => setState({ ...state, skill_2_percentage: e.target.value })} id="skill_2_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 3</label>
                                            <input type="text" name="skill_3" className="form-control" value={state.skill_3} onChange={(e) => setState({ ...state, skill_3: e.target.value })} id="skill_3" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_3_percentage" className="form-control" value={state.skill_3_percentage} onChange={(e) => setState({ ...state, skill_3_percentage: e.target.value })} id="skill_3_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 4</label>
                                            <input type="text" name="skill_4" className="form-control" value={state.skill_4} onChange={(e) => setState({ ...state, skill_4: e.target.value })} id="skill_4" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_4_percentage" className="form-control" value={state.skill_4_percentage} onChange={(e) => setState({ ...state, skill_4_percentage: e.target.value })} id="skill_4_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 5</label>
                                            <input type="text" name="skill_5" className="form-control" value={state.skill_5} onChange={(e) => setState({ ...state, skill_5: e.target.value })} id="skill_5" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_5_percentage" className="form-control" value={state.skill_5_percentage} onChange={(e) => setState({ ...state, skill_5_percentage: e.target.value })} id="skill_5_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 6</label>
                                            <input type="text" name="skill_6" className="form-control" value={state.skill_6} onChange={(e) => setState({ ...state, skill_6: e.target.value })} id="skill_6" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_6_percentage" className="form-control" value={state.skill_6_percentage} onChange={(e) => setState({ ...state, skill_6_percentage: e.target.value })} id="skill_6_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 7</label>
                                            <input type="text" name="skill_7" className="form-control" value={state.skill_7} onChange={(e) => setState({ ...state, skill_7: e.target.value })} id="skill_7" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_7_percentage" className="form-control" value={state.skill_7_percentage} onChange={(e) => setState({ ...state, skill_7_percentage: e.target.value })} id="skill_7_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="list_wrapper2">
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label for="inputCity">Skill 8</label>
                                            <input type="text" name="skill_8" className="form-control" value={state.skill_8} onChange={(e) => setState({ ...state, skill_8: e.target.value })} id="skill_8" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputZip">Percentage</label>
                                            <input type="text" name="skill_8_percentage" className="form-control" value={state.skill_8_percentage} onChange={(e) => setState({ ...state, skill_8_percentage: e.target.value })} id="skill_8_percentage" />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col text-center">
                    <button type="submit" id="submitButton" className="btn btn-reg  py-2 pull-center"><i className="fa fa-refresh" aria-hidden="true"></i><span className="ml-2">Update</span></button>
                </div>
            </form>
        </div>
    </> : <Loader/>;
};
export default Edit