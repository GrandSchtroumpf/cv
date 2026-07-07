import { Resume } from "~/types";

export const data: Resume = {
  profile: {
    name: "François Guezengar",
    title: "Ingénieur Blockchain & Développeur Lead Fullstack",
    status: "Disponible pour des missions à plein temps — Remote",
    timezone: "Nantes",
    email: "francois.guezengar@gmail.com",
    avatarAlt:
      "Portrait de François Guezengar, souriant, portant une chemise grise",
    summary:
      "Ingénieur fullstack et blockchain avec plus de <strong>10 ans d'expérience</strong> dans l'accompagnement de produits web, de l'idée initiale jusqu'au product-market fit. J'ai <strong>dirigé des équipes d'ingénierie distribuées</strong> sur quatre continents, architecturé des infrastructures Ethereum en production, et conçu des outils de trading onchain sans glissement (zero-slippage) utilisés quotidiennement par des teneurs de marché professionnels. Je suis tout aussi à l'aise en tant que <strong>Staff Engineer</strong>, <strong>Technical Lead</strong> ou <strong>CTO</strong> pour définir la direction de toute une organisation technique.",
  },
  navigation: [
    { label: "Résumé", href: "#summary" },
    { label: "Expérience", href: "#experience" },
    { label: "Compétences", href: "#skills" },
    { label: "Formation", href: "#education" },
  ],
  experience: [
    {
      id: "0005",
      role: "Ingénieur Blockchain",
      company: "Bancor",
      location: "À distance depuis la France",
      startDate: "2023-09",
      endDate: "2026-06",
      duration: "3 ans",
      description:
        "Construction d'une infrastructure de trading automatisée onchain avec un glissement de prix nul (zero slippage).",
      highlights: [
        "Développer et maintenir Carbon DeFi, un protocole de trading automatisé en direct sur Ethereum, TON, TAC, Sei, Coti et Celo.",
        "Accompagner 3 licenciés qui s'approprient (fork) le protocole sur d'autres blockchains, en adaptant les déploiements à leurs besoins.",
        "Concevoir et déployer des fonctionnalités premium développées spécifiquement pour les teneurs de marché professionnels.",
        "Collaborer étroitement avec les équipes produit et design au sein d'une équipe internationale au rythme soutenu.",
      ],
      links: [{ name: "Carbon DeFi", url: "https://app.carbondefi.xyz/" }],
    },
    {
      id: "0004",
      role: "CTO",
      company: "Cascade8",
      location: "À distance depuis la France",
      startDate: "2018-11",
      endDate: "2024-06",
      duration: "5,5 ans",
      description:
        "Suite de dApps web automatisant la répartition des revenus pour l'industrie du cinéma, construite sur un réseau privé Quorum.",
      highlights: [
        "Architecturé et mis en place un monorepo englobant Ethereum, Angular et Google Cloud — 7 applications et 18 bibliothèques partagées.",
        "Recruté et formé une équipe d'ingénierie de 11 personnes répartie sur quatre continents.",
        "Assumé la responsabilité des décisions d'architecture, dirigé les revues de code quotidiennes et maintenu la stack de dépendances à jour.",
      ],
      links: [],
    },
    {
      id: "0003",
      role: "Fondateur",
      company: "Dapps Nation",
      location: "Lyon, France",
      startDate: "2019-01",
      endDate: "2023-01",
      duration: "4 ans",
      description: "Studio indépendant créant des produits web2 & web3.",
      highlights: [
        "Construit Kampoy, une place de marché connectant directement les consommateurs avec les agriculteurs locaux, en utilisant Angular et Google Cloud.",
        "Accompagné quatre personnes en reconversion professionnelle dans leur transition vers le développement web professionnel.",
        "Créé et publié en open-source ngeth, un explorateur de blocs local distribué sous forme de plugin Hardhat.",
      ],
      links: [{ name: "Kampoy", url: "https://www.kampoy.com/" }],
    },
    {
      id: "0002",
      role: "Développeur Ethereum",
      company: "Ethereum Foundation",
      location: "Berlin, Allemagne",
      startDate: "2018-11",
      endDate: "2021-03",
      duration: "2,5 ans",
      description:
        "Contributeur clé à Remix, l'IDE de contrats intelligents (smart contracts) basé sur le navigateur.",
      highlights: [
        "Conçu une architecture basée sur des plugins pour Remix et migré la base de code de JavaScript ES3 vers TypeScript et React.",
        "Collaboré au sein d'une équipe de sept personnes répartie sur quatre continents.",
        "Mis en place les tests unitaires avec Jest et les tests de bout en bout (E2E) avec Cypress.",
        "Organisé des meetups mensuels et partagé mon expertise lors de conférences sur la blockchain.",
      ],
      links: [{ name: "Remix", url: "https://remix.live/" }],
    },
    {
      id: "0001",
      role: "Ingénieur Fullstack",
      company: "B2Expand",
      location: "Lyon, France",
      startDate: "2017-07",
      endDate: "2018-11",
      duration: "1,5 an",
      description: "Applications décentralisées (dApps) pour le gaming crypto.",
      highlights: [
        "Conçu et construit une place de marché pour les crypto-actifs en utilisant Ethers.js.",
        "Managé une équipe de deux développeurs et deux graphistes pour le déploiement de jeux web.",
        "Organisé des meetups mensuels sur des sujets techniques liés à Ethereum.",
      ],
      links: [],
    },
  ],
  skills: [
    {
      category: "Forces principales",
      tags: [
        "Fullstack",
        "Management d'équipe technique",
        "Performance",
        "UX / UI",
      ],
    },
    {
      category: "Compétences de développement",
      tags: [
        "TypeScript",
        "Frameworks Frontend",
        "Node.js",
        "Cloud Devops",
        "Ethereum",
        "CSS Moderne ❤️",
      ],
    },
    {
      category: "Tests & qualité",
      tags: [
        "Tests unitaires",
        "E2E (Playwright)",
        "Revue de code",
        "Tests manuels",
        "CI/CD",
      ],
    },
  ],
  education: [
    {
      school: "École Centrale de Lyon",
      degree: "M2, Programmation Informatique",
      startYear: "2013",
      endYear: "2017",
    },
    {
      school: "EMLyon Business School",
      degree: "Master, Management & Entrepreneuriat",
      startYear: "2012",
      endYear: "2017",
    },
  ],
  languages: [
    { name: "Français", proficiency: "Langue maternelle / Bilingue" },
    { name: "Anglais", proficiency: "Compétence professionnelle complète" },
  ],
};
