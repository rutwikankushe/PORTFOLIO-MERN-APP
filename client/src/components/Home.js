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
									<h2 class="animated fadeInDown">Welcome to <span>Hidayah</span></h2>
									<p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
									<a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
								</div>
							</div>
						</div>


						<div class="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}>
							<div class="carousel-container">
								<div class="container">
									<h2 class="animated fadeInDown">Lorem Ipsum Dolor</h2>
									<p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
									<a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
								</div>
							</div>
						</div>


						<div class="carousel-item" style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}>
							<div class="carousel-container">
								<div class="container">
									<h2 class="animated fadeInDown">Sequi ea ut et est quaerat</h2>
									<p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
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
								<h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
								<p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-fingerprint"></i></div>
									<h4 class="title"><a href="">Lorem Ipsum</a></h4>
									<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
								</div>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-gift"></i></div>
									<h4 class="title"><a href="">Nemo Enim</a></h4>
									<p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
								</div>

								<div class="icon-box">
									<div class="icon"><i class="bx bx-atom"></i></div>
									<h4 class="title"><a href="">Dine Pad</a></h4>
									<p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
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
										<h4 class="title"><a href="">Lorem Ipsum</a></h4>
										<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-stack-line"></i></div>
										<h4 class="title"><a href="">Dolor Sitema</a></h4>
										<p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-markup-line"></i></div>
										<h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
										<p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-shape-line"></i></div>
										<h4 class="title"><a href="">Magni Dolores</a></h4>
										<p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-fingerprint-line"></i></div>
										<h4 class="title"><a href="">Nemo Enim</a></h4>
										<p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
									</div>
									<div class="col-lg-4 col-md-6 icon-box">
										<div class="icon"><i class="ri-body-scan-line"></i></div>
										<h4 class="title"><a href="">Eiusmod Tempor</a></h4>
										<p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>











				<section id="team" class="team">
					<div class="container-fluid">

						<div class="section-title">

							<h3>Our Hard Working <span>Team</span></h3>
							<p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
						</div>

						<div class="row justify-content-center">
							<div class="col-xl-10">
								<div class="row">

									<div class="col-xl-3 col-lg-4 col-md-6">
										<div class="member">
											<img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
											<div class="member-info">
												<div class="member-info-content">
													<h4>Walter White</h4>
													<span>Chief Executive Officer</span>
												</div>
												<div class="social">
													<a href=""><i class="icofont-twitter"></i></a>
													<a href=""><i class="icofont-facebook"></i></a>
													<a href=""><i class="icofont-instagram"></i></a>
													<a href=""><i class="icofont-linkedin"></i></a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
										<div class="member">
											<img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />
											<div class="member-info">
												<div class="member-info-content">
													<h4>Sarah Jhonson</h4>
													<span>Product Manager</span>
												</div>
												<div class="social">
													<a href=""><i class="icofont-twitter"></i></a>
													<a href=""><i class="icofont-facebook"></i></a>
													<a href=""><i class="icofont-instagram"></i></a>
													<a href=""><i class="icofont-linkedin"></i></a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
										<div class="member">
											<img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />
											<div class="member-info">
												<div class="member-info-content">
													<h4>William Anderson</h4>
													<span>CTO</span>
												</div>
												<div class="social">
													<a href=""><i class="icofont-twitter"></i></a>
													<a href=""><i class="icofont-facebook"></i></a>
													<a href=""><i class="icofont-instagram"></i></a>
													<a href=""><i class="icofont-linkedin"></i></a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
										<div class="member">
											<img src="assets/img/team/team-4.jpg" class="img-fluid" alt="" />
											<div class="member-info">
												<div class="member-info-content">
													<h4>Amanda Jepson</h4>
													<span>Accountant</span>
												</div>
												<div class="social">
													<a href=""><i class="icofont-twitter"></i></a>
													<a href=""><i class="icofont-facebook"></i></a>
													<a href=""><i class="icofont-instagram"></i></a>
													<a href=""><i class="icofont-linkedin"></i></a>
												</div>
											</div>
										</div>
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
												<p>A108 Adam Street,<br />New York, NY 535022</p>
											</div>
											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-phone"></i>
												<h4>Call Us</h4>
												<p>+1 5589 55488 55<br />+1 5589 22548 64</p>
											</div>
											<div class="col-md-6 info d-flex flex-column align-items-stretch">
												<i class="bx bx-envelope"></i>
												<h4>Email Us</h4>
												<p>contact@example.com<br />info@example.com</p>
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
										<p>
											A108 Adam Street <br />
											New York, NY 535022<br />
											United States <br /><br />
											<strong>Phone:</strong> +1 5589 55488 55<br />
											<strong>Email:</strong> info@example.com<br />
										</p>

									</div>

									<div class="col-lg-3 col-md-6 footer-info">
										<h3>About Hidayah</h3>
										<p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
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