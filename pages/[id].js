import {
  getAllPostIds,
  getPostData,
} from "../lib/posts";
import Head from "next/head";
import Date from "../components/date";
import PageBody from "../components/PageBody";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <PageBody>
        <article>
          <h1>{postData.title}</h1>
          <br />
          {postData.id}
          <br />
          <Date dateString={postData.date} />
          <br />
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: postData.contentHtml,
            }}
          />
        </article>
      </PageBody>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
