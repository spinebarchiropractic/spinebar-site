import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-green text-cream hover:bg-green-dark",
  secondary:
    "bg-cream-dark text-green border border-cream-border hover:bg-cream-border/50",
  outline:
    "border border-gold-light text-green hover:bg-cream-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
