import LaunchingSoon from "../../components/LaunchingSoon";
import { getSortedSnippetsData } from "../../lib/snippets";
import Link from "next/link";
import Date from "../../components/date";

export async function getStaticProps() {
  const allSnippetsData = getSortedSnippetsData();
  return {
    props: {
      allSnippetsData,
    },
  };
}

export default function Snippets({
  allSnippetsData,
}) {
  return (
    <section className="container px-8 min-h-screen">
      <h2> Blog</h2>
      <ul className="flex flex-col">
        {allSnippetsData.map(
          ({ id, date, title }) => (
            <li key={id}>
              <Link href={`/snippets/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

/* <section className="container px-8 min-h-screen">
        <h2> Blog</h2>
        <ul className="flex flex-col">
          {allPostsData.map(
            ({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            )
          )}
        </ul>
      </section> */
