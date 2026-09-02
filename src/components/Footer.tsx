import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="font-geologica">
      <div className="h-2 bg-gradient-to-r from-primary-dark to-primary" />

      <div className="bg-charcoal-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-secondary">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon className="size-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+27446950831" className="hover:text-primary">
                  +27 44 695 0831
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="size-4 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:info@testpro.co.za" className="hover:text-primary">
                  info@testpro.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <a href="https://goo.gl/maps/e7yKJbfZ4hrRydV58" className="hover:text-primary">
                  5 Voorbaai Crescent, Die Voor Bay, Mossel Bay, 6506
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/testpro.laboratory.01"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Testpro Laboratory on Facebook"
                  className="hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="size-5 fill-current">
                    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/testpro-laboratory-pty/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Testpro Laboratory on LinkedIn"
                  className="hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="size-5 fill-current">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-secondary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-secondary">
              Testpro Laboratory
            </h3>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Testpro Laboratory is a privately owned civil engineering materials testing
              laboratory established in 2020 by Jaco van Rensburg. We pride ourselves on
              offering our customers responsive, competent, and excellent service.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-charcoal py-4">
        <p className="text-center text-xs text-secondary">
          {year} Testpro Laboratory Pty Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
