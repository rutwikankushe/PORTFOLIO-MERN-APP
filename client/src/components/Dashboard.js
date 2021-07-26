import React from 'react';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
	REDIRECT_FALSE,
	REMOVE_MESSAGE,
	SET_LOADER,
	CLOSE_LOADER,
	SET_MESSAGE,
} from '../store/types/PostTypes';
import '../css/style.css';

import moment from 'moment';

import Loader from './Loader';
import { PDFExport } from "@progress/kendo-react-pdf";

import { fetchProfile } from "../store/asyncMethods/PostMethods";


export const Dashboard = () => {
	const pdfExportComponent = React.useRef(null);

	const { redirect, message, loading } = useSelector(
		(state) => state.PostReducer
	);


	const {
		user: { _id, email }

	} = useSelector((state) => state.AuthReducer);

	const { user_profiles } = useSelector((state) => state.FetchUserProfile);
	console.log('my profile:', user_profiles);
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

	// const generatePDF = () => {
	// 	var doc = new jsPDF("p", "pt", "a4");
	// 	doc.html(document.querySelector("#content"), {
	// 		callback: function (pdf) {
	// 			pdf.save("resume.pdf")
	// 		}

	// 	});


	// };
	return (
		< >
			<Helmet>
				<title>Dashboard-PORTFOLIO MAKER'S</title>
				<meta name='description' content="Portfolio Maker Free" ></meta>
			</Helmet>
			<Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>


			{!loading ? (user_profiles.length > 0 ? user_profiles.map(user_profile => (
				<>
					<div class="banner-area" id="home">

						<div class="banner-table">
							<div class="banner-table-cell">
								<div class="welcome-text">
									<div class="container">
										<div class="row">
											<div class="col-md-12 col-xs-12">
												<section class="intro animate-scale section-padding-title">

													<div class="img-area">
														<img src={`/images/${user_profile.image}`} alt={user_profile.image} />

													</div>

													<h3>I'm {user_profile.name}</h3>






												</section>

												<div class="clearfix"></div>


											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>



					<div class="about-area section-padding" >
						<div class="container">
							<div class="row">

								<div class="col-md-12  col-sm-12">

									<div class="about-right">
										<div class="section-title">
											<h2>About <span>Me</span></h2>
										</div>
										<p>I am <span>{user_profile.name}</span>. I am a simple , creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful for others.</p>
										<p>I have vast experience in HTML5, CSS3, Javascript, JQuery, Node js and on. I have already completed over 500 projecs of different buyer throughout the world. </p>


										<div class="row">
											<div class="col-sm-6">
												<ul class="about-list">
													<li> <span class="title">Name</span> <span class="value"> {user_profile.name}</span> </li>
													<li> <span class="title">Age</span> <span class="value"> {user_profile.age} Years</span> </li>
													<li> <span class="title">Email</span> <span class="value"> {email}</span> </li>
												</ul>
											</div>
											<div class="col-sm-6">
												<ul class="about-list">
													<li> <span class="title">Phone</span> <span class="value"> {user_profile.phone}</span> </li>
													<li> <span class="title">Address</span> <span class="value"> {user_profile.address}, {user_profile.city}- {user_profile.zipcode}, {user_profile.user_state}</span> </li>
													<li> <span class="title">Hobby</span> <span class="value"> {user_profile.hobby}</span> </li>
												</ul>
											</div>
										</div>

										{/* style={{ position: "absolute", left: "-10000px" }} */}
										<div >
											<PDFExport paperSize="A4"  ref={pdfExportComponent}>
												<div id="body">
													<div class="container-resume">
														<div class="header">
															<div class="full-name">
																<span class="first-name">{user_profile.name}</span>
																
															</div>
															<div class="contact-info">
																<span class="email">Email: </span>
																<span class="email-val">{email}</span>
																<span class="separator"></span>
																<span class="phone">Phone: </span>
																<span class="phone-val">{user_profile.phone}</span>
															</div>

															<div class="about">
																<span class="position">Front-End Developer </span>
																<span class="desc">
																	I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.
																</span>
															</div>
														</div>
														<div class="details">
															<div class="section">
																<div class="section__title">Education</div>
																<div class="section__list">
																	<div class="section__list-item">
																		<div class="left">
																			<div class="name">{user_profile.school_name}</div>
																			<div class="addr">{user_profile.subject_name}</div>
																		
																		</div>
																		<div class="right">
																			<div class="name">{user_profile.school_aggregate}%</div>
																			<div class="desc">{user_profile.passing_year}</div>
																		</div>
																	</div>
																	<div class="section__list-item">
																		<div class="left">
																			<div class="name">Akount</div>
																			<div class="addr">San Monica, CA</div>
																			<div class="duration">Jan 2011 - Feb 2015</div>
																		</div>
																		<div class="right">
																			<div class="name">Fr developer</div>
																			<div class="desc">did This and that</div>
																		</div>
																	</div>

																</div>
															</div>
															<div class="section">
																<div class="section__title">Education</div>
																<div class="section__list">
																	<div class="section__list-item">
																		<div class="left">
																			<div class="name">Sample Institute of technology</div>
																			<div class="addr">San Fr, CA</div>
																			<div class="duration">Jan 2011 - Feb 2015</div>
																		</div>
																		<div class="right">
																			<div class="name">Fr developer</div>
																			<div class="desc">did This and that</div>
																		</div>
																	</div>
																	<div class="section__list-item">
																		<div class="left">
																			<div class="name">Akount</div>
																			<div class="addr">San Monica, CA</div>
																			<div class="duration">Jan 2011 - Feb 2015</div>
																		</div>
																		<div class="right">
																			<div class="name">Fr developer</div>
																			<div class="desc">did This and that</div>
																		</div>
																	</div>

																</div>

															</div>
															<div class="section">
																<div class="section__title">Projects</div>
																<div class="section__list">
																	<div class="section__list-item">
																		<div class="name">DSP</div>
																		<div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
																	</div>

																	<div class="section__list-item">
																		<div class="name">DSP</div>
																		<div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="section">
																<div class="section__title">Skills</div>
																<div class="skills">
																	<div class="skills__item">
																		<div class="left"><div class="name">
																			Javascript
																		</div></div>
																		<div class="right">
																			<input id="ck1" type="checkbox" checked />

																			<label for="ck1"></label>
																			<input id="ck2" type="checkbox" checked />

																			<label for="ck2"></label>
																			<input id="ck3" type="checkbox" />

																			<label for="ck3"></label>
																			<input id="ck4" type="checkbox" />
																			<label for="ck4"></label>
																			<input id="ck5" type="checkbox" />
																			<label for="ck5"></label>

																		</div>
																	</div>

																</div>
																<div class="skills__item">
																	<div class="left"><div class="name">
																		CSS</div></div>
																	<div class="right">
																		<input id="ck1" type="checkbox" checked />

																		<label for="ck1"></label>
																		<input id="ck2" type="checkbox" checked />

																		<label for="ck2"></label>
																		<input id="ck3" type="checkbox" />

																		<label for="ck3"></label>
																		<input id="ck4" type="checkbox" />
																		<label for="ck4"></label>
																		<input id="ck5" type="checkbox" />
																		<label for="ck5"></label>

																	</div>
																</div>

															</div>
															<div class="section">
																<div class="section__title">
																	Interests
																</div>
																<div class="section__list">
																	<div class="section__list-item">
																		Football, programming.
																	</div>
																</div>
															</div>
														</div>
													</div>


												</div>
											</PDFExport>
										</div>
										<button class="down-btn btn-a" onClick={() => {
											if (pdfExportComponent.current) {
												pdfExportComponent.current.save();
											}
										}} >download resume</button>

									</div>
								</div>
							</div>
						</div>

					</div>



					<div class="about-area2 section-padding" id="services">
						<div class="container">

							<div class="section-title">
								<h2>My <span>Education</span></h2>
							</div>

							<div class="row">
								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h3>School  : &nbsp;{user_profile.school_name} </h3>
											<h3>Course : &nbsp;{user_profile.subject_name}</h3>
											<h3>Year: &nbsp;{user_profile.passing_year}</h3>
											<h4>Percentage : &nbsp;{user_profile.school_aggregate} %</h4>

										</li>


									</ul>
								</div>

								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h3>College  : &nbsp;{user_profile.college_name} </h3>
											<h3>Course : &nbsp;{user_profile.college_course}  <span className="px-2">&nbsp;|&nbsp;&nbsp;&nbsp;  Branch : {user_profile.college_branch} </span></h3>
											<h3>Year : &nbsp;{user_profile.college_passing_year}</h3>
											<h4>Percentage : &nbsp;{user_profile.college_aggregate} %</h4>

										</li>


									</ul>
								</div>




							</div>
							<div class="row" style={{ marginTop: "20px", }}>
								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h3>College  : &nbsp;{user_profile.Degree_college_name} </h3>
											<h3>Course : &nbsp;{user_profile.Degree_college_course}   <span className="px-2">&nbsp;|&nbsp;&nbsp;&nbsp; Branch : {user_profile.Degree_college_branch} </span></h3>
											<h3>Year: &nbsp;{user_profile.Degree_college_passing_year}</h3>
											<h4>Percentage : &nbsp;{user_profile.Degree_college_aggregate} %</h4>

										</li>


									</ul>
								</div>

								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h3>College  : &nbsp;{user_profile.Instiute_name} </h3>
											<h3>Course : &nbsp;{user_profile.Instiute_course}   <span className="px-2">&nbsp;|&nbsp;&nbsp;&nbsp; Branch : {user_profile.Instiute_branch} </span></h3>
											<h3>Year: &nbsp;{user_profile.Instiute_passing_year}</h3>
											<h4>Percentage : &nbsp;{user_profile.Instiute_aggregate} %</h4>

										</li>


									</ul>
								</div>




							</div>
						</div>
					</div>





					<div id="resume" class="experience-area section-padding">
						<div class="container">
							<div class="row">
								<div class="section-title">
									<h2>My <span>Projects</span></h2>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h5>{user_profile.first_project_name} </h5>
											<h4>{moment(user_profile.first_project_start_date).format('Do MMM  YYYY')} - {moment(user_profile.first_project_end_date).format('Do MMM YYYY')}</h4>
											<p>{user_profile.first_project_desription}</p>
											<h3 style={{ paddingTop: "8px" }}>Technologies : &nbsp;{user_profile.first_project_key_technologies}</h3>
										</li>
										<li class="resume-item expr">
											<h5>{user_profile.second_project_name} </h5>
											<h4>{moment(user_profile.second_project_start_date).format('Do MMM  YYYY')} - {moment(user_profile.second_project_end_date).format('Do MMM YYYY')}</h4>
											<p>{user_profile.second_project_desription}</p>
											<h3 style={{ paddingTop: "8px" }}>Technologies : &nbsp;{user_profile.second_project_key_technologies}</h3>
										</li>

									</ul>
								</div>

								<div class="col-md-6">
									<ul class="resumes">
										<li class="resume-item expr">
											<h5>{user_profile.third_project_name} </h5>
											<h4>{moment(user_profile.third_project_start_date).format('Do MMM  YYYY')} - {moment(user_profile.third_project_end_date).format('Do MMM YYYY')}</h4>
											<p>{user_profile.third_project_desription}</p>
											<h3 style={{ paddingTop: "8px" }}>Technologies : &nbsp;{user_profile.third_project_key_technologies}</h3>
										</li>
										<li class="resume-item expr">
											<h5>{user_profile.fourth_project_name} </h5>
											<h4>{moment(user_profile.fourth_project_start_date).format('Do MMM  YYYY')} - {moment(user_profile.fourth_project_end_date).format('Do MMM YYYY')}</h4>
											<p>{user_profile.fourth_project_desription}</p>
											<h3 style={{ paddingTop: "8px" }}>Technologies : &nbsp;{user_profile.fourth_project_key_technologies}</h3>
										</li>

									</ul>
								</div>
							</div>
						</div>
					</div>





					<div id="portfolio" class="skills-area section-padding">
						<div class="container">
							<div class="row">
								<div class="section-title">
									<h2>My <span>Skills</span></h2>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="about-text-right">

										<div id="skills">

											<div class="row">

												<div class="col-md-6">
													<div class="col-md-12">


														<div class="skillbar" data-percent="95%">


															<h6 class="skillbar-title">{user_profile.skill_1}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_1_percentage}%</h6>


															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_1_percentage}%` }} ></div>
															</div>

														</div>


													</div>


													<div class="col-md-12">


														<div class="skillbar" data-percent="90%">


															<h6 class="skillbar-title">{user_profile.skill_2}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_2_percentage}%</h6>

															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_2_percentage}%` }} ></div>
															</div>

														</div>


													</div>


													<div class="col-md-12">


														<div class="skillbar" data-percent="90%">


															<h6 class="skillbar-title">{user_profile.skill_3}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_3_percentage}%</h6>


															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_3_percentage}%` }} ></div>
															</div>

														</div>


													</div>
												</div>

												<div class="col-md-6">
													<div class="col-md-12">


														<div class="skillbar" data-percent="85%">


															<h6 class="skillbar-title">{user_profile.skill_4}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_4_percentage}%</h6>

															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_4_percentage}%` }} ></div>
															</div>

														</div>


													</div>


													<div class="col-md-12">


														<div class="skillbar" data-percent="75%">


															<h6 class="skillbar-title">{user_profile.skill_5}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_5_percentage}%</h6>


															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_5_percentage}%` }} ></div>
															</div>

														</div>


													</div>


													<div class="col-md-12">


														<div class="skillbar" data-percent="75%">

															<h6 class="skillbar-title">{user_profile.skill_6}</h6>

															<h6 class="skillbar-percent">{user_profile.skill_6_percentage}%</h6>
															<div class="skillbar-bar">
																<div class="skillbar-child " style={{ width: `${user_profile.skill_6_percentage}%` }} ></div>
															</div>

														</div>


													</div>
												</div>

											</div>

										</div>

									</div>
								</div>
							</div>
						</div>
					</div>












					<div id="contact" class="contact-area section-padding">
						<div class="container">
							<div class="row">
								<div class="section-title">
									<h2>My <span>Contact</span></h2>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 box-contact-form">

									<form id="contact-form" method="post" novalidate="true">

										<div class="messages"></div>


										<div class="controls">

											<div class="row">
												<div class="col-md-5">
													<div class="form-group">
														<input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your full name *" readOnly value={user_profile.name} required="required" data-error="Fullname is required." />
														<div class="help-block with-errors"></div>
													</div>
												</div>
												<div class="col-md-7">
													<div class="form-group">
														<input id="form_email" type="email" name="email" class="form-control" placeholder="Enter your email *" readOnly value={email} required="required" data-error="Valid email is required." />
														<div class="help-block with-errors"></div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-md-12">
													<div class="form-group">
														<textarea id="form_message" name="message" class="form-control" placeholder="Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
														<div class="help-block with-errors"></div>
													</div>
												</div>
												<div class="col-md-12">
													<button class="btn btn-send" value="">Send message</button>
												</div>
											</div>
										</div>

									</form>

								</div>

								<div class="col-xs-12 col-sm-12 col-md-5 col-md-offset-1">
									<div class="right-contact">
										<div class="right-contact-text">
											<i class="fa fa-map-marker"></i>
											<h2>Address / Street</h2>
											<p>{user_profile.address},{user_profile.city}-{user_profile.zipcode},{user_profile.user_state}</p>

										</div>
										<div class="right-contact-text">
											<i class="fa fa-phone"></i>
											<h2>Contact Number</h2>
											<p>{user_profile.phone}</p>

										</div>
										<div class="right-contact-text">
											<i class="fa fa-globe"></i>
											<h2>Website Address</h2>
											<p>www.yourwebsite.com</p>

										</div>
									</div>
								</div>

							</div>
						</div>

					</div>


				</>
			)) : <>
				<div >

					<div id="notfound">
						<div class="notfound">
							<div class="notfound-404">
								<h1>No Profile </h1>
							</div>
							<h2>We are sorry, Please Create Your Profile!</h2>
							<p>The Portfolio page you are looking for is not created yet please create Your profile first.Follow the Below link to create profile</p>
							<Link to="/createprofile">Create Profile Here</Link>
						</div>
					</div>
				</div>

			</>
			) : (
				<Loader />
			)}

		</>
	)
}

export default Dashboard