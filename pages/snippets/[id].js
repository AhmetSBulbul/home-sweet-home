import {
  getAllSnippetsIds,
  getSnippetData,
} from "../../lib/snippets";
import Head from "next/head";
import Date from "../../components/date";

export default function Snippet({ snippetData }) {
  return (
    <>
      <Head>
        <title>{snippetData.title}</title>
      </Head>
      {snippetData.title}
      <br />
      {snippetData.id}
      <br />
      <Date dateString={snippetData.date} />
      <br />
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: snippetData.contentHtml,
        }}
      />
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
