"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, NAV_LINKS, DOCTOR } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 shadow-[0_1px_0_0_#e5d9c4] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo/spinebar-logo.png"
            alt={SITE.name}
            width={48}
            height={48}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 lg:h-12 lg:w-12"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-lg leading-tight tracking-wide text-green lg:text-xl">
              {SITE.name}
            </p>
            <p className="mt-0.5 text-[10px] leading-snug tracking-[0.12em] text-gold lg:text-[11px]">
              {DOCTOR.name} · {SITE.location}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-green-muted transition-colors duration-300 hover:text-green"
            >
              {link.label}
            </Link>
          ))}
          <Button href={SITE.bookingUrl} external variant="primary" className="!px-6 !py-3">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-border text-green transition-colors hover:bg-cream-dark lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cream-border bg-cream/98 backdrop-blur-md lg:hidden"
          >
            <motion.div
              className="flex flex-col gap-1 px-6 py-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-green transition-colors hover:bg-cream-dark"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-4 px-4"
              >
                <Button
                  href={SITE.bookingUrl}
                  external
                  variant="primary"
                  className="w-full"
                >
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
