import { useRef, useEffect, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const moveCursor = useCallback((e: MouseEvent) => {
    if (!cursorRef.current || !dotRef.current) return;
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.add("scale-150", "bg-gold/20", "border-gold");
    cursorRef.current.classList.remove("border-white/40");
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.remove("scale-150", "bg-gold/20", "border-gold");
    cursorRef.current.classList.add("border-white/40");
  }, []);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [moveCursor, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-white/40 pointer-events-none z-[9999] transition-[transform,background-color,border-color] duration-300 ease-out hidden lg:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-gold pointer-events-none z-[9999] hidden lg:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}