import ScrollReveal from "@/components/base/ScrollReveal";
import { servicesList } from "@/mocks/projects";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-warm py-20 md:py-28 lg:py-36"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body text-gray-warm mb-4">
                WHAT WE DO
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-charcoal">OUR</span>{" "}
                <span className="text-gold">SERVICES</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-sm md:text-base text-gray-warm font-body max-w-md leading-relaxed">
              End-to-end construction excellence from concept to completion — every structure we build is a statement of intent.
            </p>
          </ScrollReveal>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {servicesList.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.15}>
              <div className="group relative bg-cream rounded-xl p-7 md:p-9 border border-charcoal/5 hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                {/* Number */}
                <span className="absolute top-7 right-7 md:top-9 md:right-9 font-display text-6xl md:text-7xl font-bold text-charcoal/5 group-hover:text-gold/10 transition-colors duration-500">
                  0{idx + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-lg mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                  <i className={`${service.icon} text-2xl text-gold`} />
                </div>

                {/* Subtitle */}
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-gold/80 mb-3">
                  {service.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-warm font-body leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs font-body text-charcoal/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}