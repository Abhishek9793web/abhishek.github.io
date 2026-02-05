import "./main";
import img1 from "../Camponant/img/image1.png";
import img from "../Camponant/img/image.png";
import img2 from "../Camponant/img/image2.png";
import img3 from "../Camponant/img/image3.png";
import img4 from "../Camponant/img/image4.png";
import img5 from "../Camponant/img/image5.png";
import img6 from "../Camponant/img/image6.png";
import img7 from "../Camponant/img/image7.png";
import img8 from "../Camponant/img/image8.png";
import img9 from "../Camponant/img/image9.png";
import img10 from "../Camponant/img/image10.png";
import img11 from "../Camponant/img/image11.png";
import img12 from "../Camponant/img/image12.png";
import img13 from "../Camponant/img/image13.png";
import img14 from "../Camponant/img/image14.png";

import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap-icons/bootstrap-icons.css";
import "../vendor/boxicons/css/boxicons.min.css";
import "../vendor/glightbox/css/glightbox.min.css";
import "../vendor/swiper/swiper-bundle.min.css";

import React, { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("*"); // State to store the current filter

  const handleFilter = (filterValue) => {
    setFilter(filterValue); // Update the filter state when a filter is selected
  };

  const portfolioItems = [
    { title: "ERC20 Token", category: ".filter-web", imgSrc: img1, src: "/details1" },
    { title: "Shoping Zone", category: ".filter-web", imgSrc: img, src: "/details" },
    { title: "Resume Builder", category: ".filter-web", imgSrc: img2, src: "/detail2" },
    { title: "StartUp-Deals", category: ".filter-web", imgSrc: img3, src: "/detail3" },
    { title: "CSED-Website-Bootstrap", category: ".filter-web", imgSrc: img4, src: "/detail4" },
    { title: "SHA-256-Hash-Generator", category: ".filter-web", imgSrc: img5, src: "/detail5" },
    { title: "Space-Game", category: ".filter-web", imgSrc: img6, src: "/detail6" },
    { title: "Google form", category: ".filter-web", imgSrc: img7, src: "/detail7" },
    { title: "Metamask signup", category: ".filter-web", imgSrc: img8, src: "/detail8" },
    { title: "Project 9", category: ".filter-web", imgSrc: img9, src: "/detail9" },
    { title: "Project 10", category: ".filter-card", imgSrc: img10, src: "/detail10" },
    { title: "Project 11", category: ".filter-card", imgSrc: img11, src: "/detail11" },
    { title: "Project 12", category: ".filter-card", imgSrc: img12, src: "/detail12" },
    { title: "Snake Game", category: ".filter-card", imgSrc: img13, src: "/detail13" },
    { title: "NFT Marketplace", category: ".filter-card", imgSrc: img14, src: "/detail14" },
    // Add more portfolio items as needed
  ];

  return (
    <div>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title">
            <span>My Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              It is my  professional portfolio website showcasing skills, projects, and career objectives
            </p>
          </div>
          {/* Filter buttons */}
          <ul id="portfolio-flters" className="d-flex justify-content-center">
            <li
              onClick={() => handleFilter("*")}
              className={filter === "*" ? "filter-active" : ""}
            >
              All
            </li>
            <li
              onClick={() => handleFilter(".filter-app")}
              className={filter === ".filter-app" ? "filter-active" : ""}
            >
              App
            </li>
            <li
              onClick={() => handleFilter(".filter-card")}
              className={filter === ".filter-card" ? "filter-active" : ""}
            >
              Card
            </li>
            <li
              onClick={() => handleFilter(".filter-web")}
              className={filter === ".filter-web" ? "filter-active" : ""}
            >
              Web
            </li>
          </ul>

          {/* Portfolio items */}
          <div className="row portfolio-container">
            {portfolioItems
              .filter(
                (item) => filter === "*" || item.category.includes(filter)
              )
              .map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
                >
                  <div className="portfolio-img">
                    <img
                      src={item.imgSrc}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <a
                    href={item.imgSrc}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title={item.title}
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href={item.src} className="details-link" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Portfolio;
