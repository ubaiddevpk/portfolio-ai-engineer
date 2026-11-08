import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown, Sparkles, Terminal, Cpu } from 'lucide-react'
import AICanvas from './AICanvas'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary" />
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      {/* Animated agent node network canvas */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <AICanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-24">

          {/* Left Column — Bio & Highlights */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          >
            {/* Mobile portrait teaser */}
            <motion.div variants={fadeUp} className="flex lg:hidden items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10">
                <img
                  src="/profile.jpg"
                  alt="Obaid Ullah"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Available for Opportunities
                </span>
                <p className="text-xs text-text-secondary mt-1 font-mono">Full-Stack &amp; AI</p>
              </div>
            </motion.div>

            {/* Desktop Status Badge */}
            <motion.div variants={fadeUp} className="hidden lg:block mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-xs font-mono tracking-widest uppercase mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-2 tracking-tight"
            >
              Obaid
              <span className="block gradient-text">Ullah</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-sm md:text-base font-mono mb-6 mt-1 flex items-center gap-2 flex-wrap"
            >
              <span>Full-Stack Developer</span>
              <span className="text-accent">|</span>
              <span className="text-text-primary font-medium">AI &amp; Agentic AI Enthusiast</span>
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold text-text-primary mb-5 leading-snug max-w-xl"
            >
              Building Intelligent Software for{' '}
              <span className="text-accent">Real-World Problems.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-xl"
            >
              I&apos;m a passionate software developer focused on building modern web applications,
              exploring Artificial Intelligence, and creating intelligent solutions through Agentic
              AI and automation. I enjoy transforming ideas into functional digital products and
              continuously exploring emerging technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                Explore My Work
                <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <Mail size={16} />
                Let&apos;s Connect
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-border flex flex-wrap gap-8"
            >
              {[
                { label: 'Projects', value: '6+' },
                { label: 'Focus Areas', value: 'AI & Web' },
                { label: 'Status', value: 'Building' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-text-secondary mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Professional Portrait & AI Tech Aura */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-sm">

              {/* Ambient backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Rotating outer orbital accent */}
              <motion.div
                className="absolute -inset-6 rounded-3xl border border-accent/20 pointer-events-none -z-10"
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-bg-secondary via-bg-secondary to-bg-primary border border-border/80 shadow-2xl shadow-black/60 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-bg-secondary">
                  <img
                    src="/profile.jpg"
                    alt="Obaid Ullah - Full-Stack & AI Developer"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle bottom gradient overlay for smooth visual blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner tech accent */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-bg-primary/80 backdrop-blur-md border border-border/60 text-[10px] font-mono text-text-secondary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Obaid Ullah
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Agentic AI */}
              <motion.div
                className="absolute -top-4 -right-4 card !p-3 !bg-bg-secondary/90 backdrop-blur-md border border-accent/30 shadow-xl flex items-center gap-2.5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">Focus</div>
                  <div className="text-xs font-semibold text-text-primary">Agentic AI</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Full-Stack */}
              <motion.div
                className="absolute -bottom-5 -left-5 card !p-3 !bg-bg-secondary/90 backdrop-blur-md border border-accent/30 shadow-xl flex items-center gap-2.5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Terminal size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">Stack</div>
                  <div className="text-xs font-semibold text-text-primary">Full-Stack Dev</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom Right - Modern Solutions */}
              <motion.div
                className="absolute bottom-12 -right-6 card !py-1.5 !px-3 !bg-bg-primary/90 backdrop-blur-md border border-border shadow-lg flex items-center gap-1.5"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles size={12} className="text-accent" />
                <span className="text-[11px] font-mono text-text-secondary">Python • LLMs</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary/60 hover:text-accent transition-colors"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  )
}
