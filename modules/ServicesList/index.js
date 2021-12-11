import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export default function ServicesList({
  children,
  ...props
}) {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h3>Süreç Planlama ve Yönetimi</h3>
          <p>
            İhtiyacınız olan ürünü
            kararlaştırdıktan sonra süreç
            içerisinde karşınıza çıkacak
            masraflar, çalışan sayısı ve
            nitelikleri ve geliştirme süresinin
            uzunluğu hakkında bilgiler içeren bir
            rapor sunarım. Dilerseniz süreç
            içerisinde ihtiyaç duyulacak iş
            gücü(Ek yazılımcı, tasarımcı vb.) ve
            kaynakların(sunucu, ücretli hizmetler)
            tedariğini gerçekleştirerek yönetimi
            üstlenebilirim.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3>İşletmenizi İnternete Taşıma</h3>
          <p>
            İşletme kimliğinizi ve hizmetlerinizi
            sizin için internete taşıyabilirim.
            Web sitesi ile tanınırlığınızı
            arttırabilir ve müşteri kitlenizi
            genişletebilirsiniz.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3>Mobil Uygulama Geliştirme</h3>
          <p>
            Fikrinizi bir ürüne dönüştürmek ya da
            işletmenizin ihtiyaç duyduğu çözümlere
            yönelik IOS & Android platformlarında
            çalışan mobil uygulamalar
            geliştirebilirim.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3>Web Geliştirme</h3>
          <p>
            Modern teknolojiler ile web
            platformunda ihtiyacınıza yönelik
            yazılım çözümleri sunuyorum.
          </p>
        </li>

        <li className={styles.listItem}>
          <h3>Teknik Destek ve İyileştirmeler</h3>
          <p>
            Zaten var olan mobil uygulamalar ve
            web siteleri için teknik destek
            sağlayabilir, yeni özellikler
            kazandırabilir ve bakımlarını
            yapabilirim.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3>Ücretsiz Danışmanlık Hizmeti</h3>
          <p>
            Yazılım geliştirme süreçleri hakkında
            fikir almak veya aklınızdaki soruları
            sormak için ücretsiz olarak randevu
            alabilirsiniz.
          </p>
        </li>
      </ul>
      <div className="w-1/3 h-1 my-8 block rounded-md bg-gray-50 mx-auto" />
      <p className="text-center mx-12">
        Detaylı proje dökümantasyonu ve 1 yıllık
        ücretsiz destek ile teslim sonrasında da
        yanınızdayım!
      </p>
      <div className="w-1/3 h-1 my-8 block rounded-md bg-gray-50 mx-auto" />
    </div>
  );
}
