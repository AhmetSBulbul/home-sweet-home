import SectionHero from "../components/Hero";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/dist/client/link";
import Date from "../components/date";
import ThemeButton from "../components/ThemeButton";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function About({ allPostsData }) {
  return (
    <>
      <section className="max-w-6xl mx-auto px-8 laptop:px-10 min-h-screen">
        <h2 className="font-body font-extrabold text-secondary-dark text-3xl">
          Ben Ahmet Safa!
        </h2>

        <p className="font-body font-medium">
          Sürekli yeni şeyler öğrenmeye kafasını
          takmış, ekrana şekil çizdirebildiği
          bütün platformlarda yazılım
          geliştirmekten keyif alan ancak şartlar
          gereği çoğunlukla cross-platform mobil
          uygulamalar ve frontend yazılımları
          geliştiren yazılım mühendisliği
          öğrencisiyim.
        </p>
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
