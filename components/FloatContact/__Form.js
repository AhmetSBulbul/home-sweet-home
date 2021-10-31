import styles from "./index.module.css";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Form({ clickOuter }) {
  const ref = useRef();
  useOnClickOutside(ref, clickOuter);
  return (
    <div className={styles.formModalOuter}>
      <div className={styles.formModal} ref={ref}>
        hey
      </div>
    </div>
  );
}
