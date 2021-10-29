import SectionHero from "../components/Hero";
import PageBody from "../components/PageBody";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import ThemeButton from "../components/ThemeButton";
import Head from "next/head";
import LaunchingSoon from "../components/LaunchingSoon";
import PostLink from "../components/PostLink";
import PostListLayout from "../components/PostListLayout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const categories = [
  "react",
  "nextjs",
  "css",
  "animasyon",
];

const SideChildren = ({ children }) => {
  return (
    <>
      <h3 className="text-black">
        Konu Etiketleri
      </h3>
      <div className="grid grid-flow-row grid-cols-3 gap-2">
        {categories.map(({ item }, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-sm text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>
          Ahmet S. Bulbul | Frontend Developer
        </title>
      </Head>
      <SectionHero />
      <PageBody>
        <PostListLayout>
          <section>
            <h2 className="font-display text-xl font-bold text-secondary-light antialiased mb-8">
              {" "}
              En Son Paylaşılanlar
            </h2>
            <ul className="flex flex-col">
              {allPostsData.map(
                ({
                  id,
                  date,
                  title,
                  excerpt,
                  category,
                }) => (
                  <li key={id}>
                    <PostLink
                      id={id}
                      title={title}
                      date={date}
                      category={category}
                    >
                      {excerpt}
                    </PostLink>
                  </li>
                )
              )}
            </ul>
          </section>
        </PostListLayout>
      </PageBody>
      <LaunchingSoon />
    </>
  );
}
