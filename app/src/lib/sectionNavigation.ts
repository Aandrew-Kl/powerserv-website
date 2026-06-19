type Navigate = (to: string) => void;

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const headerOffset = 88;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

export function scrollToHomeSection(sectionId: string, pathname: string, navigate: Navigate) {
  if (pathname !== '/') {
    navigate('/');
    window.setTimeout(() => scrollToSection(sectionId), 120);
    return;
  }

  scrollToSection(sectionId);
}
