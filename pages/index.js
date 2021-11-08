import {
  getSortedContentsDataByFolderName,
  getAllContentsDataByFolderName,
} from "../shared/libs";

import SectionHero from "../components/Hero";

import MediumFeedList from "../components/MediumFeedList";
import { useMediumFeed } from "../shared/hooks";
import TechnologiesFeedList from "../components/TechnologiesFeedList";
import Image from "next/image";
import ThemeButton from "../components/ThemeButton";
import { Arrow } from "../components/icons";
import SEO from "../components/SEO";
import { BreathtakingBeauty } from "../components/figures";

import SnippetsFeedList from "../components/SnippetsFeedList";

export default function Home({
  allSnippetsData,
  allTechnologiesData,
}) {
  const [
    error,
    isLoaded,
    feed,
    blogs,
    categories,
  ] = useMediumFeed();

  return (
    <>
      <SEO metaTitle="Freelance Yazılım Geliştirici" />
      <SectionHero />
      <section className="split-pair content-container py-12">
        <div className="flex-1">
          <h2 className="title">
            Flutter & Frontend Developer
          </h2>
        </div>
        <div className="flex-1 flex flex-col space-y-8">
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
          <ThemeButton
            className="ml-auto"
            href="/portfolyo"
            withIcon
          >
            İşlerimi İnceleyin <Arrow />
          </ThemeButton>
        </div>
      </section>
      <section className="flex flex-col content-container py-12">
        <div>
          <h2 className="text-center">
            Geliştirmede Kullandığım Yardımcı
            Teknolojiler
          </h2>
        </div>
        <div>
          <TechnologiesFeedList
            allTechnologies={allTechnologiesData}
          />
        </div>
      </section>

      <section className="split-pair content-container py-12 tablet:items-center">
        <BreathtakingBeauty wrapperClassName="flex-1" />
        <div className="flex-1 flex flex-col space-y-2">
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
          <ThemeButton
            withIcon
            href="/hakkimda"
            className="ml-auto"
          >
            Hakkımda <Arrow />
          </ThemeButton>
        </div>
      </section>
      <section className="content-container flex flex-col py-12">
        <h2 className="font-display text-3xl font-extrabold antialiased mb-8">
          Son Paylaşılanlar
        </h2>
        <MediumFeedList
          isLoaded={isLoaded}
          posts={blogs.slice(0, 3)}
          error={error}
          category=""
        />
        <ThemeButton
          className="ml-auto mt-4"
          href="/yazilarim"
          withIcon
        >
          Yazılarım <Arrow />
        </ThemeButton>
      </section>
      <section className="content-container split-pair py-12">
        <div className="flex-1">
          <h2 className="title text-4xl mb-4">
            Snippets
          </h2>
        </div>
        <div className="flex-1 flex flex-col">
          <SnippetsFeedList
            snippetsPostList={allSnippetsData.slice(
              0,
              3
            )}
          />
          <ThemeButton
            className="ml-auto mt-4"
            href="/snippets"
            withIcon
          >
            Snippets <Arrow />
          </ThemeButton>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allSnippetsData =
    getSortedContentsDataByFolderName("snippets");
  const allTechnologiesData =
    getAllContentsDataByFolderName(
      "technologies"
    );
  return {
    props: {
      allSnippetsData,
      allTechnologiesData,
    },
  };
}
