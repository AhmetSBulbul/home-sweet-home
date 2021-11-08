import Image from "next/image";
import cn from "classnames";

const FeaturedImage = ({ src, alt }) => (
  <div className="flex-1 relative ml-8">
    <Image
      layout="fill"
      objectFit="contain"
      objectPosition="right center"
      src={src}
      alt={alt}
    />
  </div>
);

export default function SubPageHeroModule({
  title,
  intro,
  featuredSrc,
  featuredAlt,
  children,
}) {
  return (
    <section className="w-full bg-primary">
      <div className="content-container flex justify-between py-12">
        <div className="flex flex-col flex-1 text-gray-20">
          <h1 className="text-lg font-medium">
            {title}
          </h1>
          <h2 className="text-4xl mb-4">
            {intro}
          </h2>
          {children}
        </div>
        {featuredSrc && (
          <FeaturedImage
            src={featuredSrc}
            alt={
              featuredAlt ? featuredAlt : title
            }
          />
        )}
      </div>
    </section>
  );
}
