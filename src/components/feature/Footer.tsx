import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-ink border-t border-cream/5">
      <div className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-7">
              <img
                src="https://public.readdy.ai/ai/img_res/cd077d3b-c4cf-489f-b684-2326cb027692.png"
                alt="YAF Constructions Ltd"
                className="h-10 w-auto"
              />
              <div>
                <p className="font-display text-[14px] font-semibold text-cream tracking-[0.08em] leading-none">
                  YAF CONSTRUCTIONS
                </p>
                <p className="text-[9px] mt-1 tracking-[0.32em] text-gray-warm uppercase font-body font-medium">
                  LTD · Accra
                </p>
              </div>
            </div>
            <p className="text-[13px] text-gray-warm leading-relaxed font-body text-pretty">
              Premier construction and architectural firm serving government institutions, corporate bodies, and premium individuals across Ghana since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold mb-7">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Our Legacy", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[13px] text-cream/65 hover:text-gold transition-colors duration-400 ease-editorial font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold mb-7">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Architectural Design",
                "End-to-End Construction",
                "Project Management",
                "Interior Fit-Outs",
                "Renovation & Restoration",
              ].map((item) => (
                <li key={item}>
                  <span className="text-[13px] text-cream/65 font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold mb-7">
              Stay Updated
            </h4>
            <p className="text-[13px] text-cream/65 mb-5 font-body text-pretty">
              Project updates and industry insights, delivered quietly.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-cream/15 text-cream text-[14px] font-body placeholder:text-cream/25 focus:outline-none focus:border-gold transition-colors duration-400 ease-editorial"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 self-start px-7 py-3 bg-gold text-charcoal text-[10px] font-body font-semibold tracking-[0.32em] uppercase hover:bg-cream transition-all duration-500 ease-editorial whitespace-nowrap group"
                data-cursor-hover
              >
                <span>{submitted ? "Subscribed" : "Subscribe"}</span>
                <span className="inline-block w-3 h-px bg-charcoal transition-all duration-500 ease-editorial group-hover:w-6" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/40 font-body tracking-[0.06em]">
            © {new Date().getFullYear()} YAF Constructions Ltd · Accra, Ghana
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center justify-center w-11 h-11 -m-2 text-gray-warm hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill text-lg" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-11 h-11 -m-2 text-gray-warm hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line text-lg" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-11 h-11 -m-2 text-gray-warm hover:text-gold transition-colors duration-300"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-x-line text-lg" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-11 h-11 -m-2 text-gray-warm hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-fill text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}