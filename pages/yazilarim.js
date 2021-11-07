import { useMediumFeed } from "../shared/hooks";

import MediumPostLink from "../components/MediumPostLink";
import MediumFeedList from "../components/MediumFeedList";
import MediumCategoryList from "../components/MediumCategoryList";
import SEO from "../components/SEO";
import SubPageHero from "../components/SubPageHero";
import { useState } from "react";

export default function Writings() {
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
      <div className="post-list-section content-container py-12">
        <div className="post-list-main-container flex-1">
          <MediumFeedList
            isLoaded={isLoaded}
            posts={blogs}
            error={error}
            category={category}
          />
        </div>
        <div className="post-list-side-container">
          {isLoaded && !error && (
            <MediumCategoryList
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
          )}
        </div>
      </div>
    </>
  );
}
