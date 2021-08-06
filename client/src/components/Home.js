import React from 'react';
import { Helmet } from "react-helmet";
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


import Loader from './Loader';
export const Home = () => {
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
		< >
			<Helmet>
				<title>Home-PORTFOLIO MAKER'S</title>
				<meta name='description' content="Portfolio Maker Free" ></meta>
			</Helmet>
			<section id="hero">
				<div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

					<ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

					<div class="carousel-inner" role="listbox">


						<div class="carousel-item active" style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}>
							<div class="carousel-container">
								<div class="container">
									<h2 class="animated fadeInDown">Welcome to <span class="logo1">PORTFOLIO<span>MAKERS'S</span></span></h2>
									<p class="animated fadeInUp">Create An Online Portfolio With Portfolio Maker's</p>
									<a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
								</div>
							</div>
						</div>


						<div class="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
							<div class="carousel-container">
								<div class="container">
									<h2 class="animated fadeInDown">Get beautiful visuals, by design</h2>
									<p class="animated fadeInUp">PORTFOLIOMAKER’S are a totally new kid of web design, created for customers who know that their skills, goals are ad don’t want to be forced through a typical structured resume or CV</p>
									<a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
								</div>
							</div>
						</div>


						<div class="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
							<div class="carousel-container">
								<div class="container">
									<h2 class="animated fadeInDown">Well designed portfolio</h2>
									<p class="animated fadeInUp">Your designed online portfolio shows off your skills and work examples in one place, from different design programs to different mediums.</p>
									<a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
								</div>
							</div>
						</div>

					</div>

					<a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>

					<a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
						<span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>

				</div>
			</section>
			<main id="main">


				<section id="about" class="about">
					<div class="container-fluid">

						<div class="row justify-content-center">
							<div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch">

							</div>

							<div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
								<h3>Born from creativity.
									Shaped by our values.</h3>
								<p>We are a company built on the things we believe in — impact, trust, care, simplicity, and a healthy dose of hard work. These values guide who we are and how we work.</p>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-fingerprint"></i></div>
									<h4 class="title"><a href="">Impact is everything</a></h4>
									<p class="description">The ability to make an impact drives us forward each and every day. Whether it’s for our members, company, team, or culture — we strive to make an impact with ideas that are better, smarter, and more innovative</p>
								</div>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-gift"></i></div>
									<h4 class="title"><a href="">Trust leads to trust.</a></h4>
									<p class="description">Trust is contagious. That’s why we bring our true selves to work every day and take accountability for our actions. It leads to better work and a better work experience. We trust ourselves and our team to do what’s right.</p>
								</div>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-atom"></i></div>
									<h4 class="title"><a href="">Simple is always better.</a></h4>
									<p class="description">We are a team of naturally curious problem solvers. Our years of experience have taught us that the best solutions are the simplest solutions. Reducing complexity, building intuitive experiences, and concise communication drive our mission of creating more with less.</p>
								</div>

							</div>
						</div>

					</div>
				</section>


				<section id="services" class="services">
					<div class="container-fluid">

						<div class="section-title">

							<h3>Check our <span>Services</span></h3>
							<p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
						</div>

						<div class="row justify-content-center">
							<div class="col-xl-10">
								<div class="row">
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-pie-chart-line"></i></div>
										<h4 class="title"><a href="">Flexible Templates </a></h4>
										<p class="description">Our customizable templates offer a more versatile website building experience than others on the market.</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-stack-line"></i></div>
										<h4 class="title"><a href="">Graphic Design </a></h4>
										<p class="description">Make your brand stand out from the crowd by creating your designer portfolio with us.
											“Give unique look to your site.”
										</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-markup-line"></i></div>
										<h4 class="title"><a href="">Web design </a></h4>
										<p class="description">We create a polished portfolio that perfectly reflects our accomplishments as a developer.</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-lock-unlock-line"></i></div>
										<h4 class="title"><a href="">24/7 Support & security </a></h4>
										<p class="description">Our service offering is a holistic approach that includes not just monitoring, but security scans, application updates.</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-profile-line"></i></div>
										<h4 class="title"><a href="">Content Marketing </a></h4>
										<p class="description">As PORTFOLIOMAKER’S, we focus on a collaborative approach to content creation and strategy , one that respects your subject matter expertise also o marketing skills.</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-body-scan-line"></i></div>
										<h4 class="title"><a href="">Design focused</a></h4>
										<p class="description">Working with the creative community, it’s no wonder why we’re driven to deliver beautiful design that honors the quality of our members’ work. Our standard for great design is high and it informs everything we do.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>











			


				<section id="contact" class="contact section-bg">
					<div class="container-fluid">

						<div class="section-title">

							<h3>Get In Touch With <span>Us</span></h3>
							<p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
						</div>

						<div class="row justify-content-center">
							<div class="col-xl-10">
								<div class="row">

									<div class="col-lg-6">

										<div class="row justify-content-center">

											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-map"></i>
												<h4>Address</h4>
												<p>Building 4th Floor, Office, Near Kothrud Bus Depot, Bandal Capital, No. 10, Paud Rd, near Kothrud,<br />Pune, Maharashtra 411038</p>
											</div>
											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-phone"></i>
												<h4>Call Us</h4>
												<p>+91 078753 30760<br />+91 7875 3307 60</p>
											</div>
											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-envelope"></i>
												<h4>Email Us</h4>
												<p>getin@codekul.com<br />info@codekul.com</p>
											</div>
											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-time-five"></i>
												<h4>Working Hours</h4>
												<p>Mon - Fri: 9AM to 5PM<br />Sunday: 9AM to 1PM</p>
											</div>

										</div>

									</div>

									<div class="col-lg-6">
										<form action="forms/contact.php" method="post" role="form" class="php-email-form">
											<div class="form-row">
												<div class="col-md-6 form-group">
													<label for="name">Your Name</label>
													<input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
													<div class="validate"></div>
												</div>
												<div class="col-md-6 form-group">
													<label for="email">Your Email</label>
													<input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
													<div class="validate"></div>
												</div>
											</div>
											<div class="form-group">
												<label for="subject">Subject</label>
												<input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
												<div class="validate"></div>
											</div>
											<div class="form-group">
												<label for="message">Message</label>
												<textarea class="form-control" name="message" rows="8" data-rule="required" data-msg="Please write something for us"></textarea>
												<div class="validate"></div>
											</div>
											<div class="mb-3">
												<div class="loading">Loading</div>
												<div class="error-message"></div>
												<div class="sent-message">Your message has been sent. Thank you!</div>
											</div>
											<div class="text-center"><button type="submit">Send Message</button></div>
										</form>
									</div>

								</div>
							</div>
						</div>

					</div>
				</section>

			</main>

			<footer id="footer">



				<div class="footer-top">
					<div class="container-fluid">
						<div class="row justify-content-center">
							<div class="col-xl-10">
								<div class="row">

									<div class="col-lg-3 col-md-6 footer-links">
										<h4>Useful Links</h4>
										<ul>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
										</ul>
									</div>

									<div class="col-lg-3 col-md-6 footer-links">
										<h4>Our Services</h4>
										<ul>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
											<li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
										</ul>
									</div>

									<div class="col-lg-3 col-md-6 footer-contact">
										<h4>Contact Us</h4>
										<p>Building 4th Floor, Office, Near Kothrud Bus Depot, Bandal Capital, No. 10, Paud Rd, near Kothrud,<br />Pune, Maharashtra 411038<br/>
											<strong>Phone:</strong> +91 7875 3307 60<br />
											<strong>Email:</strong> getin@codekul.com<br />
										</p>

									</div>

									<div class="col-lg-3 col-md-6 footer-info">
										<h6 class="text-light">About <span class="logo1">PORTFOLIO<span>MAKERS'S</span></span></h6>
										<p>PORTFOLIO MAKER’S are a totally new kid of web design, created for customers who know that their skills, goals are ad don’t want to be forced through a typical structured resume or CV</p>
										<div class="social-links mt-3">
											<a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
											<a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
											<a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
											<a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
											<a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="copyright">
						&copy; Copyright <strong><span>Codekul</span></strong>. All Rights Reserved
					</div>
					<div class="credits">

					</div>
				</div>
			</footer>
		</>

	)
}

export default Home