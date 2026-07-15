import { Resume } from "~/types";

export const data: Resume = {
  profile: {
    name: "François Guezengar",
    title: "Senior Software Engineer - Frontend - Pro",
    status: "Available for full time engagements",
    timezone: "France",
    email: "francois.guezengar@gmail.com",
    avatarAlt: "Portrait of François Guezengar, smiling, wearing a grey shirt",
    summary: `
      For the past <strong>10 years</strong> I've specialized in Web3/DeFi infrastructure and advanced frontend architecture.
      As a DeFi Engineer at Bancor, I owned the Carbon DeFi trading app, and deployed it over <strong>6 chains</strong>.
      Previously, as CTO at Cascade8, I shipped 7 apps in a <strong>fast-moving environment</strong> with strict deadline while keeping high quality product end-to-end.
      I collaborate easily with product, design, and QA, bringing a <strong>user centric</strong> view on the table with security, performance and accessibility in mind.`,
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
      role: "DeFi Engineer",
      company: "Bancor",
      location: "Remote from France",
      startDate: "2023-09",
      endDate: "2026-06",
      duration: "3 years",
      description:
        "Building automated onchain trading infrastructure with zero slippage.",
      highlights: [
        "Develop and maintain Carbon DeFi dApp, an automated trading protocol live on Ethereum, TON, TAC, Sei, Coti and Celo.",
        "Support 3 licensees who fork the protocol on additional chains, tailoring deployments to their needs.",
        "Design and ship premium features built specifically for professional market makers.",
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
      endDate: "2024-06",
      duration: "5.5 years",
      description:
        "Web-based dApp suite automating revenue sharing for the cinema industry, built on a private Quorum network.",
      highlights: [
        "Architected and stood up a monorepo spanning Ethereum, Nx, Angular, and Google Cloud — 7 applications and 18 shared libraries.",
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
      description: "Independent studio building web2 & web3 products.",
      highlights: [
        "Built Kampoy, a marketplace connecting consumers directly with local farmers, using Angular and Google Cloud.",
        "Mentored 4 career-changers through their transition into professional web development.",
        "Created and open-sourced ngeth, a local block explorer distributed as a Hardhat plugin.",
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
        "Designed a plugin-based architecture for Remix and migrated the codebase from JavaScript ES3 to TypeScript and React.",
        "Collaborated within a seven-person team distributed across four continents.",
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
      startDate: "2017-07",
      endDate: "2018-11",
      duration: "1.5 year",
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
        "Node.js",
        "Cloud plateform",
        "Ethereum",
        "Modern CSS ❤️",
      ],
    },
    {
      category: "Testing & quality",
      tags: [
        "Unit Testing",
        "E2E (Playwright)",
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
