export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-16 md:mb-24 max-w-3xl">
      <p className="lux-eyebrow mb-5">{eyebrow}</p>
      <h1 className="font-serif text-[2.6rem] md:text-display-lg text-on-surface leading-[1.08]">{title}</h1>
      <p className="mt-6 text-body-base text-on-surface-variant max-w-xl">{description}</p>
    </header>
  );
}
