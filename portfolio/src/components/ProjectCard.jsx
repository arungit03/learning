function ProjectCard({ title, description, techStack, link, linkLabel }) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_-34px_rgba(228,107,79,0.3)] sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96b4f]">
        Project
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-[#f1bea9] hover:text-[#d96b4f]"
      >
        {linkLabel}
      </a>
    </article>
  )
}

export default ProjectCard
