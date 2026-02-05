
import React from "react";
import "../style.css";

import img1 from "../img/image3.png";



export default function Detail3() {
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
                    <strong>Category</strong>: Web Application
                  </li>
                  <li>
                    <strong>Client</strong>: Personal Project
                  </li>
                  <li>
                    <strong>Project date</strong>: 10 Feb, 2026
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://startup-deals-6si3.vercel.app/">https://startup-deals-6si3.vercel.app/</a>
                  </li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2>Startup Deals</h2>
                <p>
                  Startup Deals is a web application that helps you find the best deals on startups.
                  It is a platform that allows you to find the best deals on startups and compare
                  them with other startups. It is a platform that allows you to find the best deals
                  on startups and compare them with other startups.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
