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
import { ThemeButton } from "../components";
import { Arrow } from "../components/icons";

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
      <section className="content-container flex flex-col space-y-4 items-center text-center py-24">
        <h2 className="font-display font-bold text-3xl">
          Freelance Yazılım Geliştirici, Müzik
          Tutkunu, Kripto Para Tüccarı.
        </h2>
        <p className="font-display font-bold text-3xl">
          Mobil Uygulamalar ve Web Arayüzleri
          geliştiriyorum. Aynı zamanda Manisa
          Celal Bayar Üniversitesi Yazılım
          Mühendisliği Bölümünde öğrenimime devam
          etmekteyim.
        </p>
      </section>
      <section className="content-container split-pair py-12">
        <div className="flex-1">
          <h2 className="font-display font-bold text-3xl">
            Yeteneklerim, Hedeflerim ve Vizyonum.
          </h2>
        </div>
        <div className="flex-1">
          <p>
            Araştırmak ve öğrenmek, hep içerisinde
            bulunduğum, bulunmaktan çok keyif
            aldığım, daima devam ettirmeyi
            hedeflediğim bir süreç ve en güçlü
            yeteneklerim arasındadır. Bunların
            yanında etkili iletişim kurabilme,
            uyum sağlama ve bilgi aktarabilme
            kabiliyetlerine sahibim.
          </p>
          <p>
            It is a long established fact that a
            reader will be distracted by the
            readable content of a page when
            looking at its layout.
          </p>
          <p>
            It is a long established fact that a
            reader will be distracted by the
            readable content of a page when
            looking at its layout.
          </p>
        </div>
      </section>
      <section className="content-container split-pair py-12">
        <div className="flex-1 flex flex-col">
          <h2 className="title mb-4">Deneyim</h2>
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
          <ThemeButton
            withIcon
            href="/portfolyo"
            className="ml-auto mt-4"
          >
            İşlerimi İnceleyin{" "}
            <Arrow className="text-2xl" />
          </ThemeButton>
        </div>
        <ImageBox
          className="flex-1"
          src={desktopart}
          alt=""
        />
      </section>
      <section className="content-container flex flex-col py-12">
        <h2 className="title mx-auto mb-12">
          Gönüllü İşler
        </h2>
        <div className="split-pair">
          <div className="flex-1 flex flex-col space-y-4">
            <h3>Oyun Geliştiricileri Kulübü</h3>
            <p>
              2020-2021 yılları arasında Manisa
              Celal Bayar Üniversitesi Oyun
              Geliştiricileri Kulübünün
              başkanlığını üstlendim. Oyun
              geliştiriciliği ilgi alanımda olmasa
              da başkanlık yaptığım dönemde ben ve
              kulübün kurucu üyesi olan iki
              arkadaşım ile birlikte algoritma,
              nesneye yönelik programlama, mobil
              uygulama geliştirme ve Unity ile
              oyun geliştirme üzerine dönemlik
              müfredatlar hazırlayarak eğitimler
              verdik. Bu süreçte yönetim,
              organizasyon ve bilgi aktarma
              kabiliyetlerimi geliştirme fırsatı
              buldum.
            </p>
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            <h3>MCBÜ Bilişim Topluluğu</h3>
            <p>
              2019-2020 yılları arasında Etkinlik
              ve Organizasyon Sorumlusu olarak
              MCBÜ Bilişim Topluluğunda yer aldım.
              Çok aktif olduğum bir süreç olmasa
              da bu dönemde çeşitli konferanslara
              katılma ve görev üstlenme fırsatı
              buldum.
            </p>
          </div>
        </div>
      </section>
      <section className="content-container flex flex-col py-12">
        <div>
          <h2 className="title">Ben Kimim?</h2>
          <div className="split-pair items-center">
            <div className="flex-1">
              <p>
                It is a long established fact that
                a reader will be distracted by the
                readable content of a page when
                looking at its layout. The point
                of using Lorem Ipsum is that it
                has a more-or-less normal
                <br />
                <br />
                It is a long established fact that
                a reader will be distracted by the
                readable content of a page when
                looking at its layout. The point
                of using Lorem Ipsum is that it
                has a more-or-less normal
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
