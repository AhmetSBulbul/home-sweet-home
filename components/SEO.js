import Head from "next/head";

export default function SEO({ metaTitle }) {
  const titleMain = "Ahmet S. Bulbul";
  return (
    <>
      <Head>
        <title>
          {metaTitle
            ? `${metaTitle} | ${titleMain}`
            : titleMain}
        </title>
      </Head>
    </>
  );
}
