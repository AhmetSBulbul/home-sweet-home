import useMediumFeed from "../hooks/useMediumFeed";
import firstParagraph from "../utils/firstParagraph";
import categoryFilter from "../utils/categoryFilter";
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col">
        <h1>{feed.title}</h1>
        {categoryFilter(category, blogs).map(
          (item) => {
            return (
              <div
                key={item.guid}
                className="flex flex-col"
              >
                {!item.thumbnail.includes(
                  "medium.com/_/stat?"
                ) && (
                  <div>
                    <img
                      src={item.thumbnail}
                      width="150px"
                      height="150px"
                      alt=""
                    />
                  </div>
                )}
                <div>
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstParagraph(
                      item.description
                    ),
                  }}
                />
              </div>
            );
          }
        )}
      </div>
    );
  }
}
