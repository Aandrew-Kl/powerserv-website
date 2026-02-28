import { useEffect, useRef, useState } from 'react';
import { Anchor, Zap, Factory, Recycle, Users } from 'lucide-react';

const stats = [
  { icon: Users, number: 20, suffix: '+', label: 'Active Clients' },
  { icon: Anchor, number: 60, suffix: '+', label: 'BWTS Projects' },
  { icon: Zap, number: 35, suffix: '', label: 'MW Biomass Installed' },
  { icon: Factory, number: 2, suffix: '', label: 'Biodiesel Plants' },
  { icon: Recycle, number: 3, suffix: '', label: 'Waste Processing Units' },
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
      // Ease out cubic
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

function StatItem({ stat, isActive, delay }: { stat: typeof stats[0]; isActive: boolean; delay: number }) {
  const count = useCountUp(stat.number, isActive);

  return (
    <div
      className={`reveal delay-${delay} text-center`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
          <stat.icon className="w-6 h-6 text-[var(--gold)]" />
        </div>
      </div>
      <div className="stat-number text-4xl md:text-5xl font-bold mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-xs text-[var(--gray-400)] uppercase tracking-[0.15em] font-medium">
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
      className="py-16 md:py-24 bg-[var(--navy)] relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--blue)]/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isActive={isVisible} delay={(i + 1) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
