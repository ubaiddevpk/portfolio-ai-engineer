import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Animated node network */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <AICanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">

          {/* Left — Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-7">
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
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-none mb-2"
            >
              Obaid
              <span className="block gradient-text">Ullah</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-sm md:text-base font-mono mb-6 mt-1"
            >
              Full-Stack Developer{' '}
              <span className="text-accent">|</span> AI &amp; Agentic AI Enthusiast
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-2xl font-semibold text-text-primary mb-5 leading-snug max-w-lg"
            >
              Building Intelligent Software for{' '}
              <span className="text-accent">Real-World Problems.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-sm md:text-base leading-relaxed mb-9 max-w-lg"
            >
              I&apos;m a passionate software developer focused on building modern web applications,
              exploring Artificial Intelligence, and creating intelligent solutions through Agentic
              AI and automation. I enjoy transforming ideas into functional digital products and
              continuously exploring emerging technologies.
            </motion.p>

            {/* CTAs */}
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

          {/* Right — AI Visual Orb */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-80 h-80">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/40" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute inset-10 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute bottom-0 right-2 w-2 h-2 rounded-full bg-accent/60" />
              </motion.div>

              {/* Center orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/25 flex items-center justify-center backdrop-blur-sm"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-transparent flex items-center justify-center">
                    <span className="text-3xl font-bold font-mono text-accent tracking-tight">AI</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating label nodes */}
              {[
                { style: 'top-4 left-4', label: 'LLM', delay: 0 },
                { style: 'top-4 right-4', label: 'API', delay: 0.6 },
                { style: 'bottom-4 right-4', label: 'ML', delay: 1.2 },
                { style: 'bottom-4 left-4', label: 'NLP', delay: 1.8 },
              ].map((node) => (
                <motion.div
                  key={node.label}
                  className={`absolute ${node.style}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-11 h-11 rounded-xl bg-bg-secondary border border-accent/25 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-mono text-accent font-bold">{node.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating info cards */}
            <motion.div
              className="absolute left-1/4 top-1/3 card py-2.5 px-3.5 !bg-bg-secondary/85 backdrop-blur-sm text-left pointer-events-none"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <div className="text-xs text-text-secondary">Focus</div>
              <div className="text-sm font-semibold text-text-primary">Agentic AI</div>
            </motion.div>

            <motion.div
              className="absolute right-1/4 bottom-1/3 card py-2.5 px-3.5 !bg-bg-secondary/85 backdrop-blur-sm text-left pointer-events-none"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, delay: 1.2, repeat: Infinity }}
            >
              <div className="text-xs text-text-secondary">Stack</div>
              <div className="text-sm font-semibold text-text-primary">Full-Stack</div>
            </motion.div>
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

