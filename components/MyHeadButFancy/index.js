import styles from "./index.module.css";
import MyLovelyHead from "../Brand/myLovelyHead";

const MyHeadButFancy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.platform} />
      <MyLovelyHead className={styles.myHead} />

      <MyLovelyHead className={styles.myShadow} />
    </div>
  );
};

export default MyHeadButFancy;
