import {
  SubPageHero,
  ServicesList,
} from "../modules";
import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";

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
      <section className="content-container split-pair">
        <div className="flex-1">
          <h2>
            Yazılım Geliştirici ile fikirlerinizi
            ürüne dönüştürün, işletmenizi
            internete taşıyın.
          </h2>
        </div>
        <div className="flex-1">
          <p>
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
      <section className="content-container py-12">
        <ServicesList />
      </section>
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
