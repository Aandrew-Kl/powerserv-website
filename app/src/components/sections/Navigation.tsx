import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/[0.97] backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-2.5'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-2.5" aria-label="PowerServ - Home">
            <img src={`${base}assets/logo.png`} alt="" className="h-9 w-auto" aria-hidden="true" />
            <div className="leading-none">
              <span className={`text-[15px] font-bold block tracking-[-0.01em] transition-colors duration-300 ${
                isScrolled ? 'text-[var(--navy)]' : 'text-white'
              }`}>PowerServ</span>
              <span className={`text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[var(--gray-400)]' : 'text-white/50'
              }`}>Engineering</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[var(--gray-600)] hover:text-[var(--navy)]'
                    : 'text-white/75 hover:text-white'
                }`}
              >{link.name}</a>
            ))}

            <div className={`w-px h-5 mx-3 ${isScrolled ? 'bg-[var(--gray-200)]' : 'bg-white/15'}`} />

            <a
              href="tel:+302109719938"
              className={`flex items-center gap-1.5 text-[12px] font-medium mr-4 transition-colors duration-300 ${
                isScrolled ? 'text-[var(--gray-500)]' : 'text-white/50'
              }`}
            >
              <Phone className="w-3 h-3" />
              +30 210 971 9938
            </a>

            <a href="#contact" className="btn btn-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]">
              Get in Touch
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[var(--navy)] transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={`${base}assets/logo.png`} alt="" className="h-9 w-auto" />
            <span className="text-[15px] font-bold text-white">PowerServ</span>
          </a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="flex flex-col px-6 pt-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/[0.06] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >{link.name}</a>
          ))}
          <a href="tel:+302109719938" className="flex items-center gap-2 text-white/40 text-sm mt-10">
            <Phone className="w-3.5 h-3.5" />+30 210 971 9938
          </a>
          <a
            href="#contact"
            className="btn btn-lg bg-[var(--accent)] text-white w-full justify-center mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >Get in Touch <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    </header>
  );
}
