export default function categoryFilter(
  category,
  posts
) {
  if (category.length > 0) {
    return posts.filter((post) =>
      post.categories.includes(category)
    );
  } else {
    return posts;
  }
}
