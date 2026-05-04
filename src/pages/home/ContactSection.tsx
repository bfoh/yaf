import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 20%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ruleRef.current,
          { scaleX: 0, duration: 0.8, ease: "power2.inOut", transformOrigin: "left center" },
          "-=0.6"
        )
        .from(
          cardsRef.current?.children ?? [],
          { y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          formRef.current,
          { x: 60, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          accentLineRef.current,
          { scaleY: 0, duration: 1, ease: "power2.out", transformOrigin: "top center" },
          "-=1"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (formData.message.length > 500) newErrors.message = "Message must be under 500 characters";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors && errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    }, 5000);
  };

  const contactItems = [
    {
      icon: "ri-map-pin-2-line",
      label: "Headquarters",
      value: "45 Independence Avenue, Ridge, Accra, Ghana",
    },
    {
      icon: "ri-phone-line",
      label: "Phone",
      value: "+233 (0) 30 274 8901",
    },
    {
      icon: "ri-mail-line",
      label: "Email",
      value: "info@yafconstructions.com.gh",
    },
    {
      icon: "ri-time-line",
      label: "Business Hours",
      value: "Mon — Fri: 8:00 AM — 5:00 PM GMT",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-charcoal"
    >
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20luxury%20construction%20site%20at%20dusk%20with%20cranes%20silhouetted%20against%20dramatic%20orange%20and%20amber%20sunset%20sky%2C%20partially%20completed%20contemporary%20building%20structure%20with%20exposed%20concrete%20and%20steel%20framework%2C%20golden%20hour%20lighting%20casting%20long%20shadows%2C%20premium%20architectural%20photography%2C%20cinematic%20dark%20moody%20atmosphere%2C%20deep%20charcoal%20shadows%20and%20warm%20gold%20highlights%2C%20professional%20construction%20site%20photography%2C%20wide%20landscape%20composition%2C%20very%20dark%20overall%20tone%20with%20selective%20warm%20light%20accents&width=1920&height=1080&seq=contact-bg-01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.15) contrast(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
      </div>

      {/* Gold accent vertical line */}
      <div
        ref={accentLineRef}
        className="absolute top-0 left-[50%] -translate-x-1/2 z-[2] w-[1px] h-full bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-[3] w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* LEFT — Big visual impact */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between">
            <div>
              {/* Label */}
              <p className="text-[11px] tracking-[0.3em] uppercase font-body text-gold mb-6">
                START A CONVERSATION
              </p>

              {/* Giant headline */}
              <h2
                ref={headingRef}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.85] tracking-tight mb-8"
              >
                LET&apos;S
                <br />
                <span className="text-gold">BUILD</span>
                <br />
                YOUR
                <br />
                <span className="text-white/40">VISION</span>
              </h2>

              {/* Gold rule */}
              <div ref={ruleRef} className="w-20 h-[3px] bg-gold mb-10" />

              {/* Subtext */}
              <p className="text-sm md:text-base text-gray-warm font-body leading-relaxed max-w-md mb-12">
                Whether it&apos;s a government complex, corporate headquarters, or a premium residence — our team is ready to bring your project to life with uncompromising precision and quality.
              </p>
            </div>

            {/* Contact info cards */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 p-5 border border-white/10 rounded-lg hover:border-gold/40 transition-all duration-400 bg-white/[0.02] hover:bg-white/[0.04]"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-lg flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <i className={`${item.icon} text-gold text-lg`} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gold/70 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-body text-white/80">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="min-w-0">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold whitespace-nowrap">
                  48+
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase font-body text-white/40 mt-1">
                  Projects Delivered
                </p>
              </div>
              <div className="min-w-0 sm:border-l sm:border-white/10 sm:pl-8">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                  15
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase font-body text-white/40 mt-1">
                  Years Experience
                </p>
              </div>
              <div className="min-w-0 sm:border-l sm:border-white/10 sm:pl-8">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold whitespace-nowrap">
                  GH₵2.4B
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase font-body text-white/40 mt-1">
                  Value Built
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="w-full lg:w-[55%] lg:pl-8">
            <div
              ref={formRef}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-10 lg:p-12 backdrop-blur-sm"
            >
              {/* Corner accent */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-2xl pointer-events-none" />

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-gold/15 rounded-full border border-gold/30">
                    <i className="ri-check-double-line text-4xl text-gold" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-4">
                    Request Received
                  </h3>
                  <p className="text-sm text-gray-warm font-body max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will contact you within 24 business hours to discuss your project in detail.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-[11px] tracking-[0.2em] uppercase font-body text-gold/70 mb-2">
                      REQUEST A CONSULTATION
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Project Inquiry
                    </h3>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    data-readdy-form
                    action="https://readdy.ai/api/form/d7se6k7b5ro7pimqh8fg"
                    method="POST"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body text-white/50 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Mensah"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                        {errors?.name && (
                          <p className="text-xs text-red-400 font-body mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body text-white/50 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com.gh"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                        {errors?.email && (
                          <p className="text-xs text-red-400 font-body mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body text-white/50 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+233 (0) XX XXX XXXX"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body text-white/50 mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-body focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all duration-300 appearance-none"
                        >
                          <option value="" className="bg-charcoal text-white">
                            Select project type
                          </option>
                          <option value="government" className="bg-charcoal text-white">
                            Government / Institutional
                          </option>
                          <option value="corporate" className="bg-charcoal text-white">
                            Corporate / Commercial
                          </option>
                          <option value="residential" className="bg-charcoal text-white">
                            Premium Residential
                          </option>
                          <option value="industrial" className="bg-charcoal text-white">
                            Industrial / Warehouse
                          </option>
                          <option value="hospitality" className="bg-charcoal text-white">
                            Hospitality / Resort
                          </option>
                          <option value="other" className="bg-charcoal text-white">
                            Other
                          </option>
                        </select>
                        {errors?.projectType && (
                          <p className="text-xs text-red-400 font-body mt-1">{errors.projectType}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-body text-white/50 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vision, timeline, and budget..."
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                      />
                      <div className="flex justify-between mt-1">
                        {errors?.message && (
                          <p className="text-xs text-red-400 font-body">{errors.message}</p>
                        )}
                        <p className="text-[10px] text-white/30 font-body ml-auto">
                          {formData.message.length}/500
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto self-start px-10 py-4 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap group"
                      data-cursor-hover
                    >
                      Submit Inquiry
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-[3]" />
    </section>
  );
}