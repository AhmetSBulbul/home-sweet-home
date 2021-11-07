import { useState, useEffect } from "react";

export default function useMediumFeedHook() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feed, setFeed] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(
    []
  );

  const allCategories = (posts) => {
    let tags = [];
    posts.forEach((item, index) => {
      item.categories.forEach(
        (categoryItem, index) => {
          if (!tags.includes(categoryItem)) {
            tags.push(categoryItem);
          }
        }
      );
    });

    return tags;
  };

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ahmets.bulbul"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setFeed(data.feed);
          setBlogs(data.items);
          setCategories(
            allCategories(data.items)
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return [
    error,
    isLoaded,
    feed,
    blogs,
    categories,
  ];
}
