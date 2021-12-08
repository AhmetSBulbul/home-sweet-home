import { BreathtakingBeauty } from "./figures";
import { Arrow } from "./icons";
import ThemeButton from "./ThemeButton";

export default function ContactMe() {
  return (
    <section className="split-pair content-container py-12 tablet:items-center">
      <BreathtakingBeauty wrapperClassName="flex-1" />
      <div className="flex-1 flex flex-col space-y-2">
        <p className="font-display font-medium text-sm uppercase">
          Bana Ulaşın ☎
        </p>
        <h2 className="text-4xl">Tanışalım</h2>
        <p>
          It is a long established fact that a
          reader will be distracted by the
          readable
        </p>
        <ThemeButton
          withIcon
          href="/birlikte-calisalim"
          className="ml-auto"
        >
          Benimle İrtibata Geçin <Arrow />
        </ThemeButton>
      </div>
    </section>
  );
}