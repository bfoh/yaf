import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/base/ScrollReveal";
import { legacyProjects } from "@/mocks/projects";

gsap.registerPlugin(ScrollTrigger);

function useCountUp(
  ref: React.RefObject<HTMLSpanElement | null>,
  target: number,
  options: { suffix?: string; prefix?: string; decimals?: number; duration?: number; delay?: number }
) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: target,
      duration: options.duration ?? 2.2,
      ease: "power2.out",
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const decimals = options.decimals ?? 0;
        const raw = obj.val.toFixed(decimals);
        const formatted = decimals > 0
          ? Number(raw).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
          : Number(raw).toLocaleString("en-US");
        el.textContent = `${options.prefix ?? ""}${formatted}${options.suffix ?? ""}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [target, options.prefix, options.suffix, options.decimals, options.duration, options.delay]);
}

export default function LegacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statLineRef = useRef<HTMLDivElement>(null);

  const count48Ref = useRef<HTMLSpanElement>(null);
  const count24Ref = useRef<HTMLSpanElement>(null);
  const count15Ref = useRef<HTMLSpanElement>(null);

  useCountUp(count48Ref, 48, { suffix: "+", duration: 2, delay: 0.2 });
  useCountUp(count24Ref, 2.4, { prefix: "GH₵", suffix: "B+", decimals: 1, duration: 2.4, delay: 0.5 });
  useCountUp(count15Ref, 15, { suffix: "", duration: 1.8, delay: 0.8 });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const img = imageRef.current;
    if (!section || !img) return;

    const ctx = gsap.context(() => {
      gsap.to(img.querySelector("img"), {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Stat line draws in
      gsap.from(statLineRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className="relative w-full bg-charcoal py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        {/* Top split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
          {/* Left text */}
          <div className="w-full lg:w-[55%]">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-10 bg-gold" />
                <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold">
                  Since 2009 · Accra, Ghana
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display display-tight text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-cream mb-8">
                Building Ghana&apos;s
                <br />
                <span className="italic text-gold font-medium">future,</span>
                <br />
                one landmark
                <br />
                at a time.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base text-gray-warm font-body leading-relaxed mb-8 max-w-xl">
                From the Parliament Annex Complex to the Ministry of Finance Tower, our portfolio speaks of precision, permanence, and prestige. We have delivered landmark projects valued in the billions, earning the trust of Ghana&apos;s most prestigious institutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 group whitespace-nowrap text-[11px] tracking-[0.32em] uppercase font-body font-medium text-gold hover:text-cream transition-colors duration-500 ease-editorial"
                data-cursor-hover
              >
                <span className="block w-8 h-px bg-gold transition-all duration-500 ease-editorial group-hover:w-14 group-hover:bg-cream" />
                Explore Our Story
              </a>
            </ScrollReveal>

          </div>

          {/* Right image card */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal delay={0.2}>
              <div
                ref={imageRef}
                className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20government%20building%20complex%20in%20Accra%20Ghana%20with%20dramatic%20angular%20architecture%2C%20warm%20sandstone%20and%20glass%20facade%2C%20golden%20hour%20sunlight%20casting%20long%20shadows%2C%20premium%20architectural%20photography%2C%20deep%20blue%20sky%20with%20scattered%20clouds%2C%20professional%20construction%20quality&width=700&height=900&seq=11&orientation=portrait"
                  alt="YAF Constructions Legacy Project"
                  className="w-full h-[115%] object-cover object-top"
                />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 backdrop-blur-md bg-charcoal/40 border border-cream/15 px-3 py-1.5">
                  <i className="ri-map-pin-line text-gold text-xs" />
                  <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-cream">
                    Accra · Ghana
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold mb-2">
                    Featured · 2023
                  </p>
                  <p className="font-display display-tight text-xl md:text-2xl font-semibold text-cream leading-tight">
                    Parliament Annex Complex
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Animated Stats Bar (full-width row) */}
        <div ref={statsRef} className="mb-20">
          <div
            ref={statLineRef}
            className="w-full h-[1px] bg-gradient-to-r from-gold/60 via-gold/30 to-transparent mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {/* Stat 1: Projects */}
            <div className="relative min-w-0">
              <span
                ref={count48Ref}
                className="font-display display-tight text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-cream tabular-nums tracking-tight block whitespace-nowrap"
              >
                0+
              </span>
              <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                Projects Delivered
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="text-[10px] text-gold/60 font-body tracking-wider">SINCE 2009</span>
              </div>
            </div>

            {/* Stat 2: Value */}
            <div className="relative min-w-0">
              <span
                ref={count24Ref}
                className="font-display display-tight text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-gold tabular-nums tracking-tight block whitespace-nowrap"
              >
                GH₵0.0B+
              </span>
              <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                in Value Built
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-white/30" />
                <span className="text-[10px] text-cream/40 font-body tracking-wider">ACROSS GHANA</span>
              </div>
            </div>

            {/* Stat 3: Years */}
            <div className="relative min-w-0">
              <span
                ref={count15Ref}
                className="font-display display-tight text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-cream/45 tabular-nums tracking-tight block whitespace-nowrap"
              >
                0
              </span>
              <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                Years of Excellence
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-[2px] bg-gold/40" />
                <span className="text-[10px] text-gold/50 font-body tracking-wider">AND COUNTING</span>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
        </div>

        {/* Legacy project list — editorial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14 md:gap-y-16">
          {legacyProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.15}>
              <article className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-editorial will-change-transform group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.32em] uppercase font-body font-medium text-cream/90">
                    {String(idx + 1).padStart(2, "0")} / {String(legacyProjects.length).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-body text-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-editorial">
                    View
                    <i className="ri-arrow-right-up-line" />
                  </div>
                </div>
                <div className="pt-5 md:pt-6">
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <p className="text-[10px] tracking-[0.28em] uppercase font-body font-medium text-gold">
                      {project.location}
                    </p>
                    <span className="text-[10px] tracking-[0.18em] uppercase font-body text-cream/40">{project.year}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-3 leading-snug group-hover:text-gold transition-colors duration-400 ease-editorial">
                    {project.name}
                  </h3>
                  <p className="text-[13px] md:text-sm text-gray-warm font-body leading-relaxed text-pretty">
                    {project.description}
                  </p>
                  <div className="mt-5 h-px w-10 bg-gold transition-all duration-500 ease-editorial group-hover:w-20" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
