import Image from "next/image";
import BaseButton from "./BaseButton";

export default function TechnologyLink({
  src,
  alt,
  ...props
}) {
  return (
    <BaseButton className="group" {...props}>
      <Image
        src={src}
        alt={alt}
        layout="intrinsic"
        width={130}
        height={130}
        className="transition-transform transform scale-75 group-hover:scale-100"
      />
    </BaseButton>
  );
}
