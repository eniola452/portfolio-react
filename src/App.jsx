import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Menu, X, Home, User, Briefcase, Code2, Mail,
  Moon, Sun, FileText, ExternalLink, ArrowRight,
  // Github, Linkedin, Twitter
} from "lucide-react";

const EMAIL = "eolusola97@email.com"; // Replace with your real email before publishing.
const GITHUB = "https://github.com/eniola452";
const LINKEDIN = "https://linkedin.com/in/eniola-olusola";
const TWITTER = "https://twitter.com/eniola452";
const ELITEBNB = "https://github.com/thorfinnn234/EliteBNB";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Tech Stack", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "JS" },
      { name: "React", icon: "⚛" },
      { name: "Tailwind CSS", icon: "〰" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "EX" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "⑂" },
      { name: "GitHub", icon: "⌘" },
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  
const page = isDark
  ? "bg-[#0B0B0D] text-zinc-100"
  : "bg-white text-zinc-900";

const surface = isDark
  ? "bg-[#202025] border-zinc-700"
  : "bg-white border-zinc-200";

const alternate = isDark
  ? "bg-[#18181D]"
  : "bg-[#F4F4F6]";

  const muted = isDark ? "text-zinc-400" : "text-zinc-600";
  const navColor = isDark ? "text-zinc-300" : "text-zinc-700";
  const outlineButton = isDark
    ? "border-zinc-700 hover:border-pink-400 hover:bg-zinc-900"
    : "border-zinc-300 hover:border-pink-500 hover:bg-pink-50";
  const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500";
  const closeMenu = () => setMenuOpen(false);
  const motionProps = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${page}`}>
      {/* NAVIGATION */}
      <nav className={`sticky top-0 z-50 border-b backdrop-blur-md ${isDark ? "bg-[#0b0b0d]/95 border-zinc-800" : "bg-white/95 border-zinc-200"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" onClick={closeMenu} className={`text-2xl md:text-3xl font-bold text-pink-500 ${focus}`}>
            Adora<span className={isDark ? "text-white" : "text-zinc-900"}>.</span>
          </a>

          <div className={`hidden items-center gap-8 text-base lg:text-lg font-medium md:flex ${navColor}`}>
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className={`transition hover:text-pink-500 ${focus}`}>{label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDark((current) => !current)}
              className={`hidden rounded-xl border p-2.5 transition md:inline-flex ${outlineButton} ${focus}`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className={`rounded-xl border border-pink-500/40 p-2.5 text-pink-500 md:hidden ${focus}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>

        {menuOpen && (
  <div
    id="mobile-menu"
    className={`absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t px-6 py-7 md:hidden ${
      isDark
        ? "border-zinc-800 bg-[#121215]"
        : "border-zinc-200 bg-white"
    }`}
  >
    {/* NAVIGATION LINKS */}
    <div className="space-y-2">

      <a
        href="#home"
        onClick={closeMenu}
        className="flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium transition hover:bg-pink-500/10 hover:text-pink-500"
      >
        <Home size={23} />
        Home
      </a>

      {navItems.map(({ label, href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          onClick={closeMenu}
          className="flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium transition hover:bg-pink-500/10 hover:text-pink-500"
        >
          <Icon size={23} />
          {label}
        </a>
      ))}

    </div>

    {/* DIVIDER */}
    <div className={`my-7 border-t ${
      isDark ? "border-zinc-800" : "border-zinc-200"
    }`} />

    {/* DARK MODE */}
    <button
      type="button"
      onClick={() => setIsDark((current) => !current)}
      className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 ${
        isDark
          ? "border-zinc-700 bg-[#25252B]"
          : "border-zinc-200 bg-zinc-100"
      }`}
    >
      <span className="flex items-center gap-3 text-lg font-medium">
        {isDark ? <Moon size={23} /> : <Sun size={23} />}
        Dark Mode
      </span>

      <span
        className={`relative h-7 w-13 rounded-full transition ${
          isDark ? "bg-pink-600" : "bg-zinc-400"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
            isDark ? "right-1" : "left-1"
          }`}
        />
      </span>
    </button>

    {/* SOCIAL LINKS */}
    <div className="mt-9">
      <p className={`mb-5 text-base font-medium ${muted}`}>
        Connect with me
      </p>

      <div className="grid grid-cols-2 gap-3">

        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center gap-2 rounded-xl border p-4 ${
            isDark
              ? "border-zinc-800 bg-[#1B1B20]"
              : "border-zinc-200 bg-zinc-50"
          }`}
        >
          <Code2 size={24} />
          <span>GitHub</span>
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center gap-2 rounded-xl border p-4 ${
            isDark
              ? "border-zinc-800 bg-[#1B1B20]"
              : "border-zinc-200 bg-zinc-50"
          }`}
        >
          <Mail size={24} />
          <span>Email</span>
        </a>

      </div>
    </div>

    {/* RESUME */}
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent("Resume Request")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-pink-600 px-5 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
    >
      <FileText size={22} />
      Request Resume
      <ExternalLink size={18} />
    </a>

  </div>
)}
      </nav>


