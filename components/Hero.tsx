"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CarVisual from "./CarVisual";

gsap.registerPlugin(useGSAP);

interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  sourceComment: string;
}

const statsData: StatItem[] = [
  {
    id: "acceleration",
    value: "3.2 s",
    label: "0 to 60 mph",
    description: "Acceleration time recorded with PDK transmission.",
    // Source: Official Porsche 911 GT3 technical specifications (Porsche Newsroom / porsche.com)
    sourceComment: "Official Porsche 911 GT3 technical data",
  },
  {
    id: "top-speed",
    value: "197 mph",
    label: "Top Track Speed",
    description: "Maximum circuit velocity on summer tires.",
    // Source: Official Porsche 911 GT3 technical specifications (Porsche Newsroom / porsche.com)
    sourceComment: "Official Porsche 911 GT3 technical data",
  },
  {
    id: "drag-coefficient",
    value: "0.34 Cd",
    label: "Aerodynamic Drag",
    description: "Coefficient in street aerodynamic configuration.",
    // Source: Official Porsche 911 GT3 technical specifications (Porsche Newsroom / porsche.com)
    sourceComment: "Official Porsche 911 GT3 technical data",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        // Headline entrance
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 }
        )
          // Subline entrance starts 0.15s after headline
          .fromTo(
            sublineRef.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.9 },
            0.15
          )
          // Action button entrance
          .fromTo(
            buttonRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.35
          )
          // Car visual entrance
          .fromTo(
            carRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            0.4
          );

        // Stats entrance: staggered, starts 0.5s after headline
        if (statsContainerRef.current) {
          tl.fromTo(
            statsContainerRef.current.children,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
            0.5
          );
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Immediate display without motion for reduced-motion preference
        gsap.set(
          [
            headlineRef.current,
            sublineRef.current,
            buttonRef.current,
            carRef.current,
          ],
          { opacity: 1, y: 0 }
        );
        if (statsContainerRef.current) {
          gsap.set(statsContainerRef.current.children, { opacity: 1, y: 0 });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-4 py-8 sm:px-8 md:px-16"
    >
      {/* Top navigation branding */}
      <header className="flex w-full items-center justify-between border-b border-border/40 pb-4">
        <span className="text-xs font-semibold tracking-widest text-muted uppercase">
          Precision Engineering
        </span>
        <span className="text-xs text-muted/80">
          911 GT3 Spec
        </span>
      </header>

      {/* Main hero typography and statistics */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center pt-8 md:pt-12">
        <h1
          ref={headlineRef}
          className="text-3xl font-extrabold uppercase tracking-widestHero text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          SCROLL DRIVEN MOTION
        </h1>

        <p
          ref={sublineRef}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
        >
          A hero section where the car moves exactly as far as you scroll, powered by GSAP ScrollTrigger.
        </p>

        {/* Action Button */}
        <div ref={buttonRef} className="mt-6">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-[6px] border border-border bg-surface px-6 py-3 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Read how it works
          </a>
        </div>

        {/* Three Verified Statistics */}
        <div
          ref={statsContainerRef}
          className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center rounded-[6px] border border-border/60 bg-surface/60 p-4 text-center backdrop-blur-sm"
            >
              <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] leading-tight text-muted">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Car Visual container */}
      <div
        ref={carRef}
        className="mx-auto flex w-full max-w-5xl items-center justify-center py-6"
      >
        <CarVisual className="w-full" />
      </div>

      {/* Scroll indicator prompt */}
      <div className="flex w-full items-center justify-center pt-2 pb-1">
        <span className="text-[11px] uppercase tracking-widest text-muted/60">
          Scroll down to initiate translation
        </span>
      </div>
    </section>
  );
}
