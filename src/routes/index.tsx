import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";




import {
  ArrowRight,
  Box,
  Hammer,
  Layers3,
  ChevronLeft,
  ChevronRight,
  PencilRuler,
  BadgeCheck,
  Eye,
  Puzzle,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTA, Layout, Reveal } from "@/components/site";
import hero from "@/assets/sliver-hero.jpg";
import renovation from "@/assets/sliver-renovation.jpg";
import kitchen from "@/assets/sliver-3d-kitchen.jpg";
import moulding from "@/assets/sliver-moulding.jpg";
import craft from "@/assets/sliver-craft.jpg";


import exteriorEntrance from "@/assets/images/exterior-entrance.jpeg";
import modernCeiling from "@/assets/images/ceiling-design.jpeg";
import residentialDesign from "@/assets/images/3D concept.jpeg";
import windowMoulding from "@/assets/images/window-detail.jpeg";
import columnDetailing from "@/assets/images/column-detail.jpeg";
import ceilingMedallion from "@/assets/images/medallion.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SLIVER MOLDING DESIGNS FINISHING MASTER LTD | Transforming Spaces Through Design" },
    { name: "description", content:"Professional mouldings, renovations, and 3D design solutions for homes and businesses in Kampala, Uganda." },
    { property: "og:title", content: "SLIVER MOLDING DESIGNS FINISHING MASTER LTD" },
    { property: "og:description", content: "Transforming spaces through mouldings, renovations, and 3D visualization." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

const services = [
  {
    number: "01",
    title: "Architectural Molding & Decorative Designs",
    description:
      "Custom architectural molding and decorative design solutions for walls, ceilings, columns, windows, facades, and other defining features.",
    icon: Layers3,
    to: "/services",
  },
  {
    number: "02",
    title: "Building Construction & Renovations",
    description:
      "Construction and renovation services for residential and commercial spaces, from structural improvements to complete property transformations.",
    icon: Hammer,
    to: "/services",
  },
  {
    number: "03",
    title: "Interior & Exterior Finishing & Paint Works",
    description:
      "Professional interior and exterior finishing, surface preparation, paint works, and detailing that give spaces a clean, complete, and refined appearance.",
    icon: Box,
    to: "/services",
  },
];

const process = [["01","Consultation","Tell us about your project and ideas."],["02","Project assessment","We review the space and requirements."],["03","Design & visualization","We develop concepts and 3D views."],["04","Planning & approval","We agree the design and scope."],["05","Project execution","The approved work comes to life."],["06","Final review","We review and hand over together."]];


const heroSlides = [
  {
    image: hero,
    eyebrow: "Mouldings • Renovations • 3D Design",
    title: "Make every space feel intentional.",
    description:
      "We help homeowners and businesses transform ordinary spaces into polished, distinctive environments through custom mouldings, renovations, and thoughtful design.",
  },
  {
    image: moulding,
    eyebrow: "Custom Mouldings",
    title: "Architectural details that change the whole space.",
    description:
      "Add depth, character, and a refined finish with mouldings designed for walls, ceilings, columns, windows, and exterior features.",
  },
  {
    image: renovation,
    eyebrow: "Renovation & Finishing",
    title: "Give your space a fresh start.",
    description:
      "From focused upgrades to complete transformations, we improve the look, function, and finish of residential and commercial spaces.",
  },
  {
    image: kitchen,
    eyebrow: "3D Visualization",
    title: "See your space before the work begins.",
    description:
      "Explore layouts, finishes, colours, and design ideas in 3D before construction starts, so you can make decisions with greater clarity.",
  },
];

const featuredProjects = [
  {
    image: exteriorEntrance,
    title: "Classic Exterior Entrance",
    category: "Exterior Mouldings",
  },
  {
    image: modernCeiling,
    title: "Modern Ceiling Design",
    category: "Interior Finishing",
  },
  {
    image: residentialDesign,
    title: "Residential Design Concept",
    category: "3D Visualization",
  },
  {
    image: windowMoulding,
    title: "Decorative Window Surround",
    category: "Architectural Mouldings",
  },
  {
    image: columnDetailing,
    title: "Feature Column Detailing",
    category: "Exterior Finishing",
  },
  {
    image: ceilingMedallion,
    title: "Decorative Ceiling Medallion",
    category: "Custom Mouldings",
  },
];


const whySliver = [
  {
    icon: PencilRuler,
    title: "Design to Execution",
    description:
      "We connect design thinking with practical execution, helping turn your ideas into spaces that feel considered and complete.",
  },
  {
    icon: BadgeCheck,
    title: "Attention to Detail",
    description:
      "From moulding profiles to finishing touches, every detail is approached with care and precision.",
  },
  {
    icon: Eye,
    title: "Clear Visualization",
    description:
      "Our 3D design process helps you understand layouts, finishes, and ideas before physical work begins.",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "Every space is different, so we shape each project around your needs, preferences, and intended result.",
  },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? Math.min((scrollTop / scrollHeight) * 100, 100)
          : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9998] h-[5px] w-full"
      aria-hidden="true"
    >
      <div
        className="h-full bg-ember transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

function HeroSequenceItem({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`hero-sequence-item ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide] ?? heroSlides[0]!;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-ink text-paper md:min-h-[780px] lg:min-h-[820px]">

      {/* BACKGROUND SLIDES */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            index === activeSlide
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[1.03] opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        </div>
      ))}

      {/* HERO CONTENT */}
      <div className="shell relative z-10 flex min-h-[720px] items-center pt-24 md:min-h-[780px] md:pt-28 lg:min-h-[820px]">
      <div key={activeSlide} className="max-w-3xl">
  <HeroSequenceItem delay={120}>
    

    <p className="eyebrow text-sm md:text-base">
  {currentSlide.eyebrow}
</p>
  </HeroSequenceItem>

  <HeroSequenceItem delay={260}>
    <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
      {currentSlide.title}
    </h1>
  </HeroSequenceItem>

  <HeroSequenceItem delay={420}>
    <p className="mt-7 max-w-2xl font-serif text-lg leading-8 text-paper/80 md:text-xl">
      {currentSlide.description}
    </p>
  </HeroSequenceItem>

  <div className="mt-10 flex flex-wrap gap-4">
    <HeroSequenceItem delay={580}>
    <Button
  asChild
  className="h-14 px-8 text-base font-bold uppercase tracking-wide md:h-16 md:px-10"
>
  <Link to="/services">
    Our Services
    <ArrowRight size={19} />
  </Link>
</Button>
    </HeroSequenceItem>

    <HeroSequenceItem delay={720}>
    <Button
  asChild
  variant="light"
  className="h-14 px-8 text-base font-bold uppercase tracking-wide md:h-16 md:px-10"
>
  <Link to="/projects">
    View Projects
    <ArrowRight size={19} />
  </Link>
</Button>
    </HeroSequenceItem>
  </div>
</div>
</div>

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center bg-black/55 text-white backdrop-blur-sm transition hover:bg-ember md:left-6"
      >
        <ChevronLeft size={24} />
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center bg-black/55 text-white backdrop-blur-sm transition hover:bg-ember md:right-6"
      >
        <ChevronRight size={24} />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 transition-all duration-300 ${
              activeSlide === index
                ? "w-12 bg-ember"
                : "w-7 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}



function ProjectGallery() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="bg-paper py-20 md:py-28"
    >
      <div className="shell">

        {/* HEADING */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">
              Selected work
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
              Spaces we have helped{" "}
              <span className="text-ember">
                transform.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-serif text-lg leading-8 text-ink/60">
              Explore a selection of moulding, renovation, finishing,
              and design projects brought to life through careful
              detailing and execution.
            </p>
          </div>
        </Reveal>

        {/* PROJECT GRID */}
        <Reveal delay={140}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const isActive = activeProject === index;

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() =>
                    setActiveProject(isActive ? null : index)
                  }
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl text-left"
                  aria-label={`View ${project.title}`}
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isActive
                        ? "scale-105"
                        : "scale-100 group-hover:scale-[1.04]"
                    }`}
                  />

                  {/* NORMAL HOVER SHADE */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      isActive
                        ? "opacity-60"
                        : "opacity-0 group-hover:opacity-15"
                    }`}
                  />

                  {/* ACTIVE PROJECT DETAILS */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-5 opacity-0"
                    }`}
                  >
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-ember">
                      {project.category}
                    </p>
                  </div>

                  {/* SMALL CLICK INDICATOR */}
                  {!isActive && (
                    <span className="absolute bottom-4 right-4 grid size-10 place-items-center bg-black/55 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      <ArrowRight size={17} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* VIEW FULL GALLERY */}
        <Reveal delay={220}>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              className="h-14 px-8 text-base font-bold uppercase tracking-wide md:h-16 md:px-10"
            >
              <Link to="/projects">
                View full gallery
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Home() {
  return (
    <Layout>
      <ScrollProgress />

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* SERVICES */}
<section
  id="services"
  className="bg-ice/30 py-20 md:py-28"
>
  <div className="shell">

    {/* SECTION HEADING */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">
          What we do
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
          Our{" "}
          <span className="text-ember">
            Best Services 
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg leading-8 text-ink/70">
          From architectural details to complete transformations,
          we help you visualize, refine, and bring your space to life.
        </p>
      </div>
    </Reveal>

    {/* SERVICE CARDS */}
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <Reveal
            key={service.title}
            delay={index * 120}
          >
            <Link
              to={service.to}
              className="group relative block h-full overflow-hidden rounded-2xl border border-ink/5 bg-white px-7 py-10 text-center shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] md:px-8 md:py-12"
            >

              {/* LARGE FADED NUMBER */}
              <span className="absolute right-5 top-1 font-display text-7xl font-extrabold text-ember/[0.07] transition-colors duration-500 group-hover:text-ember/[0.12]">
                {service.number}
              </span>

              {/* ICON */}
              <div className="relative mx-auto grid size-16 place-items-center rounded-full bg-ember/10 text-ember transition-all duration-500 group-hover:bg-ember group-hover:text-white">
                <Icon size={29} strokeWidth={1.8} />
              </div>

              {/* TITLE */}
              <h3 className="relative mt-7 font-display text-2xl font-bold text-ink">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative mt-4 font-serif text-base leading-7 text-ink/75">
                {service.description}
              </p>

              {/* LINK */}
              <div className="relative mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-ember">
                Explore service

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>


      {/* PROJECTS */}
      <ProjectGallery />

      {/* PROCESS */}
<section
  id="process"
  className="bg-ice/30 py-20 md:py-28"
>
  <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">

    {/* LEFT INTRO */}
    <Reveal className="lg:col-span-4">
      <div className="lg:sticky lg:top-36">
        <p className="eyebrow">
          How we work
        </p>

        <div className="mt-9 h-px w-20 bg-ember" />

        <p className="mt-6 max-w-md font-serif text-lg leading-8 text-ink/70">
          Every project follows a considered process, keeping you
          informed from the first conversation to the final handover.
        </p>
 
      </div>
    </Reveal>

    {/* PROCESS TIMELINE */}
    <Reveal
      className="lg:col-span-8"
      delay={140}
    >
      <div className="relative">

        {/* VERTICAL LINE */}
        <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-ink/10 sm:block" />

        <div className="space-y-5">
          {process.map(([n, t, c], index) => (
            <div
              key={n}
              className="group relative grid gap-4 sm:grid-cols-[56px_1fr] sm:gap-6"
            >

              {/* NUMBER */}
              <div className="relative z-10">
                <div className="grid size-14 place-items-center rounded-full border border-ember/25 bg-paper font-display text-lg font-bold text-ember shadow-sm transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-white">
                  {n}
                </div>
              </div>

              {/* STEP CARD */}
              <div className="relative overflow-hidden rounded-xl border border-ink/5 bg-white px-6 py-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:px-8 md:py-7">

                {/* LARGE FADED NUMBER */}
                <span className="pointer-events-none absolute right-5 top-0 font-display text-7xl font-extrabold text-ember/[0.05]">
                  {n}
                </span>

                <div className="relative">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ember">
                    Step {index + 1}
                  </p>

                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {t}
                  </h3>

                  <p className="mt-3 max-w-xl font-serif text-base leading-7 text-ink/75 md:text-lg">
                    {c}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* WHY SLIVER */}
      {/* WHY SLIVER */}
<section className="bg-paper py-20 md:py-28">
  <div className="shell">

    {/* HEADING */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">
          Why Sliver
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
          What sets our approach{" "}
          <span className="text-ember">
            apart.
          </span>
        </h2>

      </div>
    </Reveal>

    {/* CARDS */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whySliver.map((item, index) => {
        const Icon = item.icon;

        return (
          <Reveal
            key={item.title}
            delay={index * 100}
          >
            <article className="group flex h-full flex-col items-center rounded-2xl border border-ink/5 bg-white px-6 py-10 text-center shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all duration-400 hover:-translate-y-2 hover:border-ember hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]">

              {/* ICON */}
              <div className="grid size-14 place-items-center text-ember">
                <Icon
                  size={32}
                  strokeWidth={1.9}
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 font-serif text-base leading-7 text-ink/70">
                {item.description}
              </p>

              {/* SMALL ACCENT */}
              <div className="mt-7 h-[2px] w-10 bg-ember/30 transition-all duration-300 group-hover:w-16 group-hover:bg-ember" />
            </article>
          </Reveal>
        );
      })}
    </div>

    {/* WHATSAPP CTA */}
    <Reveal delay={420}>
      <div className="mt-12 flex justify-center">
        <a
          href="https://wa.me/256740835143?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 items-center justify-center gap-3 border border-ember px-8 font-display text-base font-bold uppercase tracking-wide text-ember transition-all duration-300 hover:bg-ember hover:text-white md:h-16 md:px-10"
        >
          <MessageCircle size={20} />
          Discuss your project on WhatsApp
        </a>
      </div>
    </Reveal>

  </div>
</section>
      <CTA />
    </Layout>
  );
}