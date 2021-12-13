import {
  SubPageHero,
  CallToContact,
} from "../modules";
import SEO from "../components/SEO";
import ImageBox from "../components/ImageBox";
import childhood from "../images/childhoodclipped.jpg";
import desktopart from "../images/desktopart.jpg";
import { ThemeButton } from "../components";
import { Arrow } from "../components/icons";
import BaseButton from "../components/BaseButton";

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
            Sosyal Yetenekler
          </h2>
        </div>
        <div className="flex-1">
          <p>
            Araştırmak ve öğrenmek; hep içerisinde
            bulunduğum, bulunmaktan çok keyif
            aldığım, daima devam ettirmeyi
            hedeflediğim bir süreç. Aynı zamanda
            en güçlü yeteneklerim arasında.
            Bunların yanında etkili iletişim
            kurabilme, kolay uyum sağlama ve
            edindiğim bilgileri anlaşılır şekilde
            karşıya aktarma konularında da
            başarılıyım.
          </p>
        </div>
      </section>
      <section className="content-container py-12">
        <h2 className="font-display font-bold text-3xl text-center mb-12">
          Ne Sunuyorum?
        </h2>
        <div className="split-pair">
          <div className="flex-1 flex flex-col">
            <p>
              <BaseButton
                href="/yazilim-muhendisligi-etik-kurallari"
                className="underline"
              >
                Yazılım Mühendisliği Etik
                Kuralları
              </BaseButton>{" "}
              çerçevesinde, işletmelerin
              hizmetlerini internete taşımasına,
              verimliliğini ve karlılığını
              artırmalarına yönelik çözümler sunan
              web ve mobil yazılım ürünleri
              geliştiriyorum.
            </p>

            <p>
              Geliştirdiğim uygulamaların beklenen
              işlevselliği en iyi şekilde yerine
              getirmesinin yanında pratikte
              kullanıcı dostu,{" "}
              <a
                className="underline"
                href="https://dijitalakademi.bilgem.tubitak.gov.tr/kamis/erisilebilirlik/erisilebilirlik"
                target="_blank"
                rel="noreferrer"
              >
                erişilebilirlik standartlarını
              </a>{" "}
              takip ederek engelsiz kullanım
              sunabiliyor ve estetik anlamda
              başarılı; teknik tarafta ise
              öngörülebilir, sürdürülebilir ve
              cihaz performansını en iyi şekilde
              kullanabiliyor olmalarına özen
              gösteriyorum.
            </p>

            <p>
              Birlikte çalışalım sayfası üzerinden
              süreç hakkında fikir almak veya
              merak ettiklerinizi sormak için
              ücretsiz görüşme randevusu
              alabilirsiniz.
            </p>
            <ThemeButton
              withIcon
              href="/portfolyo"
              className="ml-auto mt-4"
            >
              Birlikte Çalışalım{" "}
              <Arrow className="text-2xl" />
            </ThemeButton>
          </div>
          <ImageBox
            className="flex-1"
            src={desktopart}
            alt=""
          />
        </div>
      </section>
      <section className="content-container split-pair py-12">
        <div className="flex-1">
          <h2 className="font-display font-bold text-3xl">
            Teknik Yetenekler ve Deneyim
          </h2>
        </div>
        <div className="flex-1">
          <p>
            2 yılı aşkın süredir web ve mobil
            uygulama geliştiriciliği yapıyorum.
            Flutter, React, Nextjs ve Gatsbyjs
            frameworklerini aktif olarak
            kullanmaktayım. Bunların yanında
            jamstack mimarisi, component-driven
            development ve state management
            konularına hakimim.
          </p>
          <p>
            Detaylı bilgiye{" "}
            <BaseButton
              href="https://www.kariyer.net/ozgecmis/ahmetsafabulbul"
              externalLink
              className="underline"
            >
              özgeçmişim
            </BaseButton>{" "}
            üzerinden ulaşabilirsiniz. İşlerimi
            inceleyin butonuna tıklayarak da
            geliştirmiş olduğum ürünler ve
            içerikleri hakkında bilgi
            edinebilirsiniz.
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
      </section>
      <section
        id="gonullu-isler"
        className="content-container flex flex-col py-12"
      >
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
              başkanlığını üstlendim. Kulübün
              kurucu üyesi olan iki arkadaşım ile
              birlikte, başkanlık yaptığım süre
              içerisinde, algoritma, nesneye
              yönelik programlama, mobil uygulama
              geliştirme ve Unity ile oyun
              geliştirme üzerine dönemlik
              müfredatlar hazırlayarak eğitimler
              verdik. Bu süreçte yönetme, organize
              etme ve eğitmenlik yeteneklerimi
              geliştirme fırsatı buldum.
            </p>
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            <h3>MCBÜ Bilişim Topluluğu</h3>
            <p>
              2019-2020 yılları arasında Etkinlik
              ve Organizasyon Sorumlusu olarak
              MCBÜ Bilişim Topluluğunda yer aldım.
              Süreç dahilinde çeşitli
              konferanslara katılma ve sorumluluk
              alma fırsatı yakaladım. Bu da teknik
              ve sosyal becerilerimin gelişmesine
              katkıda bulundu.
            </p>
          </div>
        </div>
      </section>
      <section className="content-container flex flex-col py-12">
        <div>
          <h2 className="font-display font-bold text-3xl">
            Hakkımda
          </h2>
          <div className="split-pair items-center">
            <div className="flex-1">
              <p>
                Haziran 1999, Antalya doğumluyum.
                Antalyalı olmanın bir getirisi
                olarak lise yıllarıma kadar
                yazlarımı Feslikan Yaylası'nda
                geçirdim. Küçüklüğümden itibaren
                alet edevat kullanmaya ve bir
                şeyler üretmeye hep hevesliydim.
                Meraklı kişiliğim ve teknoloiye
                olan ilgim bu hevesle buluşunca
                ailem çocukluğumu, içinde ne
                olduğunu görmek için kullanılamaz
                hale getirdiğim elektronik
                cihazlar ve elimden düşürmediğim
                çekiç ile yapmaya çalıştığım
                şeyler ile anlatırlar.
              </p>
              <p>
                Para kazanmak ve ticaret yapmak
                kavramlarıyla çok erken yaşta
                tanıştım. İlkokul zamanlarında
                kırtasiyeden aldığım boyama
                kitaplarının sayfalarını satarak
                başladığım bu serüven hayatımın
                her döneminde çeşitli şekillerde
                var oldu. Bilgisayar aracılığıyla
                kazandığım ilk parayı da ortaokul
                zamanlarımda nasıl yapacağını
                bilmeyen arkadaşlarım için oyun
                karakterleri oluşturarak elde
                etmiştim.
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
            Müzik ile aktif olarak ilgilenmeye
            lise yıllarımda sokak müzisyenlerinin
            yanında insanları bahşiş atmaya
            yönelten kişi olarak başladım.
            Dinleyici olarak müzik hep hayatımda
            vardı ancak müzisyenlerin tarafında
            bulunduktan sonra bu ilgim bir hayli
            arttı. Üniversitenin ilk yıllarında
            internet üzerinden vokallik üzerine
            eğitici yazı ve video içerikleri ile
            önce vokallik ardından gitar, ukulele
            gibi müzik aletlerinin kullanımı gibi
            yetenekleri edindim.
          </p>
          <p>
            Bilgisayar ile alakalı bir meslek
            yapmak küçüklüğümden beri tek
            hedefimdi. Bilgisayar öğretmenliği ile
            başlayan bu hayal önce bilgisayar
            mühendisliği hemen ardından da yazılım
            mühendisliğine evrildi.
          </p>
          <p>
            Öğrenciliğimin ilk yıllarından
            itibaren arayüz geliştirme hep ana
            odağım oldu. WPF ile masaüstü
            uygulamaları geliştirerek başlayan bu
            ilgim web ve mobil platformlarında
            devam etti. 2019 yılının son
            çeyreğinde freelance olarak hizmetler
            sunmaya başladım ve birçok projede yer
            alma fırsatı buldum.
          </p>
          <p>
            Eğitim hayatıma Manisa Celal Bayar
            Üniversitesi Yazılım Mühendisliği
            Bölümünde devam etmekteyim. Üniversite
            hayatımın bir dönemini Turgutlu'da
            geçirdikten sonra şu anda İzmir'de
            eğitimimi sürdürürken freelancer
            olarak yazılım hizmetleri veriyorum.
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
