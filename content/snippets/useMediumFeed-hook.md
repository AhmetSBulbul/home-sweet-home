---
title: 'Medium Yazılarınızı Web Sitenizde Listeleyin'
date: '2021-10-12'
description: 'Medium profil feedinizi web sitenizde listelemenize olanak sağlayan react hook kodu'
category:
    - Nextjs
    - Hook
---


## İşlevi

Medium profilinizin rss feedini rss2json apisi aracılığıyla veri listesi olarak kullanmanızı sağlıyor.

## Nasıl Kullanılır?

[rss2json](https://rss2json.com/) web sitesi üzerinden api çağrınızı yarattıktan sonra bu url'i apiLink değişkenine kopyalayın. Ardından listelemek istediğiniz konumda hook'u çağırarak veri listesini kullanabilirsiniz.

```javascript
const [error, isLoaded, feed, blogs, categories] = useMediumFeed();
```

### Kod

```javascript
import { useState, useEffect } from "react";

export default function useMediumFeedHook() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feed, setFeed] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(
    []
  );

  const apiLink =
    "API URL BAĞLANTISINI BURAYA KOPYALAYIN";

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
    fetch(apiLink)
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
```