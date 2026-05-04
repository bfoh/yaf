import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 60,
  blur = true,
  once = true,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getFrom = () => {
      switch (direction) {
        case "up":
          return { y: distance, opacity: 0 };
        case "down":
          return { y: -distance, opacity: 0 };
        case "left":
          return { x: distance, opacity: 0 };
        case "right":
          return { x: -distance, opacity: 0 };
        default:
          return { y: distance, opacity: 0 };
      }
    };

    const fromVars: gsap.TweenVars = getFrom();
    if (blur) {
      fromVars.filter = "blur(8px)";
    }

    const ctx = gsap.context(() => {
      gsap.from(el.children.length > 0 ? el.children : el, {
        ...fromVars,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once,
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, blur, once, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}