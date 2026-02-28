import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-mid)] to-[var(--navy-light)]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--teal)]/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--blue)]/[0.06] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" aria-hidden="true" />

      <div className="container-wide relative z-10 py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="text-center lg:text-left max-w-xl reveal">
            <h2 className="text-h2 text-white mb-4">
              Ready to Start Your
              <br />
              <span className="text-[var(--teal-light)]">Next Project?</span>
            </h2>
            <p className="text-body-lg text-white/45">
              Get in touch with our engineering team for a free consultation and project assessment.
            </p>
          </div>

          {/* Actions */}
          <div className="reveal flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn btn-lg btn-primary">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+302109719938"
              className="btn btn-lg btn-outline-white"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
