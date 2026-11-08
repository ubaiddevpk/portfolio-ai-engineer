import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, CheckCircle, Clock, Lightbulb } from 'lucide-react'
import { Github } from './Icons'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { projects } from '../data/index'

const statusConfig = {
  concept: {
    label: 'Concept',
    icon: Lightbulb,
    className: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
  wip: {
    label: 'In Progress',
    icon: Clock,
    className: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
  completed: {
    label: 'Completed',
    icon: CheckCircle,
    className: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const status = statusConfig[project.status] || statusConfig.concept
  const StatusIcon = status.icon

  return (
    <motion.div
      ref={ref}
      className="card flex flex-col h-full group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Color accent bar */}
      <div
        className="h-0.5 rounded-full mb-5"
        style={{ background: `linear-gradient(90deg, ${project.color}99, transparent)` }}
      />

      {/* ID + Status */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-text-secondary/60 font-mono">
          #{String(project.id).padStart(2, '0')}
        </span>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${status.className}`}
        >
          <StatusIcon size={9} />
          {status.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-text-primary text-base mb-0.5 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-text-secondary text-xs mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Key features */}
      {project.features?.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-text-secondary/70 font-medium mb-2 uppercase tracking-wide">
            Key Features
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 5).map((f) => (
              <span
                key={f}
                className="text-xs px-2 py-0.5 rounded bg-bg-primary border border-border text-text-secondary/80"
              >
                {f}
              </span>
            ))}
            {project.features.length > 5 && (
              <span className="text-xs px-2 py-0.5 rounded bg-bg-primary border border-border text-text-secondary/60">
                +{project.features.length - 5} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md text-accent font-mono bg-accent/5 border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2 px-3 flex-1 justify-center"
          >
            <Github size={13} />
            GitHub
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border/50 text-text-secondary/35 text-xs cursor-not-allowed select-none">
            <Github size={13} />
            GitHub
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border/50 text-text-secondary/35 text-xs cursor-not-allowed select-none">
            <ExternalLink size={13} />
            Live Demo
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        eyebrow="Portfolio"
        heading="Featured Projects"
        description="A collection of projects and concepts I've been designing and building."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-text-secondary text-sm">
          More projects in progress. Follow my{' '}
          <span className="text-accent font-medium">GitHub</span> for updates.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}

