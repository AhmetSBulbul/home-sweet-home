import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../../shared/libs";

import Date from "../../components/date";

import SEO from "../../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../../modules";

export default function Snippet({ snippetData }) {
  return (
    <>
      <SEO metaTitle={snippetData.title} />
      <SubPageHero
        title="Snippet"
        intro={snippetData.title}
      >
        <p className="text-white">
          {snippetData.description}
        </p>
        <small>
          <Date dateString={snippetData.date} />
        </small>
      </SubPageHero>
      <article className="prose content-container">
        <div
          dangerouslySetInnerHTML={{
            __html: snippetData.contentHtml,
          }}
        />
      </article>
      <CallToContact />
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths =
    getAllContentIdsByFolderName("snippets");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const snippetData =
    await getContentDataByFolderNameAndId(
      "snippets",
      params.id
    );
  return {
    props: {
      snippetData,
    },
  };
}
