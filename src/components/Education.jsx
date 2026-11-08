import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Edit3 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { education } from '../data/index'

function EducationCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="card relative"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {item.placeholder && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-1 rounded-full">
          <Edit3 size={10} />
          Edit in src/data/index.js
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <GraduationCap size={18} className="text-accent" />
        </div>
        <div>
          <h3 className="font-bold text-text-primary">{item.degree}</h3>
          {item.field && (
            <p className="text-accent text-sm mt-0.5 font-medium">{item.field}</p>
          )}
          <p className="text-text-secondary text-sm mt-1">{item.institution}</p>
          <p className="text-text-secondary/60 text-xs mt-1 font-mono">{item.year}</p>
          {item.description && (
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-bg-secondary/30">
      <SectionHeader
        eyebrow="Academic Background"
        heading="Education"
        description="Academic foundation supporting my technical development and growth."
      />

      <div className="max-w-2xl space-y-4">
        {education.map((item, i) => (
          <EducationCard key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

