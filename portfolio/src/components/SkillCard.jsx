function SkillCard({ title, description }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_-32px_rgba(228,107,79,0.3)]">
      <div className="inline-flex rounded-2xl bg-[#fff3ed] px-3 py-2 text-sm font-semibold text-[#d96b4f]">
        {title}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>
    </article>
  )
}

export default SkillCard
