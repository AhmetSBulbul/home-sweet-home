import styles from "./index.module.css";
import SvgHeadIllustration from "../assets/HeadIllustration";
import { HeadShadow } from "../icons";

const MyHeadButFancy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.platform} />
      <SvgHeadIllustration
        className={styles.myHead}
      />
      <HeadShadow className={styles.myShadow} />
    </div>
  );
};

export default MyHeadButFancy;
