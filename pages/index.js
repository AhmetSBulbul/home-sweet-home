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
      <section className="split-pair content-container">
        <div className="flex-1">
          <h2 className="font-display text-4xl font-extrabold">
            Flutter & Frontend Developer
          </h2>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="font-inter font-bold text-xl text-gray-110">
            Freelance yazılım geliştiricisi Ahmet
            Safa Bülbül. Mobil ve Web Uygulamaları
            geliştirerek profesyonel yazılım
            çözümleri üretiyorum. İşletmenizi
            internete taşıyorum. Yazılım
            geliştiricisi ile çalışarak
            fikirlerinizi ürünlere dönüştürün,
            işletmenizi internet çağına taşıyın.
          </p>
          <Button
            href="/portfolyo"
            className="bg-night text-white px-4 py-3 rounded-md flex ml-auto mt-6"
          >
            Portfolyo
          </Button>
        </div>
      </section>
      <section className="flex flex-col w-full justify-center text-center py-12 bg-gray-20">
        <Technologies />
      </section>
      <section className="responsive-flex justify-center tablet:items-center py-12 content-container">
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
          <p className="font-display font-medium text-sm uppercase">
            Merhaba, ben Ahmet 👋🏼
          </p>
          <h2 className="font-display text-4xl font-extrabold">
            Hakkımda
          </h2>
          <p className="font-body font-medium text-lg">
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
      <LaunchingSoon />
    </>
  );
}
