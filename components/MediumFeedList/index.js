import categoryFilter from "../../utils/categoryFilter";
import styles from "./index.module.css";
import MediumPostLink from "../MediumPostLink";

const Loading = () => (
  <div className="font-display text-black font-black text-2xl text-center">
    ...
  </div>
);

const Error = ({ message }) => (
  <div className="font-display text-black font-black text-2xl text-center">
    Error:{message}
  </div>
);

const Feed = ({ category, feedList }) => {
  return (
    <div className="flex flex-col space-y-4">
      {categoryFilter(category, feedList).map(
        (singlePost) => {
          console.log(singlePost);
          console.log({
            title: "Başlık",
            link: "https://medium.com/@ahmets.bulbul/2021-modern-web-geli%C5%9Ftirme-yakla%C5%9F%C4%B1m%C4%B1-58fe1eca7775?source=rss-b8314211af08------2",
            description:
              '\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=21cabd7748f8" width="1" height="1" alt="">\n',
          });
          return (
            <MediumPostLink
              post={singlePost}
              key={singlePost.guid}
            />
          );
        }
      )}
    </div>
  );
};

export default function MediumFeedList({
  isLoaded,
  posts,
  error,
  category,
}) {
  return (
    <div>
      {isLoaded ? (
        error ? (
          <Error message={error} />
        ) : (
          <Feed
            category={category}
            feedList={posts}
          />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}
