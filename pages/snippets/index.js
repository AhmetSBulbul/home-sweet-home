import { getSortedContentsDataByFolderName } from "../../shared/libs";

import {
  SubPageHero,
  SnippetsFeed,
  CallToContact,
} from "../../modules";

import SEO from "../../components/SEO";

export async function getStaticProps() {
  const allSnippetsData =
    getSortedContentsDataByFolderName("snippets");
  return {
    props: {
      allSnippetsData,
    },
  };
}

export default function Snippets({
  allSnippetsData,
}) {
  return (
    <>
      <SEO metaTitle="Snippets" />
      <SubPageHero
        title="Snippets"
        intro="Kod Parçacıkları"
      >
        <p className="text-white">
          Popüler işlevler için pratik kod
          parçacıkları.
        </p>
      </SubPageHero>
      <section className="content-container py-12">
        <SnippetsFeed
          snippetsPostList={allSnippetsData}
        />
      </section>
      <CallToContact />
    </>
  );
}
