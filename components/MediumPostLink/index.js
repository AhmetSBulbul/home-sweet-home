import firstParagraph from "../../utils/firstParagraph";
import styles from "./index.module.css";

const Thumbnail = ({ src }) => {
  return (
    <>
      {!src.includes("medium.com/_/stat?") && (
        <div>
          <img
            src={src}
            width="150px"
            height="150px"
            alt=""
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
    >
      <article>
        {/*<Thumbnail src={post.thumbnail} />*/}
        <h2>{post.title}</h2>
        <div
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
