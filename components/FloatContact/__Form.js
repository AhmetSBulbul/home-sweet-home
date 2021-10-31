import styles from "./index.module.css";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Form({ clickOuter }) {
  const ref = useRef();
  useOnClickOutside(ref, clickOuter);
  return (
    <div className={styles.formModalOuter}>
      <form
        className={styles.formModal}
        ref={ref}
      >
        <h2 className="font-display border-b-2 border-secondary-lightest font-bold text-lg">
          Bana Ulaşın!
        </h2>
        <div className="flex flex-col px-2 py-4">
          <label
            htmlFor="fullname"
            className={styles.label}
          >
            İsim Soyisim
          </label>
          <input
            type="text"
            name="fullname"
            className={styles.input}
          />
        </div>
      </form>
    </div>
  );
}
