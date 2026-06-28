"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPINE_SEGMENTS, REGION_LABEL, type SpineSegment } from "@/lib/spine-data";

const SpineScene3D = dynamic(
  () => import("@/components/three/SpineScene3D").then((m) => m.SpineScene3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-green-muted">
        Loading spine model…
      </div>
    ),
  }
);

export function SpineMapSection() {
  const [activeId, setActiveId] = useState<string>("L4");
  const [mounted, setMounted] = useState(false);
  const active: SpineSegment =
    SPINE_SEGMENTS.find((s) => s.id === activeId) ?? SPINE_SEGMENTS[0];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  // Plain mutable ref the R3F render loop reads every frame — avoids
  // re-rendering React on every scroll tick while staying scroll-driven.
  const scrollProgress = useRef({ current: 0 });

  useEffect(() => {
    setMounted(true);
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scrollProgress.current.current = v;
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      id="spine-map"
      ref={sectionRef}
      className="border-t border-cream-border bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <SectionHeading
            label="Explore the spine"
            title="A living model — scroll to see it move"
            description="Every segment of the spine has long been associated with a corresponding area of pain or function. Scroll through the model and click any vertebra to explore."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            {/* 3D Spine model */}
            <div className="mx-auto h-[460px] w-full max-w-[360px] overflow-hidden rounded-3xl border border-cream-border bg-cream-dark">
              {mounted ? (
                <SpineScene3D
                  activeId={activeId}
                  onSelect={setActiveId}
                  scrollProgress={scrollProgress.current}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-green-muted">
                  Loading spine model…
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="rounded-3xl border border-cream-border bg-cream-dark p-8 lg:p-10">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold">
                {REGION_LABEL[active.region]}
              </p>
              <h3 className="font-serif text-3xl text-green md:text-4xl">
                {active.label}
              </h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-muted">
                    Associated organ / nerve function
                  </p>
                  <p className="text-base leading-relaxed text-green">
                    {active.effects}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-muted">
                    Common pain pattern
                  </p>
                  <p className="text-base leading-relaxed text-green">
                    {active.painPattern}
                  </p>
                </div>
              </div>

              {active.relatedConditionSlug && (
                <Link
                  href={`/conditions/${active.relatedConditionSlug}`}
                  className="mt-7 inline-flex items-center text-sm font-medium text-gold transition-colors hover:text-green"
                >
                  Learn how we treat this →
                </Link>
              )}

              <div className="mt-8 flex flex-wrap gap-2 border-t border-cream-border pt-6">
                {SPINE_SEGMENTS.map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setActiveId(seg.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      seg.id === activeId
                        ? "border-green bg-green text-cream"
                        : "border-cream-border text-green-muted hover:border-gold/50 hover:text-green"
                    }`}
                  >
                    {seg.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-green-muted/80">
            For educational purposes only. Organ and nerve associations reflect
            traditional chiropractic reference charts and are not a diagnostic
            or treatment claim. Always consult Dr. Chakrian for an individual
            assessment.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
