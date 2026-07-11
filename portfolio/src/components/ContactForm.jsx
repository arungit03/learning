import { useState } from 'react'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <form
      className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_70px_-34px_rgba(15,23,42,0.35)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdfb] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#d96b4f] focus:ring-2 focus:ring-[#f9d8cb]"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            placeholder="yourmail@example.com"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdfb] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#d96b4f] focus:ring-2 focus:ring-[#f9d8cb]"
          />
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Project idea or message subject"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdfb] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#d96b4f] focus:ring-2 focus:ring-[#f9d8cb]"
          />
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Message
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdfb] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#d96b4f] focus:ring-2 focus:ring-[#f9d8cb]"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#e46b4f] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(228,107,79,0.95)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d55f44]"
        >
          Send Message
        </button>

        <p className="text-sm text-slate-500">
          {submitted
            ? 'Thanks! This demo form is ready to connect to a form service later.'
            : 'Simple contact form UI for your portfolio website.'}
        </p>
      </div>
    </form>
  )
}

export default ContactForm
