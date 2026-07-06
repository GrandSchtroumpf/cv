import { Link, type DocumentHead } from "@qwik.dev/router";
import { component$ } from "@qwik.dev/core";

export default component$(() => {
  return <Link href="/en/blockchain">Blockchain</Link>;
});

// const OLD = component$(() => {
//   const changeTheme = $((input: HTMLInputElement) => {
//     const value = input.value;
//     sessionStorage.setItem("theme", value);
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const img = document.getElementById("profile-img");
//     if (!img) return;
//     const origin = img.getBoundingClientRect();
//     const x = origin.left + origin.width / 2;
//     const y = origin.top + origin.height / 2;

//     if (document.startViewTransition) {
//       const root = document.documentElement;
//       root.style.setProperty("--vt-x", `${x}px`);
//       root.style.setProperty("--vt-y", `${y}px`);
//       document.startViewTransition(async () => {
//         await new Promise((resolve) => setTimeout(resolve, 10));
//       });
//     }
//   });

//   return (
//     <>
//       <a class="skip-link" href="#main">
//         Skip to main content
//       </a>

//       <div class="chain-bg" aria-hidden="true"></div>

//       <header class="topbar no-print">
//         <div class="inner">
//           <span class="brand">
//             FG<span class="brand-dot">.</span>
//           </span>

//           <nav class="nav" aria-label="Section navigation">
//             <a href="#summary">Profile</a>
//             <a href="#experience">Experience</a>
//             <a href="#skills">Skills</a>
//             <a href="#education">Education</a>
//           </nav>

//           <fieldset class="theme-switch">
//             <legend class="sr-only">Colour theme</legend>

//             <label class="theme-switch__option">
//               <input
//                 type="radio"
//                 name="theme"
//                 value="light"
//                 onChange$={(e, el) => changeTheme(el)}
//               />
//               <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                 <circle
//                   cx="12"
//                   cy="12"
//                   r="4.2"
//                   stroke="currentColor"
//                   stroke-width="1.7"
//                 />
//                 <path
//                   d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"
//                   stroke="currentColor"
//                   stroke-width="1.7"
//                   stroke-linecap="round"
//                 />
//               </svg>
//               <span class="sr-only">Light theme</span>
//             </label>

//             <label class="theme-switch__option">
//               <input
//                 type="radio"
//                 name="theme"
//                 value="system"
//                 onChange$={(e, el) => changeTheme(el)}
//                 checked
//               />
//               <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                 <rect
//                   x="3"
//                   y="4.5"
//                   width="18"
//                   height="12"
//                   rx="1.6"
//                   stroke="currentColor"
//                   stroke-width="1.7"
//                 />
//                 <path
//                   d="M8.5 20.5h7M12 16.5v4"
//                   stroke="currentColor"
//                   stroke-width="1.7"
//                   stroke-linecap="round"
//                 />
//               </svg>
//               <span class="sr-only">Match system theme</span>
//             </label>

//             <label class="theme-switch__option">
//               <input
//                 type="radio"
//                 name="theme"
//                 value="dark"
//                 onChange$={(e, el) => changeTheme(el)}
//               />
//               <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                 <path
//                   d="M20 14.2A8.3 8.3 0 1 1 9.8 4 6.6 6.6 0 0 0 20 14.2Z"
//                   stroke="currentColor"
//                   stroke-width="1.7"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//               <span class="sr-only">Dark theme</span>
//             </label>
//           </fieldset>

//           <button id="print-btn" class="print-btn" type="button">
//             <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//               <path
//                 d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8Z"
//                 stroke="currentColor"
//                 stroke-width="1.6"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//             <span>Save / Print PDF</span>
//           </button>
//         </div>
//       </header>

