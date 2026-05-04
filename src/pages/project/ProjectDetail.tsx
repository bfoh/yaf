import { useRef, useLayoutEffect, useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { projectDetails } from "@/mocks/projects";
import type { ProjectDetail as ProjectDetailType } from "@/mocks/projects";

gsap.registerPlugin(ScrollTrigger);

function useProjectById(id: string): ProjectDetailType | undefined {
  const numId = Number(id);
  return projectDetails.find((p) => p.id === numId);
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = useProjectById(id ?? "1");

  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroRuleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  // ===== LIGHTBOX STATE =====
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lbImageRef = useRef<HTMLImageElement>(null);
  const lbTlRef = useRef<gsap.core.Timeline | null>(null);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (!project) return;
    setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  }, [project]);

  // Keyboard controls
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  // Lock body scroll
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Lightbox open/close GSAP animation
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (lightboxOpen) {
      const tl = gsap.timeline();
      lbTlRef.current = tl;
      tl.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      ).fromTo(
        overlay.querySelectorAll(".lb-ui"),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" },
        "-=0.15"
      );
      if (lbImageRef.current) {
        tl.fromTo(
          lbImageRef.current,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" },
          "-=0.3"
        );
      }
    } else {
      if (lbTlRef.current) {
        lbTlRef.current.kill();
        lbTlRef.current = null;
      }
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          if (overlay) gsap.set(overlay, { clearProps: "opacity" });
        },
      });
    }
  }, [lightboxOpen]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from(heroImgRef.current, {
          scale: 1.15,
          filter: "brightness(0.3) blur(8px)",
          duration: 1.4,
          ease: "power2.out",
        })
        .from(
          heroTextRef.current?.querySelectorAll(".reveal-hero") ?? [],
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          heroRuleRef.current,
          {
            scaleX: 0,
            duration: 0.8,
            ease: "power2.inOut",
            transformOrigin: "left center",
          },
          "-=0.6"
        );

      // Content sections reveal
      gsap.from(contentRef.current?.querySelectorAll(".reveal-section") ?? [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Gallery images stagger
      gsap.from(galleryRef.current?.querySelectorAll(".gallery-item") ?? [], {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Testimonial reveal
      gsap.from(testimonialRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Specs grid
      gsap.from(specsRef.current?.querySelectorAll(".spec-card") ?? [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: specsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, hero);

    return () => ctx.revert();
  }, [project?.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-warm font-body mb-8">The project you are looking for does not exist.</p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-white transition-colors duration-300"
            data-cursor-hover
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-cream font-body">
      <Navbar />

      <main>
        {/* ===== HERO ===== */}
        <div
          ref={heroRef}
          className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-charcoal"
        >
          <img
            ref={heroImgRef}
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

          {/* Top nav buttons */}
          <div className="absolute top-24 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 z-10 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-xs tracking-[0.15em] uppercase font-body transition-colors duration-300"
              data-cursor-hover
            >
              <i className="ri-arrow-left-line" />
              Back to Portfolio
            </button>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-gold text-white hover:text-charcoal text-xs tracking-[0.1em] uppercase font-body font-semibold backdrop-blur-sm rounded-full transition-all duration-300"
              data-cursor-hover
            >
              Contact Us
              <i className="ri-mail-send-line" />
            </a>
          </div>

          {/* Hero text */}
          <div
            ref={heroTextRef}
            className="absolute bottom-16 md:bottom-20 lg:bottom-24 left-6 md:left-10 lg:left-16 z-10 max-w-3xl"
          >
            {/* Status row */}
            <div className="reveal-hero flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-gold/90 text-charcoal text-[10px] tracking-[0.2em] uppercase font-body font-semibold rounded-full">
                {project.category}
              </span>
              {project.status === "in-progress" ? (
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-body text-gold font-semibold">
                    In Progress
                  </span>
                </div>
              ) : (
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white/60 text-[10px] tracking-[0.2em] uppercase font-body font-medium rounded-full">
                  Completed
                </span>
              )}
            </div>

            <h1 className="reveal-hero font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight">
              {project.name}
            </h1>
            <div
              ref={heroRuleRef}
              className="reveal-hero mt-6 w-24 h-[2px] bg-gold"
            />
            <div className="reveal-hero mt-5 flex flex-wrap items-center gap-4 md:gap-6 text-white/60 text-xs font-body">
              <span className="flex items-center gap-1.5">
                <i className="ri-map-pin-line text-gold" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-calendar-line text-gold" />
                {project.year}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-time-line text-gold" />
                {project.duration}
              </span>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-24 right-8 md:right-12 w-16 h-16 md:w-20 md:h-20 border-r-2 border-t-2 border-white/20 pointer-events-none z-10" />
          <div className="absolute bottom-8 left-8 md:left-12 w-16 h-16 md:w-20 md:h-20 border-l-2 border-b-2 border-white/20 pointer-events-none z-10" />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div ref={contentRef} className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left column — story */}
            <div className="w-full lg:w-[60%]">
              {/* Section label */}
              <p className="reveal-section text-[11px] tracking-[0.25em] uppercase font-body text-gold mb-4">
                PROJECT OVERVIEW
              </p>

              <h2 className="reveal-section font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
                {project.description}
              </h2>

              <div className="reveal-section w-16 h-[2px] bg-gold mb-8" />

              <p className="reveal-section text-sm md:text-base text-gray-warm font-body leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Client info */}
              <div className="reveal-section mt-8 p-5 border border-charcoal/10 rounded-lg bg-warm/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gray-warm mb-1">
                      Client
                    </p>
                    <p className="text-sm font-body text-charcoal font-medium">
                      {project.client}
                    </p>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-charcoal/10" />
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gray-warm mb-1">
                      Location
                    </p>
                    <p className="text-sm font-body text-charcoal font-medium">
                      {project.location}
                    </p>
                  </div>
                  <div className="hidden sm:block w-[1px] h-8 bg-charcoal/10" />
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gray-warm mb-1">
                      Year Completed
                    </p>
                    <p className="text-sm font-body text-charcoal font-medium">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div ref={galleryRef} className="mt-14 md:mt-20">
                <p className="reveal-section text-[11px] tracking-[0.25em] uppercase font-body text-gold mb-6">
                  PROJECT GALLERY
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {project.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="gallery-item group relative rounded-xl overflow-hidden aspect-[16/10] bg-charcoal text-left"
                      data-cursor-hover
                    >
                      <img
                        src={img}
                        alt={`${project.name} — view ${i + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Zoom icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <i className="ri-zoom-in-line text-white text-xl" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 left-3 text-[10px] tracking-wider uppercase font-body text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {String(i + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — specs + testimonial */}
            <div className="w-full lg:w-[40%] flex flex-col gap-8">
              {/* Project Value Card */}
              <div className="reveal-section bg-charcoal rounded-xl p-6 md:p-8 text-center border border-white/5">
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gold/70 mb-2">
                  Project Value
                </p>
                <p className="font-display text-3xl md:text-4xl font-bold text-gold">
                  {project.value}
                </p>
                <div className="mt-4 w-12 h-[2px] bg-gold/30 mx-auto" />
                <p className="mt-3 text-xs text-white/40 font-body">
                  {project.status === "in-progress"
                    ? `Target completion ${project.duration}`
                    : `Delivered in ${project.duration}`}
                </p>
              </div>

              {/* Progress & Timeline — only for in-progress */}
              {project.status === "in-progress" && project.timeline && (
                <div className="reveal-section bg-white rounded-xl border border-charcoal/5 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[11px] tracking-[0.25em] uppercase font-body text-gold">
                      CONSTRUCTION TIMELINE
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      <span className="text-[10px] font-body text-charcoal/50 tracking-wider uppercase">
                        {project.progress ?? 0}% Complete
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-charcoal/5 rounded-full overflow-hidden mb-7">
                    <div
                      className="absolute top-0 left-0 h-full bg-gold rounded-full transition-all duration-700"
                      style={{ width: `${project.progress ?? 0}%` }}
                    />
                  </div>

                  {/* Timeline phases */}
                  <div className="flex flex-col gap-0">
                    {project.timeline.map((phase, i) => {
                      const isLast = i === project.timeline!.length - 1;
                      return (
                        <div key={phase.phase} className="flex gap-3">
                          {/* Connector line */}
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div
                              className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                                phase.completed
                                  ? "bg-gold border-gold"
                                  : "bg-white border-charcoal/20"
                              }`}
                            >
                              {phase.completed && (
                                <i className="ri-check-line text-[9px] text-charcoal font-bold" />
                              )}
                            </div>
                            {!isLast && (
                              <div
                                className={`w-[2px] flex-1 min-h-[24px] ${
                                  phase.completed
                                    ? "bg-gold/40"
                                    : "bg-charcoal/10"
                                }`}
                              />
                            )}
                          </div>
                          {/* Phase text */}
                          <div className="pb-4">
                            <p
                              className={`text-xs font-body font-medium ${
                                phase.completed
                                  ? "text-charcoal"
                                  : "text-charcoal/40"
                              }`}
                            >
                              {phase.phase}
                            </p>
                            <p className="text-[10px] font-body text-charcoal/30 mt-0.5">
                              {phase.completed ? "Completed" : "Pending"}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Specs */}
              <div ref={specsRef}>
                <p className="reveal-section text-[11px] tracking-[0.25em] uppercase font-body text-gold mb-5">
                  PROJECT SPECIFICATIONS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {project.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="spec-card flex items-center justify-between p-4 bg-warm/60 border border-charcoal/5 rounded-lg hover:border-gold/20 transition-colors duration-300"
                    >
                      <span className="text-xs tracking-[0.1em] uppercase font-body text-gray-warm">
                        {spec.label}
                      </span>
                      <span className="text-sm font-body text-charcoal font-semibold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div
                ref={testimonialRef}
                className="bg-white rounded-xl border border-charcoal/5 p-6 md:p-8 relative"
              >
                {/* Quote mark */}
                <div className="absolute -top-3 left-6 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <i className="ri-double-quotes-l text-gold text-lg" />
                </div>

                <p className="text-sm md:text-base text-charcoal/80 font-body leading-relaxed italic mt-4">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-charcoal/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-3-line text-charcoal/40" />
                  </div>
                  <div>
                    <p className="text-sm font-body text-charcoal font-semibold">
                      {project.testimonial.author}
                    </p>
                    <p className="text-xs text-gray-warm font-body">
                      {project.testimonial.role}, {project.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="reveal-section">
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    setTimeout(() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="block w-full text-center px-8 py-4 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-charcoal hover:text-cream transition-all duration-300 flex items-center justify-center gap-3"
                  data-cursor-hover
                >
                  Start Your Project
                  <i className="ri-arrow-right-line" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== NEXT PROJECT NAV ===== */}
        <div className="w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="w-full h-[1px] bg-charcoal/10 mb-10" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gray-warm mb-2">
                Explore More
              </p>
              <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                Other Projects
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectDetails
                .filter((p) => p.id !== project.id)
                .slice(0, 4)
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigate(`/project/${p.id}`)}
                    className="group px-5 py-2.5 border border-charcoal/10 rounded-full text-xs font-body text-charcoal hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap inline-flex items-center gap-2"
                    data-cursor-hover
                  >
                    {p.name}
                    {p.status === "in-progress" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    )}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* ===== LIGHTBOX MODAL ===== */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-md ${
          lightboxOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === overlayRef.current) closeLightbox();
        }}
      >
        {/* Top bar */}
        <div className="lb-ui absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 py-5 z-10">
          <p className="text-[11px] tracking-[0.2em] uppercase font-body text-white/50">
            {project.name}
          </p>
          <button
            onClick={closeLightbox}
            className="lb-ui w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            data-cursor-hover
          >
            <i className="ri-close-line text-white text-lg" />
          </button>
        </div>

        {/* Image counter */}
        <div className="lb-ui absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
          <p className="text-[11px] tracking-[0.15em] font-body text-white/70">
            {String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
          </p>
        </div>

        {/* Main image */}
        <div className="relative w-full h-full flex items-center justify-center px-20 md:px-28">
          <img
            ref={lbImageRef}
            src={project.gallery[activeIndex]}
            alt={`${project.name} — full view ${activeIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Prev button */}
        <button
          onClick={prevImage}
          className="lb-ui absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300"
          data-cursor-hover
        >
          <i className="ri-arrow-left-s-line text-white text-2xl" />
        </button>

        {/* Next button */}
        <button
          onClick={nextImage}
          className="lb-ui absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300"
          data-cursor-hover
        >
          <i className="ri-arrow-right-s-line text-white text-2xl" />
        </button>

        {/* Bottom thumbnails strip */}
        <div className="lb-ui absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 px-6 py-5 z-10">
          {project.gallery.map((thumb, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-14 h-10 md:w-20 md:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                i === activeIndex
                  ? "border-gold scale-105"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
              data-cursor-hover
            >
              <img
                src={thumb}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}