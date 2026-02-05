// components/LandingPage.js
import React from "react";
import "./style.css";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,

} from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import Counter from "./counter";
import img from "./me.jpg";

// import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./main";

import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap-icons/bootstrap-icons.css";
import "../vendor/boxicons/css/boxicons.min.css";
import "../vendor/glightbox/css/glightbox.min.css";
import "../vendor/swiper/swiper-bundle.min.css";

import pdf from './Abhishek_Goswami_Resume.pdf';



//SwiperCore.use([Pagination]);
function Home() {

  return (
    <div>
      <section id="hero">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Satisfy"
          rel="stylesheet"
        ></link>
        <div className="hero-container">
          {/* <h1>Abhishek Goswami</h1>
          <h2>I'm a Computer Science Engineer In New York City</h2> */}
          <a href="/" className="btn-scroll scrollto" title="Scroll Down">
            <FaChevronDown />
          </a>
        </div>
        <div className="circle">
          <a href={pdf} className="btn-port2" target="_blank" rel="noopener noreferrer" >
            Hire me
          </ a>
          <button
            className="btn-port"
            onClick={() => window.open("/portfolio", "_blank")}
          >
            Portfolio
          </button>
        </div>

      </section>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              i am an aspiring web developer with a passion for crafting
              innovative digital experiences. Drawing upon his innate curiosity
              and analytical mindset, he delves into the intricacies of web
              development, seeking to create solutions that not only.
            </p>
          </div>

          <div class="row">
            <div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div class="col-lg-8 d-flex flex-column align-items-stretch">
              <div class="content ps-lg-4 d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Name:</strong> <span>Abhishek goswami</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>Timevision.in</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Varanasi, INDIA</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>21</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Undergraduate</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>abhishekcs2022@gmail.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-n4">
                  <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-emoji-smile"
                        style={{ color: "#20b38e" }}
                      ></i>

                      <Counter start={0} end={232} duration={1} />

                      <p>
                        <strong>Reviews </strong> Our pleasure follows something
                        itself architect out.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i
                        className="bi bi-card-checklist"
                        style={{ color: "#20b38e" }}
                      ></i>

                      <Counter start={0} end={51} duration={1} />
                      <p>
                        <strong>Projects</strong> We done many project
                        like:e-commerce,Resume maker,erc 20 token.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i className="bi bi-clock"></i>
                      <Counter start={0} end={2} duration={1} />

                      <p>
                        <strong>Years of experience</strong>i am experience in
                        web developement.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i className="bi bi-award"></i>
                      <Counter start={0} end={10} duration={1} />

                      <p>
                        <strong>Achivement</strong> i have many Achivement from
                        my work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skills-content ps-lg-4">
                <div class="progress">
                  <span class="skill">
                    HTML <i class="val">100%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    CSS <i class="val">90%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    JavaScript <i class="val">75%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container position-relative">
          <Swiper
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={img} className="testimonial-img" alt="" />
                <h3>Manish Gupta</h3>
                <h4>Business &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  "Having reviewed the project, I am impressed with the level of detail and thoughtfulness
                  put into its development. The project demonstrates a strong understanding of blockchain
                  concepts and effectively applies them to create a practical solution.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={img} className="testimonial-img" alt="" />
                <h3>Manish rai</h3>
                <h4>Tranner &amp; Blockchain</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  The architecture is well-designed, and the code is clean and maintainable.
                  It's evident that the development team has a deep understanding of blockchain technology
                  and its potential applications.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={img} className="testimonial-img" alt="" />
                <h3>Aditya</h3>
                <h4>Student &amp; Technology</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>Rating: 4.5/5 ,
                  Additionally, I am proposed incorporating a contact form or interactive features
                  to enhance user engagement and facilitate communication with visitors.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <span>My Services</span>
            <h2>My Services</h2>
            <p>
              Our Services offers a user-friendly interface with intuitive tools that guide you . We are committed to providing top-notch serviceI offer various services as per your requirements.
            </p>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title">
                  <a href="/">Web Design</a>
                </h4>
                <p class="description">
                  Welcome to our professional web design services! We specialize in creating
                  stunning and functional websites tailored to meet your unique business needs.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title">
                  <a href="/">Web developement</a>
                </h4>
                <p class="description">
                  Are you looking to establish a strong online presence for your business
                  or organization? Look no further! Our web development services offer tailored solutions to meet your specific needs and objectives.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4 class="title">
                  <a href="https://resumemaker-io.netlify.app" target="_blank" rel="noopener noreferrer">
                    Resume Builder
                  </a>
                </h4>
                <p class="description">
                  "Welcome to our resume maker service, where we transform your professional
                  journey into a compelling narrative. and our platform empowers you to create
                  a resume that truly reflects your skills, experience, and personality.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-world"></i>
                </div>
                <h4 class="title">
                  <a href="/">E-commerce</a>
                </h4>
                <p class="description">
                  E-commerce services encompass a wide range of solutions and offerings aimed at facilitating
                  online buying and selling activities for businesses. These services typically include:Online
                  Store Development,Payment Gateway Integration,Order Fulfillment.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-world"></i>
                </div>
                <h4 class="title">
                  <a href="https://torrnet.netlify.app" target="_blank" rel="noopener noreferrer">Erc-Token</a>
                </h4>
                <p class="description">
                  It is a technical standard used for smart contracts on the Ethereum blockchain.
                  These tokens are fungible and can represent various digital or physical assets,
                  including cryptocurrencies, loyalty points, or even real-world commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div class="footer-top">
          <div class="box">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Portfolio</h3>
                <p>
                  Contact Us <br />
                  Varanasi,221202
                  <br />
                  INDIA <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> abhishekcs2022@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <FaAngleRight /> <a href="/">Home</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/About">About us</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/Services">Services</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/Services">Terms of service</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <FaAngleRight />
                    <a href="/">Web Design</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/">Web Development</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/">Product Management</a>
                  </li>
                  <li>
                    <FaAngleRight />
                    <a href="/">Marketing</a>
                  </li>
                  <li>
                    <FaAngleRight /> <a href="/">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Follow our social media handle make batter create batter in
                  your life.(o!o)
                </p>
                <div class="social-links mt-3">
                  <a href="https://twitter.com/Abhishe87156156" target="_blank" rel="noopener noreferrer" class="twitter">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="https://www.instagram.com/abhishekgoswami979/?next=%2F" target="_blank" rel="noopener noreferrer" class="facebook">
                    <BsFacebook />
                  </a>
                  <a href="https://www.instagram.com/abhishekgoswami979/?next=%2F" target="_blank" rel="noopener noreferrer" class="instagram">
                    <AiFillInstagram />
                  </a>
                  <a href="https://github.com/Abhishek9793web?tab=repositories" target="_blank" rel="noopener noreferrer" class="google-plus">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-goswami-43b653190/" target="_blank" rel="noopener noreferrer" class="linkedin">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p>
                {" "}
                &copy; {new Date().getFullYear()} Shopint zone. All rights
                reserved.
              </p>
              <p>
                {" "}
                Designed by{" "}
                <a href="https://github.com/Abhishek9793web" target="_blank" rel="noopener noreferrer">Resume maker</a>
              </p>
            </div>
          </div>
          <a href="/" className="back-to-top ">
            <FaArrowUp />
          </a>
        </div>
      </section>
      <a
        href="/"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default Home;
