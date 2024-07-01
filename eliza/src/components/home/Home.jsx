import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import{ FaTwitter, FaGithub } from 'react-icons/fa'
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container">
            <p className="home__subtitle text-css">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs"><span>ELIZA</span> LIMA</h1>
            <p className="home__job">
              <span className="text-cs">I am a</span><b> Web Developer</b>
            </p>

            <p className="home__text">
              From Rio de Janeiro, Brazil. I have rich experience in web development and I'm also good at WordPress. Let's talk!
            </p>

            <div className="home__socials">
              <a href="" className="home__social-link">
                <FaTwitter/>
              </a>
              <a href="" className="home__social-link">
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