import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 20, suffix: '+', label: 'Active Clients' },
  { number: 60, suffix: '+', label: 'BWTS Projects' },
  { number: 35, suffix: '', label: 'MW Biomass Installed' },
  { number: 2, suffix: '', label: 'Biodiesel Plants' },
  { number: 3, suffix: '', label: 'Waste Processing Units' },
];

function useCountUp(target: number, isActive: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [isActive, target, duration]);

  return count;
}

function StatItem({ stat, isActive }: { stat: typeof stats[0]; isActive: boolean }) {
  const count = useCountUp(stat.number, isActive);

  return (
    <div className="text-center">
      <div className="stat-number text-4xl md:text-[3.25rem] font-extrabold mb-1.5 tracking-[-0.02em]">
        {count}{stat.suffix}
      </div>
      <div className="text-[10px] text-white/30 uppercase tracking-[0.18em] font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-[var(--navy)] relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--blue)]/[0.06] rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--teal)]/[0.04] rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isActive={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
