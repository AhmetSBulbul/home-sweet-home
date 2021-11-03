import Image from "next/image";
import techLogos from "../constants/techs";

const LogoWrap = ({ src, alt }) => (
  <div className="p-2">
    <Image
      src={src}
      alt={alt}
      layout="intrinsic"
      width={200}
      height={50}
    />
  </div>
);

export default function Technologies() {
  return (
    <div className="flex flex-wrap justify-center">
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
