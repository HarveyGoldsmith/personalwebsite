import React from "react";
import { FaLinkedin, FaGithub, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const links = [
  {
    id: 1,
    url: "",
    text: "technologies",
    scrollTo: "#technologies",
  },
  {
    id: 2,
    url: "",
    text: "projects",
    scrollTo: ".projects-container",
  },
  {
    id: 3,
    url: "",
    text: "about",
    scrollTo: "#about",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/HarveyGoldsmith",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/harvey-goldsmith-2527781a5",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "mailto: harveygoldsmith@outlook.com?subject=Software Engineer Enquiry",
    icon: <MdEmail />,
  },
  {
    id: 4,
    url: "tel:0447444837",
    icon: <FaPhoneSquare />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather Widget",
    description:
      "Simple weather widget for 3 set locations and the user's location",
    image:
      "https://live-production.wcms.abc-cdn.net.au/f50d8b8482f8c22f42226f1eb270f964?impolicy=wcms_crop_resize&cropH=557&cropW=991&xPos=0&yPos=105&width=862&height=485",
    tags: ["React", "JS", "CSS"],
    source: "https://github.com/HarveyGoldsmith/Weather-App",
    visit: "",
  },
  {
    id: 2,
    title: "Personal Website",
    description: "My personal website, you're looking at it right now",
    image: process.env.PUBLIC_URL + "/images/personalwebsite.png",
    tags: ["React", "JS", "CSS"],
    source: "https://github.com/HarveyGoldsmith/personalwebsite",
    visit: "",
  },
];

export const timeline = [
  {
    year: 2018,
    text: "Graduated high school with top marks in computer science.",
  },
  {
    year: 2019,
    text: "Started work at ENTAG as an IOS/Android technician. Started University.",
  },
  {
    year: 2020,
    text: "Continued work & University (Computer Science and Business Major)",
  },
  { year: 2021, text: "Full-Stack Software Engineering at Flight Centre." },
  {
    year: 2022,
    text: "Continuing to progress my development career at FC in People and Treasury Apps.",
  },
];
