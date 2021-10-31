import styles from "./index.module.css";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Button from "../Button";

export default function Form({ clickOuter }) {
  const ref = useRef();
  useOnClickOutside(ref, clickOuter);
  return (
    <div className={styles.formModalOuter}>
      <div className={styles.formModal} ref={ref}>
        <h2 className="font-display font-bold text-xl">
          Bana Ulaşın! --- Geliştirilme Aşamasında
        </h2>
        <form className={styles.form}>
          <label
            htmlFor="fullname"
            className={styles.label}
          >
            Ad Soyad
          </label>
          <input
            type="text"
            name="fullname"
            className={styles.input}
          />
          <label
            htmlFor="email"
            className={styles.label}
          >
            E-Posta
          </label>
          <input
            type="email"
            name="email"
            className={styles.input}
          />
          <label
            htmlFor="subject"
            className={styles.label}
          >
            Konu
          </label>
          <input
            type="text"
            name="subject"
            className={styles.input}
          />
          <label
            htmlFor="message"
            className={styles.label}
          >
            Mesaj
          </label>
          <textarea
            name="message"
            className={styles.input}
          />
          <div className="flex flex-row">
            <button className="bg-secondary w-full h-full text-center text-white font-link rounded-md antialiased px-4 py-2">
              Gönder
            </button>
          </div>
        </form>
        <div className="flex flex-row items-center justify-center text-center mb-4 font-display antialised">
          ya da
        </div>
        <a
          href="https://superpeer.com/ahmetsbulbul/-/bana-soru-sor"
          target="_blank"
          rel="noreferrer"
          className="bg-night bg-opacity-80 font-link font-light subpixel-antialiased text-white rounded-md px-2 py-2 text-center"
        >
          Superpeer üzerinden ücretsiz olarak 1:1
          görüşme talebi için randevu
          alabilirsiniz.
        </a>
      </div>
    </div>
  );
}
