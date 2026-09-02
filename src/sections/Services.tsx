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

const services = [
  {
    icon: BuildingOffice2Icon,
    title: "Concrete",
    description:
      "Compressive strength, flexural strength, workability, consistency, and density testing to evaluate concrete quality.",
    detail:
      "We test compressive & flexural strength, workability, consistency, and density - including flow tests, slump tests, and specimen curing.",
  },
  {
    icon: MapIcon,
    title: "Asphalt & Bitumen",
    description:
      "Marshall stability, flow and quotient, penetration of bitumen, and viscosity testing for asphalt mix design.",
    detail:
      "Mix design, stability, flow, and density testing, plus Marshall stability & quotient, bitumen penetration, and viscosity.",
  },
  {
    icon: GlobeAltIcon,
    title: "Soil, Sand & Gravel",
    description:
      "Hydrometer, flow curve, maximum dry density, moisture content, and particle size analysis.",
    detail:
      "Particle size distribution, compaction, shear strength, and permeability — hydrometer, flow curve, and moisture content tests.",
  },
  {
    icon: CubeIcon,
    title: "Aggregate",
    description:
      "Particle size analysis, sand equivalent value, durability index, and shrinkage & expansion testing.",
    detail:
      "Particle size analysis by sieving, sand equivalent value, durability index, and shrinkage & expansion of cement-aggregate mixes.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Field Testing",
    description:
      "Borrow pit investigation, centre line investigation, and geotechnical investigation on-site.",
    detail:
      "On-site evaluation of soil compaction, asphalt density, and concrete strength - including borrow pit and geotechnical investigations.",
  },
  {
    icon: BeakerIcon,
    title: "Sampling",
    description:
      "Representative sampling of premixed asphalt and freshly mixed concrete for accurate lab results.",
    detail:
      "Representative sampling of soil, concrete, asphalt, and aggregates, carefully handled and transported for accurate lab results.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Other Tests",
    description:
      "Bedding and compactibility testing, in situ percolation testing, and more.",
    detail:
      "Bedding & compactibility testing, in situ percolation testing, and other specialist test methods on request.",
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

      <div className="relative mt-4 h-32 sm:h-36 overflow-hidden">
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
    <section id="services" className="bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
