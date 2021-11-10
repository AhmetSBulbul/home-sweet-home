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
    </ul>
  );
}
