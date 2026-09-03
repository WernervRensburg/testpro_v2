import { useState } from "react";
import { Input, Textarea, Button } from "@headlessui/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number, subject, query }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setQuery("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-geologica text-3xl sm:text-4xl font-bold text-charcoal text-center">
          Visit Us
        </h2>
        <p className="mt-4 text-charcoal/70 text-center max-w-2xl mx-auto">
          Don't hesitate. Reach out to your local expert.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <ul className="space-y-4 text-charcoal">
              <li className="flex items-start gap-3">
                <MapPinIcon className="size-6 text-primary shrink-0" aria-hidden="true" />
                <a
                  href="https://goo.gl/maps/e7yKJbfZ4hrRydV58"
                  className="hover:text-primary"
                >
                  5 Voorbaai Crescent, Die Voor Bay, Mossel Bay, 6506
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="size-6 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+27446950831" className="hover:text-primary">
                  +27 44 695 0831
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="size-6 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:info@testpro.co.za" className="hover:text-primary">
                  info@testpro.co.za
                </a>
              </li>
            </ul>

            <iframe
              title="Testpro Laboratory location"
              className="w-full h-72 rounded-lg border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.5513189286663!2d22.101969829303574!3d-34.14108999878626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd66918c3c3321b%3A0x810429f2c46899f2!2s5%20Voorbaai%20Cres%2C%20Die%20Voor%20Bay%2C%20Mossel%20Bay%2C%206506!5e0!3m2!1sen!2sza!4v1675086589453!5m2!1sen!2sza"
            />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
            <Input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Input
              type="text"
              placeholder="Contact Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Textarea
              placeholder="Query"
              rows={5}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </Button>

            {status === "sent" && (
              <p className="text-sm text-primary" role="status">
                Thanks, your message has been sent. We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600" role="alert">
                Something went wrong sending your message. Please try again, or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
