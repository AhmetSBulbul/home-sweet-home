import {
  SubPageHero,
  CallToContact,
} from "../modules";
import LaunchingSoon from "../components/LaunchingSoon";
import SEO from "../components/SEO";
import Image from "next/image";
import me from "../images/BeachVibes.png";
import ImageBox from "../components/ImageBox";
import childhood from "../images/childhoodclipped.jpg";
import desktopart from "../images/desktopart.jpg";
import ContactMe from "../components/ContactMe";

export default function About() {
  return (
    <>
      <SEO metaTitle="Hakkımda" />
      <SubPageHero
        title="Hakkımda"
        intro="Merhaba, Ben Ahmet."
      >
        <p className="text-white">
          Mobil Uygulama ve web geliştirici olarak
          yazılım hizmeti sunuyorum.
        </p>
      </SubPageHero>
      <section className="content-container split-pair items-center py-12">
        <ImageBox
          className="flex-1"
          src={me}
          alt=""
        />
        <div className="tablet:w-7/12 flex flex-col space-y-4">
          <h2 className="font-display font-bold text-3xl">
            Freelance Yazılım Geliştirici, Müzik
            Tutkunu, Kripto Para Tüccarı.
          </h2>
          <p className="font-display font-bold text-3xl">
            Mobil Uygulamalar ve Web Arayüzleri
            geliştiriyorum. Aynı zamanda Manisa
            Celal Bayar Üniversitesi Yazılım
            Mühendisliği Bölümünde öğrenimime
            devam etmekteyim.
          </p>
        </div>
      </section>
      <section className="content-container flex flex-col py-12">
        <div>
          <h2 className="title">Ben Kimim?</h2>
          <div className="split-pair items-center">
            <div className="flex-1">
              <p>
                Ben Ahmet Safa Bülbül. 1999
                yılında Antalya'da dünyaya geldim
                ve bu şehre aşık oldum.
                Üniversiteye kadar olan öğrenim
                hayatımı Antalya'da tamamladım.
              </p>
              <br />
              <p>
                Bilgisayarlar ile ilkokul birinci
                sınıfta tanıştım. Mesleğime karar
                verişim de yine ilkokulda "Nasıl
                bilgisayarlar ile daha çok vakit
                geçirebilirim?" sorusunun cevabı
                olarak gerçekleşti.
              </p>
            </div>
            <ImageBox
              src={childhood}
              className="desktop:w-1/4"
              alt=""
            />
          </div>
        </div>
        <div className="my-8">
          <p>
            It is a long established fact that a
            reader will be distracted by the
            readable content of a page when
            looking at its layout. The point of
            using Lorem Ipsum is that it has a
            more-or-less normal distribution of
            letters, as opposed to using 'Content
            here, content here', making it look
            like readable English. Many desktop
            publishing packages and web page
            editors now use Lorem Ipsum as their
            default model text, and a search for
            'lorem ipsum' will uncover many web
            sites still in their infancy. Various
            versions have evolved over the years,
            sometimes by accident, sometimes on
            purpose (injected humour and the
            like).
          </p>
        </div>
      </section>
      <section className="content-container split-pair py-12 items-center">
        <div className="flex-1">
          <h2 className="title">Deneyim</h2>
          <p>
            It is a long established fact that a
            reader will be distracted by the
            readable content of a page when
            looking at its layout. The point of
            using Lorem Ipsum is that it has a
            more-or-less normal distribution of
            letters, as opposed to using Content
            here, content here,
          </p>
        </div>
        <ImageBox
          className="flex-1"
          src={desktopart}
          alt=""
        />
      </section>
      <section className="content-container flex flex-col">
        <h2 className="title mx-auto">
          Gönüllü İşler
        </h2>
        <div className="split-pair">
          <div className="flex-1">
            <h3>Oyun Geliştiricileri Kulübü</h3>
            <p>
              It is a long established fact that a
              reader will be distracted by the
              readable content of a page when
              looking at its layout. The point of
              using Lorem Ipsum is that it has a
              more-or-less normal distribution of
              letters, as opposed to using
              'Content here, content here,
            </p>
          </div>
          <div className="flex-1">
            <h3>MCBÜ Bilişim Topluluğu</h3>
            <p>
              It is a long established fact that a
              reader will be distracted by the
              readable content of a page when
              looking at its layout. The point of
              using Lorem Ipsum is that it has a
              more-or-less normal distribution of
              letters, as opposed to using Content
              here, content here,
            </p>
          </div>
        </div>
      </section>
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
