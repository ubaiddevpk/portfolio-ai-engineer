import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Brain, Globe, Wrench } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { skills } from '../data/index'

const iconMap = { Code, Brain, Globe, Wrench }

function SkillTag({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="inline-flex items-center px-3 py-1.5 rounded-md bg-bg-primary border border-border text-text-secondary text-xs font-medium hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
    >
      {name}
    </motion.span>
  )
}

function SkillCard({ skill, cardIndex }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = iconMap[skill.icon] || Code

  return (
    <motion.div
      ref={ref}
      className="card h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Icon size={18} className="text-accent" />
        </div>
        <h3 className="font-semibold text-text-primary text-sm">{skill.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <SkillTag key={item} name={item} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        eyebrow="Expertise"
        heading="Technical Skills"
        description="Technologies and tools I work with and continue to explore and deepen."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <SkillCard key={skill.category} skill={skill} cardIndex={i} />
        ))}
      </div>

      <motion.div
        className="mt-8 p-5 rounded-xl border border-border bg-bg-secondary/50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-text-secondary text-sm">
          <span className="text-accent font-medium">Continuously learning</span> — exploring new
          technologies, frameworks, and AI tools on a regular basis.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}

