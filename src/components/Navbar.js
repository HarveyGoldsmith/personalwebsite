import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../constants/data";
import $ from "jquery";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const handleClick = (e, scrollTo) => {
    e.preventDefault();

    var element = $(scrollTo)[0];
    console.log("scroll");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="name">Harvey Goldsmith</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text, scrollTo } = link;

              return url === "" ? (
                window.location.href.includes("projects") ? null : (
                  <li key={id}>
                    <p onClick={(e) => handleClick(e, scrollTo)}>{text}</p>
                  </li>
                )
              ) : (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((soc) => {
            const { id, url, icon } = soc;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
