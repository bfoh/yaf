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
    <footer className="bg-charcoal border-t border-white/5">
      <div className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://public.readdy.ai/ai/img_res/cd077d3b-c4cf-489f-b684-2326cb027692.png"
                alt="YAF Constructions Ltd"
                className="h-10 w-auto"
              />
              <div>
                <p className="font-display text-sm font-bold text-white tracking-wider">
                  YAF CONSTRUCTIONS
                </p>
                <p className="text-[10px] tracking-[0.25em] text-gray-warm uppercase">
                  LTD
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-warm leading-relaxed font-body">
              Premier construction and architectural firm serving government institutions, corporate bodies, and premium individuals across Ghana since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-white mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Our Legacy", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-warm hover:text-gold transition-colors duration-300 font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-white mb-6">
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
                  <span className="text-sm text-gray-warm font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-warm mb-4 font-body">
              Subscribe for project updates and industry insights.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm font-body placeholder:text-gray-warm/50 focus:outline-none focus:border-gold transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gold text-charcoal text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
                data-cursor-hover
              >
                {submitted ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-warm font-body">
            &copy; {new Date().getFullYear()} YAF Constructions Ltd. All rights reserved.
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