import {
  FileText,
  PenTool,
  ClipboardList,
  Users,
  Clock,
  Share2,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Budget Estimation & Feasibility',
    description:
      'Comprehensive cost analysis and feasibility studies tailored to project scope. We evaluate technical viability, financial parameters, and risk factors to support informed decision-making.',
  },
  {
    icon: PenTool,
    title: 'Engineering Studies',
    description:
      'In-house capability for shipbuilding, mechanical, electrical, and automation studies. Our engineers deliver detailed technical documentation aligned with international standards.',
  },
  {
    icon: ClipboardList,
    title: 'Technical Design',
    description:
      'Production of layouts, isometric drawings, and 3D models with complete materials take-off lists, datasheets, and specifications — ready for fabrication and construction.',
  },
  {
    icon: Users,
    title: 'Consulting & Advisory',
    description:
      'Strategic engineering consulting backed by decades of field experience. We advise on system optimization, regulatory compliance, and technology selection.',
  },
  {
    icon: Clock,
    title: 'Project Scheduling',
    description:
      'Structured project planning developed in collaboration with our clients. We define timelines, milestones, and resource allocation to ensure on-time delivery.',
  },
  {
    icon: Share2,
    title: 'Design Review & Coordination',
    description:
      'Continuous client engagement throughout the design process. Real-time reviews, iterative feedback loops, and transparent communication at every stage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--gray-50)]" aria-labelledby="services-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-overline text-[var(--gold)]">What We Do</span>
            <div className="section-divider" />
          </div>
          <h2 id="services-heading" className="text-h2 text-[var(--navy)] mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="text-body text-[var(--text-secondary)]">
            From concept to completion, our integrated service offering covers every aspect of engineering project delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal delay-${(i % 3 + 1) * 100} service-card group bg-white rounded-xl p-7 border border-[var(--gray-100)] hover:border-[var(--gold)]/30`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)] transition-colors duration-400">
                <service.icon className="w-6 h-6 text-[var(--navy)] group-hover:text-white transition-colors duration-400" />
              </div>

              {/* Content */}
              <h3 className="text-h4 text-[var(--navy)] mb-3">{service.title}</h3>
              <p className="text-body-sm text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 pt-4 border-t border-[var(--gray-100)] group-hover:border-[var(--gold)]/20 transition-colors duration-400">
                <span className="text-xs font-semibold text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
