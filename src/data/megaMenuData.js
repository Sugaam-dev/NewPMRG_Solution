// src/data/megaMenuData.js
import {
  RadioTower,
  Heart,
  Megaphone,
  Handshake,
  ShieldCheck,
  Tag,
  Library,
  Code2,
  Signal,
  TrendingUp,
  Blocks,
  Users,
} from "lucide-react";

import mvnos from "../assets/Navbar/mvnos.png";
import mnos from "../assets/Navbar/mnos.png";
import markets from "../assets/Navbar/market.png";
import highlight from "../assets/Navbar/platform.jpeg";
import experience from "../assets/Navbar/experience.jpeg";
import tool from "../assets/Navbar/tool.jpeg";
import security from "../assets/Navbar/security.jpeg";
import compliance from "../assets/Navbar/compliance.jpeg";
import mvne from "../assets/Navbar/mvne.png";
import Approach from "../assets/Navbar/approach.jpeg";
import tm from "../assets/Navbar/tm.jpeg";
import operation from "../assets/Navbar/operation.jpeg";

export const megaMenuData = {
  "Who we serve": {
    title: "OSS/BSS Solutions for Mobile Operators",
    description:
      "PMRG Solution delivers comprehensive OSS/BSS platforms for mobile operators at every stage and market segment.",
    items: [
      {
        id: "mvnos",
        label: "MVNOs",
        icon: RadioTower,
        active: true,
        href: "/who-we-serve/mvnos",
        image: mvnos,
        heading: "MVNOs",
        text: "Complete OSS/BSS platform for Mobile Virtual Network Operators launching or scaling consumer mobile services.",
      },
      {
        id: "mnos",
        label: "MNOs",
        icon: RadioTower,
        active: false,
        href: "/who-we-serve/mnos",
        image: mnos,
        heading: "MNOs",
        text: "Robust OSS/BSS stack tailored for established mobile network operators.",
      },
      {
        id: "special",
        label: "Specialized Markets",
        icon: Heart,
        active: false,
        href: "/who-we-serve/specialized-markets",
        image: markets,
        heading: "Specialized Markets",
        text: "Solutions for B2B, IoT, and niche segments with complex requirements.",
      },
    ],
  },

  "PMRG Solution": {
    title: "Complete OSS/BSS Platform Capabilities",
    description:
      "Modern modular platform covering charging, billing, customer care, analytics, and integrations.",
    items: [
      {
        id: "highlights",
        label: "Platform Highlights",
        icon: Megaphone,
        active: true,
        href: "/pmrg-solution/platform-highlights",
        image: highlight,
        heading: "Platform Highlights",
        text: "Built from scratch with automation, flexibility, and speed at its core.",
      },
      {
        id: "cx",
        label: "Customer Experience",
        icon: Handshake,
        active: false,
        href: "/pmrg-solution/customer-experience",
        image: experience,
        heading: "Customer Experience",
        text: "Omnichannel customer journeys and personal touchpoints.",
      },
      {
        id: "self-service",
        label: "Self-Service Tools",
        icon: Heart,
        active: false,
        href: "/pmrg-solution/self-service-tools",
        image: tool,
        heading: "Self-Service Tools",
        text: "Empower users with intuitive self-management capabilities.",
      },
      {
        id: "security",
        label: "Security & Analytics",
        icon: ShieldCheck,
        active: false,
        href: "/pmrg-solution/security-analytics",
        image: security,
        heading: "Security & Analytics",
        text: "Built‑in monitoring, fraud detection, and advanced analytics.",
      },
      {
        id: "ops",
        label: "Operations & Integrations",
        icon: Tag,
        active: false,
        href: "/pmrg-solution/operations-integrations",
        image: operation,
        heading: "Operations & Integrations",
        text: "Seamlessly integrate with third-party vendors and internal systems.",
      },
      {
        id: "compliance",
        label: "Compliance",
        icon: Library,
        active: false,
        href: "/pmrg-solution/compliance",
        image: compliance,
        heading: "Compliance",
        text: "Adhering to global standards and local regulations.",
      },
      {
        id: "mvne-integ",
        label: "MVNE Integration",
        icon: Heart,
        active: false,
        href: "/pmrg-solution/pmrg-enable-integration", // fixed leading slash
        image: mvne,
        heading: "MVNE Integration",
        text: "Deep integration capabilities for Mobile Virtual Network Enablers.",
      },
    ],
  },

  "PMRG Way of Work": {
    title: "Our Approach to OSS/BSS Delivery",
    description:
      "Modern development practices, close customer collaboration, and continuous improvement.",
    items: [
      {
        id: "philosophy",
        label: "Development Philosophy",
        icon: Code2,
        active: true,
        href: "/pmrg-way-of-work/developmentphilosophy",
        image: compliance,
        heading: "Development Philosophy",
        text: "Agile, iterative delivery that keeps risk low and feedback loops short.",
      },
      {
        id: "mvne",
        label: "MVNE Connectivity",
        icon: Signal,
        active: false,
        href: "/pmrg-way-of-work/mvne-connectivity",
        image: mvne,
        heading: "MVNE Connectivity",
        text: "Connectivity with partner networks and wholesale providers.",
      },
      {
        id: "implementation",
        label: "Implementation Approach",
        icon: TrendingUp,
        active: false,
        href: "/pmrg-way-of-work/implementation-approach",
        image: Approach,
        heading: "Implementation Approach",
        text: "Structured but flexible implementation to launch quickly and smoothly.",
      },
      {
        id: "oda",
        label: "TM Forum ODA",
        icon: Blocks,
        active: false,
        href: "/pmrg-way-of-work/tmforum",
        image: tm,
        heading: "TM Forum ODA",
        text: "Aligned with Open Digital Architecture for interoperability and growth.",
      },
    ],
  },

  "Team PMRG": {
    title: "The Team Behind PMRG",
    description:
      "Passionate software engineers and telecom professionals building modern OSS/BSS solutions.",
    items: [
      {
        id: "team",
        label: "Our Team",
        icon: Users,
        active: true,
        href: "/pmrg-crew/our-team",
        image: tm,
        heading: "Our Team",
        text: "Engineers and telecom experts focused on delivering great outcomes.",
      },
      {
        id: "company",
        label: "Company Highlights",
        icon: Megaphone,
        active: false,
        href: "/pmrg-crew/miles-stone", // fixed leading slash
        image: highlight,
        heading: "Company Highlights",
        text: "Key milestones, customer wins, and innovation highlights.",
      },
      {
        id: "culture",
        label: "Team Culture",
        icon: Heart,
        active: false,
        href: "/pmrg-crew/team-culture", // fixed leading slash
        image: Approach,
        heading: "Team Culture",
        text: "Collaboration, learning, and enjoying the journey together.",
      },
    ],
  },
};
