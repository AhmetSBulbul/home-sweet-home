import SEO from "../components/SEO";
import {
  SubPageHero,
  CallToContact,
} from "../modules";
import { BreathtakingBeauty } from "../components/figures";
import SocialMediaContact from "../components/SocialMediaContact";
import BaseButton from "../components/BaseButton";

export default function Contact() {
  return (
    <>
      <SEO metaTitle="İletişim" />
      <SubPageHero
        title="İletişim"
        intro="Bana Ulaşın"
      />
      <section className="content-container split-pair py-12">
        <BreathtakingBeauty wrapperClassName="flex-1" />
        <div className="flex-1 flex flex-col">
          <h2 className="font-display font-semibold text-3xl mb-6">
            İletişim Bilgileri
          </h2>
          <ul className="flex flex-col space-y-2 font-link font-medium">
            <li>
              <strong>Telefon</strong>:{" "}
              <a
                className="underline font-link font-normal"
                href="tel:+905395173877"
              >
                +90 (539) 517 38 77
              </a>
            </li>
            <li>
              <strong>E-Posta:</strong>{" "}
              <a
                className="underline font-link font-normal"
                href="mailto:ahmetsafabulbul@gmail.com"
              >
                ahmetsafabulbul@gmail.com
              </a>
            </li>
            <li>
              <strong>Adres:</strong>{" "}
              <span>
                Basın Sitesi Mahallesi, Gazeteci
                Hasan Tahsin Caddesi,
                Karabağlar/İzmir
              </span>
            </li>
          </ul>
          <SocialMediaContact className="text-black" />
        </div>
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
