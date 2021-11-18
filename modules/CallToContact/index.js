import React from "react";
import { BreathtakingBeauty } from "../../components/figures";
import { Arrow } from "../../components/icons";
import { ThemeButton } from "../../components";

export default function CallToContact() {
  return (
    <section className="split-pair content-container py-12 tablet:items-center">
      <BreathtakingBeauty wrapperClassName="flex-1" />
      <div className="flex-1 flex flex-col space-y-4">
        <p className="font-display font-medium text-sm uppercase">
          Bana Ulaşın ☎
        </p>
        <h2 className="text-4xl">
          Size Nasıl Yardımcı Olabilirim?
        </h2>
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
          Birlikte Çalışalım! <Arrow />
        </ThemeButton>
      </div>
    </section>
  );
}
