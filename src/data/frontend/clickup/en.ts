import { Resume } from "~/types";

export const data: Resume = {
  profile: {
    name: "François Guezengar",
    title: "Principal Frontend Engineer",
    status: "Available for full time engagements",
    timezone: "Nantes - France (remote)",
    email: "francois.guezengar@gmail.com",
    avatarAlt: "Portrait of François Guezengar, smiling, wearing a grey shirt",
    keywords: ['Angular', 'Performance', 'CI/CD', 'Scalability', 'Dev Mentoring', 'Cross product strategies'],
    summary: `
      <b>I'm the perfect fit for the Principal Frontend Engineer position at Clickup</b><br/>
      For the past 10 years I've specialized in building <strong>pragmatic frontend infrastructures</strong> and to ship faster and better at scale.
      As CTO at Cascade8 I set up a <strong>large monorepo</strong> with 7 apps & 18 shared libraries, making it reliable through <strong>automated pipelines</strong>.
      I mentored 11 engineers across multiple countries, shaping the standards for <strong>high quality and maintainable products</strong>.<br/>
      I thrive in <strong>fast-paced environement</strong> where clear communication fuels success.`,
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
        "Owned the Carbon app for automated onchain trading infrastructure (React / Ethereum).",
      highlights: [
        "Build and maintain Carbon DeFi dApp with React improving performance and scalability of the app.",
        "AI driven processes: code generation -> manual review -> AI PR review -> merge",
        "Integrate an adaptative design system for white branding.",
        "Partner closely with product and design, proactively bringing technical solutions to improve user experience.",
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
        "Web-based app suite automating revenue sharing for the cinema industry (Angular / Google Cloud).",
      highlights: [
        "Architect and stood up a monorepo spanning Ethereum, Nx, Angular, and Google Cloud — 7 applications and 18 shared libraries.",
        "Ship fast with strict deadline (cinema festivals) and while keeping long term reusability of the code.",
        "Drive technical strategies across all product, interconnecting them on a data & design level.",
        "Automate tests & deployment through CI/CD and improve devX with CLIs tools.",
        "Recruite and mentored an 11-person engineering team distributed across four continents.",
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
      description: "Build Kampoy app end-to-end, a realtime marketplace for farmers (Angular / Google Cloud).",
      highlights: [
        "Strong focus on accessibilty, offline, and UX to simplify the use for farmers and (old) customers.",
        "Create and open-sourced ngeth, a local block explorer distributed as a Hardhat plugin.",
        "Mentor 4 career-changers through their transition into professional web development.",
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
        "Core contributor to Remix, the browser-based smart contract IDE (React / Ethereum).",
      highlights: [
        "Design a plugin-based architecture for Remix IDE and migrated the codebase from JavaScript ES3 to TypeScript and React.",
        "High focus on cybersecurity as the IDE could deploy smart contract on Ethereum.",
        "Set up unit testing with Jest and end-to-end testing with Cypress.",
        "Organiz monthly meetups and was a speaker at blockchain conferences.",
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
      description: "Decentralized applications (dApps) for crypto gaming (Angular / Ethereum).",
      highlights: [
        "Design and built a marketplace for crypto assets using Angular & Ethers.js.",
        "Manage a team of two developers and two graphic designers shipping web games.",
        "Organize monthly meetups on Ethereum technical topics.",
      ],
      links: [],
    },
  ],
  skills: [
    {
      category: "Core strengths",
      tags: ["Team Lead", "Frontend Architecture", "Remote Communication", "Performance", "User focus"],
    },
    {
      category: "Development skills",
      tags: [
        "TypeScript",
        "Angular/Nx",
        "Cloud plateform",
        "Cybersecurity",
        "Accessibility",
        "Modern CSS ❤️",
      ],
    },
    {
      category: "Automation",
      tags: [
        "Unit Testing",
        "Playwright/Cypress",
        "AI Code Review",
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
