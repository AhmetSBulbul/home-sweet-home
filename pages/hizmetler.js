import {
  SubPageHero,
  ServicesList,
  CallToContact,
} from "../modules";
import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import ContactMe from "../components/ContactMe";

export default function Services() {
  return (
    <>
      <SEO metaTitle="Hizmetler" />
      <SubPageHero
        title="Hizmetler"
        intro="Size Nasil Yardimci Olabilirim?"
      >
        <p className="text-white">
          Mobil Uygulama ve web geliştirici olarak
          yazılım hizmeti sunuyorum.
        </p>
      </SubPageHero>
      <section className="content-container split-pair py-12">
        <div className="flex-1">
          <h2 className="title">
            Yazılım Geliştirici ile fikirlerinizi
            ürüne dönüştürün, işletmenizi
            internete taşıyın.
          </h2>
        </div>
        <div className="flex-1">
          <p className="font-display text-2xl">
            Yazılım Geliştirici olarak, uygulama
            fikrinizi bir ürüne dönüştürmek,
            işletmenizi internete taşımak, web
            site ve mobil uygulamalarınızın
            bakımını yaparak daha iyi duruma
            getirmek için sizinle çalışıyor
            olacağım.
          </p>
        </div>
      </section>
      <section className="content-container flex flex-col py-12">
        <h2 className="mx-auto text-xl mb-8 border-b-2 border-gray-50">
          Ne Yapiyorum?
        </h2>
        <ServicesList />
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
