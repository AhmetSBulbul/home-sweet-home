import LaunchingSoon from "../../components/LaunchingSoon";
import { getSortedSnippetsData } from "../../lib/snippets";
import Link from "next/link";
import Date from "../../components/date";
import PageBody from "../../components/PageBody";
import BaseButton from "../../components/BaseButton";

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
    <PageBody>
      <div className="my-12 border-2 border-night px-2 py-3 text-center">
        <h1>Snippets</h1>
        <p className="text-center">
          Belirli problemlere yönelik hemen
          kullanılabilir kod parçacıkları
        </p>
      </div>
      <section>
        <ul>
          {allSnippetsData.map(
            ({ id, date, title }) => (
              <li key={id} className="my-4">
                <BaseButton
                  href={`/snippets/${id}`}
                  className="group"
                >
                  <article className="bg-gray-20 px-2 py-1 rounded-sm">
                    <h3 className="group-hover:text-night">
                      {title}
                    </h3>
                    <small>
                      Son Güncelleme:{" "}
                      <Date dateString={date} />
                    </small>
                  </article>
                </BaseButton>
              </li>
            )
          )}
        </ul>
      </section>
    </PageBody>
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
