import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '/team', isRoute: true },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const solid = isScrolled || !isHome;

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
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            <Link to="/" className="flex items-center" aria-label="PowerServ - Home">
              <img
                src={`${base}assets/logo-full.png`}
                alt="PowerServ Engineering Company"
                className="h-14 w-auto transition-all duration-300"
              />
            </Link>

            <button
              className="p-2 -mr-2"
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
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/[0.06] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >{link.name}</a>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
