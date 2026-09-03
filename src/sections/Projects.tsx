import { useEffect, useRef, useState } from "react";

import n2CircleImage from "../assets/n2CircleHartland.jpg";
import renosterbosImage from "../assets/renosterbos.jpg";
import hartlandImage from "../assets/HartlandLifestyleEstate.png";
import fynbosHeightsImage from "../assets/FynbosHeights.jpg";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

type Project = {
  title: string;
  summary: string;
  details: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: "N2 Traffic Circle, Hartland",
    summary: "Access infrastructure off the N2 highway at Hartenbos, completed December 2021.",
    image: n2CircleImage,
    details: [
      "This infrastructure project was initiated to provide access to Hartenbos off the N2 highway. It will also provide access to the new filling station under construction as well as the Hartland Lifestyle Estate. The project took 3 months to complete and was finished in December 2021.",
      "Civil Contractor: Urwhebo e-Transand",
      "Testpro Laboratory was responsible for all quality control testing for the Civil Contractor, i.e. road layerworks compaction, asphalt control testing & concrete strength testing.",
    ],
  },
  {
    title: "Renosterbos Estate",
    summary: "Private development north of Hartenbos with residences, a retirement village, and frail care facilities.",
    image: renosterbosImage,
    details: [
      "Renosterbos Estate is a private development situated on the north facing slopes west of the beautiful town of Hartenbos. It includes a selection of private residences, a retirement village component as well as assisted living with frail care facilities.",
      "Consulting Civil Engineer: Niel Lyners & Associates",
      "Main Civil Contractor: Urwhebo e-Transand",
      "Building Contractor: Schoeman Trio Builders",
      "Testpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor, i.e. road layerworks compaction, asphalt control testing, concrete strength testing & floor compaction testing.",
    ],
  },
  {
    title: "Hartland Lifestyle Estate",
    summary: "375ha coastal development in Hartenbos set to house over 2000 homes.",
    image: hartlandImage,
    details: [
      "Hartland Lifestyle Estate is situated in the heart of the Garden Route in Hartenbos on 375ha of beautiful coastal land and will house over 2000 homes eventually.",
      "Building Contractor & Developer: Dalmar Konstruksie",
      "Main Civil Contractor: Urwhebo e-Transand",
      "Testpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor, i.e. road layerworks compaction, asphalt control testing, concrete strength testing & floor compaction testing.",
    ],
  },
  {
    title: "Fynbos Heights Lifestyle Village",
    summary: "Non-profit Rotary project near Pinnacle Point Casino, Mossel Bay.",
    image: fynbosHeightsImage,
    details: [
      "Fynbos Heights Lifestyle Village is a non-profit Rotary project just north of the Pinnacle Point Casino in Mossel Bay. On completion of phase 3 the development will consist of 197 units with a frail care unit.",
      "Consulting Engineer: V3 Consulting Engineers",
      "Building Contractor: Tretsom Bouers",
      "Testpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor, i.e. road layerworks compaction, concrete strength testing, foundation & floor compaction testing.",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="font-geologica text-xl font-bold text-charcoal">{project.title}</h3>
        <p className="mt-2 text-sm text-charcoal/70">{project.summary}</p>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`mt-4 space-y-2 transition-all duration-500 ease-in-out ${
                expanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {project.details.map((line, i) => (
                <p key={i} className="text-sm text-charcoal/70">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary hover:text-primary-dark"
        >
          {expanded ? "Show less" : "Read more →"}
        </button>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-geologica text-3xl sm:text-4xl font-bold text-primary text-center">
          Projects
        </h2>
        <p className="mt-4 text-charcoal/70 text-center max-w-2xl mx-auto">
          At Testpro Laboratory, we are committed to delivering exceptional service that meets
          your every need. Here is a showcase of some of the work we have done.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