//       <main id="main">
//         <section class="hero" id="top">
//           <div class="intro">
//             <p class="eyebrow" data-reveal>
//               <span class="ledger-dot" aria-hidden="true"></span>
//               Available for select engagements — Remote
//             </p>
//             <hgroup>
//               <h1 class="name" id="name-scramble" data-reveal>
//                 François Guezengar
//               </h1>
//               <p class="title" data-reveal>
//                 Blockchain Engineer &amp; Fullstack Lead Developer
//               </p>
//             </hgroup>
//             <p class="print-only subtitle">Remote (Europe/Paris timezone)</p>
//           </div>
//           <address class="contact" data-reveal>
//             <ul>
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                   <path
//                     d="M4 5h16v14H4V5Z"
//                     stroke="currentColor"
//                     stroke-width="1.6"
//                   />
//                   <path
//                     d="m4 6 8 7 8-7"
//                     stroke="currentColor"
//                     stroke-width="1.6"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//                 <a href="mailto:fguezengar@dappsnation.com">
//                   fguezengar@dappsnation.com
//                 </a>
//               </li>
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                   <path
//                     d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
//                     stroke="currentColor"
//                     stroke-width="1.6"
//                   />
//                   <rect
//                     x="2"
//                     y="9"
//                     width="4"
//                     height="12"
//                     stroke="currentColor"
//                     stroke-width="1.6"
//                   />
//                   <circle
//                     cx="4"
//                     cy="4"
//                     r="2"
//                     stroke="currentColor"
//                     stroke-width="1.6"
//                   />
//                 </svg>
//                 <a
//                   href="https://www.linkedin.com/in/francoisguezengar"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span class="print-only">https://</span>
//                   linkedin.com/in/francoisguezengar
//                 </a>
//               </li>
//               <li>
//                 <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                   <path
//                     d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
//                     stroke="currentColor"
//                     stroke-width="1.3"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//                 <a
//                   href="https://github.com/grandschtroumpf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span class="print-only">https://</span>
//                   github.com/grandschtroumpf
//                 </a>
//               </li>
//             </ul>
//           </address>

//           <figure id="profile-img" class="photo" data-reveal>
//             <img
//               src="profile.jpg"
//               width="480"
//               height="480"
//               loading="eager"
//               fetchPriority="high"
//               alt="Portrait of François Guezengar, smiling, wearing a grey shirt"
//             />
//           </figure>
//         </section>
//         <hr class="no-print" />
//         <section
//           class="block-section"
//           id="summary"
//           aria-labelledby="summary-heading"
//           data-reveal
//         >
//           <h2 id="summary-heading">
//             <span class="block-tag">block #profile</span>Summary
//           </h2>
//           <p class="summary-text">
//             Fullstack and blockchain engineer with over&nbsp;
//             <strong>10 years</strong> of experience taking web products from
//             first idea to product&ndash;market fit. I've&nbsp;
//             <strong>led distributed engineering teams</strong> across four
//             continents, architected production Ethereum infrastructure, and
//             built zero-slippage onchain trading tooling used daily by
//             professional market makers. I am equally comfortable as a&nbsp;
//             <strong>Staff Engineer</strong>, a&nbsp;
//             <strong>Technical Lead</strong>, or a <strong>CTO</strong> setting
//             the direction for an entire engineering organization.
//           </p>
//         </section>
//         <hr />
//         <section
//           class="block-section"
//           id="experience"
//           aria-labelledby="experience-heading"
//         >
//           <h2 id="experience-heading" data-reveal>
//             <span class="block-tag">block #experience</span>Experience
//           </h2>

//           <ol class="chain">
//             <li class="block" data-reveal data-block="0005">
//               <div class="marker" aria-hidden="true">
//                 <span>0005</span>
//               </div>
//               <article class="card">
//                 <header class="head">
//                   <hgroup>
//                     <h3>Blockchain Engineer</h3>
//                     <p class="org">Bancor</p>
//                   </hgroup>
//                   <div class="meta">
//                     <p class="duration">
//                       <time dateTime="2023-09">Sep 2023</time>—
//                       <time dateTime="2026-06">Jun 2026</time>
//                       <span>(3 years)</span>
//                     </p>
//                     <address>Remote from France</address>
//                   </div>
//                 </header>
//                 <p class="intro">
//                   Building automated onchain trading infrastructure with zero
//                   slippage.
//                 </p>
//                 <ul>
//                   <li>
//                     Develop and maintain Carbon DeFi, an automated trading
//                     protocol live on Ethereum, TON, TAC, Sei, Coti and Celo.
//                   </li>
//                   <li>
//                     Support 3 licensees who fork the protocol on additional
//                     chains, tailoring deployments to their needs.
//                   </li>
//                   <li>
//                     Design and ship premium features built specifically for
//                     professional market makers.
//                   </li>
//                   <li>
//                     Partner closely with product and design within a fast paced
//                     international team.
//                   </li>
//                 </ul>
//               </article>
//             </li>

