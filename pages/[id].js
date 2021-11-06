import {
  getAllTechnologyIds,
  getTechnologyData,
} from "../lib/technologies";
import Head from "next/head";
import SubPageHero from "../components/SubPageHero";

export default function TechnologyPage({
  technologyData,
}) {
  return (
    <>
      <Head>
        <title>{technologyData.title}</title>
      </Head>
      <SubPageHero
        title="Teknoloji"
        intro={technologyData.title}
        featuredSrc={technologyData.logoSrc}
        featuredAlt={technologyData.logoAlt}
      >
        <p className="text-white">
          {technologyData.description}
        </p>
      </SubPageHero>
      <article className="content-container prose">
        <div
          dangerouslySetInnerHTML={{
            __html: technologyData.contentHtml,
          }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllTechnologyIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const technologyData = await getTechnologyData(
    params.id
  );

  return {
    props: {
      technologyData,
    },
  };
}
