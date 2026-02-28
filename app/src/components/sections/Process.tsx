import { Search, Compass, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Assessment',
    description: 'We analyze your requirements, evaluate technical parameters, and define the project scope with precision.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Design & Planning',
    description: 'Our engineers develop detailed designs, technical specifications, and comprehensive project schedules.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Execution',
    description: 'We manage implementation with rigorous quality control, coordinating all stakeholders for seamless delivery.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Commissioning',
    description: 'Final testing, verification, and handover — ensuring every system performs to specification.',
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-overline text-[var(--gold)]">Our Methodology</span>
            <div className="section-divider" />
          </div>
          <h2 id="process-heading" className="text-h2 text-[var(--navy)] mb-4">
            How We Deliver Results
          </h2>
          <p className="text-body text-[var(--text-secondary)]">
            A structured, proven approach that ensures quality, efficiency, and transparency at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-[var(--gray-200)]" aria-hidden="true">
            <div className="process-line absolute inset-0 h-full origin-left" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal delay-${(i + 1) * 100} text-center relative`}
              >
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--gray-200)] group-hover:border-[var(--gold)] transition-colors" />
                  {/* Inner circle */}
                  <div className="w-20 h-20 rounded-full bg-[var(--navy)] flex items-center justify-center relative z-10 shadow-lg shadow-[var(--navy)]/20">
                    <step.icon className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center z-20 shadow-md">
                    <span className="text-[11px] font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-h4 text-[var(--navy)] mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--text-secondary)] max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
