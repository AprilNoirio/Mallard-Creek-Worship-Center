type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="px-4 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_30%),linear-gradient(135deg,rgba(28,15,38,0.96),rgba(8,6,12,0.96))] px-6 py-12 shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:px-10 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#d4af37]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-none text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
