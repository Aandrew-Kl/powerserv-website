import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Linkedin,
  ArrowUp,
} from 'lucide-react';

const serviceLinks = [
  'Budget Estimation & Feasibility',
  'Engineering Studies',
  'Technical Design',
  'Consulting & Advisory',
  'Project Scheduling',
  'Design Review & Coordination',
];

const sectorLinks = [
  'Marine & Shipbuilding',
  'Biomass Energy',
  'Biodiesel Production',
  'Waste Processing',
  'Industrial Automation',
];

const base = import.meta.env.BASE_URL;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[var(--navy)] relative" role="contentinfo">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent" />

      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <img src={`${base}assets/logo.png`} alt="" className="h-9 w-auto" aria-hidden="true" />
              <div className="leading-none">
                <span className="text-[15px] font-bold text-white block">PowerServ</span>
                <span className="text-[9px] text-[var(--gray-500)] tracking-[0.15em] uppercase">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-sm text-[var(--gray-500)] leading-relaxed mb-6">
              Integrated engineering solutions for the marine, energy, and industrial sectors. From concept to commissioning.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/company/powerserv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[var(--gray-500)] hover:bg-[var(--teal)] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-[13px] text-[var(--gray-500)] hover:text-[var(--teal)] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">Sectors</h3>
            <ul className="space-y-2.5">
              {sectorLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-[13px] text-[var(--gray-500)] hover:text-[var(--teal)] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[11px] font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-[var(--teal)] flex-shrink-0 mt-0.5" />
                <span className="text-[13px] text-[var(--gray-500)]">
                  39 Kanari str, Dafni<br />
                  PO 172 35, Attiki, Greece
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[var(--teal)] flex-shrink-0" />
                <a href="tel:+302109719938" className="text-[13px] text-[var(--gray-500)] hover:text-white transition-colors">
                  +30 210 971 9938
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[var(--teal)] flex-shrink-0" />
                <a href="mailto:info@powerserv.gr" className="text-[13px] text-[var(--gray-500)] hover:text-white transition-colors">
                  info@powerserv.gr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-3.5 h-3.5 text-[var(--teal)] flex-shrink-0" />
                <a href="https://www.powerserv.gr" className="text-[13px] text-[var(--gray-500)] hover:text-white transition-colors">
                  www.powerserv.gr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[var(--gray-600)]">
            &copy; {new Date().getFullYear()} PowerServ PCC. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] text-[var(--gray-600)] hover:text-[var(--teal)] transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
