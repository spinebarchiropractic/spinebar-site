"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPINE_SEGMENTS, REGION_LABEL, type SpineSegment } from "@/lib/spine-data";

const REGION_COLOR: Record<string, string> = {
  cervical: "#9d8753",
  thoracic: "#173326",
  lumbar: "#9d8753",
  sacral: "#173326",
};

// Vertical layout positions along an S-curve spine silhouette.
// x = horizontal offset from centerline (creates the cervical/thoracic/lumbar curve)
// y = vertical position, h = segment height
const LAYOUT: Record<string, { x: number; y: number; h: number }> = {
  C1: { x: 0, y: 24, h: 16 },
  C2: { x: 1, y: 42, h: 16 },
  C3: { x: 2, y: 60, h: 16 },
  C4: { x: 3, y: 78, h: 16 },
  C5: { x: 3, y: 96, h: 16 },
  C6: { x: 2, y: 114, h: 16 },
  C7: { x: 1, y: 132, h: 16 },
  T1: { x: 0, y: 152, h: 17 },
  T2: { x: -1, y: 170, h: 17 },
  T3: { x: -2, y: 188, h: 17 },
  T4: { x: -3, y: 206, h: 17 },
  T5: { x: -4, y: 224, h: 17 },
  T6: { x: -4, y: 242, h: 17 },
  T7: { x: -4, y: 260, h: 17 },
  T8: { x: -3, y: 278, h: 17 },
  T9: { x: -2, y: 296, h: 17 },
  T10: { x: -1, y: 314, h: 17 },
  T11: { x: 0, y: 332, h: 17 },
  T12: { x: 1, y: 350, h: 17 },
  L1: { x: 2, y: 370, h: 20 },
  L2: { x: 3, y: 392, h: 20 },
  L3: { x: 3, y: 414, h: 20 },
  L4: { x: 2, y: 436, h: 20 },
  L5: { x: 1, y: 458, h: 20 },
  SACRUM: { x: -1, y: 484, h: 38 },
  COCCYX: { x: -2, y: 524, h: 16 },
};

const CENTER_X = 120;
const TOTAL = SPINE_SEGMENTS.length;

function AnimatedVertebra({
  seg,
  index,
  isActive,
  onSelect,
  scrollYProgress,
}: {
  seg: SpineSegment;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const pos = LAYOUT[seg.id];

  const width = seg.id === "SACRUM" ? 44 : seg.id === "COCCYX" ? 18 : 34;
  const cx = CENTER_X + pos.x * 4;

  const start = (index / TOTAL) * 0.7;
  const end = start + 0.7 / TOTAL + 0.04;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const y = useTransform(scrollYProgress, [start, end], [-12, 0]);

  return (
    <motion.g
      style={{ opacity, scale, y, transformOrigin: `${cx}px ${pos.y + pos.h / 2}px` }}
      onClick={() => onSelect(seg.id)}
      role="button"
      tabIndex={0}
      aria-label={`${seg.label} — view related effects`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(seg.id);
      }}
      className="cursor-pointer outline-none"
    >
      <rect
        x={cx - width / 2}
        y={pos.y}
        width={width}
        height={pos.h}
        rx={seg.id === "SACRUM" ? 12 : 6}
        fill={REGION_COLOR[seg.region]}
        opacity={isActive ? 1 : 0.45}
        stroke={isActive ? "#173326" : "none"}
        strokeWidth={isActive ? 2 : 0}
        style={{ transition: "opacity 0.2s, stroke 0.2s" }}
      />
      <rect
        x={cx - width / 2 - 6}
        y={pos.y - 3}
        width={width + 12}
        height={pos.h + 6}
        fill="transparent"
      />
    </motion.g>
  );
}

export function SpineMapSection() {
  const [activeId, setActiveId] = useState<string>("L4");
  const active: SpineSegment =
    SPINE_SEGMENTS.find((s) => s.id === activeId) ?? SPINE_SEGMENTS[0];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "start 0.15"],
  });

  const linePathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 0.5]);

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
            title="Click a vertebra to see what it's connected to"
            description="Every segment of the spine has long been associated with a corresponding area of pain or function. Click any vertebra below to explore."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[280px] rounded-3xl border border-cream-border bg-cream-dark p-6">
              <svg
                viewBox="0 0 240 560"
                className="mx-auto h-auto w-full max-w-[200px]"
                role="img"
                aria-label="Interactive diagram of the human spine"
              >
                <motion.line
                  x1={CENTER_X}
                  y1={14}
                  x2={CENTER_X}
                  y2={546}
                  stroke="#e5d9c4"
                  strokeWidth={3}
                  style={{ opacity: lineOpacity, pathLength: linePathLength }}
                />
                {SPINE_SEGMENTS.map((seg, index) => (
                  <AnimatedVertebra
                    key={seg.id}
                    seg={seg}
                    index={index}
                    isActive={seg.id === activeId}
                    onSelect={setActiveId}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </svg>
              <div className="mt-4 flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.15em] text-green-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" /> Cervical / Lumbar
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-green" /> Thoracic / Sacral
                </span>
              </div>
            </div>

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
