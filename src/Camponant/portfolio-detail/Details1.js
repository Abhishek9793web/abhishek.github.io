
import React from "react";
import "../style.css";

import img1 from "../img/image1.png";



export default function Detail1() {
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
                    <strong>Category</strong>: ERC-TOKEN
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://torrnet.netlify.app" target="_blank"
                        rel="noopener noreferrer">www.torrnet.com</a>
                  </li>
                </ul>
              </div>
              </div>

            <div class="col-lg-10">
             
              <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                The description of your ERC-20 token services could highlight the following points:

<strong>Token Creation:</strong> Offer services for creating ERC-20 tokens tailored to the specific needs and requirements of clients.
<strong>Customization:</strong> Provide options for customizing token attributes such as token name, symbol, total supply, decimal precision, and other parameters.
<strong>Smart Contract Development:</strong> Develop smart contracts according to the ERC-20 standard, ensuring compliance and interoperability with other Ethereum-based platforms and applications.
<strong>Token Deployment:</strong> Assist in deploying newly created ERC-20 tokens onto the Ethereum blockchain, including testing and verification of the token contract.
<strong>Token Management:</strong> Offer solutions for managing and administering ERC-20 tokens, including token transfers, balance checks, and transaction monitoring.
<strong>Security Audits:</strong> Conduct security audits to ensure the integrity and robustness of ERC-20 token contracts, identifying and mitigating potential vulnerabilities or risks.
<strong>Integration Support:</strong> Provide support for integrating ERC-20 tokens into decentralized exchanges (DEXs), wallets, payment gateways, and other blockchain-based applications.
<strong>Regulatory Compliance:</strong> Offer guidance on regulatory compliance and best practices for ERC-20 token issuers, including legal considerations and regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
