import React from "react";
import "../style.css";

import img1 from "../img/image.png";

export default function Details() {
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
                  <strong>Category</strong>: E-Commerce
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2022
                </li>
                <li>
                  <strong>Project URL</strong>: <a href="/">www.example.com</a>
                </li>
              </ul>
            </div>
            </div>

            <div class="col-lg-10">
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  E-commerce services encompass a wide range of solutions and
                  offerings aimed at facilitating online buying and selling
                  activities for businesses. These services typically include:
                  <strong>1. Online Store Development:</strong> Building and
                  customizing e-commerce websites tailored to the specific needs
                  of businesses, incorporating features such as product catalog
                  management, secure payment gateways, and user-friendly
                  navigation.
                  <strong>Payment Gateway Integration:</strong> Integrating
                  secure payment gateways to enable seamless and safe
                  transactions, allowing customers to make purchases using
                  various payment methods such as credit/debit cards, digital
                  wallets, and online banking.
                  <strong>Inventory Management:</strong> Implementing systems
                  for efficient inventory management, including real-time
                  tracking of stock levels, automated replenishment, and
                  synchronization across multiple sales channels.
                  <strong>Order Fulfillment: </strong>Streamlining order
                  processing and fulfillment operations to ensure timely
                  delivery of products to customers, optimizing logistics, and
                  minimizing errors.
                  <strong>Customer Relationship Management (CRM):</strong>{" "}
                  Implementing CRM solutions to manage customer interactions,
                  track customer behavior, and personalize marketing efforts to
                  enhance customer engagement and retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
