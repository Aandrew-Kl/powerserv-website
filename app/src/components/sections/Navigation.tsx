import { useEffect, useState } from 'react';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToHomeSection } from '@/lib/sectionNavigation';

const base = import.meta.env.BASE_URL;

type NavLink =
  | { name: string; sectionId: string; isRoute?: false }
  | { name: string; href: string; isRoute: true };

const navLinks: NavLink[] = [
  { name: 'About', sectionId: 'about' },
  { name: 'Services', sectionId: 'services' },
  { name: 'Projects', sectionId: 'projects' },
  { name: 'Team', href: '/team', isRoute: true },
  { name: 'Contact', sectionId: 'contact' },
];

const headerContacts = [
  {
    label: '39 Kanari str, Dafni',
    href: 'https://www.google.com/maps/search/?api=1&query=39%20Kanari%20str%2C%20Dafni%20172%2035%2C%20Attiki%2C%20Greece',
    icon: MapPin,
    ariaLabel: 'View PowerServ address',
    external: true,
    hideOnTiny: true,
  },
  {
    label: '210 71 04 824',
    href: 'tel:+302107104824',
    icon: Phone,
    ariaLabel: 'Call PowerServ',
    featured: true,
  },
  {
    label: 'info@powerserv.gr',
    href: 'mailto:info@powerserv.gr',
    icon: Mail,
    ariaLabel: 'Email PowerServ',
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const solid = isScrolled || !isHome;

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToHomeSection(sectionId, location.pathname, navigate);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-white/[0.97] backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-2.5'
            : 'bg-white/[0.85] backdrop-blur-xl py-4'
        }`}
        role="banner"
      >
        <div className="container-wide">
          <nav className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3" aria-label="Main navigation">
            <Link to="/" className="flex shrink-0 items-center" aria-label="PowerServ - Home">
              <img
                src={`${base}assets/logo-full.png`}
                alt="PowerServ Engineering Company"
                className="h-9 w-auto transition-all duration-300 sm:h-12 lg:h-14"
              />
            </Link>

            <div className="flex min-w-0 items-center justify-end gap-1 sm:gap-2 lg:justify-center" aria-label="PowerServ contact details">
              {headerContacts.map(({ label, href, icon: Icon, ariaLabel, external, featured, hideOnTiny }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={`group inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--navy)] transition-all duration-300 hover:bg-[var(--teal)]/10 hover:text-[var(--teal)] sm:h-9 sm:w-9 lg:h-auto lg:w-auto lg:gap-2 lg:rounded-md lg:py-2 ${
                    featured ? 'lg:px-3.5' : 'lg:px-2.5'
                  } ${hideOnTiny ? 'max-[340px]:hidden' : ''}`}
                >
                  <Icon className={`${featured ? 'h-[18px] w-[18px]' : 'h-4 w-4'} shrink-0 text-[var(--teal)]`} />
                  <span className={`hidden font-bold leading-none text-[var(--navy)] transition-colors duration-300 group-hover:text-[var(--teal)] lg:inline ${
                    featured ? 'text-[13px]' : 'text-[12px]'
                  }`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <button
              className="shrink-0 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[var(--navy)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--navy)]" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay - outside header to avoid stacking context issues */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#0d1b2a]">
          <div className="flex items-center justify-between px-6 py-4 bg-white">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={`${base}assets/logo-full.png`} alt="PowerServ" className="h-14 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-5 h-5 text-[var(--navy)]" />
            </button>
          </div>
          <div className="flex flex-col px-6 pt-10">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/[0.06] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >{link.name}</Link>
              ) : (
                <button
                  type="button"
                  key={link.name}
                  className="text-left text-xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/[0.06] transition-colors"
                  onClick={() => handleSectionClick(link.sectionId)}
                >{link.name}</button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
