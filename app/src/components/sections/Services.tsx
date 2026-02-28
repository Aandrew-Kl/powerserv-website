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
      'Comprehensive cost analysis and feasibility studies tailored to project scope. We evaluate technical viability, financial parameters, and risk factors.',
  },
  {
    icon: PenTool,
    title: 'Engineering Studies',
    description:
      'In-house capability for shipbuilding, mechanical, electrical, and automation studies. Detailed technical documentation aligned with international standards.',
  },
  {
    icon: ClipboardList,
    title: 'Technical Design',
    description:
      'Production of layouts, isometric drawings, and 3D models with complete materials take-off lists, datasheets, and specifications.',
  },
  {
    icon: Users,
    title: 'Consulting & Advisory',
    description:
      'Strategic engineering consulting backed by decades of field experience. System optimization, regulatory compliance, and technology selection.',
  },
  {
    icon: Clock,
    title: 'Project Scheduling',
    description:
      'Structured project planning with defined timelines, milestones, and resource allocation developed in collaboration with clients.',
  },
  {
    icon: Share2,
    title: 'Design Review & Coordination',
    description:
      'Continuous client engagement throughout the design process. Real-time reviews, iterative feedback, and transparent communication.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--gray-50)]" aria-labelledby="services-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-overline text-[var(--teal)]">What We Do</span>
          </div>
          <h2 id="services-heading" className="text-h2 text-[var(--navy)] mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="text-body text-[var(--text-secondary)]">
            From concept to completion, our integrated service offering covers every aspect of engineering project delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal delay-${(i % 3 + 1) * 100} service-card group bg-white rounded-xl p-7 border border-[var(--gray-100)]`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[var(--navy)]/[0.04] flex items-center justify-center mb-5 group-hover:bg-[var(--navy)] transition-colors duration-400">
                <service.icon className="w-5 h-5 text-[var(--navy)]/50 group-hover:text-white transition-colors duration-400" />
              </div>

              {/* Content */}
              <h3 className="text-[15px] font-semibold text-[var(--navy)] mb-2.5 leading-tight">{service.title}</h3>
              <p className="text-body-sm text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 pt-4 border-t border-[var(--gray-100)]">
                <span className="text-[11px] font-semibold text-[var(--teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-1 uppercase tracking-wider">
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
