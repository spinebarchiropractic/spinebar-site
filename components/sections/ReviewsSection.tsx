"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { REVIEWS, SITE } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < rating ? "text-gold" : "text-cream-border"}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  if (REVIEWS.length === 0) return null;

  return (
    <section className="border-t border-cream-border bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Patient Reviews</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
              What patients say.
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <StaggerItem key={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-cream-border bg-cream-dark p-8">
                <div className="mb-4 flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  {review.condition && (
                    <span className="rounded-full border border-cream-border px-3 py-1 text-xs text-green-muted">
                      {review.condition}
                    </span>
                  )}
                </div>
                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-green-muted">
                    &ldquo;{review.body}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-cream-border pt-5">
                  <p className="text-sm font-medium text-green">{review.name}</p>
                  <p className="text-xs text-green-muted">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14 text-center">
          <p className="mb-6 text-sm text-green-muted">
            Seen at Spine Bar? We&apos;d love to hear from you.
          </p>
          <Button
            href="https://www.google.com/maps/place/Spine+Bar+Chiropractic/@34.1520198,-118.3713363,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bf445b1e7905:0xcbc8bdbfdaac5cd1!8m2!3d34.1520198!4d-118.368756!16s%2Fg%2F11z583yprv"
            external
            variant="outline"
          >
            Leave a Google Review
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
