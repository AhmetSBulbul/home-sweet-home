import Image from "next/image";
import BaseButton from "./BaseButton";

export default function TechnologyLink({
  src,
  alt,
  path,
}) {
  return (
    <BaseButton>
      <Image
        src={src}
        alt={alt}
        layout="intrinsic"
        width={110}
        height={110}
      />
    </BaseButton>
  );
}
