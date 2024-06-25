import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import{ FaTwitter, FaGithub } from 'react-icons/fa'
import '.home.css';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container">
            <p className="home__subtitle text-css">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-css">Eliza Lima</h1>
        </div>
    </section>
  )
};

export default Home;