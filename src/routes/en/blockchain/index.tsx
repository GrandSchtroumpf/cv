import { component$ } from "@qwik.dev/core";
import { Page } from "~/components/page";
import { data } from "./data";
import { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return <Page resume={data} />;
});

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
