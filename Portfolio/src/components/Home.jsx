import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithubSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Home = ({ show, setShow }) => {
  return (
    <>
      <section className="page homePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <h1>FAIZAN</h1>
          <h1>KHAN</h1>
          <p>Web Developer</p>
          <div className="btns">
            <Link
              to="https://res.cloudinary.com/djtjxnmmb/image/upload/v1727296236/Screenshot_967_rnswuh.png"
              target="_blank"
            >
              Resume
            </Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <Link
              to={"https://www.instagram.com/i_am_mr_faizu/"}
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
            
            <Link
              to={"https://www.linkedin.com/in/faizan-khan-943bb5327/"}
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            
            <Link to={"https://github.com/i-am-faizan "} target="_blank">
              <FaGithubSquare />
            </Link>
            
            
          </ul>
          <a className="download-btn" href="/Resume.pdf" download="Resume.pdf">
            [Download CV]
          </a>
        </footer>
      </section>
    </>
  );
};

export default Home;
