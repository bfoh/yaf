import ScrollReveal from "@/components/base/ScrollReveal";
import { servicesList } from "@/mocks/projects";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-warm py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-charcoal/30" />
                <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gray-soft">
                  What We Do · 03 Disciplines
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display display-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-charcoal text-balance">
                Concept, craft &amp; <span className="italic font-medium text-gold-deep">conduct</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="lg:col-span-5 lg:pt-6">
            <p className="text-[15px] md:text-base text-gray-soft font-body leading-relaxed text-pretty max-w-md">
              End-to-end construction excellence — from the first sketch to the final ribbon. Every structure we deliver is a quiet statement of intent, signed in steel and stone.
            </p>
          </ScrollReveal>
        </div>

        {/* Hairline */}
        <div className="hairline mb-0" />

        {/* Service rows — editorial split */}
        <div className="divide-y divide-charcoal/10">
          {servicesList.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.12}>
              <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 transition-colors duration-500 ease-editorial hover:bg-warm-deep/40 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16">
                {/* Number + icon */}
                <div className="md:col-span-2 flex md:flex-col md:items-start md:justify-between md:gap-8">
                  <span className="font-display text-3xl md:text-5xl font-semibold text-gold tabular-nums tracking-tight">
                    0{idx + 1}
                  </span>
                  <i className={`${service.icon} text-2xl md:text-3xl text-charcoal/30 group-hover:text-gold transition-colors duration-500 ease-editorial`} />
                </div>

                {/* Title + subtitle */}
                <div className="md:col-span-4">
                  <p className="text-[10px] tracking-[0.32em] uppercase font-body font-medium text-gold-deep mb-3">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display display-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal leading-[1.05] group-hover:text-gold-deep transition-colors duration-500 ease-editorial">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-[14px] md:text-[15px] text-gray-soft font-body leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="md:col-span-2 flex flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[12px] tracking-[0.04em] font-body text-charcoal/80"
                    >
                      <span className="block w-1 h-1 rounded-full bg-gold-deep" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="hairline mt-0" />
      </div>
    </section>
  );
}
