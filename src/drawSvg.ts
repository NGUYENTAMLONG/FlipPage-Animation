// animations/drawSvgOnScroll.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function drawSvgOnScroll(pathElement: SVGPathElement, triggerSelector: string) {
  const pathLength = pathElement.getTotalLength();

  gsap.set(pathElement, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  });

  gsap.to(pathElement, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true, // để debug nếu muốn
    },
    ease: "none",
  });
}
