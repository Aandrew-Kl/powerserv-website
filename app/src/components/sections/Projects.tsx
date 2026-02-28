import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Marine Piping Design',
    category: 'Marine',
    image: '/assets/asset_3.jpg',
    description: 'Complete piping system design for commercial and naval vessels, including P&IDs, isometrics, and stress analysis.',
  },
  {
    name: 'Ship Weight Estimation',
    category: 'Marine',
    image: '/assets/asset_4.jpg',
    description: 'Precise weight estimation and center-of-gravity calculations for new-build and retrofit marine projects.',
  },
  {
    name: 'Electric Generator Systems',
    category: 'Energy',
    image: '/assets/asset_5.jpg',
    description: 'Design and integration of power generation systems for biomass, biodiesel, and industrial applications.',
  },
  {
    name: 'BWTS Installation Projects',
    category: 'Marine',
    image: '/assets/asset_6.jpg',
    description: 'Over 60 Ballast Water Treatment System installations — from design and documentation to on-site supervision.',
  },
];

const categories = ['All Projects', 'Marine', 'Energy'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[var(--gray-50)]" aria-labelledby="projects-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-overline text-[var(--gold)]">Portfolio</span>
            </div>
            <h2 id="projects-heading" className="text-h2 text-[var(--navy)]">
              Featured Projects
            </h2>
          </div>

          {/* Filters */}
          <div className="reveal flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--navy)] text-white shadow-lg shadow-[var(--navy)]/20'
                    : 'bg-white text-[var(--gray-600)] hover:bg-[var(--gray-100)] border border-[var(--gray-200)]'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.name}
              className={`reveal delay-${(i + 1) * 100} project-card group relative overflow-hidden rounded-2xl bg-[var(--navy)] cursor-pointer`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-50"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] text-xs font-semibold uppercase tracking-wider mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[var(--gold-light)] transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-sm text-white/60 max-w-md leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>

                {/* Arrow icon */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
