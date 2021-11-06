import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import SubPageHero from "../components/SubPageHero";

export default function Contact() {
  return (
    <>
      <SEO metaTitle="İletişim" />
      <SubPageHero
        title="İletişim"
        intro="Bana Ulaşın"
      >
        <p className="text-white">Tanışalım.</p>
      </SubPageHero>
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