//             <li class="block" data-reveal data-block="0004">
//               <div class="marker" aria-hidden="true">
//                 <span>0004</span>
//               </div>
//               <article class="card">
//                 <header class="head">
//                   <hgroup>
//                     <h3>CTO</h3>
//                     <p class="org">Cascade8</p>
//                   </hgroup>
//                   <div class="meta">
//                     <p class="duration">
//                       <time dateTime="2018-11">Nov 2018</time>—
//                       <time dateTime="2024-06">Jun 2024</time>
//                       <span>(5.5 years)</span>
//                     </p>
//                     <address>Remote from France</address>
//                   </div>
//                 </header>
//                 <p class="intro">
//                   Web-based dApp suite automating revenue sharing for the cinema
//                   industry, built on a private Quorum network.
//                 </p>
//                 <ul>
//                   <li>
//                     Architected and stood up a monorepo spanning Ethereum,
//                     Angular, and Google Cloud &mdash; 7 applications and 18
//                     shared libraries.
//                   </li>
//                   <li>
//                     Recruited and trained an 11-person engineering team
//                     distributed across four continents.
//                   </li>
//                   <li>
//                     Owned architecture decisions, ran daily code reviews, and
//                     kept the dependency stack current.
//                   </li>
//                 </ul>
//               </article>
//             </li>

//             <li class="block" data-reveal data-block="0003">
//               <div class="marker" aria-hidden="true">
//                 <span>0003</span>
//               </div>
//               <article class="card">
//                 <header class="head">
//                   <hgroup>
//                     <h3>Founder</h3>
//                     <p class="org">Dapps Nation</p>
//                   </hgroup>
//                   <div class="meta">
//                     <p class="duration">
//                       <time dateTime="2019-01">Jan 2019</time>—
//                       <time dateTime="2023-01">Jan 2023</time>
//                       <span>(4 years)</span>
//                     </p>
//                     <address>Lyon, France</address>
//                   </div>
//                 </header>
//                 <p class="intro">
//                   Independent studio building web2 & web3 products.
//                 </p>
//                 <ul>
//                   <li>
//                     Built Kampoy, a marketplace connecting consumers directly
//                     with local farmers, using Angular and Google Cloud.
//                   </li>
//                   <li>
//                     Mentored four career-changers through their transition into
//                     professional web development.
//                   </li>
//                   <li>
//                     Created and open-sourced ngeth, a local block explorer
//                     distributed as a Hardhat plugin.
//                   </li>
//                 </ul>
//               </article>
//             </li>

//             <li class="block" data-reveal data-block="0002">
//               <div class="marker" aria-hidden="true">
//                 <span>0002</span>
//               </div>
//               <article class="card">
//                 <header class="head">
//                   <hgroup>
//                     <h3>Ethereum Developer</h3>
//                     <p class="org">Ethereum Foundation</p>
//                   </hgroup>
//                   <div class="meta">
//                     <p class="duration">
//                       <time dateTime="2018-11">Nov 2018</time>—
//                       <time dateTime="2021-03">Mar 2021</time>
//                       <span>(2.5 years)</span>
//                     </p>
//                     <address>Berlin, Germany</address>
//                   </div>
//                 </header>
//                 <p class="intro">
//                   Core contributor to Remix, the browser-based smart contract
//                   IDE.
//                 </p>
//                 <ul>
//                   <li>
//                     Designed a plugin-based architecture for Remix and migrated
//                     the codebase from JavaScript ES3 to TypeScript and React.
//                   </li>
//                   <li>
//                     Collaborated within a seven-person team distributed across
//                     four continents.
//                   </li>
//                   <li>
//                     Set up unit testing with Jest and end-to-end testing with
//                     Cypress.
//                   </li>
//                   <li>
//                     Organized monthly meetups and was a speaker at blockchain
//                     conferences.
//                   </li>
//                 </ul>
//               </article>
//             </li>

