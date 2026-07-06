import { component$, $, useStyles$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import style from "./nav.css?inline";

export const Nav = component$(() => {
  useStyles$(style);
  const changeTheme = $((input: HTMLInputElement) => {
    const value = input.value;
    sessionStorage.setItem("theme", value);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = document.getElementById("profile-img");
    if (!img) return;
    const origin = img.getBoundingClientRect();
    const x = origin.left + origin.width / 2;
    const y = origin.top + origin.height / 2;

    if (document.startViewTransition) {
      const root = document.documentElement;
      root.style.setProperty("--vt-x", `${x}px`);
      root.style.setProperty("--vt-y", `${y}px`);
      document.startViewTransition(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
      });
    }
  });

  return (
    <nav class="main-nav" aria-label="Section navigation">
      <a class="nav-top" href="#top">
        <img
          src="/img/profile-480w.webp"
          srcset="/img/profile-240w.webp 240w, /img/profile-480w.webp 480w, /img/profile-960w.webp 960w"
          sizes="auto"
          width={40}
          height={40}
          decoding="sync"
          loading="eager"
          fetchPriority="high"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M440-727 256-544l-56-56 280-280 280 280-56 57-184-184v287h-80v-287Zm0 487v-120h80v120h-80Zm0 160v-80h80v80h-80Z" />
        </svg>
      </a>
      <div class="section-nav listbox">
        <a class="listitem btn round" href="#summary">
          Profile
        </a>
        <a class="listitem btn round" href="#experience">
          Experience
        </a>
        <a class="listitem btn round" href="#skills">
          Skills
        </a>
        <a class="listitem btn round" href="#education">
          Education
        </a>
      </div>

      <button popovertarget="settings" class="menu-trigger btn icon">
        <svg
          aria-label="settings"
          height="24px"
          width="24px"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
      </button>
      <div id="settings" popover="auto" class="menu">
        <div role="menu" class="menu-content">
          <h2>Settings</h2>
          <div role="radiogroup" class="listbox" aria-label="Color theme">
            <label for="light-theme" class="listitem">
              <input
                id="light-theme"
                type="radio"
                name="theme"
                value="light"
                onChange$={(e, el) => changeTheme(el)}
              />
              <svg
                aria-label="Light theme"
                height="24px"
                width="24px"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM451.5-771.5Q440-783 440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760q-17 0-28.5-11.5Zm0 720Q440-63 440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40q-17 0-28.5-11.5ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
              </svg>
            </label>

            <label for="system-theme" class="listitem">
              <input
                id="system-theme"
                type="radio"
                name="theme"
                value="system"
                onChange$={(e, el) => changeTheme(el)}
                checked
              />
              <svg
                aria-label="Match system theme"
                height="24px"
                width="24px"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M400-200v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h40q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h40ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
              </svg>
            </label>

            <label for="dark-theme" class="listitem">
              <input
                id="dark-theme"
                type="radio"
                name="theme"
                value="dark"
                onChange$={(e, el) => changeTheme(el)}
              />
              <svg
                aria-label="Dark theme"
                height="24px"
                width="24px"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            </label>
          </div>
          <nav aria-label="Change language" class="listbox">
            <Link class="listitem" href="/en">
              English
            </Link>
            <Link class="listitem" href="/fr">
              Français
            </Link>
          </nav>
          <hr />
          <button
            id="print-btn"
            class="btn"
            type="button"
            onClick$={() => window.print()}
          >
            <svg
              aria-hidden="true"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v160q0 33-23.5 56.5T800-280h-80v80q0 33-23.5 56.5T640-120H320ZM160-360h80q0-33 23.5-56.5T320-440h320q33 0 56.5 23.5T720-360h80v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160Zm480-280v-120H320v120h-80v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320ZM160-560h640-640Z" />
            </svg>
            <span>Save / Print PDF</span>
          </button>
        </div>
      </div>
    </nav>
  );
});
