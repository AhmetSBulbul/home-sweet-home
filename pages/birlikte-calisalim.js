import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import {
  SubPageHero,
  ContactForm,
} from "../modules";
import BaseButton from "../components/BaseButton";

export default function HireMe() {
  return (
    <>
      <SEO metaTitle="Birlikte Çalışalım" />
      <SubPageHero
        title="Birlikte Çalışalım"
        intro="Size Nasıl Yardımcı Olabilirim?"
      >
        <p className="font-display font-bold text-2xl text-white">
          Form aracılığıyla bana proje özetini
          gönderebilir ya da sayfanın altında
          bulunan buton aracılığıyla superpeer
          üzerinden randevu alabilirsiniz.
        </p>
        <p className="text-white">
          İş fikrinizden bahsedin sizin için en
          uygun yolu birlikte planlayalım.
        </p>
      </SubPageHero>

      <ContactForm />
      <strong className="text-center block">
        ya da
      </strong>
      <div className="content-container flex py-12">
        <BaseButton
          href="https://superpeer.com/ahmetsbulbul/-/bana-soru-sor"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-night text-white text-center p-8 rounded-xl"
          externalLink
        >
          Superpeer üzerinden ücretsiz görüşme
          için randevu alabilirsiniz.
        </BaseButton>
      </div>
    </>
  );
}
