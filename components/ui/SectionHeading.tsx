type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`mb-4 text-sm uppercase tracking-[0.3em] ${
          dark ? "text-gold-light" : "text-gold"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl ${
          dark ? "text-cream" : "text-green"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            dark ? "text-cream/80" : "text-green-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
