import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Brain, Lightbulb, Rocket } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    desc: 'Building end-to-end web applications with modern technologies and best practices.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    desc: 'Exploring AI, ML, and intelligent system architectures for real-world applications.',
  },
  {
    icon: Rocket,
    title: 'Agentic AI',
    desc: 'Interested in autonomous agents and multi-agent systems that reason and act.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    desc: 'Turning complex, real-world problems into practical, functional software solutions.',
  },
]

function HighlightCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="card flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
        <Icon size={18} className="text-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-text-primary text-sm mb-1">{title}</h3>
        <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <SectionHeader
            eyebrow="Who I Am"
            heading="A Little About Me"
            description="A developer passionate about technology, software engineering, and Artificial Intelligence."
          />

          <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
            <p>
              I&apos;m{' '}
              <span className="text-text-primary font-medium">Obaid Ullah</span>, a developer
              with a genuine passion for building software and exploring the possibilities of
              Artificial Intelligence.
            </p>
            <p>
              My interests span across Full-Stack Development, Python Programming, Agentic AI,
              AI-powered applications, and intelligent automation. I enjoy solving problems,
              experimenting with emerging technologies, and building software products that
              provide practical value.
            </p>
            <p>
              I&apos;m particularly fascinated by how{' '}
              <span className="text-accent">autonomous AI agents</span> and interconnected systems
              can transform the way applications work — turning static software into dynamic,
              intelligent systems that reason and act.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-8 flex gap-6 p-5 rounded-xl bg-bg-secondary border border-border">
            {[
              { value: '6+', label: 'Projects' },
              { value: '4+', label: 'Tech Areas' },
              { value: '∞', label: 'Curiosity' },
            ].map((s, i) => (
              <div key={s.label} className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{s.label}</div>
                </div>
                {i < 2 && <div className="w-px bg-border" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Cards + Terminal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} {...item} index={i} />
          ))}

          {/* Terminal code block */}
          <div className="sm:col-span-2 card !bg-bg-primary font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-text-secondary/60 text-xs ml-1">about.js</span>
            </div>
            <div className="space-y-0.5 text-text-secondary">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-text-secondary">=</span> {'{'}
              </div>
              <div className="pl-4">
                <span className="text-green-400">name</span>:{' '}
                <span className="text-yellow-300">&quot;Obaid Ullah&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-green-400">focus</span>:{' '}
                <span className="text-yellow-300">[&quot;Full-Stack&quot;, &quot;AI&quot;, &quot;Agentic AI&quot;]</span>,
              </div>
              <div className="pl-4">
                <span className="text-green-400">status</span>:{' '}
                <span className="text-yellow-300">&quot;Building &amp; Exploring&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-green-400">passionate</span>:{' '}
                <span className="text-blue-400">true</span>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

