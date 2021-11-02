import { useState, useEffect } from "react";

export default function useMediumFeed() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feed, setFeed] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40AhmetSBulbul"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setFeed(data.feed);
          setBlogs(data.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return [error, isLoaded, feed, blogs];
}
