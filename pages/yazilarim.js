import { getSortedContentsDataByFolderName } from "../shared/libs";
import { useMediumFeed } from "../shared/hooks";
import SEO from "../components/SEO";
import {
  SubPageHero,
  MediumFeed,
} from "../modules";
import { useState } from "react";
import CategoryButton from "../components/CategoryButton";
import ThemeButton from "../components/ThemeButton";
import SimplePostLink from "../components/SimplePostLink";
import { CallToContact } from "../modules";

export async function getStaticProps() {
  const allPostsData =
    getSortedContentsDataByFolderName("posts");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writings({
  allPostsData,
}) {
  const [
    error,
    isLoaded,
    feed,
    blogs,
    categories,
  ] = useMediumFeed();

  const [category, setCategory] = useState("");

  return (
    <>
      <SEO metaTitle="Yazılarım" />
      <SubPageHero
        title="Yazılarım"
        intro="Blog İçerikleri"
      >
        <p className="text-white">
          Yazılım, kültür sanat ve kripto paralar
          hakkında paylaştığım içerikler.
        </p>
      </SubPageHero>
      <section className="content-container">
        <div className="flex justify-between py-4 items-center">
          <h2 className="py-3">Kategoriler</h2>
          {category !== "" && (
            <ThemeButton
              small
              outlined
              onClick={() => setCategory("")}
            >
              Filtreleri Temizle
            </ThemeButton>
          )}
        </div>
        <div className="flex flex-wrap">
          {categories.map((item) => (
            <CategoryButton
              key={`${item}-listKey`}
              category={item}
              isActive={item === category}
              onClick={() => setCategory(item)}
            />
          ))}
        </div>
      </section>
      <section className="content-container py-4">
        <h2 className="py-3">Medium Yazılarım</h2>
        <div className="flex flex-col space-y-2 py-3">
          <MediumFeed
            isLoaded={isLoaded}
            posts={blogs}
            error={error}
            category={category}
          />
        </div>
      </section>
      <section className="content-container py-8">
        <h2 className="font-display font-bold text-2xl">
          Burada Paylaşılanlar
        </h2>
        <div className="flex flex-col space-y-2 py-4">
          {allPostsData.map((post) => (
            <SimplePostLink
              key={`postlist-${post.id}`}
              title={post.title}
              href={`${post.id}`}
            />
          ))}
        </div>
      </section>
      <CallToContact />
    </>
  );
}
