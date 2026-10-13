import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <header className="font-geologica sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <a href="tel:+27727169405" className="flex items-center gap-1.5 hover:text-white/80">
              <PhoneIcon className="size-4" aria-hidden="true" />
              <span>+27 72 716 9405</span>
            </a>
            <a href="mailto:info@testpro.co.za" className="flex items-center gap-1.5 hover:text-white/80">
              <EnvelopeIcon className="size-4" aria-hidden="true" />
              <span>info@testpro.co.za</span>
            </a>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-block rounded-full border border-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-primary-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Main nav */}
      <Disclosure as="nav" className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <a href="#home" className="font-bungee text-2xl sm:text-3xl text-primary">
                Testpro <span className="text-charcoal">Laboratory</span>
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-charcoal hover:bg-gray-100 focus:ring-2 focus:ring-primary focus:outline-hidden">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <Transition
          enter="transition-all duration-300 ease-in-out"
          enterFrom="max-h-0 opacity-0"
          enterTo="max-h-96 opacity-100"
          leave="transition-all duration-200 ease-in-out"
          leaveFrom="max-h-96 opacity-100"
          leaveTo="max-h-0 opacity-0"
        >
          <DisclosurePanel className="lg:hidden overflow-hidden">
            <div className="space-y-1 px-4 pt-2 pb-4">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "block rounded-md px-3 py-2 text-base font-semibold uppercase tracking-wide text-charcoal hover:bg-gray-100 hover:text-primary"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
    </header>
  );
};

export default NavBar;
