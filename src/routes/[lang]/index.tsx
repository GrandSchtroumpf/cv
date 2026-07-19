import { component$ } from "@qwik.dev/core";
import {
  DocumentHead,
  routeLoader$,
  StaticGenerateHandler,
} from "@qwik.dev/router";
import { Page } from "~/components/page";
import { Resume } from "~/types";

const langs = import.meta.glob("../../data/frontend/oneleet/*.ts");

export const useData = routeLoader$(async (res) => {
  const { lang } = res.params;
  const value = await langs[`../../data/frontend/oneleet/${lang}.ts`]();
  return (value as { data: Resume }).data;
});

export default component$(() => {
  const data = useData();
  return <Page resume={data.value} />;
});

export const onStaticGenerate: StaticGenerateHandler = () => {
  return { params: [{ lang: "fr" }, { lang: "en" }] };
};

export const head: DocumentHead = ({ params, url }) => {
  const lang = params.lang as "en" | "fr";
  const description = {
    en: "CV of François Guezengar, Blockchain Engineer and Fullstack Lead based in Nantes, France. 10+ years building and scaling web3 products.",
    fr: "CV de François Guezengar, Blockchain Engineer et Fullstack Lead basé à Nantes, France. 10+ années de développement et d'expansion de produits web3.",
  };
  return {
    title: "François Guezengar",
    meta: [
      {
        name: "description",
        content: description[lang],
      },
      {
        name: "language",
        content: lang,
      },
      {
        name: "og:image",
        content: `${url.origin}/img/profile-480w.webp`,
      },
      {
        name: "og:image:width",
        content: "480",
      },
      {
        name: "og:image:height",
        content: "480",
      },
    ],
  };
};
