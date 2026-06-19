import { ArrowLeft, Download, GraduationCap } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToHomeSection } from '@/lib/sectionNavigation';

const base = import.meta.env.BASE_URL;

const team = [
  {
    name: 'Vassilios Mastrogiannis',
    role: 'Mechanical Engineer',
    education: 'MSc, NTUA',
    file: 'CV_Mastrogiannis_Vassilios.pdf',
  },
  {
    name: 'Dimitris Georgakis',
    role: 'Electrical & Mechanical Engineer',
    education: 'MSc, NTUA',
    file: 'CV_Georgakis_Dimitris.pdf',
  },
  {
    name: 'Giorgos Dimopoulos',
    role: 'Electrical & Mechanical Engineer',
    education: 'Electrical & Computer Engineering',
    file: 'CV_Dimopoulos_Giorgos.pdf',
  },
  {
    name: 'Ilias Klimentidis',
    role: 'Electrical Engineer',
    education: 'University of Patras',
    file: 'CV_Klimentidis_Ilias.pdf',
  },
];

export default function Team() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--navy)] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 container-wide">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--teal)]" />
            <span className="text-[10px] text-[var(--teal)] uppercase tracking-[0.2em] font-semibold">Our People</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-4">
            Meet the Team
          </h1>
          <p className="text-lg text-white/45 max-w-2xl">
            A multidisciplinary team of experienced engineers with decades of expertise across energy, marine, industrial, and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-[var(--gray-100)] p-6 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                {/* Icon placeholder */}
                <div className="w-14 h-14 rounded-full bg-[var(--navy)]/[0.06] flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6 text-[var(--navy)]/50" />
                </div>

                <h3 className="text-[16px] font-bold text-[var(--navy)] mb-1">{member.name}</h3>
                <p className="text-[13px] text-[var(--teal)] font-medium mb-1">{member.role}</p>
                <p className="text-[12px] text-[var(--gray-400)] mb-6">{member.education}</p>

                <a
                  href={`${base}assets/cvs/${member.file}`}
                  download
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[var(--navy)] text-white text-[13px] font-medium hover:bg-[var(--navy)]/90 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Work With Us</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto text-sm">
            Looking for experienced engineering partners for your next project? Get in touch with our team.
          </p>
          <button
            type="button"
            onClick={() => scrollToHomeSection('contact', location.pathname, navigate)}
            className="btn btn-md bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}
