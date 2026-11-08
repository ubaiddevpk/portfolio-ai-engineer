export default function SectionHeader({ eyebrow, heading, description }) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <p className="text-accent text-xs font-mono font-medium tracking-widest uppercase mb-3">
          — {eyebrow}
        </p>
      )}
      <h2 className="section-heading">{heading}</h2>
      {description && (
        <p className="section-subheading max-w-2xl">{description}</p>
      )}
      <div className="accent-line" />
    </div>
  )
}

