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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
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
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <p
              className={`font-display text-sm font-bold leading-tight tracking-wider transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              YAF CONSTRUCTIONS
            </p>
            <p
              className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? "text-gray-warm" : "text-white/60"
              }`}
            >
              LTD — Accra, Ghana
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs tracking-[0.15em] uppercase font-body font-medium transition-colors duration-300 hover:text-gold whitespace-nowrap ${
                scrolled ? "text-charcoal" : "text-white/80"
              }`}
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="ml-4 px-6 py-2.5 bg-gold text-charcoal text-xs font-body font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            data-cursor-hover
          >
            Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm tracking-[0.15em] uppercase font-body font-medium text-white/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 px-6 py-3 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase text-center"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}