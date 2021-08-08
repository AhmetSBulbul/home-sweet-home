import styles from "./index.module.css";
import SectionHero from "../Hero";
import Header from "../Header";

const LandingPage = ({ children }) => {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden">
        <SectionHero />
        <div className={styles.body}>
          <div className={styles.waveWrapper}>
            <div className={styles.wave} />
            <div className={styles.wave} />
          </div>
        </div>
        <div className="flex flex-col min-h-screen px-4 mt-20">
          <h1 className="font-display uppercase">
            Son paylasilanlar
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
