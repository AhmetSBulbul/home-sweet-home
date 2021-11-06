import TechnologyLink from "./TechnologyLink";

export default function TechnologiesFeedList({
  allTechnologies,
}) {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-2 place-items-center tablet:grid-cols-4 laptop:grid-cols-7">
      {allTechnologies.map(
        (
          {
            id,
            title,
            logoSrc,
            logoAlt,
            description,
          },
          index
        ) => (
          <TechnologyLink
            key={`${id}-postlinkkey-${index}`}
            src={logoSrc}
            alt={logoAlt}
            title={title}
            description={description}
            href={`/${id}`}
          />
        )
      )}
    </div>
  );
}
