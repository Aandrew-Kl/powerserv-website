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
    <section className="py-10 md:py-14 bg-[var(--gray-50)] border-y border-[var(--gray-100)]" aria-label="Trusted partners">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <p className="text-overline text-[var(--gray-400)] whitespace-nowrap">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo flex items-center justify-center"
                title={partner.name}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto max-w-[120px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
