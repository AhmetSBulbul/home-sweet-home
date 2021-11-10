import Image from "next/image";
import cn from "classnames";

const baseStyle = "relative w-full h-full";

export default function ImageBox({
  className,
  src,
  alt,
}) {
  return (
    <div className={cn([baseStyle, className])}>
      <Image
        layout="responsive"
        objectFit="contain"
        objectPosition="center"
        className="rounded-md"
        src={src}
        alt={alt}
      />
    </div>
  );
}
