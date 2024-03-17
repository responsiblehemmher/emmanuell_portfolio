import React, { useState } from "react";
import "./qualification.css";
import { SlGraduation } from "react-icons/sl";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { VscBriefcase } from "react-icons/vsc";


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h3 className="section__title">Qualification</h3>
      <span className="section__subtitle">My journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button__flex qualification__active"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <SlGraduation className="qualification__icon" /> Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button__flex qualification__active"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <VscBriefcase className="qualification__icon" /> Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Javascript</h3>
                <span className="qualification__subtitle">
                  SoloLearn - Institute
                  W3Schools - Institute
                  Openweaver - Institute
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ReactJs Programming</h3>
                <span className="qualification__subtitle">
                  Programmingwithmosh - Youtube
                  John Smilga - Youtube
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">PHP & SQL</h3>
                <span className="qualification__subtitle">
                  Mosh - Youtube
                  Dani Krossing - Youtube
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2021 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Development</h3>
                <span className="qualification__subtitle">
                  BoldLinks - Institute
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Node js & Next js</h3>
                <span className="qualification__subtitle">
                  W3Schools - Institute
                  Geeksforgeeks - Institute
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2023 - Present
                </div>
              </div>
            </div>
          </div>
          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Website Manager</h3>
                <span className="qualification__subtitle">
                  Hemmingways Safaris Africa [Alausa, Ikeja, Lagos]
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developers/Intern</h3>
                <span className="qualification__subtitle">
                  Side-One Institute [Igando, Lagos]
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2021 - 2022
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Backend Intern/Data Analytics</h3>
                <span className="qualification__subtitle">
                  VenWorld Global Institute [Victoria Island, Lagos]
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Programming Instructor</h3>
                <span className="qualification__subtitle">
                  Sunsite Computer Institute [Ogba/Fagba, Lagos]
                  Chrisland Tech Hub [Ikeja, Lagos]
                  Virtual Tutor
                </span>
                <div className="qualification__calendar">
                  <BsFillCalendarCheckFill /> 2023 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
