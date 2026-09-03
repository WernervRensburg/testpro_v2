import { useState } from "react";
import {
  BuildingOffice2Icon,
  MapIcon,
  GlobeAltIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

import servicesImage from "../assets/services.jpg";

const services = [
  {
    icon: BuildingOffice2Icon,
    title: "Concrete",
    description:
      "Compressive strength, flexural strength, workability, consistency, and density testing to evaluate concrete quality.",
    detail:
      "We evaluate the strength, durability, and overall quality of concrete, using cutting-edge equipment and industry-standard methods to test compressive strength, flexural strength, workability, consistency, and density.",
  },
  {
    icon: MapIcon,
    title: "Asphalt & Bitumen",
    description:
      "Marshall stability, flow and quotient, penetration of bitumen, and viscosity testing for asphalt mix design.",
    detail:
      "We offer comprehensive asphalt testing, including tests for mix design, stability, flow, and density, as well as tests to evaluate resistance to water and air, such as Marshall stability, bitumen penetration, and viscosity.",
  },
  {
    icon: GlobeAltIcon,
    title: "Soil, Sand & Gravel",
    description:
      "Hydrometer, flow curve, maximum dry density, moisture content, and particle size analysis.",
    detail:
      "We provide a wide range of soil and gravel testing to evaluate particle size distribution, compaction, shear strength, and permeability, using advanced equipment and industry-standard methods including hydrometer and flow curve testing.",
  },
  {
    icon: CubeIcon,
    title: "Aggregate",
    description:
      "Particle size analysis, sand equivalent value, durability index, and shrinkage & expansion testing.",
    detail:
      "We test particle size distribution, abrasion resistance, and specific gravity, helping to ensure the aggregates used in your construction project meet industry standards and performance expectations.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Field Testing",
    description:
      "Borrow pit investigation, centre line investigation, and geotechnical investigation on-site.",
    detail:
      "We evaluate the quality and performance of construction materials on-site, using advanced equipment to test soil compaction, asphalt density, and concrete strength, helping to prevent costly delays or safety hazards.",
  },
  {
    icon: BeakerIcon,
    title: "Sampling",
    description:
      "Representative sampling of premixed asphalt and freshly mixed concrete for accurate lab results.",
    detail:
      "We ensure the accuracy and representativeness of construction material samples, using industry-standard methods to collect, carefully handle, and transport samples of soil, concrete, asphalt, and aggregates to our laboratory for testing.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Other Tests",
    description:
      "Bedding and compactibility testing, in situ percolation testing, and more.",
    detail:
      "We also provide a range of other test methods, including bedding and compactibility testing and in situ percolation testing, giving comprehensive insight into the quality and condition of construction materials and structures.",
  },
];

type Service = (typeof services)[number];

function ServiceCard({ icon: Icon, title, description, detail }: Service) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] bg-white rounded-lg p-6 flex flex-col">
      <div className="flex items-center gap-3 h-12">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full bg-primary/10 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "size-0 opacity-0" : "size-12 opacity-100"
          }`}
        >
          <Icon className="size-6 text-primary shrink-0" aria-hidden="true" />
        </div>
        <h3 className="font-geologica text-lg font-bold text-charcoal">{title}</h3>
      </div>

      <div className="relative mt-4 h-40 sm:h-44 overflow-hidden">
        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${
            expanded ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <p className="text-sm text-charcoal/70 flex-1">{description}</p>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-2 self-start text-sm font-semibold uppercase tracking-wide text-primary hover:text-primary-dark"
          >
            More →
          </button>
        </div>

        <div
          className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-in-out ${
            expanded ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-sm text-charcoal/70 flex-1">{detail}</p>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-2 flex items-center gap-1 self-start text-sm font-semibold uppercase tracking-wide text-primary hover:text-primary-dark"
          >
            <ArrowLeftIcon className="size-3.5" aria-hidden="true" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <img
        src={servicesImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-geologica text-3xl sm:text-4xl font-bold text-white text-center">
          Our Services
        </h2>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto">
          Accredited materials testing across every stage of your construction project.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
