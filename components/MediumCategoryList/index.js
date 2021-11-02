import styles from "./index.module.css";

export default function MediumCategoryList({
  categories,
  category,
  setCategory,
}) {
  return (
    <>
      <h3 className="font-display text-xl font-bold text-secondary-light antialiased mb-8">
        Konu Etiketleri
      </h3>
      <div className="flex flex-wrap">
        {categories.map((item, index) => {
          return (
            <button
              type="button"
              onClick={() => setCategory(item)}
              key={item}
              className="bg-night m-1 px-2 py-1 font-link text-sm rounded-md text-white flex text-center justify-center"
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
