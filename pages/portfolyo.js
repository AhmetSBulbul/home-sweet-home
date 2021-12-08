import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../modules";
import Image from "next/image";
import RotasizLogo from "../images/rotasiz-logo.png";
import QupoBusinessLogo from "../images/qupo-business-logo.png";
import TutkalLogo from "../images/tutkal-logo.png";
import CoffeeCrafterLogo from "../images/coffee-crafter-logo.png";

export default function Portfolio() {
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
      <div className="content-container split-pair px-4 py-6 shadow-lg rounded-lg my-4">
        <div className="flex-1">
          <Image src={RotasizLogo} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl">
            Rotasiz Karavan Web Sitesi
          </h2>
        </div>
      </div>
      <div className="content-container split-pair px-4 py-6 shadow-lg rounded-lg my-4">
        <div className="flex-1">
          <Image
            src={QupoBusinessLogo}
            alt=""
            className="bg-messaging-error px-4 py-4"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl">
            Qupo Business
          </h2>
        </div>
      </div>
      <div className="content-container split-pair px-4 py-6 shadow-lg rounded-lg my-4">
        <div className="flex-1">
          <Image src={CoffeeCrafterLogo} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl">
            Coffee Crafter
          </h2>
        </div>
      </div>
      <div className="content-container split-pair px-4 py-6 shadow-lg rounded-lg my-4">
        <div className="flex-1">
          <Image src={TutkalLogo} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl">
            Tutkal Web Sitesi
          </h2>
        </div>
      </div>
      <CallToContact />
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
