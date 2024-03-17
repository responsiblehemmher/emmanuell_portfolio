import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiLinkedin } from 'react-icons/tfi';
import { FiGithub } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/hresponsible?igsh=MzNlNGNkZWQ4Mg=="
        className="home__social-icon"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href="https://twitter.com/EdunjobiEmmanu2?t=2AyNqL_ktZylAESc6AO3SQ&s=09"
        className="home__social-icon"
      >
        <BsTwitterX />
      </a>
      <a
        href = "https://www.linkedin.com/in/edunjobi-emmanuel-718a59263"
        className="home__social-icon"
      >
        <TfiLinkedin />
      </a>
      <a
        href="https://github.com/responsiblehemmher"
        className="home__social-icon"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;