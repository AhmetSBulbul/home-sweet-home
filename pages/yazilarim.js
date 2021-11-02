import useMediumFeed from "../hooks/useMediumFeed";

import Image from "next/image";

export default function Writings() {
  const [error, isLoaded, feed, blogs] =
    useMediumFeed();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col">
        <h1>{feed.title}</h1>
        {blogs.map((item) => {
          const index =
            item.description.indexOf("</p>") + 3;
          const desc = item.description.substring(
            0,
            index
          );
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
                  __html: desc,
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
