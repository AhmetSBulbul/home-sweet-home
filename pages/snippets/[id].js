import {
  getAllSnippetsIds,
  getSnippetData,
} from "../../lib/snippets";
import Head from "next/head";
import Date from "../../components/date";
import PageBody from "../../components/PageBody";
import SEO from "../../components/SEO";

export default function Snippet({ snippetData }) {
  return (
    <>
      <SEO metaTitle={snippetData.title} />
      <PageBody>
        <article className="prose mx-auto mt-12">
          <h1>{snippetData.title}</h1>

          <Date dateString={snippetData.date} />

          <div
            dangerouslySetInnerHTML={{
              __html: snippetData.contentHtml,
            }}
          />
        </article>
      </PageBody>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllSnippetsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const snippetData = await getSnippetData(
    params.id
  );
  return {
    props: {
      snippetData,
    },
  };
}
