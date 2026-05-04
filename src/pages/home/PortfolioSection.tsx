import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/base/ScrollReveal";
import { portfolioProjects } from "@/mocks/projects";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const header = headerRef.current;
    if (!section || !track || !header) return;

    // Skip GSAP scroll-pin on touch devices — use native horizontal scroll instead.
    // Scrub-driven horizontal pin is janky on mobile Safari (no momentum, awkward gesture).
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return;

    const ctx = gsap.context(() => {
      const cards = track.querySelectorAll(".portfolio-card");
      const totalWidth = track.scrollWidth - window.innerWidth + 100;

      const scrollTween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax depth for each card
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { x: 30 },
            {
              x: -30,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full bg-charcoal overflow-hidden"
    >
      {/* Header */}
      <div ref={headerRef} className="pt-20 md:pt-28 lg:pt-36 pb-10 md:pb-14 px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body text-gold/80 mb-4">
                SELECTED WORKS
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                PORTFOLIO
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-gray-warm font-body max-w-sm leading-relaxed">
              A curated selection of our most distinguished projects — each one a testament to precision, vision, and enduring quality.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Horizontal scroll track. Mobile: native swipe. Desktop: GSAP pin (overflow-visible lets the translated track extend; section's overflow-hidden clips it). */}
      <div className="overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        ref={trackRef}
        className="flex gap-5 md:gap-6 pb-20 md:pb-28 lg:pb-36 pl-6 md:pl-10 lg:pl-16 pr-6"
      >
        {portfolioProjects.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className="portfolio-card group relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] rounded-xl overflow-hidden bg-[#222222] border border-white/5 hover:border-gold/40 transition-all duration-500 text-left"
            data-cursor-hover
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-[120%] h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

              {/* Status badge */}
              <div className="absolute top-5 right-5 z-10">
                {project.status === "in-progress" ? (
                  <div className="flex items-center gap-1.5 bg-gold/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-charcoal opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-charcoal" />
                    </span>
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal font-semibold">
                      In Progress
                    </p>
                  </div>
                ) : (
                  <div className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-white/70 font-medium">
                      Completed
                    </p>
                  </div>
                )}
              </div>

              {/* Category badge */}
              <div className="absolute top-5 left-5 bg-gold/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal font-semibold">
                  {project.category}
                </p>
              </div>

              {/* Number */}
              <span className="absolute top-5 right-5 font-display text-5xl font-bold text-white/10 group-hover:text-gold/20 transition-colors duration-500 mt-12">
                0{idx + 1}
              </span>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs text-gray-warm/70 font-body mb-1">{project.year}</p>
                <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                  {project.name}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-body text-gold tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Project
                  <i className="ri-arrow-right-line" />
                </span>
              </div>
            </div>
          </button>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[20vw] flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-bold text-white/20 mb-3">
              48+
            </p>
            <p className="text-xs tracking-[0.15em] uppercase font-body text-gray-warm/50">
              More projects delivered
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}