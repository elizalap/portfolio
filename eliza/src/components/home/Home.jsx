import React from 'react';
import profileImg from '../../assets/profile-img.svg'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import{ FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container">
            <p className="home__subtitle text-css">
                Hello, <span>I am</span>
            </p>
            <h1 className="home__title text-cs"><span>ELIZA</span> LIMA</h1>
            <p className="home__job">
              <span className="text-cs">I am a</span><b> Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img src={profileImg} alt="" className="home__profile"/>
                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />
              </div>
              <p className="home__data home__data-one">
                <span className="text-lg">
                  12 <b>+</b>
                </span>
                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>
            </div>

            <p className="home__text">
              From Rio de Janeiro, Brazil. I have rich experience in web development and I'm also good at WordPress. Let's talk!
            </p>

            <div className="home__socials">
              <a href="http://www.linkedin.com/in/elizapaoliello" target="_blank" className="home__social-link">
                <FaLinkedinIn/>
              </a>
              <a href="http://www.github.com/elizalap" target="_blank" className="home__social-link">
                <FaGithub/>
              </a>
            </div>

            <div className="home__btns">
              <a href="" className="btn text-cs">Download CV</a>
            <a href="" className="hero__link text-cs">My skills</a>
            </div>
        </div>
    </section>
  )
};

export default Home;