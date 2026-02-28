import { ArrowRight, ChevronDown } from 'lucide-react';

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${base}assets/hero-bg.jpg)` }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide w-full py-32">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="w-8 h-px bg-[var(--teal)]" />
            <span className="text-overline text-[var(--teal)]">Engineering Excellence Since 2008</span>
          </div>

          {/* Headline */}
          <h1
            className="text-display text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Precision Engineering
            <br />
            <span className="text-[var(--teal-light)]">for Critical Industries</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-body-lg text-white/55 max-w-lg mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            Integrated engineering solutions for the marine, energy, and industrial sectors.
            From concept to commissioning, we deliver projects that perform.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <a href="#contact" className="btn btn-lg btn-primary">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn btn-lg btn-outline-white">
              Explore Services
            </a>
          </div>

          {/* Key metrics */}
          <div
            className="flex flex-wrap gap-12 mt-14 pt-8 border-t border-white/[0.08] animate-fade-in-up"
            style={{ animationDelay: '1s', animationFillMode: 'both' }}
          >
            {[
              { value: '60+', label: 'BWTS Projects' },
              { value: '35', label: 'MW Biomass' },
              { value: '20+', label: 'Industry Partners' },
            ].map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{metric.value}</span>
                <span className="text-[10px] text-white/35 uppercase tracking-[0.15em]">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
