import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, ArrowRight, FileText } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { blogPosts } from '../data/index'

const categoryStyles = {
  AI: 'text-accent bg-accent/10 border-accent/30',
  Development: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
}

function BlogCard({ post, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className="card group flex flex-col h-full"
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium ${
            categoryStyles[post.category] || categoryStyles.AI
          }`}
        >
          {post.category}
        </span>
        {post.status === 'draft' && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs">
            <FileText size={9} />
            Draft
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-bold text-text-primary text-sm mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary text-xs leading-relaxed flex-grow mb-4">{post.excerpt}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
        <div className="flex items-center gap-3 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {post.readTime}
          </span>
          <span className="text-text-secondary/50">{post.date}</span>
        </div>
        <span className="text-accent text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Read <ArrowRight size={10} />
        </span>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="bg-bg-secondary/30">
      <SectionHeader
        eyebrow="Writing"
        heading="Blog"
        description="Thoughts on AI, software development, and emerging technology — coming soon."
      />

      <div className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        All articles are currently in draft — publishing coming soon
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

