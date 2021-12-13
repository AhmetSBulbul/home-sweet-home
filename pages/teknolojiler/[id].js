import {
  getAllContentIdsByFolderName,
  getContentDataByFolderNameAndId,
} from "../../shared/libs";
import { SubPageHero } from "../../modules";
import SEO from "../../components/SEO";
import BaseButton from "../../components/BaseButton";

function formatLabel(id) {
  const formattedLabel = id.replace("-", " ");
  return formattedLabel;
}

export default function TechnologyPage({
  technologyData,
}) {
  return (
    <>
      <SEO metaTitle={technologyData.title} />
      <SubPageHero
        title="Teknoloji"
        intro={technologyData.title}
        featuredSrc={technologyData.logoSrc}
        featuredAlt={technologyData.logoAlt}
      >
        <p className="text-white">
          {technologyData.description}
        </p>
      </SubPageHero>
      <article className="content-container prose">
        <div
          dangerouslySetInnerHTML={{
            __html: technologyData.contentHtml,
          }}
        />
      </article>
      <section className="content-container grid grid-cols-1 grid-flow-row laptop:grid-cols-3 laptop:grid-flow-col">
        {technologyData.projects && (
          <div>
            <h2>İlgili Projeler</h2>
            <ul>
              {technologyData.projects.map(
                (item) => {
                  return (
                    <li key={`projelist-${item}`}>
                      <BaseButton
                        href={`/portfolyo/${item}`}
                        className="capitalize"
                      >
                        {item.replace(/-/g, " ")}
                      </BaseButton>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}
        {technologyData.snippets && (
          <div>
            <h2>İlgili Snippetslar</h2>
            <ul>
              {technologyData.snippets.map(
                (item) => {
                  return (
                    <li
                      key={`snippetslist-${item}`}
                    >
                      <BaseButton
                        href={`/snippets/${item}`}
                        className="capitalize"
                      >
                        {item.replace(/-/g, " ")}
                      </BaseButton>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIdsByFolderName(
    "technologies"
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const technologyData =
    await getContentDataByFolderNameAndId(
      "technologies",
      params.id
    );

  return {
    props: {
      technologyData,
    },
  };
}
