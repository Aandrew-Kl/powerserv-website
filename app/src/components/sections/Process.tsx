import { Search, Compass, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Assessment',
    description: 'Analyze requirements, evaluate technical parameters, and define project scope with precision.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Design & Planning',
    description: 'Develop detailed designs, technical specifications, and comprehensive project schedules.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Execution',
    description: 'Manage implementation with rigorous quality control, coordinating all stakeholders seamlessly.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Commissioning',
    description: 'Final testing, verification, and handover — ensuring systems perform to specification.',
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-overline text-[var(--teal)]">Our Methodology</span>
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
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-[var(--gray-200)]" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal delay-${(i + 1) * 100} text-center relative`}
              >
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-[104px] h-[104px] mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[var(--gray-200)]" />
                  {/* Inner circle */}
                  <div className="w-16 h-16 rounded-full bg-[var(--navy)] flex items-center justify-center relative z-10">
                    <step.icon className="w-6 h-6 text-[var(--teal)]" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-0.5 -right-0.5 w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center z-20">
                    <span className="text-[10px] font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-[15px] font-semibold text-[var(--navy)] mb-2">{step.title}</h3>
                <p className="text-body-sm text-[var(--text-secondary)] max-w-[240px] mx-auto">
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
