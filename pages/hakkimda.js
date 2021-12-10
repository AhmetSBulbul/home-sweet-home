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
            Yeteneklerim ve Görevlerim.
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
            karşıya aktarma konularında
            başarılıyım.
          </p>
          <p>
            <BaseButton href="/yazilim-muhendisligi-etik-kurallari">
              Yazılım Mühendisliği Etik Kuralları
            </BaseButton>{" "}
            doğrultusunda, işletmelerin
            hizmetlerini internete taşımasına
            olanak sağlayan, verimliliğini ve
            karlılığını artırmaya yönelik çözümler
            sunan web ve mobil yazılım ürünleri
            geliştiriyorum.
          </p>
        </div>
      </section>
      <section className="content-container split-pair py-12">
        <div className="flex-1 flex flex-col">
          <h2 className="title mb-4">Deneyim</h2>
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
            sunabilen ve estetik anlamda başarılı;
            teknik tarafta ise öngörülebilir,
            sürdürülebilir ve cihaz performansını
            en iyi şekilde kullanıyor olmalarını
            hedefliyorum.
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
          <h2 className="title">Hikayem</h2>
          <div className="split-pair items-center">
            <div className="flex-1">
              <p>
                Haziran 1999, Antalya doğumluyum.
                7 kuşak Antalyalı bir ailede
                bulunmanın getirisi olarak lise
                yıllarıma kadar yazlarımı Feslikan
                Yaylası'nda geçirdim.
                Küçüklüğümden itibaren alet edevat
                kullanmaya ve bir şeyler üretmeye
                hep hevesliydim. Meraklı kişiliğim
                ve teknolojiye olan ilgim bu
                hevesle buluşunca ailem
                çocukluğumu, içinde ne olduğunu
                görmek için kullanılamaz hale
                getirdiğim elektronik cihazlar ve
                elimde çekiç ile sürekli bir
                şeyler yapmaya çalıştığım anılarla
                anlatırlar. Bozuk cihaz
                koleksiyonum ile birlikte bugün
                hala cihaz tamir etmek ve
                işlevleriyle oynamak en keyif
                aldığım hobimdir.
              </p>
              <p>
                İlk bilgisayarım ile ilkokul 1.
                sınıfta tanıştım. Ticarete ilgim
                de yine ilkokul 3. sınıf
                zamanlarında matematiği öğrenmem
                ile başladı. Başlarda evdeki
                kalemleri satarak başladığım
                ticaret serüvenim kalem stoğumun
                bitmesiyle sonuçlanınca boyama
                kitapları satın alıp sayfalarını
                satmamla devam etti. Daha
                sonrasında gelen veli şikayetleri
                sebebiyle sınıf öğretmenimim
                uyarısı ile son buldu.
              </p>
              <p>
                Ortaokul dönemlerimde
                bilgisayardan ilk paramı kazandım.
                Online oyunların popülerleşmesi
                ile birlikte nasıl karakter
                yaratacağını bilmeyen bir
                arkadaşım için para karşılığı
                karakter yaratmıştım. Arkadaşımın
                birkaç kişiye anlatmasıyla artan
                ilgi sonucunda kısa bir süreliğine
                harçlığımı bu şekilde çıkarmıştım.
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
            Liseye Metin Nuran Çakallıklı Anadolu
            Lisesi'nde başladım. Son senemde Fen
            Bilimleri Temel Lisesi'ne geçerek
            oradan mezun oldum. O dönemlere kadar
            hedefim hep bilgisayar mühendisliği
            hedefliyordum. Bir öğretmenimin
            yönlendirmesi ile yazılım mühendisliği
            daha çok ilgimi çekti ve tercihimi bu
            bölümden yana kullandım.
          </p>
          <p>
            Eğitim hayatıma Manisa Celal Bayar
            Üniversitesi Yazılım Mühendisliği
            Bölümünde devam etmekteyim. Üniversite
            hayatımın bir dönemini Turgutlu'da
            geçirdikten sonra şu anda İzmir'de
            freelancer olarak yazılım hizmeti
            vermekteyim.
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
