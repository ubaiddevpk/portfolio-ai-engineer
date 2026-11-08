import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Network, Server, Puzzle, Brain, TrendingUp, Zap, Layers } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { interests } from '../data/index'

const icons = [Bot, Network, Server, Puzzle, Brain, TrendingUp, Zap, Layers]

function InterestCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = icons[index % icons.length]

  return (
    <motion.div
      ref={ref}
      className="card group cursor-default"
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
          <Icon size={18} className="text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary text-sm mb-1.5 group-hover:text-accent transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Interests() {
  return (
    <SectionWrapper id="interests" className="bg-bg-secondary/30">
      <SectionHeader
        eyebrow="What I'm Exploring"
        heading="Areas of Interest"
        description="Technical domains I'm actively learning and building understanding in."
      />

      <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        These represent learning interests alongside professional development
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((item, i) => (
          <InterestCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

