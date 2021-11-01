import styles from "./index.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
}
