import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import SubPageHero from "../components/SubPageHero";

export default function HireMe() {
  return (
    <>
      <SEO metaTitle="Birlikte Çalışalım" />
      <SubPageHero
        title="Birlikte Çalışalım"
        intro="Size Nasıl Yardımcı Olabilirim?"
      >
        <p className="text-white">
          İş fikrinizden bahsedin sizin için en
          uygun yolu birlikte planlayalım.
        </p>
      </SubPageHero>
      <LaunchingSoon />
    </>
  );
}
