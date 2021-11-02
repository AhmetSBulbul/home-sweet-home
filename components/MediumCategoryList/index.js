import styles from "./index.module.css";

export default function MediumCategoryList({
  categories,
  category,
  setCategory,
}) {
  return (
    <div className="flex justify-start py-2 space-x-4 px-2">
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            onClick={() => setCategory(item)}
            key={item}
            className="bg-night px-2 py-1 font-link text-sm rounded-md text-white flex text-center justify-center"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
