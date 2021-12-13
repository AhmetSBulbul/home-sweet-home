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
      </SubPageHero>
      <section className="content-container py-12">
        <h2 className="font-link font-bold text-3xl laptop:w-1/2 mb-8 tracking-tight">
          İş fikrinizden bahsedin sizin için en
          uygun yolu birlikte planlayalım.
        </h2>
        <small className="block laptop:w-1/2">
          📌{" "}
          <strong>
            Tasarım dosyası veya proje
            dökümantasyonu gibi belgelere
            sahipseniz{" "}
            <a
              className="underline font-link font-medium"
              href="mailto:ahmetsafabulbul@gmail.com"
            >
              ahmetsafabulbul@gmail.com
            </a>{" "}
            adresi üzerinden ulaşabilirsiniz.
          </strong>
        </small>
      </section>
      <ContactForm />
      <strong className="text-center block">
        ya da
      </strong>
      <div className="content-container flex py-12">
        <BaseButton
          href="https://superpeer.com/ahmetsbulbul/-/bana-soru-sor"
          target="_blank"
          rel="noreferrer"
          className="w-full transition-opacity bg-night text-white text-center p-8 rounded-xl hover:opacity-80"
          externalLink
        >
          Superpeer üzerinden ücretsiz görüşme
          için randevu alabilirsiniz.
        </BaseButton>
      </div>
    </>
  );
}
