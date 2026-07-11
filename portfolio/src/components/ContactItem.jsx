function ContactItem({ label, value, href }) {
  const isExternalLink = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
      className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200/80 bg-white/90 px-5 py-4 shadow-[0_16px_45px_-34px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-[#f1bea9]"
    >
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
          {value}
        </p>
      </div>
      <span className="text-sm font-medium text-[#d96b4f]">Open</span>
    </a>
  )
}

export default ContactItem
