import LaunchingSoon from "../../components/LaunchingSoon";
import { getSortedSnippetsData } from "../../lib/snippets";
import Link from "next/link";
import Date from "../../components/date";
import PageBody from "../../components/PageBody";
import BaseButton from "../../components/BaseButton";
import SubPageHero from "../../components/SubPageHero";
import SnippetsFeedList from "../../components/SnippetsFeedList";

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
    <>
      <SubPageHero
        title="Snippets"
        intro="Kod Parçacıkları"
      >
        <p className="text-white">
          Popüler işlevler için pratik kod
          parçacıkları.
        </p>
      </SubPageHero>
      <section className="content-container py-12 min-h-screen">
        <SnippetsFeedList
          snippetsPostList={allSnippetsData}
        />
      </section>
    </>
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
