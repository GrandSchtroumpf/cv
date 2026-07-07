import { component$, useStyles$ } from "@qwik.dev/core";
import { Nav } from "./nav/nav";
import { Header } from "./header/header";
import type { Resume } from "../types";
import style from "./page.css?inline";
import print from "./print.css?inline";
import { useLocation } from "@qwik.dev/router";

interface Props {
  resume: Resume;
}

const formatDate = (date: string, local: string) => {
  return new Date(date).toLocaleDateString(local, {
    year: "numeric",
    month: "short",
  });
};

export const Page = component$<Props>(({ resume }) => {
  useStyles$(style);
  useStyles$(print);
  const location = useLocation();
  const { profile, experience, skills, education, languages } = resume;
  const lang = location.params.lang;
  return (
    <>
      <a class="skip-link" href="#main">
        Skip to main content
      </a>

      <Header class="no-print" profile={profile} />

      <main id="main" class="main">
        <Nav resume={resume} />
        <Header class="print-only" profile={profile} />

        <section
          class="section-block"
          id="summary"
          aria-labelledby="summary-heading"
          data-reveal=""
        >
          <h2 id="summary-heading" class="no-print">
            <span class="block-tag">block #profile</span>Summary
          </h2>
          <p class="summary-text" dangerouslySetInnerHTML={profile.summary}></p>
        </section>

        <hr />

        <section
          class="section-block"
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
                        <time dateTime={item.startDate}>
                          {formatDate(item.startDate, lang)}
                        </time>
                        —
                        <time dateTime={item.endDate}>
                          {formatDate(item.endDate, lang)}
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
          class="section-block"
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
                      <li key={tagIdx} class={["tag", index ? "" : "core"]}>
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

        <div class="two-col section-block" id="education">
          <section aria-labelledby="education-heading" data-reveal="">
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

          <section aria-labelledby="languages-heading" data-reveal="">
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
