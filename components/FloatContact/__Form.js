import styles from "./index.module.css";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Button from "../Button";
import FormField from "./__Field";

export default function Form({ clickOuter }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef();
  useOnClickOutside(ref, clickOuter);
  return (
    <div className={styles.formModalOuter}>
      <div className={styles.formModal} ref={ref}>
        <h2 className="font-display font-bold text-xl">
          Bana Ulaşın! --- Geliştirilme Aşamasında{" "}
        </h2>
        <form className={styles.form}>
          <FormField
            labelText="Ad Soyad"
            name="fullname"
            type="text"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
          />
          <FormField
            labelText="E-Posta"
            name="email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <FormField
            labelText="Konu"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
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
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
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
          görüşme için randevu alabilirsiniz.
        </a>
      </div>
    </div>
  );
}
