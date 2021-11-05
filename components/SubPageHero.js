export default function SubPageHero({
  title,
  intro,
  children,
}) {
  return (
    <section className="w-full bg-primary">
      <div className="content-container flex flex-col py-12 text-gray-20">
        <h1 className="text-lg font-medium">
          {title}
        </h1>
        <h2 className="text-4xl mb-4">{intro}</h2>
        {children}
      </div>
    </section>
  );
}
