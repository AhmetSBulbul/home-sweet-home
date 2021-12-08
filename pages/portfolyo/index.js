import LaunchingSoon from "../../components/LaunchingSoon";
import SEO from "../../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../../modules";
import { PortfolioPostList } from "../../modules";
import PortfolioPostLink from "../../components/PortfolioPostLink";

export default function Portfolio() {
  return (
    <>
      <SEO metaTitle="Portfolyo" />
      <SubPageHero
        title="Portfolyo"
        intro="Projelerim"
      >
        <p className="text-white">
          Geliştirdiğim veya içerisinde bulunduğum
          projeler.
        </p>
      </SubPageHero>
      <PortfolioPostList />
      <CallToContact />
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
