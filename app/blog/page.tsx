import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Clinical insights, patient education, and honest information from Dr. Arthur Chakrian, DC — Spine Bar Chiropractic in Toluca Lake.",
    alternates: { canonical: "https://www.spinebar.com/blog" },
};

const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        label="From the Practice"
        title="Clinical insights and patient education."
        description="Honest information about how the spine works, what chiropractic care actually does, and how to think about your own health — from Dr. Chakrian."
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Category filter */}
          <FadeIn>
            <div className="mb-12 flex flex-wrap gap-2">
              <span className="rounded-full border border-green bg-green px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream">
                All
              </span>
              {ALL_CATEGORIES.map((cat) => {
                const slug = cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
                return (
                  <Link
                    key={cat}
                    href={`/blog/category/${slug}`}
                    className="rounded-full border border-cream-border bg-cream-dark px-4 py-2 text-xs uppercase tracking-[0.2em] text-green-muted transition-colors hover:border-gold/40 hover:text-green"
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-cream-border bg-cream p-8 transition-all duration-300 hover:border-gold/40 hover:bg-cream-dark hover:shadow-sm">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="rounded-full border border-cream-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
                        {post.category}
                      </span>
                      <span className="text-xs text-green-muted">{post.readTime}</span>
                    </div>
                    <h2 className="mb-3 font-serif text-2xl leading-snug text-green group-hover:text-green-dark">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-green-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-cream-border pt-5">
                      <span className="text-xs text-green-muted">{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1 text-xs font-medium text-gold transition-colors group-hover:text-green">
                        Read <ArrowRight size={12} strokeWidth={1.5} />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {posts.length === 0 && (
            <FadeIn>
              <div className="py-24 text-center">
                <p className="text-lg text-green-muted">Articles coming soon.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="border-t border-cream-border bg-cream-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
              Ready to come in?
            </p>
            <h2 className="font-serif text-3xl text-green md:text-4xl">
              Reading is a good start. <br className="hidden md:block" />Treatment is better.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-green-muted">
              Most conditions we write about are conditions we treat. If something resonated, come in and let&apos;s actually assess it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE.bookingUrl} external variant="primary">
                Book an Appointment
              </Button>
              <Button href="/conditions" variant="outline">
                Browse Conditions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
