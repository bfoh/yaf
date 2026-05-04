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
      <div ref={headerRef} className="pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold" />
                <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold">
                  Selected Works · 2021–2025
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display display-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-cream">
                The <span className="italic text-gold font-medium">portfolio</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-[15px] md:text-base text-gray-warm font-body max-w-md leading-relaxed text-pretty">
              A curated selection of our most distinguished work — each project a quiet testament to precision, vision, and enduring quality.
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
            className="portfolio-card group relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] overflow-hidden text-left transition-transform duration-500 ease-editorial"
            data-cursor-hover
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-soft">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-[1100ms] ease-editorial will-change-transform group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />

              {/* Index */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
                <span className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-cream/85">
                  {String(idx + 1).padStart(2, "0")} / {String(portfolioProjects.length).padStart(2, "0")}
                </span>
                {project.status === "in-progress" ? (
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-gold/60 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-70" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                    </span>
                    <p className="text-[9px] tracking-[0.28em] uppercase font-body font-medium text-gold">
                      In Progress
                    </p>
                  </div>
                ) : (
                  <p className="text-[9px] tracking-[0.28em] uppercase font-body font-medium text-cream/60 backdrop-blur-sm border border-cream/15 px-2.5 py-1">
                    Completed
                  </p>
                )}
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold mb-3">
                  {project.category} · {project.year}
                </p>
                <h3 className="font-display display-tight text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-cream group-hover:text-gold transition-colors duration-500 ease-editorial leading-[1.1]">
                  {project.name}
                </h3>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold transition-all duration-500 ease-editorial group-hover:w-16" />
                  <span className="text-[10px] tracking-[0.28em] uppercase font-body text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-editorial">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[55vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex items-center">
          <div>
            <p className="font-display display-tight text-5xl md:text-6xl font-semibold text-cream/20 mb-3 tabular-nums">
              48<span className="text-gold/40">+</span>
            </p>
            <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gray-warm/55">
              More landmarks · ask for full dossier
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}