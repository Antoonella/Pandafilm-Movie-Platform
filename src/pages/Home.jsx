import React from "react";
import LandingImg from "../assets/landingimg.png";
import {useNavigate } from "react-router-dom";


function Home() {
  let navigate = useNavigate();
  return (
    <div id="home">
    <div className="landing">
      <figure className="landing__img--container">
        <img src={LandingImg}  className="landing__img" />
      </figure>
      <div className="header__title">
        <h1 className="title">Browse our movies</h1>
      <button className="glow-on-hover" onClick={() => navigate('/movie')}>Browse Now</button>
      </div>
    </div>
    </div>
  );
}

export default Home;