{/* HERO */}
<section
  id="home"
  className="relative min-h-[85vh] flex items-center px-6 md:px-8 py-20 overflow-hidden"
>
  <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-pink-500 mb-4">Hello, I'm </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Adora <span className="text-pink-500">Olusola</span>
      </h1>

      <h2 className="text-2xl font-semibold mb-6">
        Aspiring Full Stack Developer
      </h2>

      <p className={`${muted} leading-8 mb-8`}>
        Building modern web applications with React,
        Node.js, Express and MongoDB while continuously
        learning and improving my skills.
      </p>

      {/* UPDATED BUTTONS */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="#projects"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors ${focus}`}
        >
          View Projects <ArrowRight size={18} />
        </a>

        <a
          href="#contact"
          className={`inline-flex items-center justify-center px-6 py-3 rounded-xl border font-medium transition-colors ${outlineButton} ${focus}`}
        >
          Contact Me
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`border border-pink-500/30 rounded-3xl p-8 ${surface}`}
    >
      <div className="space-y-6">
        {[
          ["Frontend", "React • Tailwind CSS • JavaScript"],
          ["Backend", "Node.js • Express.js"],
          ["Database", "MongoDB"],
        ].map(([heading, description]) => (
          <div
            key={heading}
            className={`rounded-2xl p-5 border ${
              isDark
                ? "bg-black border-zinc-800"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-pink-500 font-semibold">
              {heading}
            </h3>
            <p className={muted}>{description}</p>
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>


      {/* TECH STACK */}
      
{/* TECH STACK */}
<section
  id="skills"
  className={`scroll-mt-24 px-6 py-14 md:px-8 md:py-16 ${
    isDark ? "bg-[#1B1B21]" : "bg-[#F4F4F6]"
  }`}
>
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
      Tech <span className="text-pink-500">Stack</span>
    </h2>

    <p className={`mb-8 text-center text-base md:text-lg ${muted}`}>
      Technologies I'm learning and working with
    </p>

    <div className="grid gap-5 md:grid-cols-3">

      {skillGroups.map((group) => (
        <div
          key={group.title}
          className={`rounded-2xl border p-6 ${
            isDark
              ? "bg-[#101014] border-zinc-700"
              : "bg-white border-zinc-200"
          }`}
        >
          <h3 className="mb-5 text-xl font-semibold text-pink-500">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-3">

            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-base font-medium ${
                  isDark
                    ? "bg-[#202025] border-zinc-700 text-zinc-200"
                    : "bg-zinc-50 border-zinc-200 text-zinc-800"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="text-lg font-bold text-pink-500"
                >
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}

          </div>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold">About <span className="text-pink-500">Me</span></h2>
          <p className={`mb-10 text-center ${muted}`}>A little about my journey into tech</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`rounded-2xl border p-7 ${surface}`}>
              <h3 className="mb-4 text-xl font-semibold">Who I Am</h3>
              <p className={`leading-8 ${muted}`}>
                I'm Adora, an aspiring Full Stack Developer interested in creating responsive and user-friendly web applications. I'm developing my software development skills and learning how frontend and backend technologies work together.
              </p>
            </div>
            <div className={`rounded-2xl border p-7 ${surface}`}>
              <h3 className="mb-4 text-xl font-semibold">What I'm Working Towards</h3>
              <p className={`leading-8 ${muted}`}>
                I'm focused on strengthening my development skills, gaining practical experience, and building useful projects. I learn by doing and aim to improve with every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`scroll-mt-24 px-6 py-20 md:px-8 ${alternate}`}>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold">Projects</h2>
          <p className={`mb-10 text-center ${muted}`}>A selection of work and learning projects</p>
          <div className="grid gap-6 md:grid-cols-2">
            <article className={`overflow-hidden rounded-2xl border ${surface}`}>
              
<div className="h-48 overflow-hidden border-b border-zinc-800/30">
  <img
    src="/portfolio-preview.png"
    alt="Preview of Adora's developer portfolio homepage"
    loading="lazy"
    className="h-full w-full object-cover object-top"
  />
</div>

              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pink-500">Personal Project</p>
                <h3 className="mb-3 text-xl font-semibold">Developer Portfolio</h3>
                <p className={`mb-5 leading-7 ${muted}`}>
                  A responsive portfolio website built to showcase my skills, projects, and progress as a developer.
                </p>
                <p className={`text-sm ${muted}`}>React · Tailwind CSS · Framer Motion</p>
              </div>
            </article>

            <article className={`overflow-hidden rounded-2xl border ${surface}`}>
              <img src="/elitebnb.png" alt="EliteBNB property booking homepage" loading="lazy" className="h-48 w-full border-b border-zinc-800/30 object-cover object-top" />
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-pink-500">Group Project</p>
                <h3 className="mb-3 text-xl font-semibold">EliteBNB</h3>
                <p className={`mb-5 leading-7 ${muted}`}>
                  A team-built property booking platform. My work focused on the frontend host dashboard, including its layout and navigation.
                </p>
                <p className={`mb-5 text-sm ${muted}`}>React · Spring Boot · PostgreSQL</p>
                <a href={ELITEBNB} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-semibold text-pink-500 hover:text-pink-400 ${focus}`}>
                  View GitHub Repository <ExternalLink size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>


{/* CONTACT */}
<section
  id="contact"
    className={`scroll-mt-24 px-6 py-14 md:px-8 md:py-16 border-t ${
    isDark
      ? "bg-[#24242C] border-zinc-700"
      : "bg-[#F0F0F3] border-zinc-200"
  }`}
>
  <div className="mx-auto max-w-3xl">

    {/* Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
        Let's Connect
      </p>

      <h2 className="mb-5 text-3xl font-bold md:text-4xl">
        Get In <span className="text-pink-500">Touch</span>
      </h2>

      <p className={`mx-auto max-w-xl leading-8 ${muted}`}>
        Have a project, opportunity, or question?
        Feel free to reach out. I'm always happy to connect
        and explore new opportunities.
      </p>
    </div>

    {/* Contact Card */}
    <div className={`rounded-2xl border p-5 sm:p-8 ${surface}`}>

      {/* Email */}
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 rounded-xl p-4 transition hover:bg-pink-500/5 ${focus}`}
      >
        <div className="rounded-xl bg-pink-500/10 p-3 text-pink-500">
          <Mail size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">Email</h3>
          <p className={`text-sm ${muted}`}>
            Send me a message directly
          </p>
        </div>

        <ExternalLink size={18} className={muted} />
      </a>

      <div className={`my-3 border-t ${
        isDark ? "border-zinc-800" : "border-zinc-200"
      }`} />

      {/* GitHub */}
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 rounded-xl p-4 transition hover:bg-pink-500/5 ${focus}`}
      >
        <div className="rounded-xl bg-pink-500/10 p-3 text-pink-500">
          <Code2 size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">GitHub</h3>
          <p className={`text-sm ${muted}`}>
            Explore my code and projects
          </p>
        </div>

        <ExternalLink size={18} className={muted} />
      </a>

      <div className={`my-3 border-t ${
        isDark ? "border-zinc-800" : "border-zinc-200"
      }`} />

      {/* WhatsApp */}
      <a
        href={`https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(
          "Hello Adora, I found your portfolio and would like to connect."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 rounded-xl p-4 transition hover:bg-pink-500/5 ${focus}`}
      >
        <div className="rounded-xl bg-pink-500/10 p-3 text-pink-500">
          <Mail size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">WhatsApp</h3>
          <p className={`text-sm ${muted}`}>
            Start a conversation
          </p>
        </div>

        <ExternalLink size={18} className={muted} />
      </a>

    </div>

    <p className={`mt-8 text-center text-sm ${muted}`}>
      Open to collaborations and learning opportunities.
    </p>

  </div>
</section>


      {/* FOOTER */}
      <footer className={`border-t px-6 py-7 text-center text-sm ${muted} ${isDark ? "border-zinc-800" : "border-zinc-200"}`}>
        © 2026 Adora Olusola. Built with React & Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
