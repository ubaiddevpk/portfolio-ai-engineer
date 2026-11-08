import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Send, AlertCircle, ExternalLink, CheckCircle } from 'lucide-react'
import { Github, Linkedin, Twitter } from './Icons'
import SectionWrapper from './SectionWrapper'
import { personalInfo } from '../data/index'

function isPlaceholder(val) {
  return !val || val.startsWith('[')
}

function ContactLink({ icon: Icon, label, value, href }) {
  if (isPlaceholder(value)) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-secondary/50 opacity-40 cursor-not-allowed">
        <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center">
          <Icon size={17} className="text-text-secondary" />
        </div>
        <div>
          <div className="text-xs text-text-secondary mb-0.5">{label}</div>
          <div className="text-sm text-text-secondary font-mono">{value}</div>
        </div>
      </div>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-secondary/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
        <Icon size={17} className="text-text-secondary group-hover:text-accent transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-text-secondary mb-0.5">{label}</div>
        <div className="text-sm text-text-primary font-medium truncate">{value}</div>
      </div>
      <ExternalLink size={13} className="text-text-secondary/50 group-hover:text-accent transition-colors flex-shrink-0" />
    </a>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // ⚠️ INTEGRATION REQUIRED:
    // This form is UI-only. To enable real submissions, integrate with:
    //   • EmailJS  → https://www.emailjs.com
    //   • Formspree → https://formspree.io
    //   • Netlify Forms (if hosting on Netlify)
    //   • A custom backend API endpoint
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-14"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} className="text-accent" />
        </div>
        <h3 className="text-text-primary font-bold text-base mb-2">Form Validated</h3>
        <p className="text-text-secondary text-sm max-w-sm mx-auto leading-relaxed">
          Contact form integration is not yet configured. Please reach out directly
          via <span className="text-accent">email</span> or{' '}
          <span className="text-accent">LinkedIn</span> in the meantime.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-5 btn-secondary text-sm py-2 px-4"
        >
          Reset Form
        </button>
      </motion.div>
    )
  }

  const inputClass = (field) =>
    `w-full bg-bg-primary border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-colors ${
      errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-border focus:border-accent'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Integration notice */}
      <div className="flex items-start gap-2.5 p-3 rounded-lg border border-yellow-500/25 bg-yellow-500/5 text-yellow-400 text-xs leading-relaxed">
        <AlertCircle size={13} className="mt-0.5 flex-shrink-0" />
        <span>
          Contact form integration pending. Configure via EmailJS, Formspree, or a custom backend API.
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-text-secondary mb-1.5">Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass('name')}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs text-text-secondary mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs text-text-secondary mb-1.5">Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className="w-full bg-bg-primary border border-border focus:border-accent rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs text-text-secondary mb-1.5">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project, idea, or just say hello..."
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={14} />
        Send Message
      </button>
    </form>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="contact">
      {/* Centered header */}
      <div className="text-center mb-14">
        <p className="text-accent text-xs font-mono font-medium tracking-widest uppercase mb-3">
          — Get In Touch
        </p>
        <h2 className="section-heading mb-4">
          Have an Idea? Let&apos;s Build
          <br className="hidden sm:block" /> Something Together.
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base">
          I&apos;m always interested in connecting with developers, entrepreneurs, businesses, and
          people working on innovative technology.
        </p>
        <div className="accent-line mx-auto" />
      </div>

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <ContactLink
            icon={Mail}
            label="Email"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
          />
          <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value={personalInfo.linkedin}
            href={personalInfo.linkedin}
          />
          <ContactLink
            icon={Github}
            label="GitHub"
            value={personalInfo.github}
            href={personalInfo.github}
          />
          <ContactLink
            icon={Twitter}
            label="Twitter / X"
            value={personalInfo.twitter}
            href={personalInfo.twitter}
          />

          <div className="mt-6 p-5 rounded-xl bg-bg-secondary border border-border">
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-accent font-medium">Preferred contact:</span> Email or LinkedIn
              for professional inquiries, GitHub for collaboration and code.
            </p>
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card"
        >
          <h3 className="font-bold text-text-primary mb-5">Send a Message</h3>
          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

