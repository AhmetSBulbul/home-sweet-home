import styles from "./index.module.css";

const categories = [
  {
    title: "react",
  },
  {
    title: "nextjs",
  },
  {
    title: "css",
  },
  {
    title: "animasyon",
  },
];

const SideChildren = ({ children }) => {
  return (
    <>
      <h3 className="font-display text-xl font-bold text-secondary-light antialiased mb-8">
        Konu Etiketleri
      </h3>
      <div className="grid grid-flow-row grid-cols-3 gap-2">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-night px-2 py-1 font-link text-sm rounded-md text-white flex text-center justify-center"
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default function PostListLayout({
  children,
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        {children}
      </div>
      <div className={styles.sideContainer}>
        <SideChildren />
      </div>
    </div>
  );
}
