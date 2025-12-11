// src/data/projects.js
import proj1 from "../assets/projects/project-1.webp";
import proj2 from "../assets/projects/project-2.webp";
import proj3 from "../assets/projects/project-3.webp";
import proj4 from "../assets/projects/project-4.webp";
import proj5 from "../assets/projects/project-5.webp";
import proj6 from "../assets/projects/project-6.webp";

import mtcLogo from "../assets/logos/MtcLogo.webp";
import ombLogo from "../assets/logos/ombreathe.png";
import gruniLogo from "../assets/logos/grunilogo.webp";
import vyakruteLogo from "../assets/logos/vyakrute-logo.png";
import amdLogo from "../assets/logos/amd-logo.png";
import catchupLogo from "../assets/logos/catchuplogo.webp";
import schoolBuddyLogo from "../assets/logos/schoolBuddy.jpeg";
import veselminiLogo from "../assets/logos/veselmini.jpg";
import o4orangeLogo from "../assets/logos/o4orange-logo.png";

const COMMON_WHATSAPP_NUMBER = "919876543210"; // replace with your real number, no +, spaces, or dashes

export const projects = [
  {
    id: 1,
    title: "Mobile Info",
    client: "MTC",
    tag: "Mobile Info",
    img: proj3,
    logo: mtcLogo,
    whatsappNumber: COMMON_WHATSAPP_NUMBER,
    whatsappMessage: "Hi, I want to know more about the Mobile Info project for MTC.",
  },
  // {
  //   id: 2,
  //   title: "Digital Marketing",
  //   client: "Ombreathe",
  //   tag: "Digital Marketing",
  //   img: proj1,
  //   logo: ombLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Digital Marketing project for Ombreathe.",
  // },
  // {
  //   id: 3,
  //   title: "Web Development",
  //   client: "Gruni",
  //   tag: "Web Development",
  //   img: proj2,
  //   logo: gruniLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Web Development project for Gruni.",
  // },
  // {
  //   id: 4,
  //   title: "Web Development",
  //   client: "Vyakurute",
  //   tag: "Web Development",
  //   img: proj4,
  //   logo: vyakruteLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Web Development project for Vyakurute.",
  // },
  // {
  //   id: 5,
  //   title: "Web & App Development",
  //   client: "Amddas",
  //   tag: "Web & App Development",
  //   img: proj5,
  //   logo: amdLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Web & App Development project for Amddas.",
  // },
  // {
  //   id: 6,
  //   title: "Web Development",
  //   client: "Catch-Up",
  //   tag: "Web Development",
  //   img: proj6,
  //   logo: catchupLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Web Development project for Catch-Up.",
  // },
  {
    id: 7,
    title: "Gen-AI Application",
    client: "School Buddy",
    tag: "Gen-AI Application",
    img: proj1,
    logo: schoolBuddyLogo,
    whatsappNumber: COMMON_WHATSAPP_NUMBER,
    whatsappMessage: "Hi, I want to know more about the Gen-AI Application project for School Buddy.",
  },
  {
    id: 8,
    title: "Web & App Development",
    client: "Vessel Audit",
    tag: "Web & App Development",
    img: proj4,
    logo: veselminiLogo,
    whatsappNumber: COMMON_WHATSAPP_NUMBER,
    whatsappMessage: "Hi, I want to know more about the Web & App Development project for Vessel Audit.",
  },
  // {
  //   id: 9,
  //   title: "Multi-vendor WooCommerce site",
  //   client: "O4Orange",
  //   tag: "Multi-vendor WooCommerce site",
  //   img: proj6,
  //   logo: o4orangeLogo,
  //   whatsappNumber: COMMON_WHATSAPP_NUMBER,
  //   whatsappMessage: "Hi, I want to know more about the Multi-vendor WooCommerce site project for O4Orange.",
  // },
];
