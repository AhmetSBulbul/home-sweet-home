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
    <div className="flex flex-wrap justify-evenly">
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
