import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Legacy", href: "#legacy" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,height] duration-500 ease-editorial border-b ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-charcoal/8"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className={`w-full px-6 md:px-10 lg:px-16 flex items-center justify-between transition-[height] duration-500 ease-editorial ${scrolled ? "h-16 md:h-[4.5rem]" : "h-20 md:h-24"}`}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3"
          data-cursor-hover
        >
          <img
            src="https://public.readdy.ai/ai/img_res/cd077d3b-c4cf-489f-b684-2326cb027692.png"
            alt="YAF Constructions Ltd"
            className="h-10 md:h-11 w-auto"
          />
          <div className="hidden sm:block">
            <p
              className={`font-display text-[13px] md:text-[14px] font-semibold leading-none tracking-[0.08em] transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              YAF CONSTRUCTIONS
            </p>
            <p
              className={`text-[9px] mt-1 tracking-[0.32em] uppercase font-body font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-soft" : "text-cream/55"
              }`}
            >
              LTD · ACCRA, GHANA
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`group relative text-[11px] tracking-[0.22em] uppercase font-body font-medium transition-colors duration-300 hover:text-gold whitespace-nowrap ${
                scrolled ? "text-charcoal/80" : "text-cream/85"
              }`}
              data-cursor-hover
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 right-0 h-px scale-x-0 bg-gold transition-transform duration-400 ease-editorial origin-left group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="ml-2 inline-flex items-center gap-2 pl-5 pr-4 py-2.5 bg-gold text-charcoal text-[11px] font-body font-semibold tracking-[0.18em] uppercase hover:bg-cream transition-all duration-400 ease-editorial whitespace-nowrap group"
            data-cursor-hover
          >
            <span>Consultation</span>
            <span className="inline-block w-3 h-px bg-charcoal transition-all duration-400 ease-editorial group-hover:w-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 p-3 min-w-[44px] min-h-[44px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px] bg-gold" : scrolled ? "bg-charcoal" : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] transition-all duration-300 ${
              mobileOpen ? "opacity-0 w-0" : "w-6 bg-charcoal"
            } ${!scrolled && !mobileOpen ? "bg-white" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px] bg-gold" : scrolled ? "bg-charcoal" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-charcoal transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-sm tracking-[0.15em] uppercase font-body font-medium text-white/80 hover:text-gold transition-colors duration-300 border-b border-white/5 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 mb-2 px-6 py-4 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase text-center"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}