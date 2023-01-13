import React from "react";
import banner from "../../../assets/Banner.jpg";
import TypeWriter from "./TypeWriter/TypeWriter";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${banner})`, height: "700px" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-info font-bold">SEEKER</h1>
          <TypeWriter></TypeWriter>
          <button className="btn mt-3 btn-outline btn-warning">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
