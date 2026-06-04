import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ category: string }> };

const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((c) => ({
    category: c.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and"),
  }));
}

function slugToCategory(slug: string) {
  return ALL_CATEGORIES.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and") === slug
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = slugToCategory(category);
  if (!cat) return {};
  return {
    title: `${cat} — Blog`,
    description: `Articles about ${cat} from Dr. Arthur Chakrian, DC — Spine Bar Chiropractic, Toluca Lake.`,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = slugToCategory(category);
  if (!cat) notFound();

  const posts = [...BLOG_POSTS]
    .filter((p) => p.category === cat)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHero
        label="Blog"
        title={cat}
        description={`${posts.length} article${posts.length !== 1 ? "s" : ""} on ${cat} from Dr. Chakrian.`}
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Category pills */}
          <div className="mb-12 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="rounded-full border border-cream-border bg-cream-dark px-4 py-2 text-xs uppercase tracking-[0.2em] text-green-muted transition-colors hover:border-gold/40 hover:text-green"
            >
              All
            </Link>
            {ALL_CATEGORIES.map((c) => {
              const cSlug = c.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
              return (
                <Link
                  key={c}
                  href={`/blog/category/${cSlug}`}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                    c === cat
                      ? "border-green bg-green text-cream"
                      : "border-cream-border bg-cream-dark text-green-muted hover:border-gold/40 hover:text-green"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>

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

          <div className="mt-16 text-center">
            <Button href={SITE.bookingUrl} external variant="primary">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
