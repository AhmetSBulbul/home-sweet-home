import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../modules";

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
      <section className="content-container split-pair py-12">
        <div className="flex-1">
          <h2 className="font-display font-semibold text-3xl">
            İletişim Bilgileri
          </h2>
        </div>
        <div className="flex-1 font-link font-medium">
          <ul>
            <li>📧 ahmetsafabulbul@gmail.com</li>
            <li>📞 +90 (539) 517 38 77</li>
          </ul>
        </div>
      </section>
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
