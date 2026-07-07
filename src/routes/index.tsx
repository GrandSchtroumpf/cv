import { Link, type DocumentHead } from "@qwik.dev/router";
import { component$ } from "@qwik.dev/core";

export default component$(() => {
  return (
    <nav>
      <Link href="/en">English</Link>
      <Link href="/fr">French</Link>
    </nav>
  );
});

export const head: DocumentHead = {
  title: "François Guezengar",
};
