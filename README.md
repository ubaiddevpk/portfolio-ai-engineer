# Obaid Ullah — Personal Developer Portfolio

Modern, high-performance personal portfolio website for **Obaid Ullah** — Full-Stack Developer & AI Enthusiast. Built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Visual Identity
- **Primary Background:** `#171A1F` (Charcoal)
- **Secondary Background:** `#222831`
- **Accent:** `#26A69A` (Muted Teal)
- **Primary Text:** `#F1F3F5`
- **Secondary Text:** `#A0A7B0`
- **Borders:** `#343B45`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Navigate to [http://localhost:5173](http://localhost:5173).

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Run Linter
```bash
npm run lint
```

---

## ✏️ Centralized Content Configuration

All portfolio content is decoupled from components and stored in a single source file:
📍 **`src/data/index.js`**

Open `src/data/index.js` to easily customize:
- **Contact Details:** Email, LinkedIn, GitHub, and Twitter/X URLs.
- **Projects:** Add repository URLs, live demo links, features, or update status (`concept`, `wip`, `completed`).
- **Education:** Degree, university, graduation year, and achievements.
- **Experience:** Roles, company/client details, and bullet points.
- **Skills:** Add or organize technologies.
- **Blog Posts:** Add new topics or link to published articles.

---

## 📬 Contact Form Integration Guide

The contact form includes client-side field validation and feedback states. To connect it to your inbox, choose any of the following integrations:

### Option A: EmailJS (Recommended)
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Run `npm install @emailjs/browser`.
3. In `src/components/Contact.jsx`, call `emailjs.send()` inside `handleSubmit`.

### Option B: Formspree
1. Create a form endpoint at [formspree.io](https://formspree.io/).
2. Post form data directly to your Formspree endpoint URL in `Contact.jsx`.

---

## 📄 Adding Your Resume

When your resume PDF is ready:
1. Save your resume file as `resume.pdf` inside the `public/` directory (`public/resume.pdf`).
2. Add a direct link in the hero or navigation to `/resume.pdf`.

---

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```
