import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="PowerServ - Home">
            <img
              src={`${base}assets/logo.png`}
              alt=""
              className="h-10 w-auto"
              aria-hidden="true"
            />
            <div>
              <span className={`text-lg font-bold block leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-[var(--navy)]' : 'text-white'
              }`}>
                PowerServ
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[var(--gray-500)]' : 'text-white/70'
              }`}>
                Engineering Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[var(--gray-600)] hover:text-[var(--navy)]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className={`w-px h-6 mx-3 ${isScrolled ? 'bg-[var(--gray-200)]' : 'bg-white/20'}`} />

            <a
              href="tel:+302109719938"
              className={`flex items-center gap-2 text-[13px] font-medium transition-colors duration-300 mr-4 ${
                isScrolled ? 'text-[var(--gray-500)]' : 'text-white/70'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              +30 210 971 9938
            </a>

            <a
              href="#contact"
              className="btn btn-sm bg-[var(--gold)] text-white hover:bg-[var(--gold-light)] hover:shadow-lg hover:shadow-[var(--gold)]/20"
            >
              Request Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[var(--navy)] transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={`${base}assets/logo.png`} alt="" className="h-10 w-auto" />
            <span className="text-lg font-bold text-white">PowerServ</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col px-5 pt-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-white/90 hover:text-white py-4 border-b border-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}

          <div className="mt-10 space-y-4">
            <a
              href="tel:+302109719938"
              className="flex items-center gap-3 text-white/60 text-sm"
            >
              <Phone className="w-4 h-4" />
              +30 210 971 9938
            </a>
            <a
              href="#contact"
              className="btn btn-lg bg-[var(--gold)] text-white w-full justify-center mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
