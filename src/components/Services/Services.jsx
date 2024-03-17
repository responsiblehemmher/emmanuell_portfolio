import React, { useState } from "react";
import "./services.css";
import { BsArrowRightShort, BsX, BsFileEarmarkCode } from "react-icons/bs";
import { VscVerified } from "react-icons/vsc";
import { MdWeb } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h3 className="section__title">Services</h3>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <AiOutlineCode className="services__icon" />
            <h3 className="service__title">
              Frontend <br /> Development
            </h3>
          </div>
          <span className="service__button" onClick={() => toggleTab(1)}>
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop user interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">Web development and Responsive Designs</p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Javascript development
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Integrating with Backend Systems
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing web and mobile UI
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <BsFileEarmarkCode className="services__icon" />
            <h3 className="service__title">
              Backend <br /> Development
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="service__button">
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
               Designing and implementing databases to store and manage data efficiently. 
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implementing user authentication and authorization systems 
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">Web development</p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                     Building Application Programming Interfaces (APIs) to allow communication between the frontend and backend of applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Data Processing and Handling
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                     Integrating with external services, such as payment gateways, email services, or social media platforms, to enhance application functionality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <MdWeb className="services__icon" />
            <h3 className="service__title">
              Data <br /> Analytics
            </h3>
          </div>
          <span className="service__button" onClick={() => toggleTab(3)}>
            View More <BsArrowRightShort className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <BsX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Data Analytics</h3>
              <p className="services__modal-description">
                 Utilize libraries like Pandas and NumPy to clean, preprocess, and manipulate datasets.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Perform statistical analysis to uncover insights and patterns in the data
                    using Python libraries such as SciPy and StatsModels for conducting statistical tests, hypothesis testing, and modeling. 
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Apply machine learning techniques to build predictive models or uncover hidden patterns in the data with Python's Scikit-learn library.
                  </p>
                </li>
                <li className="services__modal-service">
                  <VscVerified className="services__modal-icon" />
                  <p className="services__modal-info">
                    Provides interactive and informative visualizations to communicate insights effectively using Plotly, Bokeh, and Dash Python libraries to build interactive dashboards and web applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
