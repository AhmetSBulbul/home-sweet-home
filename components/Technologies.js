import Image from "next/image";
import techLogos from "../constants/techs";

const LogoWrap = ({ src, alt }) => (
  <div>
    <Image
      src={src}
      alt={alt}
      layout="intrinsic"
      width={110}
      height={110}
    />
  </div>
);

export default function Technologies() {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 place-items-center tablet:grid-cols-4 laptop:grid-cols-7">
      {techLogos.map((logo, index) => (
        <LogoWrap
          key={`${logo.alt}-${index}`}
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  );
}
