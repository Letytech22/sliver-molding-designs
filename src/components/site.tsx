import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";



import exteriorEntrance from "@/assets/images/exterior-entrance.jpeg";
import modernCeiling from "@/assets/images/ceiling-design.jpeg";
import windowMoulding from "@/assets/images/window-detail.jpeg";
import ceilingMedallion from "@/assets/images/medallion.jpeg";


export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${visible ? " reveal-in" : ""}${className ? ` ${className}` : ""}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

const nav = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["3D Design", "/3d-design"],
  ["About", "/about"],
] as const;

export function Brand({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const darkBackground = variant === "dark";

  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label="SLIVER MOLDING DESIGNS FINISHING MASTER LTD home"
    >
      <span className="grid size-14 place-items-center bg-ember font-display text-xl font-extrabold text-ink">
        S
      </span>

      <span className="leading-tight">
        <span
          className={`block font-display text-sm font-bold uppercase ${
            darkBackground ? "text-paper" : "text-ink"
          }`}
        >
          SLIVER MOLDING DESIGNS
        </span>

        <span
          className={`block font-display text-[10px] uppercase tracking-[0.16em] ${
            darkBackground ? "text-paper/50" : "text-ink/50"
          }`}
        >
          FINISHING MASTER LTD
        </span>
      </span>
    </Link>
  );
}

const drawerServices = [
  {
    title: "Classic Exterior Entrance",
    image: exteriorEntrance,
    to: "/services",
  },
  {
    title: "Modern Ceiling Design",
    image: modernCeiling,
    to: "/services",
  },
  {
    title: "Window Detail",
    image: windowMoulding,
    to: "/3d-design",
  },
  {
    title: "Medallion",
    image: ceilingMedallion,
    to: "/services",
  },
] as const;

