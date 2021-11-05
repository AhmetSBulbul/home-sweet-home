import SectionHero from "../components/Hero";

import Head from "next/head";

import MediumFeedList from "../components/MediumFeedList";
import useMediumFeed from "../hooks/useMediumFeed";
import Technologies from "../components/Technologies";
import Image from "next/dist/client/image";
import Button from "../components/Button";

export default function Home() {
  const [
    error,
    isLoaded,
    feed,
    blogs,
    categories,
  ] = useMediumFeed();

  return (
    <>
      <Head>
        <title>
          Ahmet S. Bulbul | Frontend Developer
        </title>
      </Head>
      <SectionHero />
      <section className="split-pair content-container py-12">
        <div className="flex-1">
          <h2 className="title">
            Flutter & Frontend Developer
          </h2>
        </div>
        <div className="flex-1">
          <p>
            Freelance yazılım geliştiricisi{" "}
            <b>Ahmet Safa Bülbül</b>. Mobil
            uygulamalar ve web siteleri
            geliştirerek profesyonel yazılım
            çözümleri üretiyorum. İşletmenizi
            internete taşıyorum. Yazılım
            geliştiricisi ile çalışarak
            fikirlerinizi ürünlere dönüştürün,
            işletmenizi internet çağına taşıyın.
          </p>
        </div>
      </section>

      <section className="split-pair content-container pb-12 tablet:items-center">
        <div className="flex-1 block rounded-md overflow-hidden shadow-xl">
          <Image
            src="/me.png"
            alt="Ahmet Safa Bülbül"
            layout="responsive"
            width={420}
            height={280}
          />
        </div>
        <div className="flex-1">
          <p className="font-display font-medium text-sm uppercase">
            Merhaba, ben Ahmet 👋🏼
          </p>
          <h2 className="text-4xl">Hakkımda</h2>
          <p>
            Frontend geliştirici olarak
            profesyonel yazılım hizmeti veriyorum.
            Müzik tutkunuyum, elimden geldiğince
            gitar çalar dilim döndüğünce şarkı
            söylerim. Ayrıca kripto paralar ve
            video oyunları ile ilgileniyorum.
          </p>
        </div>
      </section>
      <section className="content-container">
        <h2 className="font-display text-3xl font-extrabold antialiased mb-8">
          Son Paylaşılanlar
        </h2>
        <MediumFeedList
          isLoaded={isLoaded}
          posts={blogs.slice(0, 2)}
          error={error}
          category=""
        />
      </section>
    </>
  );
}
