import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spinebar.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://spinebar.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://spinebar.com/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Doctor of Chiropractic",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Spine Bar Chiropractic",
        "url": "https://spinebar.com",
      },
    },
    "publisher": {
      "@type": "Organization",
      "name": "Spine Bar Chiropractic",
      "url": "https://spinebar.com",
    },
    "datePublished": post.date,
    "url": `https://spinebar.com/blog/${post.slug}`,
    "articleSection": post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero label={post.category} title={post.title} description={post.excerpt} />

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_300px] lg:items-start">

            <article>
              <FadeIn>
                <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-green-muted transition-colors hover:text-green">
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  All Articles
                </Link>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="mb-10 flex items-center gap-4 border-b border-cream-border pb-8">
                  <Link
                    href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="rounded-full border border-cream-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold/60"
                  >
                    {post.category}
                  </Link>
                  <span className="text-sm text-green-muted">{formatDate(post.date)}</span>
                  <span className="text-sm text-green-muted">{post.readTime}</span>
                </div>
              </FadeIn>

              <FadeIn className="space-y-6" delay={0.08}>
                {post.body.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="mt-10 font-serif text-3xl leading-tight text-green">
                        {block.content}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="text-lg leading-relaxed text-green-muted">
                      {block.content}
                    </p>
                  );
                })}
              </FadeIn>

              <FadeIn className="mt-14 border-t border-cream-border pt-10" delay={0.1}>
                <p className="text-sm text-green-muted">
                  Written by{" "}
                  <Link href="/about" className="font-medium text-green hover:text-gold">
                    {post.author}
                  </Link>{" "}
                  — Spine Bar Chiropractic, Toluca Lake
                </p>
              </FadeIn>
            </article>

            <aside className="space-y-6">
              <FadeIn delay={0.15} direction="left">
                <div className="rounded-2xl border border-green/10 bg-green p-6 text-cream">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-light">Spine Bar Chiropractic</p>
                  <h3 className="mb-3 font-serif text-xl">Ready to come in?</h3>
                  <p className="mb-5 text-sm leading-relaxed text-cream/70">
                    Same-day assessment and treatment. No referral needed.
                  </p>
                  <Button href={SITE.bookingUrl} external variant="secondary" className="w-full !bg-cream !text-green hover:!bg-cream-dark">
                    Book a Visit
                  </Button>
                  <a href={SITE.phoneHref} className="mt-3 block text-center text-sm text-cream/60 transition-colors hover:text-cream">
                    Call {SITE.phone}
                  </a>
                </div>

                {related.length > 0 && (
                  <div className="rounded-2xl border border-cream-border bg-cream-dark p-6">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">More Articles</p>
                    <ul className="space-y-4">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link href={`/blog/${r.slug}`} className="group block rounded-xl p-3 transition-colors hover:bg-cream">
                            <p className="mb-1 text-xs uppercase tracking-[0.15em] text-gold">{r.category}</p>
                            <p className="text-sm font-medium leading-snug text-green group-hover:text-green-dark">{r.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/blog" className="mt-4 block text-sm font-medium text-gold transition-colors hover:text-green">
                      All articles →
                    </Link>
                  </div>
                )}
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
