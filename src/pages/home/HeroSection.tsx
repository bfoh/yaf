export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full aspect-video md:aspect-auto md:h-screen md:min-h-[100svh] overflow-hidden bg-ink md:vignette md:grain"
    >
      <video
        src="/yafhero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-[2] pointer-events-none" />
    </section>
  );
}
