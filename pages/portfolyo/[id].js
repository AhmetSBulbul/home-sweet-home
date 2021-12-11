import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../../shared/libs";

import Date from "../../components/date";

import SEO from "../../components/SEO";
import { SubPageHero } from "../../modules";
import BaseButton from "../../components/BaseButton";
import Image from "next/image";

export default function PortfolioPost({
  workData,
}) {
  return (
    <>
      <SEO metaTitle={workData.title} />
      <SubPageHero
        title="Portfolyo"
        intro={workData.title}
      >
        <p className="text-white">
          {workData.excerpt}
        </p>
        <small>
          <Date dateString={workData.date} />
        </small>
      </SubPageHero>
      <article className="prose content-container">
        <div
          dangerouslySetInnerHTML={{
            __html: workData.contentHtml,
          }}
        />
      </article>

      {workData.preview && (
        <div className="content-container grid grid-cols-2 gap-y-4 laptop:grid-cols-3">
          {workData.preview.map((imgName) => (
            <Image
              key={`${workData.id}-${imgName}-preview`}
              src={`/portfolio/${workData.id}${imgName}`}
              alt=""
              height={500}
              width={500}
              objectFit="contain"
            />
          ))}
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths =
    getAllContentIdsByFolderName("works");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const workData =
    await getContentDataByFolderNameAndId(
      "works",
      params.id
    );
  return {
    props: {
      workData,
    },
  };
}
