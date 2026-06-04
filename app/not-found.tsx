import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">404</p>
      <h1 className="font-serif text-5xl leading-tight tracking-tight text-green md:text-6xl">
        Page not found.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-green-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary">Back to Home</Button>
        <Button href="/conditions" variant="outline">Browse Conditions</Button>
        <Button href={SITE.bookingUrl} external variant="outline">Book Appointment</Button>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-green-muted">
        <Link href="/services" className="transition-colors hover:text-green">Services</Link>
        <Link href="/new-patient" className="transition-colors hover:text-green">New Patient</Link>
        <Link href="/blog" className="transition-colors hover:text-green">Blog</Link>
        <Link href="/about" className="transition-colors hover:text-green">About</Link>
        <a href={SITE.phoneHref} className="transition-colors hover:text-green">{SITE.phone}</a>
      </div>
    </div>
  );
}
