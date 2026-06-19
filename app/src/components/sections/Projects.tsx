import { useState } from 'react';
import { CalendarDays, CheckCircle, ClipboardList, MapPin } from 'lucide-react';

const base = import.meta.env.BASE_URL;

type Sector = 'Building' | 'Energy' | 'Environmental' | 'Industrial' | 'Infrastructure';

type Project = {
  client: string;
  quarter: 'Q1 2026' | 'Q2 2026';
  year: '2026';
  status: 'Active';
  sector: Sector;
  scope: string;
};

type ActiveLocation = {
  name: string;
  region: string;
  projects: number;
  x: number;
  y: number;
};

const sectorImages: Record<Sector, string> = {
  Building: `${base}assets/projects/project-building.jpg`,
  Energy: `${base}assets/projects/project-energy.jpg`,
  Environmental: `${base}assets/projects/project-environmental.jpg`,
  Industrial: `${base}assets/projects/project-industrial.jpg`,
  Infrastructure: `${base}assets/projects/project-infrastructure.jpg`,
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

const activeLocations: ActiveLocation[] = [
  { name: 'Paros & Antiparos', region: 'Cyclades', projects: 6, x: 61, y: 67 },
  { name: 'Athens / Attica', region: 'Kallithea, Spata, Airport, Eleonas', projects: 4, x: 49, y: 53 },
  { name: 'South Aegean islands', region: 'Nisyros, Symi, Karpathos', projects: 3, x: 79, y: 76 },
  { name: 'Patmos', region: 'Dodecanese', projects: 2, x: 72, y: 55 },
  { name: 'Tripoli', region: 'Peloponnese', projects: 1, x: 41, y: 63 },
  { name: 'Chios', region: 'North Aegean', projects: 1, x: 74, y: 38 },
  { name: 'Veroia', region: 'Central Macedonia', projects: 1, x: 34, y: 20 },
  { name: 'Kozani', region: 'Western Macedonia', projects: 1, x: 30, y: 18 },
  { name: 'Domokos', region: 'Central Greece', projects: 1, x: 42, y: 34 },
  { name: 'Oinofyta', region: 'Boeotia', projects: 1, x: 47, y: 46 },
];

const mappedProjectReferences = activeLocations.reduce((total, location) => total + location.projects, 0);

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

        <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="reveal overflow-hidden rounded-lg border border-[var(--gray-200)] bg-white">
            <div className="flex flex-col gap-3 border-b border-[var(--gray-100)] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                  <MapPin className="h-4 w-4" />
                  Active Footprint
                </div>
                <h3 className="mt-2 text-[22px] font-extrabold leading-tight text-[var(--navy)]">
                  Live 2026 locations across Greece
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-right sm:min-w-[210px]">
                <div>
                  <div className="text-2xl font-extrabold text-[var(--navy)]">{activeLocations.length}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--gray-400)]">
                    mapped areas
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--navy)]">{mappedProjectReferences}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--gray-400)]">
                    project refs
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[360px] bg-[#e7f4f2] md:h-[430px]">
              <svg
                viewBox="0 0 100 90"
                role="img"
                aria-labelledby="greece-map-title"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <title id="greece-map-title">Active 2026 project locations across Greece</title>
                <rect width="100" height="90" fill="#e7f4f2" />
                <path
                  d="M5 75 C16 68 25 70 36 76 C47 82 62 83 76 79 C86 76 94 78 99 84 L99 90 L5 90 Z"
                  fill="#d5ece8"
                  opacity="0.55"
                />
                <g fill="#f8fbfb" stroke="#aac3c7" strokeLinejoin="round" strokeWidth="0.75">
                  <path d="M25 11 C31 8 39 8 45 12 C51 16 56 21 55 28 C55 33 58 36 55 42 C52 47 55 50 51 54 C47 58 47 63 42 65 C38 67 33 63 34 58 C35 54 34 51 31 47 C28 43 31 38 30 34 C29 28 25 25 24 20 C23 16 22 13 25 11 Z" />
                  <path d="M34 58 C39 55 46 56 49 61 C52 66 48 72 42 74 C36 76 30 71 31 65 C31 62 31 60 34 58 Z" />
                  <path d="M51 38 C56 42 59 49 55 56 C53 52 53 45 50 40 Z" />
                  <path d="M53 81 C63 78 77 79 89 82 C80 86 64 87 52 84 Z" />
                  <path d="M15 33 C18 31 20 33 19 37 C16 38 14 36 15 33 Z" />
                  <path d="M20 41 C23 39 25 41 24 45 C21 46 19 44 20 41 Z" />
                  <path d="M63 59 C66 57 69 59 68 63 C65 64 62 62 63 59 Z" />
                  <path d="M71 36 C75 34 78 37 76 41 C73 42 70 40 71 36 Z" />
                  <path d="M69 53 C72 52 75 54 74 57 C71 59 68 56 69 53 Z" />
                  <path d="M78 69 C81 67 84 69 84 72 C81 74 78 72 78 69 Z" />
                  <path d="M84 75 C87 73 91 75 90 79 C86 80 84 78 84 75 Z" />
                  <circle cx="57" cy="65" r="1.8" />
                  <circle cx="60" cy="70" r="1.5" />
                  <circle cx="66" cy="68" r="1.3" />
                  <circle cx="74" cy="62" r="1.4" />
                  <circle cx="78" cy="55" r="1.2" />
                </g>
                <g>
                  {activeLocations.map((location) => {
                    const radius = Math.min(4.4, 2.6 + location.projects * 0.18);

                    return (
                      <g key={location.name} transform={`translate(${location.x} ${location.y})`}>
                        <title>{`${location.name}: ${location.projects} active project reference${location.projects === 1 ? '' : 's'}`}</title>
                        <circle r={radius + 3.3} fill="#22c55e" opacity="0.18" />
                        <circle r={radius} fill="#22c55e" stroke="#ffffff" strokeWidth="0.9" />
                        {location.projects > 1 && (
                          <text
                            y="0.35"
                            textAnchor="middle"
                            className="fill-white text-[4px] font-extrabold"
                          >
                            {location.projects}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>

          <aside className="reveal rounded-lg border border-[var(--gray-200)] bg-white p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)] text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                  Location layer
                </div>
                <h3 className="mt-1 text-[19px] font-extrabold leading-tight text-[var(--navy)]">
                  Green dots show active work now
                </h3>
              </div>
            </div>

            <p className="mt-4 text-body-sm text-[var(--text-secondary)]">
              Grouped from identifiable location mentions in the active 2026 register. Multi-site briefs are shown as one regional marker.
            </p>

            <ul className="mt-5 space-y-3">
              {activeLocations.map((location) => (
                <li key={location.name} className="flex items-start justify-between gap-4 border-b border-[var(--gray-100)] pb-3 last:border-b-0 last:pb-0">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22c55e] ring-4 ring-[#22c55e]/15" />
                    <div className="min-w-0">
                      <div className="text-[13px] font-bold leading-snug text-[var(--navy)]">{location.name}</div>
                      <div className="mt-0.5 text-[12px] leading-snug text-[var(--gray-400)]">{location.region}</div>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-md bg-[var(--gray-50)] px-2.5 py-1 text-[11px] font-bold text-[var(--navy)]">
                    {location.projects}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
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
                    className={`reveal delay-${(i % 3 + 1) * 100} project-card group overflow-hidden bg-white rounded-lg border border-[var(--gray-100)]`}
                  >
                    <div className="relative h-36 overflow-hidden bg-[var(--navy)]">
                      <img
                        src={sectorImages[project.sector]}
                        alt={`${project.sector} engineering reference`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-[var(--navy)]/15 to-transparent" />
                      <div className="absolute left-4 top-4 rounded bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
                        {project.sector}
                      </div>
                      <div className="absolute right-4 top-4 rounded bg-[var(--teal)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                        {project.status}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--teal)]">
                            {project.quarter}
                          </div>
                          <h4 className="text-[17px] font-bold leading-tight text-[var(--navy)]">
                            {project.client}
                          </h4>
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
