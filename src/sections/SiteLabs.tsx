import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

import siteLab01 from "../assets/sitelab-01.jpeg";
import siteLab02 from "../assets/sitelab-02.jpeg";
import siteLab03 from "../assets/sitelab-03.jpeg";
import siteLab04 from "../assets/sitelab-04.jpeg";
import siteLabVideo from "../assets/sitelab-video.mp4";

const photos = [
  { src: siteLab01, alt: "Technicians doing compaction testing on the road layerworks in Meiringspoort" },
  { src: siteLab03, alt: "Inside the Testpro site laboratory, with samples laid out for testing" },
  { src: siteLab04, alt: "Testpro technicians sampling on a flood-damaged section of the pass" },
  { src: siteLab02, alt: "Road recycler stabilising the layerworks during the repair works" },
];

function DroneVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-4xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
        >
          <div className="flex items-center justify-between gap-4 pb-3">
            <DialogTitle className="font-geologica text-lg font-bold text-white">
              Meiringspoort site lab, aerial view
            </DialogTitle>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-primary focus:outline-hidden"
            >
              <span className="sr-only">Close video</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* No autoPlay on purpose: the visitor presses play. The clip has no audio track. */}
          <video
            src={siteLabVideo}
            controls
            playsInline
            preload="auto"
            className="w-full aspect-video rounded-lg bg-black shadow-2xl"
          >
            Your browser does not support embedded video.
          </video>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function SiteLabs() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="site-labs" className="bg-neutral-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
              <span className="h-px w-8 bg-primary" />
              On-site testing
            </div>
            <h2 className="mt-4 font-geologica text-3xl sm:text-4xl font-bold text-primary">
              Site Laboratories
            </h2>
            <p className="mt-6 text-charcoal/80 leading-relaxed">
              When a project is far from Mossel Bay or results are needed fast, we set up a
              dedicated laboratory on site. Our technicians test right where the work is happening,
              so contractors get results sooner and work keeps moving.
            </p>

            <div className="mt-8 border-l-4 border-primary bg-white rounded-r-lg p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal/60">
                Featured site lab
              </p>
              <h3 className="mt-2 font-geologica text-xl font-bold text-charcoal">
                Meiringspoort Emergency Flood Repairs
              </h3>
              <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                Testpro set up a site laboratory at Meiringspoort to support emergency repairs to
                the flood-damaged sections of the pass. We handle quality control testing on site,
                including layerworks compaction testing and materials testing, so that repairs can
                go ahead without waiting on results from our main laboratory.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors"
              >
                Enquire About a Site Lab
              </a>
            </div>
          </div>

          {/* Drone video trigger */}
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative block w-full aspect-video overflow-hidden rounded-lg shadow-lg text-left focus:outline-hidden focus-visible:ring-4 focus-visible:ring-primary"
          >
            <img
              src={siteLab02}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_60%] transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                <PlayIcon className="size-7 sm:size-9 translate-x-0.5" aria-hidden="true" />
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="font-geologica text-lg sm:text-xl font-bold text-white">
                See the site from above
              </p>
              <p className="mt-1 text-sm text-white/80">Watch the drone flyover · 0:25</p>
            </div>
          </button>
        </div>

        {/* Photo strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="w-full aspect-[3/4] object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <DroneVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

export default SiteLabs;
