const base = import.meta.env.BASE_URL;

const partners = [
  { name: 'Intercon', image: `${base}assets/partner-intercon-gen.png` },
  { name: 'Megatechnica', image: `${base}assets/partner-megatechnica.png` },
  { name: 'FEAC Engineering', image: `${base}assets/partner-feac-gen.png` },
  { name: 'Xanthis S.A.', image: `${base}assets/partner-xanthis.png` },
  { name: 'Tsaprounis', image: `${base}assets/partner-tsaprounis.png` },
];

export default function TrustBar() {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-[var(--gray-100)]" aria-label="Trusted partners">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="text-overline text-[var(--gray-400)] whitespace-nowrap shrink-0">Trusted By</p>
          <div className="w-px h-4 bg-[var(--gray-200)] hidden md:block" />
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-14 w-full">
            {partners.map((p) => (
              <div key={p.name} className="partner-logo flex items-center justify-center" title={p.name}>
                <img src={p.image} alt={p.name} className="h-7 md:h-9 w-auto max-w-[110px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
