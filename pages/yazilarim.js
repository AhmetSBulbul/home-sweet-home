import useMediumFeed from "../hooks/useMediumFeed";
import firstParagraph from "../utils/firstParagraph";
import categoryFilter from "../utils/categoryFilter";
import MediumPostLink from "../components/MediumPostLink";
import MediumFeedList from "../components/MediumFeedList";
import MediumCategoryList from "../components/MediumCategoryList";
import { useState } from "react";

import Image from "next/image";

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
    <div className="post-list-section container px-4 py-12">
      <div className="post-list-main-container">
        <h1>Yazılarım</h1>
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
  );
}
