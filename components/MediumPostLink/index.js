import firstParagraph from "../../utils/firstParagraph";
import styles from "./index.module.css";

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
      className="my-2"
    >
      <article className="flex flex-col">
        {/*<Thumbnail src={post.thumbnail} />*/}
        <h2 className="mb-2">{post.title}</h2>
        <div
          className="font-body font-light"
          dangerouslySetInnerHTML={{
            __html: firstParagraph(
              post.description
            ),
          }}
        />
      </article>
    </a>
  );
}
