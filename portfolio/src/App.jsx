import ContactForm from './components/ContactForm'
import ContactItem from './components/ContactItem'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'
import SkillCard from './components/SkillCard'
import profilePhoto from './assets/arun-profile.jpeg'
import {
  contactLinks,
  navLinks,
  projects,
  skills,
} from './data/portfolioData'

const sectionClassName = 'mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'

const focusPoints = [
  'Building responsive layouts that feel simple and easy to use.',
  'Practicing React components, clean structure, and reusable code.',
  'Exploring Firebase for authentication and real-time features.',
]

function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navbar links={navLinks} />

      <main>
        <section
          id="home"
          className="overflow-hidden border-b border-slate-200/70 scroll-mt-24"
        >
          <div
            className={`${sectionClassName} flex min-h-[calc(100svh-80px)] items-center py-20`}
          >
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-2xl">
                <span className="fade-in-up inline-flex rounded-full border border-[#f7d4c7] bg-white/80 px-4 py-1 text-sm font-medium text-[#d96b4f] shadow-sm backdrop-blur">
                  Frontend Developer and Student
                </span>
                <h1 className="fade-in-up mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Arun Kumar V
                </h1>
                <p
                  className="fade-in-up mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
                  style={{ animationDelay: '0.12s' }}
                >
                  I'm a web development student who enjoys building clean,
                  responsive websites and learning through beginner-friendly
                  projects.
                </p>
                <div
                  className="fade-in-up mt-8 flex flex-wrap items-center gap-4"
                  style={{ animationDelay: '0.24s' }}
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-[#e46b4f] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(228,107,79,0.95)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d55f44]"
                  >
                    View Projects
                  </a>
                  <p className="text-sm text-slate-500">
                    Learning every day through simple, practical work.
                  </p>
                </div>
              </div>

              <div
                className="fade-in-up relative flex items-center justify-center lg:justify-end"
                style={{ animationDelay: '0.18s' }}
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-x-8 -top-8 h-20 rounded-full bg-[#dcecff] blur-3xl" />
                  <div className="absolute inset-x-4 bottom-0 top-6 rounded-[2.5rem] bg-[#fde5dc]" />
                  <div className="relative rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-[0_26px_80px_-38px_rgba(15,23,42,0.35)] backdrop-blur">
                    <div className="rounded-[2rem] bg-[linear-gradient(135deg,#fff7f2_0%,#edf6ff_100%)] p-8 text-center">
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                        Simple Portfolio
                      </p>
                      <div className="mx-auto mt-8 h-36 w-36 overflow-hidden rounded-full bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]">
                        <img
                          src={profilePhoto}
                          alt="Arun Kumar V profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-6 text-base leading-7 text-slate-600">
                        Focused on improving my frontend skills with projects
                        that are clean, modern, and easy to understand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionClassName} scroll-mt-24`}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <SectionHeading
              eyebrow="About Me"
              title="Learning by building useful web projects."
              description="I am Arun Kumar V, a student who is learning web development step by step. I enjoy creating beginner-friendly projects, improving my UI skills, and understanding how real websites are structured with modern tools."
            />

            <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_-32px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                What I am focusing on
              </h3>
              <div className="mt-6 space-y-4">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-[#fff6f2] px-4 py-4 text-sm leading-6 text-slate-600"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-slate-200/70 bg-white/45 scroll-mt-24"
        >
          <div className={sectionClassName}>
            <SectionHeading
              eyebrow="Skills"
              title="Tools I am currently working with."
              description="These are the core technologies I use while practicing frontend development and building small projects."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`${sectionClassName} scroll-mt-24`}>
          <SectionHeading
            eyebrow="Projects"
            title="A few beginner-friendly projects I have built."
            description="Each project helped me practice layout, components, styling, or Firebase basics while improving my confidence as a frontend learner."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-200/70 bg-white/45 scroll-mt-24"
        >
          <div className={`${sectionClassName} grid gap-10 lg:grid-cols-[0.85fr_1.15fr]`}>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let&apos;s connect and build something simple."
                description="You can use the contact details below or the form on the right. Replace the placeholder links with your real profiles before publishing."
              />

              <div className="mt-8 space-y-4">
                {contactLinks.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Arun Kumar V .</p>
        <a
          href="#home"
          className="font-medium text-slate-600 transition hover:text-[#d96b4f]"
        >
          Back to top
        </a>
      </footer>
    </div>
  )
}

export default App
