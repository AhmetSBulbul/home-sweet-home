import SectionHero from "../components/Hero";
import PageBody from "../components/PageBody";
import Link from "next/link";
import Date from "../components/date";
import ThemeButton from "../components/ThemeButton";
import Head from "next/head";
import LaunchingSoon from "../components/LaunchingSoon";
import PostLink from "../components/PostLink";
import PostListLayout from "../components/PostListLayout";
import MediumFeedList from "../components/MediumFeedList";
import useMediumFeed from "../hooks/useMediumFeed";
import Technologies from "../components/Technologies";
import Image from "next/dist/client/image";

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
      <PageBody>
        <section className="responsive-flex items-center py-12">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-extrabold">
              Flutter & Frontend Developer
            </h2>
          </div>
          <div className="flex-1">
            <p className="font-body font-bold text-lg">
              Mobil Uygulama ve Web Geliştiricisi
              Ahmet Safa Bülbül. Mobil ve Web
              Uygulamaları ile profesyonel yazılım
              çözümleri üretiyorum. İşletmenizi
              internete taşıyorum. Yazılım
              geliştiricisi ile çalışarak
              fikirlerinizi ürünlere dönüştürün,
              işletmenizi internet çağına taşıyın.
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full justify-center text-center py-12">
          <div className="mx-auto mb-4 border-b-2 border-secondary">
            <h2 className="font-display font-bold text-xl">
              Kullandığım Teknolojiler
            </h2>
          </div>
          <Technologies />
        </section>
        <section className="responsive-flex justify-center tablet:items-center py-12">
          <div className="flex-1 block rounded-md overflow-hidden shadow-xl">
            <Image
              src="/me.png"
              alt="Ahmet Safa Bülbül"
              layout="responsive"
              width={420}
              height={280}
            />
          </div>
          <div className="flex-1 tablet:ml-12">
            <p className="font-body font-bold text-lg">
              Merhaba, ben Ahmet 👋🏼
            </p>
            <h2>Hakkımda</h2>
            <p>
              Frontend geliştirici olarak
              profesyonel yazılım hizmeti
              veriyorum. Müzik tutkunuyum, elimden
              geldiğince gitar çalar dilim
              döndüğünce şarkı söylerim. Ayrıca
              kripto paralar ve video oyunları ile
              ilgileniyorum.
            </p>
          </div>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-secondary-light antialiased mb-8">
            Son Paylaşılanlar
          </h2>
          <MediumFeedList
            isLoaded={isLoaded}
            posts={blogs.slice(0, 2)}
            error={error}
            category=""
          />
        </section>
      </PageBody>
      <LaunchingSoon />
    </>
  );
}
