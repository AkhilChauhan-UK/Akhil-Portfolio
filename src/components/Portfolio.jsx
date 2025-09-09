import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiGithub, FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi'

/* Config */
const roles = ['Backend Development', 'MERN Full Stack', 'Web Development']
const displayTime = 1200

const projects = [
  // Django projects
  {
    id: 1,
    title: 'Recipe Planner',
    stack: 'Python • Django • PostgreSQL',
    desc: 'Searchable recipe planner with shopping list & favourites.',
    image: 'https://myportfolio-1zpl.onrender.com/static/images/recipe.planner.png',
    live: '#',
    repo: 'https://github.com/AkhilChauhan-UK/recipe-planner',
    type: 'Django',
  },
  {
    id: 2,
    title: 'CRUD Project',
    stack: 'Django • DRF • HTML/CSS',
    desc: 'CRUD application with JWT auth and editor.',
    image: 'https://myportfolio-1zpl.onrender.com/static/images/crudproject.png',
    live: '#',
    repo: 'https://github.com/AkhilChauhan-UK/blog-app',
    type: 'Django',
  },
  {
    id: 3,
    title: 'Code Editor',
    stack: 'Django • Ace Editor',
    desc: 'Online code editor with multi-language support and IO.',
    image: '/images/codeeditor.png.png',
    live: 'https://code-editor-py.onrender.com',
    repo: 'https://github.com/AkhilChauhan-UK/code_Editor.py',
    type: 'Django',
  },

  // MERN projects
  {
    id: 4,
    title: 'Password Manager',
    stack: 'MERN • React',
    desc: 'Encrypted password manager with secure storage and vault features.',
    image: '/images/passwordmanager.png',
    live: 'https://password-manager-nu-eight.vercel.app',
    repo: '#',
    type: 'MERN',
  },
  {
    id: 5,
    title: 'Spotify Clone',
    stack: 'MERN • React',
    desc: 'Music streaming UI clone with playlists and search.',
    image: '/images/spotifyclone.png',
    live: 'https://spotifyclonee-navy.vercel.app',
    repo: '#',
    type: 'MERN',
  },
  {
    id: 6,
    title: 'Netflix Clone',
    stack: 'MERN • React',
    desc: 'Responsive streaming UI clone with search & lists.',
    image: 'https://myportfolio-1zpl.onrender.com/static/images/netflix.png',
    live: 'https://netflix-clone-steel-five.vercel.app',
    repo: '#',
    type: 'MERN',
  },
]

const certificates_placeholder = [
  '/images/cert1.png',
  '/images/cert2.png',
  '/images/cert3.jpg',
  '/images/cert4.png',
]

/* ---------------- Helper components (defined outside main component) ---------------- */

/* RoleRotator */
function RoleRotator({ phrases, displayMs = 1200 }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % phrases.length), displayMs)
    return () => clearInterval(id)
  }, [phrases, displayMs])
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={phrases[idx]}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.2 }}
        className="text-indigo-300 font-semibold"
      >
        {phrases[idx]}
      </motion.span>
    </AnimatePresence>
  )
}

/* SkillRow: label + progress bar */
function SkillRow({ name, pct = 60 }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <div className="text-slate-200">{name}</div>
        <div className="text-slate-400">{pct}%</div>
      </div>

      <div className="w-full h-2 bg-white/6 rounded-full mt-1 overflow-hidden">
        <div className="h-2 bg-indigo-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

/* ExperienceItem: timeline row */
function ExperienceItem({ period, title, subtitle, desc, tag }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1" />
        <div className="w-px h-full bg-white/6 mt-2" />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">{title}</h4>
          <div className="text-xs text-slate-400">{tag}</div>
        </div>
        <div className="text-xs text-indigo-200 mt-1">
          {subtitle} • <span className="text-slate-400">{period}</span>
        </div>
        <p className="text-sm text-slate-300 mt-2">{desc}</p>
      </div>
    </div>
  )
}

