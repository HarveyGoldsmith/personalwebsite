import React from "react";
import Intro from "./sections/Intro";
import Technologies from "./sections/Technologies";
import Carousel from "./sections/Carousel";
import { FaArrowCircleUp } from "react-icons/fa";
import $ from "jquery";

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };
  return (
    <div className="container">
      <Intro />
      <div className="divider"></div>
      <Technologies />
      <div className="divider"></div>
      <Carousel />
      <button className="scroll-to-top" onClick={(e) => handleClick(e)}>
        <FaArrowCircleUp className="fit" />
      </button>
    </div>
  );
};

export default Home;
