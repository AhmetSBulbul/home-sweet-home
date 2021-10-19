export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-8 laptop:px-10 min-h-screen">
        <h2 className="font-body font-extrabold text-secondary-dark text-3xl">
          Ben Ahmet Safa!
        </h2>

        <p className="font-body font-medium">
          It is a long established fact that a
          reader will be distracted by the
          readable content of a page when looking
          at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less
          normal distribution of letters, as
          opposed to using Content here, content
          here, making it look like readable
          English. Many desktop publishing
          packages and web page editors now use
          Lorem Ipsum as their default model text,
          and a search for lorem ipsum will
          uncover many web sites still in their
          infancy. Various versions have evolved
          over the years, sometimes by accident,
          sometimes on purpose (injected humour
          and the like).
        </p>
      </section>
    </>
  );
}

/* <section className="container px-8 min-h-screen">
        <h2> Blog</h2>
        <ul className="flex flex-col">
          {allPostsData.map(
            ({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            )
          )}
        </ul>
      </section> */
