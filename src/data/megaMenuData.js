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

export const megaMenuData = {
  "Who we serve": {
    title: "OSS/BSS Solutions for Mobile Operators",
    description:
      "PMRG delivers comprehensive OSS/BSS platforms for mobile operators at every stage and market segment.",
    items: [
      {
        id: "mvnos",
        label: "MVNOs",
        icon: RadioTower,
        active: true,
        href: "/who-we-serve/mvnos",
        image:
          "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
        heading: "MVNOs",
        text: "Complete OSS/BSS platform for Mobile Virtual Network Operators launching or scaling consumer mobile services.",
      },
      {
        id: "mnos",
        label: "MNOs",
        icon: RadioTower,
        active: false,
        href: "/who-we-serve/mnos",
        image:
          "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        heading: "MNOs",
        text: "Robust OSS/BSS stack tailored for established mobile network operators.",
      },
      {
        id: "special",
        label: "Specialized Markets",
        icon: Heart,
        active: false,
             href: "/who-we-serve/specialized-markets",
        image:
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
        heading: "Specialized Markets",
        text: "Solutions for B2B, IoT, and niche segments with complex requirements.",
      },
    ],
  },

  PmrgSolutions: {
    title: "Complete OSS/BSS Platform Capabilities",
    description:
      "Modern modular platform covering charging, billing, customer care, analytics, and integrations.",
    items: [
      {
        id: "highlights",
        label: "Platform Highlights",
        icon: Megaphone,
        active: true,
        image:
          "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
        heading: "Platform Highlights",
        text: "Built from scratch with automation, flexibility, and speed at its core.",
      },
      {
        id: "cx",
        label: "Customer Experience",
        icon: Handshake,
        active: false,
        image:
          "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        heading: "Customer Experience",
        text: "Omnichannel customer journeys and personal touchpoints.",
      },
      {
        id: "self-service",
        label: "Self-Service Tools",
        icon: Heart,
        active: false,
        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        heading: "Self-Service Tools",
        text: "Empower users with intuitive self-management capabilities.",
      },
      {
        id: "security",
        label: "Security & Analytics",
        icon: ShieldCheck,
        active: false,
        image:
          "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg",
        heading: "Security & Analytics",
        text: "Built‑in monitoring, fraud detection, and advanced analytics.",
      },
      {
        id: "ops",
        label: "Operations & Integrations",
        icon: Tag,
        active: false,
        image:
          "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
        heading: "Operations & Integrations",
        text: "Seamlessly integrate with third-party vendors and internal systems.",
      },
      {
        id: "compliance",
        label: "Compliance",
        icon: Library,
        active: false,
        image:
          "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        heading: "Compliance",
        text: "Adhering to global standards and local regulations.",
      },
      {
        id: "mvne-integ",
        label: "MVNE Integration",
        icon: Heart,
        active: false,
        image:
          "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
        heading: "MVNE Integration",
        text: "Deep integration capabilities for Mobile Virtual Network Enablers.",
      },
    ],
  },

  "Pmrg Way of Work": {
    title: "Our Approach to OSS/BSS Delivery",
    description:
      "Modern development practices, close customer collaboration, and continuous improvement.",
    items: [
      {
        id: "philosophy",
        label: "Development Philosophy",
        icon: Code2,
        active: true,
        image:
          "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        heading: "Development Philosophy",
        text: "Agile, iterative delivery that keeps risk low and feedback loops short.",
      },
      {
        id: "mvne",
        label: "MVNE Connectivity",
        icon: Signal,
        active: false,
        image:
          "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
        heading: "MVNE Connectivity",
        text: "Connectivity with partner networks and wholesale providers.",
      },
      {
        id: "implementation",
        label: "Implementation Approach",
        icon: TrendingUp,
        active: false,
        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        heading: "Implementation Approach",
        text: "Structured but flexible implementation to launch quickly and smoothly.",
      },
      {
        id: "oda",
        label: "TM Forum ODA",
        icon: Blocks,
        active: false,
        image:
          "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
        heading: "TM Forum ODA",
        text: "Aligned with Open Digital Architecture for interoperability and growth.",
      },
    ],
  },

  PmrgCrew: {
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
        image:
          "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
        heading: "Our Team",
        text: "Engineers and telecom experts focused on delivering great outcomes.",
      },
      {
        id: "company",
        label: "Company Highlights",
        icon: Megaphone,
        active: false,
         href: "pmrg-crew/miles-stone",
        image:
          "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg",
        heading: "Company Highlights",
        text: "Key milestones, customer wins, and innovation highlights.",
      },
      {
        id: "culture",
        label: "Team Culture",
        icon: Heart,
        active: false,
        image:
          "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
        heading: "Team Culture",
        text: "Collaboration, learning, and enjoying the journey together.",
      },
    ],
  },
};