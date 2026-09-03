import about from "../assets/about2.jpg"

function Description() {
  return (
    <section id="about" className="flex justify-center bg-white py-16 sm:py-24">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="order-2 lg:order-1">
          <img
            src={about}
            alt="Testpro Laboratory technicians at work"
            className="w-full h-80 lg:h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <h2 className="font-geologica text-3xl sm:text-4xl font-bold text-primary">
            About Testpro Laboratory
          </h2>
          <p className="mt-6 text-charcoal/80 leading-relaxed">
            Testpro Laboratory is a privately owned civil engineering materials testing
            laboratory established in 2020 by Jaco van Rensburg. Based in Mossel Bay, we pride
            ourselves on offering our customers responsive, competent, and excellent service
            across every stage of a construction project.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
