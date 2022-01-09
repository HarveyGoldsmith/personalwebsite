import React from "react";
import { FaReact, FaJava, FaDatabase } from "react-icons/fa";

const Technologies = () => {
  return (
    <div id="technologies">
      <h2 className="title">Technologies</h2>
      <div className="description">
        I have worked with a range of technologies in the web development space,
        here are the ones I am most comfortable with.
      </div>
      <div className="sub-container">
        <div className="technology">
          <FaReact className="icon" />
          <h3 className="technology-title">Front-End</h3>
          <ul className="technology-list">
            <li>
              <h5>React</h5>
            </li>
            <li>
              <h5>HTML / CSS</h5>
            </li>
            <li>
              <h5>JavaScript</h5>
            </li>
            <li>
              <h5>jQuery</h5>
            </li>
          </ul>
        </div>
        <div className="technology">
          <FaJava className="icon" />
          <h3 className="technology-title">Back-End</h3>
          <ul className="technology-list">
            <li>
              <h5>Java Spring / Hibernate</h5>
            </li>
            <li>
              <h5>Node.js</h5>
            </li>
            <li>
              <h5>Python</h5>
            </li>
            <li>
              <h5>C#</h5>
            </li>
          </ul>
        </div>
        <div className="technology">
          <FaDatabase className="icon" />
          <h3 className="technology-title">Database/UI</h3>
          <ul className="technology-list">
            <li>
              <h5>Oracle</h5>
            </li>
            <li>
              <h5>Microsoft SQL</h5>
            </li>
            <li>
              <h5>Material UI / Chakra UI</h5>
            </li>
            <li>
              <h5>Semantic UI / Tailwind CSS</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
