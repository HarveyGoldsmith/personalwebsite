import React from "react";
import { social } from "../constants/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nav-center">
        <div className="footer-item">
          <h3 className="footer-header">Contact Me </h3>
          <a
            href="mailto: harveygoldsmith@outlook.com?subject=Software Engineer Enquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            E: harveygoldsmith@outlook.com
          </a>
          <a href="tel:0447444837">P: 0447 444 837</a>
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
    </div>
  );
};

export default Footer;
