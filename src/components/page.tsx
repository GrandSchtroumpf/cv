import { component$, useStyles$ } from "@qwik.dev/core";
import { Nav } from "./nav/nav";
import type { Resume } from "../types";
import style from "./page.css?inline";
import print from "./print.css?inline";

interface Props {
  resume: Resume;
}

export const Page = component$<Props>(({ resume }) => {
  useStyles$(style);
  useStyles$(print);
  const { profile, experience, skills, education, languages } = resume;

  return (
    <>
      <a class="skip-link" href="#main">
        Skip to main content
      </a>

      <header class="hero" id="top">
        <div class="intro">
          <p class="eyebrow" data-reveal="">
            <span class="ledger-dot" aria-hidden="true"></span>
            {profile.status}
          </p>
          <hgroup>
            <h1 class="name" id="name-scramble" data-reveal="">
              {profile.name}
            </h1>
            <p class="title" data-reveal="">
              {profile.title}
            </p>
          </hgroup>
          <p class="print-only subtitle">{profile.timezone}</p>
        </div>
        <address class="contact" data-reveal="">
          <ul>
            <li>
              <svg
                aria-label="email"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" />
              </svg>
              <a href="mailto:fguezengar@dappsnation.com">
                fguezengar@dappsnation.com
              </a>
            </li>
            <li>
              <svg
                aria-label="linkedin"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="-143 145 512 512"
              >
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z" />
                <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z" />
                <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z" />
              </svg>
              <a
                href="https://github.com/grandschtroumpf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="no-print">github.com/grandschtroumpf</span>
                <span class="print-only">
                  https://github.com/grandschtroumpf
                </span>
              </a>
            </li>
            <li>
              <svg
                aria-label="github"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 -0.5 25 25"
              >
                <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
              </svg>

              <a
                href="https://github.com/grandschtroumpf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="no-print">github.com/grandschtroumpf</span>
                <span class="print-only">
                  https://github.com/grandschtroumpf
                </span>
              </a>
            </li>
          </ul>
        </address>

        <figure id="profile-img" class="photo" data-reveal="">
          <img
            src="/img/profile-480w.webp"
            srcset="/img/profile-240w.webp 240w, /img/profile-480w.webp 480w, /img/profile-960w.webp 960w"
            sizes="auto"
            width={480}
            height={480}
            decoding="sync"
            loading="eager"
            fetchPriority="high"
            alt={profile.avatarAlt}
          />
        </figure>
      </header>

      <main id="main">
        <Nav />

        <section
          class="block-section"
          id="summary"
          aria-labelledby="summary-heading"
          data-reveal=""
        >
          <h2 id="summary-heading">
            <span class="block-tag">block #profile</span>Summary
          </h2>
          <p class="summary-text" dangerouslySetInnerHTML={profile.summary}></p>
        </section>

        <hr />

        <section
          class="block-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" data-reveal="">
            <span class="block-tag">block #experience</span>Experience
          </h2>

          <ol class="chain">
            {experience.map((item) => (
              <li
                key={item.id}
                class="block"
                data-reveal=""
                data-block={item.id}
              >
                <div class="marker" aria-hidden="true">
                  <span>{item.id}</span>
                </div>
                <article class="card">
                  <header class="head">
                    <hgroup>
                      <h3>{item.role}</h3>
                      <p class="org">{item.company}</p>
                    </hgroup>
                    <div class="meta">
                      <p class="duration">
                        <time
                          dateTime={
                            item.startDate.replace(
                              /(\w+)\s(\d+)/,
                              "$2-09",
                            ) /* basic fallback format */
                          }
                        >
                          {item.startDate}
                        </time>
                        —
                        <time
                          dateTime={item.endDate.replace(
                            /(\w+)\s(\d+)/,
                            "$2-06",
                          )}
                        >
                          {item.endDate}
                        </time>
                        <span>({item.duration})</span>
                      </p>
                      <address>{item.location}</address>
                    </div>
                  </header>
                  <p class="intro">{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <nav
                    class="links"
                    arial-label="external links to work achieved during this experience"
                  >
                    {item.links.map(({ url, name }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span class="no-print">{name}</span>
                        <span class="print-only">{url}</span>
                      </a>
                    ))}
                  </nav>
                </article>
              </li>
            ))}

            <li class="genesis" data-reveal="" aria-hidden="true">
              <div class="marker marker--genesis">
                <span>0000</span>
              </div>
              <p>genesis block</p>
            </li>
          </ol>
        </section>

        <hr />

        <section
          class="block-section"
          id="skills"
          aria-labelledby="skills-heading"
          data-reveal=""
        >
          <h2 id="skills-heading">
            <span class="block-tag">block #stack</span>Skills &amp; Stack
          </h2>

          <dl class="skills-grid">
            {skills.map((group, index) => (
              <div key={index} class="skills-group">
                <dt>{group.category}</dt>
                <dd>
                  <ul class="tag-list">
                    {group.tags.map((tag, tagIdx) => (
                      <li
                        key={tagIdx}
                        class={`tag ${group.category === "Core strengths" ? "tag--core" : ""}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <hr />

        <div class="two-col">
          <section
            class="block-section"
            id="education"
            aria-labelledby="education-heading"
            data-reveal=""
          >
            <h2 id="education-heading">
              <span class="block-tag">block #education</span>Education
            </h2>
            <ul class="edu-list">
              {education.map((edu, index) => (
                <li key={index}>
                  <h3>{edu.school}</h3>
                  <p class="edu-degree">{edu.degree}</p>
                  <p class="edu-date">
                    <time dateTime={edu.startYear}>{edu.startYear}</time> —{" "}
                    <time dateTime={edu.endYear}>{edu.endYear}</time>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <hr />

          <section
            class="block-section"
            id="languages"
            aria-labelledby="languages-heading"
            data-reveal=""
          >
            <h2 id="languages-heading">
              <span class="block-tag">block #languages</span>Languages
            </h2>
            <dl class="lang-list">
              {languages.map((lang, index) => (
                <div key={index}>
                  <dt>{lang.name}</dt>
                  <dd>{lang.proficiency}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </>
  );
});
