import { Shield, Target, Lightbulb, Award } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const highlights = [
  {
    icon: Shield,
    title: 'Proven Reliability',
    description: 'Consistent delivery across complex marine and energy projects with zero-compromise quality standards.',
  },
  {
    icon: Target,
    title: 'End-to-End Solutions',
    description: 'From feasibility studies to commissioning, we manage every phase of the engineering lifecycle.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Approach',
    description: 'Leveraging cutting-edge technologies and methodologies to optimize performance and reduce costs.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge in marine, biomass energy, biodiesel production, and waste processing systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-wide">
        {/* Top: Story */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={`${base}assets/asset_7.jpg`}
                alt="PowerServ engineering team at work"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="lazy"
              />
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--teal)]" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 md:right-8 bg-white rounded-xl shadow-xl shadow-black/[0.06] p-5 md:p-6 border border-[var(--gray-100)]">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-[-0.02em]">15+</div>
              <div className="text-[10px] text-[var(--gray-400)] uppercase tracking-[0.15em] mt-1 font-medium">Years of Experience</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-overline text-[var(--teal)]">About PowerServ</span>
            </div>
            <h2 id="about-heading" className="text-h2 text-[var(--navy)] mb-6">
              Engineering Confidence
              <br />
              <span className="text-[var(--blue)]">for Every Project</span>
            </h2>
            <p className="text-body-lg text-[var(--text-secondary)] mb-5">
              Founded in Piraeus, the heart of Greece's maritime industry, PowerServ brings together a multidisciplinary team of engineers dedicated to delivering measurable results across the marine, energy, and industrial sectors.
            </p>
            <p className="text-body text-[var(--text-secondary)] mb-8">
              We combine deep technical expertise with a hands-on approach. Our team handles the full spectrum of engineering services — from initial feasibility studies and detailed design to project management and on-site supervision.
            </p>
            <a href="#services" className="btn btn-md btn-secondary">
              View Our Services
            </a>
          </div>
        </div>

        {/* Bottom: Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${(i + 1) * 100} group p-6 rounded-xl bg-[var(--gray-50)] border border-transparent hover:border-[var(--gray-200)] transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-lg bg-[var(--navy)]/[0.06] flex items-center justify-center mb-4 group-hover:bg-[var(--teal)] transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[var(--navy)]/60 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--navy)] mb-2 leading-tight">{item.title}</h3>
              <p className="text-body-sm text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
