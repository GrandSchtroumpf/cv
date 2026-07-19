import { Resume } from "~/types";

export const data: Resume = {
  profile: {
    name: "François Guezengar",
    title: "Senior Frontend Engineer",
    status: "Available for full time engagements",
    timezone: "Nantes - France (remote)",
    email: "francois.guezengar@gmail.com",
    avatarAlt: "Portrait of François Guezengar, smiling, wearing a grey shirt",
    keywords: ['React', 'Realtime dataviz', 'A11y', 'Performance', 'Security', 'Communication', 'Startup exp'],
    summary: `
      For the past 10 years I've specialized in building <strong>pragmatic frontend architecture</strong> and design systems with <strong>performance and accessibility</strong> in mind.
      As Lead Frontend at Bancor, I owned the Carbon DeFi trading application, collaborating closely with backend, product and design in <strong>quick iterations</strong>.
      I worked with realtime dataviz and improved performance for large dataset.</br>
      I thrive in <strong>fast-paced startup environement</strong> where good communication fuels success.`,
  },
  navigation: [
    { label: "Summary", href: "#summary" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ],
  experience: [
    {
      id: "0005",
      role: "Lead Frontend",
      company: "Bancor",
      location: "Remote from France",
      startDate: "2023-09",
      endDate: "2026-06",
      duration: "3 years",
      description:
        "Building automated onchain trading infrastructure with zero slippage.",
      highlights: [
        "Build and maintain Carbon DeFi dApp, an automated trading protocol, with React.",
        "Create interactive charts and data viz to help traders take best decisions.",
        "Design and ship premium features built specifically for professional traders.",
        "Partner closely with product and design, proactively bringing technical solutions to improve discovery experience.",
      ],
      links: [{ name: "Carbon DeFi", url: "https://app.carbondefi.xyz/" }],
    },
    {
      id: "0004",
      role: "CTO",
      company: "Cascade8",
      location: "Remote from France",
      startDate: "2018-11",
      endDate: "2023-06",
      duration: "5 years",
      description:
        "Web-based dApp suite automating revenue sharing for the cinema industry.",
      highlights: [
        "Architected and stood up a monorepo spanning Ethereum, Nx, Angular, and Google Cloud — 7 applications and 18 shared libraries.",
        "Design and implement data viz of the cinema rights over the world and media.",
        "Recruited and trained an 11-person engineering team distributed across four continents.",
        "Owned architecture decisions, ran daily code reviews, and kept the dependency stack current.",
      ],
      links: [],
    },
    {
      id: "0003",
      role: "Founder",
      company: "Dapps Nation",
      location: "Lyon, France",
      startDate: "2019-01",
      endDate: "2023-01",
      duration: "4 years",
      description: "Build Kampoy app end-to-end, a realtime marketplace for farmers, using Angular and Google Cloud.",
      highlights: [
        "Strong focus on accessibilty, offline, and UX to simplify the use for farmers and (old) customers.",
        "Created and open-sourced ngeth, a local block explorer distributed as a Hardhat plugin.",
        "Mentored 4 career-changers through their transition into professional web development.",
      ],
      links: [{ name: "Kampoy", url: "https://www.kampoy.com/" }],
    },
    {
      id: "0002",
      role: "Ethereum Developer",
      company: "Ethereum Foundation",
      location: "Berlin, Germany",
      startDate: "2018-11",
      endDate: "2021-03",
      duration: "2.5 years",
      description:
        "Core contributor to Remix, the browser-based smart contract IDE.",
      highlights: [
        "Designed a plugin-based architecture for Remix IDE and migrated the codebase from JavaScript ES3 to TypeScript and React.",
        "High focus on cybersecurity as the IDE could deploy smart contract on Ethereum.",
        "Set up unit testing with Jest and end-to-end testing with Cypress.",
        "Organized monthly meetups and was a speaker at blockchain conferences.",
      ],
      links: [{ name: "Remix", url: "https://remix.live/" }],
    },
    {
      id: "0001",
      role: "Fullstack Engineer",
      company: "B2Expand",
      location: "Lyon, France",
      startDate: "2016-11",
      endDate: "2018-11",
      duration: "2 year",
      description: "Decentralized applications (dApps) for crypto gaming.",
      highlights: [
        "Designed and built a marketplace for crypto assets using Angular & Ethers.js.",
        "Managed a team of two developers and two graphic designers shipping web games.",
        "Organized monthly meetups on Ethereum technical topics.",
      ],
      links: [],
    },
  ],
  skills: [
    {
      category: "Core strengths",
      tags: ["Fullstack", "Tech Team Management", "Performance", "UX / UI"],
    },
    {
      category: "Development skills",
      tags: [
        "TypeScript",
        "React",
        "WCAG Accessibility",
        "Cloud plateform",
        "Cybersecurity",
        "Modern CSS ❤️",
      ],
    },
    {
      category: "Testing & quality",
      tags: [
        "Unit Testing",
        "Playwright/Cypress",
        "Code Review",
        "Manual Testing",
        "CI/CD",
      ],
    },
  ],
  education: [
    {
      school: "École Centrale de Lyon",
      degree: "M2, Computer Programming",
      startYear: "2013",
      endYear: "2017",
    },
    {
      school: "EMLyon Business School",
      degree: "Master's Degree, Business & Entrepreneurship",
      startYear: "2012",
      endYear: "2017",
    },
  ],
  languages: [
    { name: "French", proficiency: "Native / Bilingual" },
    { name: "English", proficiency: "Full Professional" },
  ],
};
