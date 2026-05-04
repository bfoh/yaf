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
              <p className="text-[11px] tracking-[0.25em] uppercase font-body text-gold/80 mb-6">
                SINCE 2009 — ACCRA, GHANA
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Building Ghana&apos;s
                <br />
                <span className="text-gold">Future,</span>
                <br />
                One Landmark
                <br />
                at a Time
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
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-gold text-gold text-xs font-body font-semibold tracking-[0.1em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 group whitespace-nowrap"
                data-cursor-hover
              >
                Explore Our Story
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </ScrollReveal>

            {/* Animated Stats Bar */}
            <div ref={statsRef} className="mt-14">
              {/* Top gold line */}
              <div
                ref={statLineRef}
                className="w-full h-[1px] bg-gradient-to-r from-gold/60 via-gold/30 to-transparent mb-10"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {/* Stat 1: Projects */}
                <div className="relative">
                  <span
                    ref={count48Ref}
                    className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black whitespace-nowrap text-white tabular-nums tracking-tight block"
                  >
                    0+
                  </span>
                  <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                    Projects Delivered
                  </p>
                  {/* Mini indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-gold" />
                    <span className="text-[10px] text-gold/60 font-body tracking-wider">SINCE 2009</span>
                  </div>
                </div>

                {/* Stat 2: Value */}
                <div className="relative">
                  <span
                    ref={count24Ref}
                    className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black whitespace-nowrap text-gold tabular-nums tracking-tight block"
                  >
                    GH₵0.0B+
                  </span>
                  <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                    in Value Built
                  </p>
                  {/* Mini indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-white/30" />
                    <span className="text-[10px] text-white/40 font-body tracking-wider">ACROSS GHANA</span>
                  </div>
                </div>

                {/* Stat 3: Years */}
                <div className="relative">
                  <span
                    ref={count15Ref}
                    className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black whitespace-nowrap text-white/50 tabular-nums tracking-tight block"
                  >
                    0
                  </span>
                  <p className="text-xs tracking-[0.2em] uppercase font-body text-gray-warm/80 mt-3">
                    Years of Excellence
                  </p>
                  {/* Mini indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-gold/40" />
                    <span className="text-[10px] text-gold/50 font-body tracking-wider">AND COUNTING</span>
                  </div>
                </div>
              </div>

              {/* Bottom decorative line */}
              <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>

          {/* Right image card */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal delay={0.2}>
              <div
                ref={imageRef}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20government%20building%20complex%20in%20Accra%20Ghana%20with%20dramatic%20angular%20architecture%2C%20warm%20sandstone%20and%20glass%20facade%2C%20golden%20hour%20sunlight%20casting%20long%20shadows%2C%20premium%20architectural%20photography%2C%20deep%20blue%20sky%20with%20scattered%20clouds%2C%20professional%20construction%20quality&width=700&height=900&seq=11&orientation=portrait"
                  alt="YAF Constructions Legacy Project"
                  className="w-full h-[115%] object-cover object-top"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-[11px] tracking-[0.15em] uppercase font-body text-charcoal font-medium">
                    <i className="ri-map-pin-line mr-1 text-gold" />
                    Accra, Ghana
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent p-6 md:p-8">
                  <p className="font-display text-lg md:text-xl font-bold text-white">
                    Parliament Annex Complex
                  </p>
                  <p className="text-sm text-gray-warm font-body mt-1">2023</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Legacy project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {legacyProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.15}>
              <div className="group relative bg-[#222222] rounded-xl overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent" />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gold/80 mb-2">
                    {project.location}
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-warm font-body leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-warm/60 font-body">{project.year}</span>
                    <i className="ri-arrow-right-up-line text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
