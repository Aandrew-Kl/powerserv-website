import { useState } from 'react';
import { CalendarDays, CheckCircle, ClipboardList } from 'lucide-react';

type Project = {
  client: string;
  quarter: 'Q1 2026' | 'Q2 2026';
  year: '2026';
  status: 'Active';
  sector: 'Building' | 'Energy' | 'Environmental' | 'Industrial' | 'Infrastructure';
  scope: string;
};

const projects: Project[] = [
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Architectural study revision for three ground-floor residences with guest houses in Marpissa, Paros.',
  },
  {
    client: 'STUDIO 266 IKE',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Ground-floor residence with basement and swimming pool in Glyfa, Antiparos.',
  },
  {
    client: 'FARAN S.A.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Industrial',
    scope: 'Specialized supervision services for a new injectable medicines production unit in the Tripoli Industrial Area.',
  },
  {
    client: 'I. Frantzis & Associates Ltd.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Environmental',
    scope: 'Consultancy services for detailed designs and construction supervision of a solid waste recycling facility and engineered landfill.',
  },
  {
    client: 'Private Client',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Seven-storey residential building with pilotis and basement in Kallithea.',
  },
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Permit revision and completion approval support for a residence in Patmos.',
  },
  {
    client: 'Private Client',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Seven-storey residential building with pilotis and basement in Kallithea.',
  },
  {
    client: 'Manos Georgios Energiaki & Co.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Energy',
    scope: 'Electromechanical studies for grid facilities, substations, BESS infrastructure, and pumping station systems.',
  },
  {
    client: 'I. Frantzis & Associates Ltd.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Environmental',
    scope: 'Consulting support for operating approval files for landfill activities in Nisyros, Symi, and Karpathos.',
  },
  {
    client: 'PROMETHAN S.A.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Energy',
    scope: 'Detailed engineering, procurement, and construction support for the Veria permanent metering/regulating station.',
  },
  {
    client: 'WATT S.A.',
    quarter: 'Q1 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Electromechanical studies for a hotel complex in Paros, Cyclades.',
  },
  {
    client: 'Mallionta S.A.',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Infrastructure',
    scope: 'Study, construction, maintenance, and upgrade of a seawater cooling pumping station and intake networks in Chios.',
  },
  {
    client: 'SALFO & Associates S.A.',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Infrastructure',
    scope: 'Complete design package and tender-stage technical support for the Athens Airport Ramp Services Station Building B020 floor addition.',
  },
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Architectural study revision for three new residences with upper floor, basement, and swimming pools in Paros.',
  },
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'New ground-floor residence with two guest houses and one cave guest house in Marpissa, Paros.',
  },
  {
    client: 'Kasioumis Nikos & Co.',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Industrial',
    scope: 'Legalization of ready-mix concrete production facilities and addition of a 999 kW biogas production unit.',
  },
  {
    client: 'Manos Georgios Energiaki & Co.',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Energy',
    scope: 'Low-voltage selectivity studies for 150/20/33 kV substations.',
  },
  {
    client: 'Azaroglou Bros. L.P.',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Energy',
    scope: 'LPG installation study for an existing underground LPG tank.',
  },
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Architectural study revision for a new ground-floor residence with three guest houses in Paros.',
  },
  {
    client: 'STUDIO 265 IKE',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Building',
    scope: 'Two new ground-floor residences with guest houses in Patmos.',
  },
  {
    client: 'Hellenic Cables',
    quarter: 'Q2 2026',
    year: '2026',
    status: 'Active',
    sector: 'Industrial',
    scope: 'Ventilation installation study for the Hellenic Cables factory in Eleonas.',
  },
];

const filters = ['Active Now', 'Q1 2026', 'Q2 2026'];

const workStats = [
  { value: '21', label: 'active projects' },
  { value: '2', label: 'quarters listed' },
  { value: '2026', label: 'current year' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Active Now');

  const filteredProjects =
    activeFilter === 'Active Now'
      ? projects
      : projects.filter((project) => project.quarter === activeFilter);

  const quarterGroups = Object.entries(
    filteredProjects.reduce<Record<string, Project[]>>((groups, project) => {
      groups[project.quarter] = [...(groups[project.quarter] ?? []), project];
      return groups;
    }, {})
  );

  return (
    <section id="projects" className="section-padding bg-[var(--gray-50)] overflow-hidden" aria-labelledby="projects-heading">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-end mb-12">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-overline text-[var(--teal)]">Projects by Year</span>
            </div>
            <h2 id="projects-heading" className="text-h2 text-[var(--navy)] mb-4">
              Active 2026 Engineering Projects
            </h2>
            <p className="text-body text-[var(--text-secondary)] max-w-2xl">
              Current PowerServ work for 2026, organized by quarter and covering building, energy, environmental, industrial, and infrastructure scopes.
            </p>
          </div>

          <div className="reveal grid grid-cols-3 border border-[var(--gray-200)] bg-white rounded-lg overflow-hidden">
            {workStats.map((stat) => (
              <div key={stat.label} className="p-4 border-r last:border-r-0 border-[var(--gray-100)]">
                <div className="text-xl font-extrabold text-[var(--navy)] tracking-[-0.02em]">{stat.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-wrap gap-2 mb-10" aria-label="Project timeline filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md text-[13px] font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[var(--navy)] text-white shadow-sm'
                  : 'bg-white text-[var(--gray-500)] hover:text-[var(--navy)] border border-[var(--gray-200)]'
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {quarterGroups.map(([quarter, quarterProjects]) => (
            <div key={quarter}>
              <div className="reveal mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)] text-white">
                    <CalendarDays className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--teal)]">
                      Active in {quarterProjects[0]?.year}
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-[var(--navy)]">{quarter}</h3>
                  </div>
                </div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--gray-400)]">
                  {quarterProjects.length} {quarterProjects.length === 1 ? 'project' : 'projects'}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                {quarterProjects.map((project, i) => (
                  <article
                    key={`${project.quarter}-${i}-${project.client}`}
                    className={`reveal delay-${(i % 3 + 1) * 100} project-card bg-white rounded-lg border border-[var(--gray-100)] p-5`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--teal)]">
                          {project.quarter}
                        </div>
                        <h4 className="text-[17px] font-bold leading-tight text-[var(--navy)]">
                          {project.client}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <span className="rounded bg-[var(--navy)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                          {project.status}
                        </span>
                        <span className="rounded bg-[var(--gray-50)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gray-600)]">
                          {project.sector}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-body-sm text-[var(--text-secondary)]">
                      {project.scope}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-[var(--gray-100)] pt-4">
                      <div className="flex items-center gap-2 text-[12px] font-semibold text-[var(--navy)]">
                        <CheckCircle className="h-4 w-4 text-[var(--teal)]" />
                        Currently active
                      </div>
                      <ClipboardList className="h-4 w-4 text-[var(--gray-300)]" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 rounded-lg border border-[var(--gray-200)] bg-white p-6 md:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h3 className="text-[17px] font-bold text-[var(--navy)]">Active work is updated by quarter.</h3>
              <p className="mt-2 text-body-sm text-[var(--text-secondary)] max-w-2xl">
                The 2026 register currently includes the first and second quarters from the approved project list.
              </p>
            </div>
            <a href="mailto:info@powerserv.gr" className="btn btn-md btn-outline-dark shrink-0">
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
