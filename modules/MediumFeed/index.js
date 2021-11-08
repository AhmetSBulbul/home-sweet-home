import { categoryFilter } from "../../shared/utils";
import styles from "./index.module.css";
import MediumPostLink from "../../components/MediumPostLink";

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

export default function MediumFeedModule({
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
