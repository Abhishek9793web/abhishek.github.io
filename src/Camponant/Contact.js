import React from "react";
import "./main";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap-icons/bootstrap-icons.css";
import "../vendor/boxicons/css/boxicons.min.css";
import "../vendor/glightbox/css/glightbox.min.css";
import "../vendor/swiper/swiper-bundle.min.css";

import { FaAngleRight } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>Contact me if any quarry need to discuss about my work.</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
                      <a
                        href="https://twitter.com/Abhishe87156156"
                        class="twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100041800362383"
                        class="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/abhishekgoswami979/?next=%2F"
                        class="instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a
                        href="https://github.com/Abhishek9793web?tab=repositories"
                        class="google-plus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/abhishek-goswami-43b653190/"
                        class="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>abhishekcs2022@gmail.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7043006042336!2d82.85469311501457!3d25.448147683780046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd5ae98d33961%3A0xe0a6882ef87ef5a7!2sLal%20Bahadur%20Shastri%20International%20Airport!5e0!3m2!1sen!2sin!4v1667498899392!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                ></iframe>
              </div>
            </div>

            <div class="col-lg-6">
              <form
                action="Contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
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
                  <a
                    href="https://twitter.com/Abhishe87156156"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="twitter"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    href="https://www.instagram.com/abhishekgoswami979/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="facebook"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/abhishekgoswami979/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="instagram"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://github.com/Abhishek9793web?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="google-plus"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-goswami-43b653190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="linkedin"
                  >
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
                <a
                  href="https://github.com/Abhishek9793web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume maker
                </a>
              </p>
            </div>
          </div>
          <a href="/" className="back-to-top ">
            <FaArrowUp />
          </a>
        </div>
      </section>
    </div>
  );
}
