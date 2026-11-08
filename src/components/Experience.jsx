import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Code, BookOpen } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { experience } from '../data/index'

const typeConfig = {
  freelance: {
    icon: Briefcase,
    className: 'bg-accent/10 border-accent/30 text-accent',
    dot: 'bg-accent',
  },
  project: {
    icon: Code,
    className: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    dot: 'bg-blue-400',
  },
  learning: {
    icon: BookOpen,
    className: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    dot: 'bg-purple-400',
  },
}

function ExperienceItem({ item, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const config = typeConfig[item.type] || typeConfig.freelance
  const Icon = config.icon

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-10 h-10 rounded-lg border flex items-center justify-center ${config.className}`}
        >
          <Icon size={17} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-3" />}
      </div>

      {/* Content */}
      <div className={`${isLast ? 'pb-0' : 'pb-10'}`}>
        <h3 className="font-bold text-text-primary mb-0.5">{item.role}</h3>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-accent text-sm font-medium">{item.company}</span>
          <span className="text-text-secondary/50 text-sm">·</span>
          <span className="text-text-secondary text-xs font-mono">{item.period}</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.description}</p>
        <ul className="space-y-1.5">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-text-secondary text-xs">
              <span className="text-accent mt-0.5 flex-shrink-0 font-bold">▹</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        eyebrow="Journey"
        heading="Experience"
        description="My professional development journey, projects, and continuous learning."
      />

      <div className="max-w-2xl">
        {experience.map((item, i) => (
          <ExperienceItem
            key={i}
            item={item}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

