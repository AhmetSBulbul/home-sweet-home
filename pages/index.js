import SectionHero from "../components/Hero";
import PageBody from "../components/PageBody";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import ThemeButton from "../components/ThemeButton";
import Head from "next/head";
import LaunchingSoon from "../components/LaunchingSoon";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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
        <section className="laptop:px-4">
          <h2> En Son Paylaşılanlar</h2>
          <ul className="flex flex-col">
            {allPostsData.map(
              ({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/${id}`}>
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
      </PageBody>
      <LaunchingSoon />
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
