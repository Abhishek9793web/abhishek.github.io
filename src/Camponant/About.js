import React from "react";
import "./style.css";
import "./main";
import Counter from "./counter";
//import { FaRegSmile } from "react-icons/fa";
//import { PiBooksLight } from "react-icons/pi";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap-icons/bootstrap-icons.css";
import "../vendor/boxicons/css/boxicons.min.css";
import "../vendor/glightbox/css/glightbox.min.css";
import "../vendor/swiper/swiper-bundle.min.css";

export default function About() {


  
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              Hi,My name is Abhishek goswami.I am study in b.tech from GLA
              University Mathura.I am a Computer Science Engineering, My
              Profession is Web developer.I Make a many websites, games and
              apps. I love to learn new things and always try to improve my
              skills.
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
                        <strong>Name:</strong> <span>Abhishek Goswami</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong>{" "}
                        <span>https://resumemaker-io.netlify.app</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>VARANASI, INDIA</span>
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
                        <strong>Degree:</strong> <span>Under graduate</span>
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
                <div class="progress">
                  <span class="skill">
                    React <i class="val">55%</i>
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

      <section id="about" className="about">
        <div class="section-title">
          <span>My Journy</span>
          <h2>My Journy</h2>
          <p>
            I am hails from Varanasi, a city revered as one of the holiest in
            the world. From an early age, he demonstrated sincerity and a
            penchant for analytical thinking. His innate curiosity led him to
            meticulously analyze electrical components upon encountering them,
            reflecting a natural inclination towards understanding intricate
            systems. Throughout his academic journey, Abhishek maintained a
            steadfast commitment to excellence. Excelling in his early years, he
            consistently achieved commendable results, securing notable progress
            with each passing grade. However, the transition to higher education
            posed challenges, as the absence of academic guidance from his
            less-educated parents presented hurdles. Undeterred, Abhishek's
            intrinsic motivation remained unwavering. Despite disruptions caused
            by the COVID-19 pandemic, Abhishek's determination persisted.
            Adaptation to online learning platforms became imperative, though it
            inevitably impacted the trajectory of his educational path. Despite
            the hurdles encountered during his 11th-grade studies, Abhishek
            persevered, albeit with some setbacks in his academic performance.
            Undoubtedly, Abhishek's resilience and determination shine through,
            underscoring his ability to navigate obstacles and emerge stronger.
            As he progresses into his final year of secondary education, his
            dedication remains unwavering, poised to overcome any challenges
            that may arise.
          </p>
        </div>

        <div className="container">
          <div className="work">
            {/* <div className="col-lg-4" data-aos="fade-right">
                            <img src={require("./img/abhishek2.jpg.png")} className="img-fluid" alt=""/>
                        </div> */}
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer.</h3>
              <p className="fst-italic">
                i am an aspiring web developer with a passion for crafting
                innovative digital experiences. Drawing upon his innate
                curiosity and analytical mindset, he delves into the intricacies
                of web development, driven by a desire to create impactful
                solutions that resonate with users. As he navigates the dynamic
                landscape of technology, Abhishek embraces continuous learning,
                staying abreast of the latest trends and advancements in web
                development. From mastering frontend frameworks like React and
                Angular to honing his skills in backend technologies such as
                Node.js and Django, he approaches each project with a thirst for
                knowledge and a drive for mastery.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Mathura,uttar pradesh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Since:</strong> <span>2022-present</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="work">
            <div
              className="col-lg-10 pt-8 pt-lg-0 content"
              data-aos="fade-left"
            >
              <h3> Designer.</h3>
              <p className="fst-italic">
                I am a talented web designer who leverages a diverse set of
                tools, including Figma, Canva, Spline, and more, to bring his
                creative visions to life. With a keen eye for aesthetics and a
                passion for user-centric design, he specializes in crafting
                visually captivating and intuitively navigable digital
                experiences. My portfolio showcases his versatility and
                ingenuity as a web designer, featuring a diverse range of
                projects that demonstrate his ability to adapt to various design
                styles and client requirements. Whether collaborating with a
                team or working independently, he excels in delivering designs
                that not only meet but exceed the objectives and aspirations of
                his clients.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.figma.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+916387705166</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>abhishekcs2022@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>20</span>
                    </li>

                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="work">
            <div
              className="col-lg-10 pt-8 pt-lg-0 content"
              data-aos="fade-left"
            >
              <h3>Blockchain Developer.</h3>
              <p className="fst-italic">
                Blockchain technology is a most demanded.A blockchain is
                essentially a digital ledger of transactions that is duplicated
                and distributed across the entire network of computer systems on
                the blockchain. and Web development is the process of building,
                programming, and maintaining websites and web applications.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>abhishekcs2022@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>21</span>
                    </li>

                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span> Not Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