/* ProjectCard */
function ProjectCard({ p }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-gradient-to-tr from-white/4 to-white/6 border border-white/6 rounded-2xl overflow-hidden shadow-md">
      <div className="h-44 bg-slate-800 relative">
        <img src={p.image} alt={p.title} className="project-img w-full h-full brightness-75 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-xs text-slate-300 mt-1">{p.stack}</p>
          </div>
          <div className="text-xs px-2 py-1 rounded-md bg-white/6">{p.type}</div>
        </div>
        <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
        <div className="mt-4 flex items-center gap-2">
          <a href={p.live} target="_blank" rel="noreferrer" className="text-xs inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/8 hover:bg-white/6 transition">
            Live <FiExternalLink />
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer" className="text-xs inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/8 hover:bg-white/6 transition">
            Code <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* Image modal for certificates */
function ImageModal({ src, onClose }) {
  if (!src) return null
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-3xl w-full bg-white/5 p-3 rounded" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="certificate" className="w-full h-auto rounded" />
        <div className="mt-2 text-right">
          <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Main component ---------------- */
export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [bg, setBg] = useState('blue') // dark or blue or light
  const [modalSrc, setModalSrc] = useState(null)
  const [avatarError, setAvatarError] = useState(false)

  const types = ['All', 'Django', 'MERN']
  const filtered = projects.filter((p) => (filter === 'All' ? true : p.type === filter))

  const bgClass =
    bg === 'dark'
      ? 'from-slate-900 via-indigo-900 to-slate-800'
      : bg === 'blue'
      ? 'from-blue-950 via-indigo-900 to-slate-900'
      : 'from-white via-gray-100 to-gray-50 text-slate-900'

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgClass} ${bg === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
      {/* Navbar */}
      <div className="sticky top-0 left-0 w-full bg-black/30 backdrop-blur z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-sm">AC</div>
            <div className="font-semibold">Akhil Chauhan</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-indigo-400 transition">Certificates</a>
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <header id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl  md:text-3xl font-extrabold leading-tight">
              Specialized in Backend Development with Django & Node.js. <br /> Skilled in MERN Stack.
            </motion.h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              I am a backend-focused developer specializing in Python & Django, with additional expertise in Node.js & the MERN stack. I design scalable APIs, maintainable services, and deliver reliable production deployments.
              <span className="inline-block ml-2"> — <RoleRotator phrases={roles} displayMs={displayTime} /></span>
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">View projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-white/8 hover:bg-white/5 transition">Hire me</a>
            </div>

            <div className="mt-8 flex gap-4 items-center">
              <div className="text-xs text-slate-400">Primary stack</div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/6 text-xs">Django</div>
                <div className="px-3 py-1 rounded-full bg-white/6 text-xs">Python</div>
                <div className="px-3 py-1 rounded-full bg-white/6 text-xs">MERN</div>
              </div>
            </div>
          </div>

          {/* Updated hero right card with profile picture (fallback to initials) */}
          <motion.div whileHover={{ y: -8 }} className="relative">
            <div className="rounded-2xl bg-white/4 border border-white/6 p-6 shadow-lg transform-gpu transition-transform">
              <div className="flex items-center gap-4">
                {/* Avatar: image with fallback initials */}
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 shadow-inner relative bg-slate-800 flex items-center justify-center text-white font-bold">
                  {!avatarError ? (
                    <img
                      src="https://myportfolio-1zpl.onrender.com/static/images/photo.jpg"
                      alt="Akhil Chauhan"
                      className="w-full h-full object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-xl">AC</div>
                  )}
                </div>

                <div>
                  <div className="font-semibold text-lg">Akhil Chauhan</div>
                  <div className="text-xs text-slate-300">Backend Developer • Python & Django • MERN Stack </div>
                </div>
              </div>

              <div className="mt-4 text-slate-300 text-sm">
                I build resilient backends with Django & Node.js (MERN), optimize database queries, and deploy services with Docker and CI/CD.
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/6 rounded-lg text-sm text-center">
                  <div className="text-xs text-slate-300">Experience</div>
                  <div className="font-semibold">1+ year</div>
                </div>
                <div className="p-3 bg-white/6 rounded-lg text-sm text-center">
                  <div className="text-xs text-slate-300">Open to</div>
                  <div className="font-semibold">Remote / Hybrid</div>
                </div>
              </div>
            </div>

            {/* soft blob behind */}
            <div className="absolute -right-10 -bottom-6 w-36 h-36 rounded-full bg-indigo-700/20 blur-3xl pointer-events-none" />
          </motion.div>
        </header>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Selected projects</h2>
            <div className="flex items-center gap-2">
              {types.map((t) => (
                <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded-full text-sm ${filter === t ? 'bg-indigo-600' : 'bg-white/6'} transition`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="mt-14">
          <h2 className="text-2xl font-bold mb-6">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates_placeholder.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 shadow hover:scale-[1.02] transition">
                <img src={src} alt={`cert-${i}`} className="w-full h-52 object-cover cursor-pointer" onClick={() => setModalSrc(src)} />
              </div>
            ))}
          </div>
        </section>

        {/* ===== About / Skills / Experience ===== */}
        <section id="about" className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Skills card (larger) */}
          <div className="lg:col-span-2 bg-white/4 p-6 rounded-2xl border border-white/6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">Technical Skills</h3>
                <p className="mt-2 text-slate-300 max-w-xl">Focused on backend engineering and full-stack (MERN) development. Below are grouped skills with approximate proficiency.</p>
              </div>

              {/* small controls: optional theme label (non-interactive) */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <span className="px-2 py-1 rounded-md bg-white/6">Pro</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Backend */}
              <div className="p-4 bg-white/6 rounded-lg border border-white/8">
                <h4 className="text-sm font-medium text-indigo-200">Backend (Python / Django)</h4>
                <p className="text-xs text-slate-300 mt-2">APIs, authentication, server-side logic and integrations.</p>

                <div className="mt-4 space-y-3">
                  <SkillRow name="Python" pct={92} />
                  <SkillRow name="Django" pct={90} />
                  <SkillRow name="Django REST Framework" pct={86} />
                  <SkillRow name="API Design (REST)" pct={84} />
                </div>
              </div>

              {/* MERN */}
              <div className="p-4 bg-white/6 rounded-lg border border-white/8">
                <h4 className="text-sm font-medium text-indigo-200">MERN Stack</h4>
                <p className="text-xs text-slate-300 mt-2">Client + server development using React, Node and MongoDB.</p>

                <div className="mt-4 space-y-3">
                  <SkillRow name="React.js" pct={76} />
                  <SkillRow name="Node.js" pct={70} />
                  <SkillRow name="Express.js" pct={70} />
                  <SkillRow name="MongoDB" pct={72} />
                </div>
              </div>

              {/* Databases & Tools */}
              <div className="p-4 bg-white/6 rounded-lg border border-white/8">
                <h4 className="text-sm font-medium text-indigo-200">Databases & Tools</h4>
                <p className="text-xs text-slate-300 mt-2">Working knowledge of relational & NoSQL systems and container workflows.</p>

                <div className="mt-4 space-y-3">
                  <SkillRow name="PostgreSQL" pct={78} />
                  <SkillRow name="Redis" pct={60} />
                  <SkillRow name="Docker" pct={74} />
                  <SkillRow name="Git / GitHub" pct={88} />
                </div>
              </div>

              {/* Other Tech */}
              <div className="p-4 bg-white/6 rounded-lg border border-white/8">
                <h4 className="text-sm font-medium text-indigo-200">Other / Cloud</h4>
                <p className="text-xs text-slate-300 mt-2">Supporting tech and libraries.</p>

                <div className="mt-4 space-y-3">
                  <SkillRow name="HTML / CSS / JS" pct={84} />
                  <SkillRow name="Next.js" pct={60} />
                  <SkillRow name="Postman" pct={80} />
                  <SkillRow name="GCP (basics)" pct={55} />
                </div>
              </div>
            </div>
          </div>

          {/* Experience / Certifications (sidebar) */}
          <aside className="bg-white/4 p-6 rounded-2xl border border-white/6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">Experience</h3>
              <span className="text-xs text-slate-400">Timeline</span>
            </div>

            <div className="mt-4 space-y-5">
              <ExperienceItem
                period="1 Year"
                title="XWLS Pvt Ltd & Vikas Welding"
                subtitle="Non-tech role"
                desc="Worked in a non-technical capacity — developed communication, coordination and process skills that strengthen project delivery."
                tag="2019–2020"
              />

              <ExperienceItem
                period="2 Months"
                title="Python Programming Internship"
                subtitle="Backend & Automation Internship"
                desc="Completed focused internship in Python — built small automation scripts, data handling and backend tasks."
                tag="2023"
              />

              <ExperienceItem
                period="4 Months"
                title="Freelancer"
                subtitle="Backend / Full-stack freelance"
                desc="Delivered 4 months of freelance projects (APIs, small MERN features, deployments and bug fixes)."
                tag="2024"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-200">Certifications</h4>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li>• Walmart USA - Advanced Software Engineering</li>
                <li>• Accenture UK Developer & Technology VEP</li>
                <li>• AWS APAC Solutions Architecture VEP</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 bg-white/4 p-6 rounded-2xl border border-white/6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-slate-300">Available for backend roles, Web Development, freelance & contract work.</p>
              <div className="mt-4 space-y-3 text-slate-300">
                <div className="flex items-center gap-3"><FiMail /> <span>akhilchauhan883@gmail.com</span></div>
                <div className="flex items-center gap-3"><FiMapPin /> <span>India</span></div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/AkhilChauhan-UK" className="px-3 py-2 rounded-md border border-white/8">GitHub</a>
                <a href="#" className="px-3 py-2 rounded-md border border-white/8">LinkedIn</a>
              </div>
            </div>

            <form className="p-4 rounded-lg bg-white/6">
              <div className="grid gap-3">
                <input name="name" placeholder="Your name" className="px-3 py-2 rounded-md bg-transparent border border-white/10 outline-none" />
                <input name="email" placeholder="Email" className="px-3 py-2 rounded-md bg-transparent border border-white/10 outline-none" />
                <textarea name="message" rows="4" placeholder="Message" className="px-3 py-2 rounded-md bg-transparent border border-white/10 outline-none" />
                <div className="flex justify-between items-center">
                  <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500">Send message</button>
                  <div className="text-xs text-slate-400">Or DM me on LinkedIn</div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Akhil Chauhan · Built with React & Tailwind</footer>
      </div>

      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  )
}
