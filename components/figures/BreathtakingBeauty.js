import Image from "next/image";
import cn from "classnames";

const wrapperStyle =
  "inline-block rounded-md shadow-xl overflow-hidden";

export default function BreathtakingBeautyFigure({
  wrapperClassName,
}) {
  return (
    <div
      className={cn([
        wrapperStyle,
        wrapperClassName,
      ])}
    >
      <Image
        src="/me.JPG"
        alt="Ahmet Safa Bülbül"
        layout="responsive"
        width={420}
        height={280}
      />
    </div>
  );
}
