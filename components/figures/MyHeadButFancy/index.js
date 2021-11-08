import styles from "./index.module.css";
import MyLovelyHeadFigure from "../MyLovelyHead";

const MyHeadButFancyFigure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.platform} />
      <MyLovelyHeadFigure
        className={styles.myHead}
      />

      <MyLovelyHeadFigure
        className={styles.myShadow}
      />
    </div>
  );
};

export default MyHeadButFancyFigure;
