import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../../shared/libs";

import Date from "../../components/date";

import SEO from "../../components/SEO";
import { SubPageHero } from "../../modules";
import BaseButton from "../../components/BaseButton";
import Image from "next/image";
import { ThemeButton } from "../../components";
import {
  Repository,
  Link as LinkIcon,
  Live,
} from "../../components/icons";

export default function PortfolioPost({
  workData,
}) {
  return (
    <>
      <SEO metaTitle={workData.title} />
      <SubPageHero
        title="Portfolyo"
        intro={workData.title}
        featuredSrc={`/portfolio/${workData.id}/logo.png`}
        featuredAlt={`${workData.title} Logo`}
      >
        <p className="text-white">
          {workData.excerpt}
        </p>
        <ul>
          {workData.url && (
            <li>
              <BaseButton
                externalLink
                href={workData.url}
              >
                <LinkIcon className="inline-block mr-2" />
                {workData.url}
              </BaseButton>
            </li>
          )}
          {workData.repo && (
            <li>
              <BaseButton
                externalLink
                href={workData.repo}
              >
                <Repository className="inline-block mr-2" />
                {workData.repo}
              </BaseButton>
            </li>
          )}
          <li>
            <small>
              Geliştirilme Tarihi:{" "}
              <Date dateString={workData.date} />
            </small>
          </li>
        </ul>
      </SubPageHero>
      <article className="prose content-container">
        <div
          dangerouslySetInnerHTML={{
            __html: workData.contentHtml,
          }}
        />
      </article>

      {workData.preview && (
        <div className="content-container grid grid-cols-2 gap-y-4 laptop:grid-cols-3 relative py-12">
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
          {workData.drive && (
            <div className="absolute bg-gradient-to-b from-transparent to-white bottom-0 w-full flex flex-col justify-items-center items-center py-12">
              <ThemeButton
                externalLink
                href={workData.drive}
              >
                Demo Videolarını İncele
              </ThemeButton>
            </div>
          )}
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
