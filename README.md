# Md Sadman Sami Khan — Personal Portfolio

My personal portfolio as an aspiring Data Scientist and AI/ML Engineer with an interest in FinTech. It brings together my research, software projects, professional experience, voluntary activities, and qualifications.

I am a Computer Science and Engineering graduate from the University of Chittagong and a former Data Annotator at the World Bank-funded BDAI-HEAT Sub-project (HEAT-13211-CU).

**Live website:** [sadman-sami-khan.vercel.app](https://sadman-sami-khan.vercel.app/)  

## Design

The portfolio uses a light-only, violet-accented claymorphism design:

- Rounded cards, defined outlines, offset shadows, and soft inner highlights.
- Fredoka display typography and Nunito body typography, loaded through `next/font`.
- Responsive project grids and grouped technology chips.
- A pill-shaped desktop navigation bar that scrolls with the page.
- A mobile navigation sidebar.
- A professional portrait and custom SVG branding.
- Brand-colored technology logos.
- Responsive layouts for mobile, tablet, and desktop.

## Features

- Letter-by-letter name introduction using Motion.
- One-time entrance animations for selected content as it enters the viewport.
- Reduced-motion support and keyboard focus styles.
- Recent News with exact dates, including the weekday.
- Project cards with cover images or placeholder icons, technology tags, and GitHub links.
- Thesis supervisor attribution, research results, and a downloadable thesis.
- Work experience and leadership and voluntary activities with organization logos.
- Expandable voluntary certificate links.
- Education, Board-merit scholarship recognition, certifications, and training.
- Article previews and individual article pages, with an empty state when no articles are published.
- Downloadable CV.
- Contact form with validation, submission feedback, and Formspree integration.
- Social links, including LinkedIn, GitHub, WhatsApp, and Facebook in their respective sections.

## Sections

Hero → Recent News → About → Projects & Thesis → Experience → Articles → Skills → Education & Certifications → Contact

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 App Router | Application framework, routing, and production builds |
| React 19 | User interface components |
| TypeScript | Type checking |
| Tailwind CSS 4 | Utility styling |
| Global CSS and CSS Modules | Shared design styles and component-specific styling |
| Motion | Name animation and component entrance animations |
| IntersectionObserver | Detecting when content enters the viewport |
| Lucide React | Interface and decorative icons |
| React Icons | Technology and social brand icons |
| Radix UI | UI primitives |
| `next/font` | Optimized font loading |
| `next/image` | Image rendering and optimization |
| Formspree | Contact form submission handling |
| Vercel | Hosting and deployment |
| Git and GitHub | Version control and source hosting |

Exact dependency versions are recorded in `package.json` and `package-lock.json`.

## Selected Projects

| Project | Description |
| --- | --- |
| [BuildMaster](https://github.com/sadmantihan/buildmaster) | A PHP and MySQL application with role-based dashboards for workforce and project management. |
| [AdaPruner-KGQA](https://github.com/sadmantihan/AdaPruner-KGQA) | Undergraduate research on adaptive, uncertainty-aware search-space pruning for multi-hop knowledge graph reasoning. |

## Run Locally

Use Node.js 22.13.0 or newer within the Node.js 22 release line, npm, and Git.

```bash
git clone https://github.com/sadmantihan/sadman-portfolio.git
cd sadman-portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm ci` installs the dependencies recorded in the lockfile. Use `npm install` when intentionally adding or updating packages.

### Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npm start` | Serve the existing production build |
| `npm audit` | Check dependencies for known vulnerabilities |

To verify and preview a production build, run:

```bash
npm run typecheck
npm run build
npm start
```

Run these commands one at a time and resolve any errors before continuing.

Use `npm run dev` while editing. `npm start` serves the last production build and requires another build to reflect subsequent changes.

## Files and Maintenance

Paths below are relative to the repository root.

| File or directory | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage content, hero, project data, desktop navigation, education, and section composition |
| `app/layout.tsx` | Root layout, metadata, font loading, and stylesheet imports |
| `app/globals.css` | Base styles and shared layout rules |
| `app/clay.css` | Clay design, typography, component appearance, and responsive overrides |
| `components/portfolio-motion.tsx` | Component entrance animations and scroll observation |
| `components/animated-name.tsx` | Letter-by-letter hero name animation |
| `components/mobile-nav.tsx` | Mobile sidebar navigation |
| `app/news/news-list.ts` | News entries and dates |
| `components/recent-news.tsx` | News rendering and date formatting |
| `components/recent-news.module.css` | News styles |
| `components/experience.tsx` | Work experience and voluntary roles |
| `components/experience.module.css` | Experience layout and organization logos |
| `components/voluntary-certificates.tsx` | Expandable voluntary certificate links |
| `components/toolkit.tsx` | Technology groups and brand icons |
| `components/toolkit.module.css` | Toolkit styles |
| `components/project-tags.tsx` | Project technology tags and icons |
| `components/certifications.tsx` | Certifications, training, and certificate links |
| `components/certifications.module.css` | Certification styles |
| `components/contact-form.tsx` | Contact fields, validation, submission, and feedback |
| `app/articles/article-list.ts` | Published article metadata |
| `components/article-cards.tsx` | Article previews and empty state |
| `app/articles/<slug>/page.tsx` | Individual article content |
| `public/images/sadman-profile.jpg` | Hero portrait |
| `public/favicon.svg` | Custom favicon and shared logo asset |
| `public/logos/` | Organization logos |
| `public/projects/` | Project cover images |
| `public/Sadman_Sami_Khan_CV.pdf` | Downloadable CV |
| `public/thesis/AdaPrunerKGQA-thesis.pdf` | Downloadable thesis |
| `public/certificates/` | Certificate PDFs |

## Update Content

### Recent News

Edit `app/news/news-list.ts` and add an entry using the existing structure:

```ts
{
  id: "portfolio-design-update",
  date: "2026-10-11",
  text: "Updated my portfolio design and added motion effects.",
  href: "#projects",
  linkLabel: "View projects",
},
```

Use a unique ID and a date in `YYYY-MM-DD` format. Only publish entries describing actual updates.

The news component handles date display and newest-first ordering.

### Projects

Edit the `projects` array in `app/page.tsx`.

Project entries contain the title, category, description, technologies, repository URL, and optional cover image. The thesis entry also includes supervisor details, research results, and a PDF link.

Place cover images inside `public/projects/` and reference them as:

```ts
image: "/projects/adapruner-kgqa.webp",
```

The existing cover frame uses a 37:16 aspect ratio. An image measuring 1110 × 480 pixels matches that ratio. Images crop to fill the frame; an empty image value uses the project's placeholder icon.

### Articles

1. Create `app/articles/<your-slug>/page.tsx`.
2. Add the article content and export its page component.
3. Add matching metadata to `app/articles/article-list.ts`.
4. Check the article route and homepage preview locally.

Keep the article array explicitly typed when it is empty. The homepage displays “No articles for now.” when there are no published entries.

### CV, Thesis, and Certificates

Store downloadable files inside `public/`.

Public URLs omit the `public` directory:

```text
File: public/certificates/python-basics.pdf
URL:  /certificates/python-basics.pdf
```

Update course certificate links in `components/certifications.tsx` and voluntary certificate links in `components/voluntary-certificates.tsx`.

Match filenames and capitalization exactly. If a file is renamed, update every corresponding link.

## Animation and Accessibility

Animation is implemented with Motion, using the lightweight `motion/mini` API for the current entrance and name effects.

- `PortfolioMotion` observes selected content and animates it once.
- `AnimatedName` reveals the hero name letter by letter.
- The full name remains available to screen readers.
- Name animation reserves the text's layout space.
- Reduced-motion preferences disable the entrance and typing effects.
- Existing hover and pressed states complement the entrance animations.

Mount `PortfolioMotion` once in the homepage. Avoid mounting the older `ScrollReveal` component alongside it for the same elements.

Keep navigation links synchronized with section IDs. For example, Recent News targets `#news`, and Projects targets `#projects`.

## Contact Form

The contact form submits the visitor's name, email, subject, and message to Formspree without opening an email application.

It includes:

- Name and email validation.
- Required fields and length limits.
- A sending state to prevent repeated submissions.
- Success and error feedback.
- A direct email link as a fallback.

Email validation checks formatting; it does not verify that an inbox exists.

The Formspree endpoint is configured through `FORM_ENDPOINT` in `components/contact-form.tsx`. Notification recipients are configured in the Formspree dashboard.

A successful submission means Formspree accepted the request. It does not independently confirm delivery to the recipient's inbox.

To reuse this project, create your own Formspree form and replace the endpoint. No Gmail password or SMTP credentials are required by the current implementation.

## Deployment

The portfolio is hosted on Vercel.

1. Import the GitHub repository into Vercel.
2. Select the directory containing `package.json` as the project root.
3. Keep the detected Next.js framework settings.
4. Deploy and check the production website.

With Git integration configured, pushes to the configured production branch trigger production deployments.

Local changes and dependency updates only reach the live website after deployment.

## Version Control and Dependency Maintenance

Before committing:

```bash
git status
git diff
npm run typecheck
npm run build
npm audit
```

Review and stage only the intended files. Commit both `package.json` and `package-lock.json` when dependencies change.

Do not commit:

- `node_modules/`
- `.next/`
- `.vercel/`
- Private environment files or credentials

Review audit recommendations before applying updates. Avoid using `npm audit fix --force` without checking the proposed dependency changes.

For a README-only update:

```bash
git add README.md
git commit -m "docs: update portfolio design, motion, and maintenance guide"
```

## Contact

- **Email:** [samisadman6@gmail.com](mailto:samisadman6@gmail.com)
- **GitHub:** [sadmantihan](https://github.com/sadmantihan)
- **LinkedIn:** [Md Sadman Sami Khan](https://www.linkedin.com/in/md-sadman-sami-khan)
- **WhatsApp:** [Send a message](https://wa.me/8801704776493)