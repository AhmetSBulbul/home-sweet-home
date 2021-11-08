import { firstParagraph } from "../shared/utils";

import { Arrow } from "./icons";

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
