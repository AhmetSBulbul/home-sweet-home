import styles from "./index.module.css";

function TextTitle({ children }) {
  return (
    <h1 className={styles.heroDisplay}>
      {children}
    </h1>
  );
}

export default TextTitle;
