import React from "react";

export default function ExplainerSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full border-t border-border/60 bg-surface/30 px-4 py-20 sm:px-8 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Architecture
          </span>
          <h2 className="mt-2 text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
            How The Scroll Animation Operates
          </h2>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            The animation system connects the vertical scroll distance of the page directly to
            the horizontal translate coordinate of the car graphic. When the user initiates a scroll,
            the GSAP ScrollTrigger plugin captures the scroll offset and pins the hero section in place.
          </p>
          <p>
            Instead of time-based playback, motion progresses in exact ratio to page offset using scrub
            interpolation. A scrub setting of one second provides smooth momentum dampening while ensuring
            every pixel of scroll translates into an exact proportional position. Reversing scroll moves
            the vehicle backward in direct synchronization.
          </p>
          <p>
            For maximum rendering efficiency, all animations affect only the transform and opacity CSS
            properties. The browser composites these layers directly on the GPU without triggering layout
            recalculations or repaints.
          </p>
          <p>
            Accessibility is supported through the standard prefers-reduced-motion media query. When active,
            the static layout is displayed immediately without forced scroll-pinning or translation.
          </p>
        </div>
      </div>
    </section>
  );
}
