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

export const projects = [
  {
    id: 1,
    title: "Mobile Info",
    client: "MTC",
    tag: "Mobile Info",
    img: proj3,
    logo: mtcLogo,
  },
  {
    id: 2,
    title: "Digital Marketing",
    client: "Ombreathe",
    tag: "Digital Marketing",
    img: proj1,
    logo: ombLogo,
  },
  {
    id: 3,
    title: "Web Development",
    client: "Gruni",
    tag: "Web Development",
    img: proj2,
    logo: gruniLogo,
  },
  {
    id: 4,
    title: "Web Development",
    client: "Vyakurute",
    tag: "Web Development",
    img: proj4,
    logo: vyakruteLogo,
  },
  {
    id: 5,
    title: "Web & App Development",
    client: "Amddas",
    tag: "Web & App Development",
    img: proj5,
    logo: amdLogo,
  },
  {
    id: 6,
    title: "Web Development",
    client: "Catch-Up",
    tag: "Web Development",
    img: proj6,
    logo: catchupLogo,
  },
  {
    id: 7,
    title: "Gen-AI Application",
    client: "School Buddy",
    tag: "Gen-AI Application",
    img: proj1,
    logo: schoolBuddyLogo,
  },
  {
    id: 8,
    title: "Web & App Development",
    client: "Vessel Audit",
    tag: "Web & App Development",
    img: proj4,
    logo: veselminiLogo,
  },
  {
    id: 9,
    title: "Multi-vendor WooCommerce site",
    client: "O4Orange",
    tag: "Multi-vendor WooCommerce site",
    img: proj6,
    logo: o4orangeLogo,
  },
];
