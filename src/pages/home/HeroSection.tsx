export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[100svh] overflow-hidden bg-charcoal"
    >
      <video
        src="/yafhero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-[1] pointer-events-none" />
    </section>
  );
}
