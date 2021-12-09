import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../shared/libs";

import Date from "../components/date";

import SEO from "../components/SEO";
import { SubPageHero } from "../modules";

export default function Snippet({ snippetData }) {
  return (
    <>
      <SEO metaTitle={snippetData.title} />
      <SubPageHero
        title="Snippet"
        intro={snippetData.title}
      >
        <p className="text-white">
          {snippetData.excerpt}
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
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths =
    getAllContentIdsByFolderName("posts");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const snippetData =
    await getContentDataByFolderNameAndId(
      "posts",
      params.id
    );
  return {
    props: {
      snippetData,
    },
  };
}
