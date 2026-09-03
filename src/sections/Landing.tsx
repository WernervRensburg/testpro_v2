import heroImage from "../assets/hero.jpg"

function Landing() {
  return (
    <section id="home" className="relative w-full min-[1100px]:h-[80vh] min-[1100px]:min-h-[560px]">
      <div className="max-[1099px]:flex max-[1099px]:flex-col max-[1099px]:gap-8 max-[1099px]:py-12 min-[1100px]:block min-[1100px]:h-full">
        {/* Card */}
        <div className="min-[1100px]:absolute min-[1100px]:inset-0 min-[1100px]:z-20 min-[1100px]:flex min-[1100px]:items-center min-[1100px]:justify-end">
          <div className="mx-auto w-full max-w-7xl max-[1099px]:px-4 max-[1099px]:sm:px-6 min-[1100px]:px-8 flex max-[1099px]:justify-center min-[1100px]:justify-end">
            <div className="w-full max-w-2xl bg-charcoal border-primary shadow-2xl max-[1099px]:border-t-4 max-[1099px]:rounded-lg min-[1100px]:border-r-4 min-[1100px]:rounded-l-lg max-[1099px]:p-8 max-[1099px]:sm:p-10 min-[1100px]:p-14 max-[1099px]:text-center min-[1100px]:text-left">
              <div className="flex items-center max-[1099px]:justify-center min-[1100px]:justify-start gap-2 text-primary text-sm font-bold uppercase tracking-widest">
                <span className="h-px w-8 bg-primary" />
                Fast. Reliable. Professional.
              </div>
              <h1 className="mt-5 font-geologica text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
                Accurate testing. Every time.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Testpro Laboratory is a privately owned civil engineering materials testing
                laboratory based in Mossel Bay, delivering responsive, competent, and accredited
                testing since 2020.
              </p>
              <div className="mt-10 flex flex-wrap max-[1099px]:justify-center min-[1100px]:justify-start gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-charcoal transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image, swap for your own photo: drop it in src/assets (e.g. hero.jpg), add
            `import heroImage from "../assets/hero.jpg";` at the top of this file, then set
            src={heroImage} below instead of the placehold.co URL. */}
        <div className="hidden sm:block min-[1100px]:absolute min-[1100px]:inset-0 min-[1100px]:z-0">
          <div className="mx-auto max-[1099px]:max-w-7xl max-[1099px]:px-4 max-[1099px]:sm:px-6 min-[1100px]:max-w-none min-[1100px]:px-0 min-[1100px]:h-full">
            <img
              src={heroImage}
              alt="Testpro Laboratory technician testing materials"
              className="w-full max-[1099px]:h-72 max-[1099px]:sm:h-96 min-[1100px]:h-full max-[1099px]:rounded-lg min-[1100px]:rounded-none object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Gradient overlay, desktop only, keeps the card legible against the photo */}
        <div className="hidden min-[1100px]:block min-[1100px]:absolute min-[1100px]:inset-0 min-[1100px]:z-10 bg-gradient-to-l from-black/50 via-black/10 to-transparent" />
      </div>
    </section>
  );
}

export default Landing;