export function Header() {
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (!panelOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [panelOpen]);

  return (
    <>
      <header className="relative z-40 bg-ember">

        {/* TOP CONTACT BAR */}
        <div className="shell flex min-h-14 items-center justify-between gap-6 text-paper">
        <div className="flex items-center gap-6 text-base font-medium lg:text-lg">
            <a
              href="tel:+256776532068"
              className="flex items-center gap-2 transition hover:text-white/75"
            >
              <Phone size={19} />
              <span className="hidden sm:inline">
                +256 776 532 068
              </span>
            </a>

            <a
              href="mailto:sliversmoldingdesigns@gmail.com"
              className="flex items-center gap-2 transition hover:text-white/75"
            >
              <Mail size={19} />
              <span className="hidden md:inline">
                sliversmoldingdesigns@gmail.com
              </span>
            </a>
          </div>

          <a
            href="https://wa.me/256740835143?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-base font-medium transition hover:text-white/75 lg:text-lg"          >
            <MessageCircle size={19} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* FLOATING NAVIGATION */}
        <div className="shell relative z-50 -mb-14">
          <div className="flex min-h-24 items-center justify-between gap-5 bg-paper px-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] md:px-8">

            <Brand />

            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary navigation"
            >
              {nav.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="font-display text-base font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-ember lg:text-lg"                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden h-14 px-7 text-base font-bold sm:inline-flex"
              >
                <Link to="/contact">
                  Request a quote
                  <ArrowRight size={16} />
                </Link>
              </Button>

              {/* HAMBURGER */}
              <button
                type="button"
                onClick={() => setPanelOpen(true)}
                className="grid size-14 place-items-center text-ink transition hover:bg-ink/5"
                aria-label="Open quick menu"
                aria-expanded={panelOpen}
              >
                <Menu size={30} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DARK BACKDROP */}
      <div
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          panelOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setPanelOpen(false)}
        aria-hidden="true"
      />

      {/* RIGHT DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-dvh w-[min(92vw,430px)] overflow-y-auto bg-steel text-paper shadow-2xl transition-transform duration-500 ease-out ${
          panelOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        aria-hidden={!panelOpen}
      >
        <div className="p-7 md:p-9">

          {/* DRAWER HEADER */}
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="eyebrow">
                Explore Sliver
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Our services
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="grid size-10 place-items-center border border-paper/15 transition hover:bg-paper/10"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* SERVICES GRID */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {drawerServices.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                onClick={() => setPanelOpen(false)}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="mt-10 border-t border-paper/15 pt-8">
            <p className="eyebrow">
              Navigate
            </p>

            <div className="mt-5 grid gap-1">
              {nav.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setPanelOpen(false)}
                  className="flex items-center justify-between border-b border-paper/10 py-4 text-base font-semibold text-paper/75 transition hover:text-ember"                >
                  {label}

                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-10 border-t border-paper/15 pt-8">
  <p className="eyebrow">
    Contact details
  </p>

  <div className="mt-6 space-y-6 text-base font-medium text-paper/75">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Kyanja%2C%20Kampala%2C%20Uganda"
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-4 transition hover:text-ember"
    >
      <MapPin
        size={20}
        className="mt-0.5 shrink-0 text-ember"
      />

      <span>
        Kyanja, Kampala, Uganda
      </span>
    </a>

    <a
      href="tel:+256776532068"
      className="flex items-center gap-4 transition hover:text-ember"
    >
      <Phone
        size={20}
        className="shrink-0 text-ember"
      />

      <span>
        +256 776 532 068
      </span>
    </a>

    <a
      href="https://wa.me/256740835143"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 transition hover:text-ember"
    >
      <MessageCircle
        size={20}
        className="shrink-0 text-ember"
      />

      <span>
        Chat on WhatsApp
      </span>
    </a>

    <a
      href="mailto:sliversmoldingdesigns@gmail.com"
      className="flex items-start gap-4 break-all transition hover:text-ember"
    >
      <Mail
        size={20}
        className="mt-0.5 shrink-0 text-ember"
      />

      <span>
        sliversmoldingdesigns@gmail.com
      </span>
    </a>
  </div>
</div>

{/* CTA */}
<Button
  asChild
  className="mt-9 h-14 w-full px-6 text-base font-bold"
>
  <Link
    to="/contact"
    onClick={() => setPanelOpen(false)}
  >
    Start your project
    <ArrowRight size={18} />
  </Link>
</Button>
        </div>
      </aside>
    </>
  );
}
export function Footer() {
  return (
    <footer className="bg-ink text-paper">

      {/* MAIN FOOTER */}
      <div className="shell grid gap-14 py-16 md:py-20 lg:grid-cols-[1.25fr_1fr_1.15fr] lg:gap-20">

        {/* BRAND / ABOUT */}
        <div>
          <Brand variant="dark" />

          <p className="mt-7 max-w-md font-serif text-base leading-8 text-paper/75">
          SLIVER MOLDING DESIGNS FINISHING MASTER LTD creates distinctive spaces
            through custom mouldings, renovations, interior finishing,
            and 3D visualization.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-ember transition hover:text-paper"
          >
            About Sliver
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-paper">
            Our Services
          </h3>

          <div className="mt-7 grid gap-5">
  <Link
    to="/services"
    className="group flex items-start gap-3 text-base leading-6 text-paper/75 transition hover:text-ember"
  >
    <ArrowRight
      size={15}
      className="mt-1 shrink-0 text-ember transition-transform group-hover:translate-x-1"
    />
    <span>
      Architectural Molding & Decorative Designs
    </span>
  </Link>

  <Link
    to="/services"
    className="group flex items-start gap-3 text-base leading-6 text-paper/75 transition hover:text-ember"
  >
    <ArrowRight
      size={15}
      className="mt-1 shrink-0 text-ember transition-transform group-hover:translate-x-1"
    />
    <span>
      Building Construction & Renovations
    </span>
  </Link>

  <Link
    to="/services"
    className="group flex items-start gap-3 text-base leading-6 text-paper/75 transition hover:text-ember"
  >
    <ArrowRight
      size={15}
      className="mt-1 shrink-0 text-ember transition-transform group-hover:translate-x-1"
    />
    <span>
      Interior & Exterior Finishing & Paint Works
    </span>
  </Link>

  <Link
    to="/projects"
    className="group flex items-start gap-3 text-base leading-6 text-paper/75 transition hover:text-ember"
  >
    <ArrowRight
      size={15}
      className="mt-1 shrink-0 text-ember transition-transform group-hover:translate-x-1"
    />
    <span>
      Projects & Portfolio
    </span>
  </Link>
</div>
</div>


        {/* CONTACT DETAILS */}
        <div>
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-paper">
            Contact Details
          </h3>

          <div className="mt-7 space-y-6 text-base text-paper/75">

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kyanja%2C%20Kampala%2C%20Uganda"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 transition hover:text-ember"
            >
              <MapPin
                size={20}
                className="mt-0.5 shrink-0 text-ember"
              />

              <span>
                Kyanja, Kampala, Uganda
              </span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+256776532068"
              className="flex items-center gap-4 transition hover:text-ember"
            >
              <Phone
                size={20}
                className="shrink-0 text-ember"
              />

              <span>
                +256 776 532 068
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/256740835143?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 transition hover:text-ember"
            >
              <MessageCircle
                size={20}
                className="shrink-0 text-ember"
              />

              <span>
                +256 740 835 143
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:sliversmoldingdesigns@gmail.com"
              className="flex items-start gap-4 break-all transition hover:text-ember"
            >
              <Mail
                size={20}
                className="mt-0.5 shrink-0 text-ember"
              />

              <span>
                sliversmoldingdesigns@gmail.com
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-paper/10">
        <div className="shell flex flex-col gap-4 py-6 text-sm text-paper/50 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} SLIVER MOLDING DESIGNS FINISHING MASTER LTD. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/contact"
              className="transition hover:text-ember"
            >
              Contact
            </Link>

            <Link
              to="/projects"
              className="transition hover:text-ember"
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="transition hover:text-ember"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[45] grid size-14 place-items-center rounded-full bg-ember text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-ember-soft md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.4} />
    </button>
  );
}

export function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}


export function PageIntro({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28"><div className="diagonal-glass -right-20 top-0 h-[150%] w-[42%]"/><div className="shell relative z-10"><div className="rise"><p className="eyebrow">{kicker}</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl font-serif text-lg leading-8 text-paper/65">{copy}</p></div></div></section>;
}

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={exteriorEntrance}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-ink/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
      </div>

      {/* CONTENT */}
      <div className="shell relative z-10 py-24 md:py-32">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow">
              Start your project
            </p>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl lg:text-7xl">
              Ready to transform{" "}
              <span className="text-ember">
                your space?
              </span>
            </h2>

            <p className="mt-7 max-w-2xl font-serif text-lg leading-8 text-paper/75 md:text-xl">
              Tell us what you have in mind. Whether it is custom
              moulding, a renovation, or a 3D design concept, we can
              help you take the next step.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* PRIMARY CTA */}
              <Button
                asChild
                className="h-14 px-8 text-base font-bold uppercase tracking-wide md:h-16 md:px-10"
              >
                <Link to="/contact">
                  Request a quote
                  <ArrowRight size={18} />
                </Link>
              </Button>

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/256740835143?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 border border-paper/30 px-8 font-display text-base font-bold uppercase tracking-wide text-paper transition-all duration-300 hover:border-ember hover:bg-ember md:h-16 md:px-10"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* DECORATIVE ACCENT */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-ember" />
    </section>
  );
}