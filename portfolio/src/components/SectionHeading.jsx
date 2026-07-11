function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full border border-[#f7d4c7] bg-white/80 px-4 py-1 text-sm font-medium text-[#d96b4f] shadow-sm">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
