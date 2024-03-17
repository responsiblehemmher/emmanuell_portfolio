import React from "react";
import { MdVerified } from "react-icons/md";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        
        <div className="skills__group">
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">HTML & CSS</h3>
              <span class="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">jQuery</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">Git</h3>
              <span class="skills__level">Pro</span>
            </div>
          </div>
          <div className="skills__data">
            <MdVerified className="badge"/>
            <div>
              <h3 className="skills__name">React</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
