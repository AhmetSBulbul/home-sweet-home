import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export default function ServicesList({
  children,
  ...props
}) {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <h3>Süreç Planlama ve Yönetimi</h3>
        <p>
          Süreç içerisinde gerek duyulacak çalışan
          kaynak vb. ihtiyaçların yönetimi
        </p>
      </li>
      <li className={styles.listItem}>
        <h3>Mobil Uygulama Geliştirme</h3>
        <p>
          It is a long established fact that a
          reader will be distracted by the
          readable content of a page when looking
          at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less
          normal distribution of letters, as
          opposed to using 'Content here, content
          here,
        </p>
      </li>
      <li className={styles.listItem}>
        <h3>Web Geliştirme</h3>
        <p>
          It is a long established fact that a
          reader will be distracted by the
          readable content of a page when looking
          at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less
          normal distribution of letters, as
          opposed to using 'Content here, content
          here,
        </p>
      </li>
      <li className={styles.listItem}>
        <h3>İşletmenizi İnternete Taşıma</h3>
        <p>
          İşletme kimliğinizi ve hizmetlerinizi
          sizin için internete taşıyabilirim. Web
          sitesi ile tanınırlığınızı arttırabilir
          ve müşteri kitlenizi
          genişletebilirsiniz.
        </p>
      </li>
      <li className={styles.listItem}>
        <h3>Teknik Destek ve İyileştirmeler</h3>
        <p>
          Zaten var olan mobil uygulamalar ve web
          siteleri için teknik destek
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
  );
}
