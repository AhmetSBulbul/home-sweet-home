import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../shared/libs";
import { SubPageHero } from "../modules";
import SEO from "../components/SEO";

export default function TechnologyPage({
  technologyData,
}) {
  return (
    <>
      <SEO metaTitle={technologyData.title} />
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
  const paths = getAllContentIdsByFolderName(
    "technologies"
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const technologyData =
    await getContentDataByFolderNameAndId(
      "technologies",
      params.id
    );

  return {
    props: {
      technologyData,
    },
  };
}
