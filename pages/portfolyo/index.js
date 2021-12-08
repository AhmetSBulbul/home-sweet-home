import { getSortedContentsDataByFolderName } from "../../shared/libs";
import SEO from "../../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../../modules";
import { PortfolioPostList } from "../../modules";
import PortfolioPostLink from "../../components/PortfolioPostLink";

export default function Portfolio({
  allWorksData,
}) {
  return (
    <>
      <SEO metaTitle="Portfolyo" />
      <SubPageHero
        title="Portfolyo"
        intro="Projelerim"
      >
        <p className="text-white">
          Geliştirdiğim veya içerisinde bulunduğum
          projeler.
        </p>
      </SubPageHero>
      <PortfolioPostList
        worksPostList={allWorksData}
      />
      <CallToContact />
    </>
  );
}

export async function getStaticProps() {
  const allWorksData =
    getSortedContentsDataByFolderName("works");
  return {
    props: {
      allWorksData,
    },
  };
}