//             <li class="block" data-reveal data-block="0001">
//               <div class="marker" aria-hidden="true">
//                 <span>0001</span>
//               </div>
//               <article class="card">
//                 <header class="head">
//                   <hgroup>
//                     <h3>Fullstack Engineer</h3>
//                     <p class="org">B2Expand</p>
//                   </hgroup>
//                   <div class="meta">
//                     <p class="duration">
//                       <time dateTime="2017-07">Jul 2017</time>—
//                       <time dateTime="2018-11">Nov 2018</time>
//                       <span>(1.5 year)</span>
//                     </p>
//                     <address>Lyon, France</address>
//                   </div>
//                 </header>
//                 <p class="intro">
//                   Decentralized applications (dApps) for crypto gaming.
//                 </p>
//                 <ul>
//                   <li>
//                     Designed and built a marketplace for crypto assets using
//                     Ethers.js.
//                   </li>
//                   <li>
//                     Managed a team of two developers and two graphic designers
//                     shipping web games.
//                   </li>
//                   <li>
//                     Organized monthly meetups on Ethereum technical topics.
//                   </li>
//                 </ul>
//               </article>
//             </li>

//             <li class="genesis" data-reveal aria-hidden="true">
//               <div class="marker marker--genesis">
//                 <span>0000</span>
//               </div>
//               <p>genesis block</p>
//             </li>
//           </ol>
//         </section>
//         <hr />
//         <section
//           class="block-section"
//           id="skills"
//           aria-labelledby="skills-heading"
//           data-reveal
//         >
//           <h2 id="skills-heading">
//             <span class="block-tag">block #stack</span>Skills &amp; Stack
//           </h2>

//           <dl class="skills-grid">
//             <div class="skills-group">
//               <dt>Core strengths</dt>
//               <dd>
//                 <ul class="tag-list">
//                   <li class="tag tag--core">Fullstack</li>
//                   <li class="tag tag--core">Tech Team Management</li>
//                   <li class="tag tag--core">Performance</li>
//                   <li class="tag tag--core">UX / UI</li>
//                 </ul>
//               </dd>
//             </div>
//             <div class="skills-group">
//               <dt>Development skills</dt>
//               <dd>
//                 <ul class="tag-list">
//                   <li class="tag">TypeScript</li>
//                   <li class="tag">Frontend Frameworks</li>
//                   <li class="tag">Node.js</li>
//                   <li class="tag">Cloud Devops</li>
//                   <li class="tag">Ethereum</li>
//                   <li class="tag">Modern CSS ❤️</li>
//                 </ul>
//               </dd>
//             </div>
//             <div class="skills-group">
//               <dt>Testing &amp; quality</dt>
//               <dd>
//                 <ul class="tag-list">
//                   <li class="tag">Unit Testing</li>
//                   <li class="tag">E2E (Playwright)</li>
//                   <li class="tag">Code Review</li>
//                   <li class="tag">Manual Testing</li>
//                   <li class="tag">CI/CD</li>
//                 </ul>
//               </dd>
//             </div>
//           </dl>
//         </section>
//         <hr />
//         <div class="two-col">
//           <section
//             class="block-section"
//             id="education"
//             aria-labelledby="education-heading"
//             data-reveal
//           >
//             <h2 id="education-heading">
//               <span class="block-tag">block #education</span>Education
//             </h2>
//             <ul class="edu-list">
//               <li>
//                 <h3>École Centrale de Lyon</h3>
//                 <p class="edu-degree">M2, Computer Programming</p>
//                 <p class="edu-date">
//                   <time dateTime="2013">2013</time> —
//                   <time dateTime="2017">2017</time>
//                 </p>
//               </li>
//               <li>
//                 <h3>EMLyon Business School</h3>
//                 <p class="edu-degree">
//                   Master's Degree, Business &amp; Entrepreneurship
//                 </p>
//                 <p class="edu-date">
//                   <time dateTime="2012">2012</time> —
//                   <time dateTime="2017">2017</time>
//                 </p>
//               </li>
//             </ul>
//           </section>
//           <hr />
//           <section
//             class="block-section"
//             id="languages"
//             aria-labelledby="languages-heading"
//             data-reveal
//           >
//             <h2 id="languages-heading">
//               <span class="block-tag">block #languages</span>Languages
//             </h2>
//             <dl class="lang-list">
//               <div>
//                 <dt>French</dt>
//                 <dd>Native / Bilingual</dd>
//               </div>
//               <div>
//                 <dt>English</dt>
//                 <dd>Full Professional</dd>
//               </div>
//             </dl>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// });

export const head: DocumentHead = {
  title: "François Guezengar",
  meta: [
    {
      name: "description",
      content:
        "CV of François Guezengar, Blockchain Engineer and Fullstack Lead based in Nantes, France. 10+ years building and scaling web3 products.",
    },
  ],
};
