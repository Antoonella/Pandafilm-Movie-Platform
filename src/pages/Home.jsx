import React, { useEffect, useState } from "react";
import LandingImg from "../assets/landingimg.png";




function Home() {

  return (
    <>
  <div className="landing">
      <figure className="landing__img--container">
        <img src={LandingImg}  className="landing__img" />
      </figure>
      <h1 className="title">Browse our movies</h1>
  </div>
    </>
  );
}

export default Home;
