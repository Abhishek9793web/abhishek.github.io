import React from "react";
import "../style.css";

import img1 from "../img/image2.png";

export default function Detail2() {
  return (
    <div>
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Resume builder
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 10 January, 2024
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a
                      href="https://resumemaker-io.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.resumemaker-io.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-10">
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Our resume maker offers a user-friendly interface with
                  intuitive tools that guide you through the resume-building
                  process effortlessly. Whether you're a seasoned professional
                  or just starting your career, our service caters to all levels
                  of expertise. With our resume maker, you can choose from a
                  variety of professionally designed templates tailored to
                  different industries and job roles. Customize your resume with
                  ease, selecting fonts, colors, and layouts that best represent
                  your unique style and professional brand. Our platform also
                  provides helpful tips and suggestions at every step, ensuring
                  that your resume showcases your strengths and achievements
                  effectively. From crafting impactful summary statements to
                  highlighting key accomplishments, our resume maker helps you
                  present yourself in the best possible light. Once your resume
                  is complete, you can download it in various formats, including
                  PDF and Word, making it easy to share with potential employers
                  or upload to job search platforms. With our resume maker
                  service, you'll stand out from the crowd and increase your
                  chances of landing your dream job. Start building your resume
                  today with our resume maker and take the first step towards a
                  successful career journey!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
