// components/SectionTitle.jsx
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
  dark = false,
  left = false,
  className = "",
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`${centered && !left ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span className={`inline-block font-black text-[10px] uppercase tracking-[0.3em] mb-4 ${dark ? "text-brand-400" : "text-brand-600"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl xs:text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight ${dark ? "text-white" : "text-gray-950"}`}>
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gradient">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg font-medium leading-relaxed max-w-2xl ${centered && !left ? "mx-auto" : ""} ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
