import firstParagraph from "../utils/firstParagraph";

import { Arrow } from "./icons";

const Thumbnail = ({ src }) => {
  return (
    <>
      {!src.includes("medium.com/_/stat?") && (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={src}
            width="150px"
            height="150px"
            alt="thumbnail"
          />
        </div>
      )}
    </>
  );
};

export default function MediumPostLink({ post }) {
  return (
    <a
      href={post.link}
      rel="noreferrer"
      target="_blank"
      className="group"
    >
      <article className="flex flex-col">
        {/*<Thumbnail src={post.thumbnail} />*/}
        <h2 className="text-2xl transition-colors text-gray-110 group-hover:text-primary-lightest">
          {post.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: firstParagraph(
              post.description
            ),
          }}
        />
        <Arrow className="text-primary-lightest text-4xl block transition-transform ml-auto transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </article>
    </a>
  );
}
