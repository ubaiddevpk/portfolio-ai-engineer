import { ArrowUp, Mail, Heart } from 'lucide-react'
import { Github, Linkedin, Twitter } from './Icons'
import { personalInfo } from '../data/index'

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const isPlaceholder = (val) => !val || val.startsWith('[')

  return (
    <footer className="border-t border-border bg-bg-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-bg-primary font-bold text-xs font-mono">OU</span>
              </div>
              <span className="font-bold text-text-primary">{personalInfo.name}</span>
            </div>
            <p className="text-text-secondary text-xs mb-1">{personalInfo.title}</p>
            <p className="text-accent text-xs font-mono italic">&ldquo;{personalInfo.tagline}&rdquo;</p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => {
              if (isPlaceholder(href)) {
                return (
                  <div
                    key={label}
                    title={`${label} not configured`}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center opacity-30 cursor-not-allowed"
                  >
                    <Icon size={15} className="text-text-secondary" />
                  </div>
                )
              }
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border hover:border-accent text-text-secondary hover:text-accent flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-xs group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg border border-border group-hover:border-accent flex items-center justify-center transition-colors">
              <ArrowUp size={13} />
            </div>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-secondary">
          <p>© {currentYear} Obaid Ullah. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={11} className="text-accent" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
