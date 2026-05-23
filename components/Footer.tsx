import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-border bg-green text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo/spinebar-logo.png"
                alt={SITE.name}
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <div>
                <p className="font-serif text-xl tracking-wide">{SITE.name}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-light">
                  {SITE.location}
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-light">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-light">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-cream"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="transition-colors hover:text-cream"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-gold-light transition-colors hover:text-cream"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </footer>
  );
}
