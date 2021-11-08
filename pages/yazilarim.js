import { useMediumFeed } from "../shared/hooks";

import MediumCategoryList from "../components/MediumCategoryList";
import SEO from "../components/SEO";
import {
  SubPageHero,
  MediumFeed,
} from "../modules";
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
          <MediumFeed
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
