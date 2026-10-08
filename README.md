# Md Sadman Sami Khan — Personal Portfolio

My personal portfolio as an aspiring Data Scientist and AI/ML Engineer, with a particular interest in FinTech. It brings together my research, software projects, work experience, voluntary activities, articles, and qualifications.

I am a Computer Science and Engineering graduate from the University of Chittagong and a former Data Annotator at the World Bank-funded BDAI-HEAT Sub-project (HEAT-13211-CU).

**Website:** [sadman-sami-khan.vercel.app](https://sadman-sami-khan.vercel.app/)

## Features

- Responsive desktop navigation and a mobile sidebar.
- Violet-accented light and dark themes with a saved theme preference.
- Custom SVG favicon and matching navigation logo.
- Background gradients, an animated name introduction, and one-time scroll reveals that respect reduced-motion preferences.
- Recent News displayed as a dated list before About, with newest entries first.
- Responsive project cards with fixed-aspect-ratio covers, category labels, technology icons, and GitHub Code links.
- Thesis supervisor link, research results, and a downloadable thesis PDF.
- Work experience, leadership, and voluntary activities with organization logos.
- Expandable voluntary certificate list and separate course certificate links.
- Toolkit with brand-colored technology icons, including TypeScript.
- Education and HSC/SSC Board-merit scholarship recognition.
- Certifications and Training on relevant fields.
- Individual article pages and a downloadable CV.
- Contact form with validation, sending feedback, and Formspree submission.

## Sections

Hero → Recent News → About → Projects & Thesis → Experience → Articles → Skills → Education and Certifications → Contact.

## Selected Projects

| Project | Focus |
| --- | --- |
| [BuildMaster](https://github.com/sadmantihan/buildmaster) | Role-based workforce management system |
| [AdaPruner-KGQA](https://github.com/sadmantihan/AdaPruner-KGQA) | Undergraduate thesis on adaptive, uncertainty-aware pruning for multi-hop knowledge graph reasoning |

## Technology Stack

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS 4, global CSS, and CSS Modules
- Radix UI, Lucide React, and React Icons
- CSS animations and IntersectionObserver for scroll reveals
- Formspree for contact submissions
- Vercel hosting

## Run Locally

Install Git and Node.js **22.13.0 or newer**, with npm. From your terminal or Windows PowerShell:

```bash
git clone https://github.com/sadmantihan/sadman-portfolio.git
cd sadman-portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If the project is already on your computer, open the folder containing `package.json` and run the npm commands above.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create the production build |
| `npm start` | Serve an existing production build locally |

To verify a code change before deployment:

```bash
npm run typecheck
npm run build
npm start
```

## Where to Make Changes

All paths below are relative to the repository root.

| File or directory | What to edit |
| --- | --- |
| `app/page.tsx` | Hero, About, project data and cards, education, desktop navigation, and section order |
| `app/layout.tsx` | Page title, description, favicon reference, and root layout |
| `app/globals.css` | Theme colors, typography, layout, project cards, gradients, and animations |
| `app/news/news-list.ts` | News text, exact dates, and optional links |
| `components/recent-news.tsx` | News list rendering and date formatting |
| `components/recent-news.module.css` | News heading, spacing, dates, and list styles |
| `components/mobile-nav.tsx` | Mobile sidebar links and behavior |
| `components/experience.tsx` | Work experience and voluntary roles |
| `components/experience.module.css` | Experience layout, logos, and voluntary certificate styles |
| `components/voluntary-certificates.tsx` | Dropdown certificate titles and PDF links |
| `components/toolkit.tsx` | Skill groups, technologies, icons, and icon colors |
| `components/toolkit.module.css` | Toolkit and shared technology badge styles |
| `components/project-tags.tsx` | Project technology icons |
| `components/certifications.tsx` | Course details, training groups, and PDF links |
| `components/certifications.module.css` | Course certificate layout and styles |
| `components/scroll-reveal.tsx` | Scroll-reveal targets and observer behavior |
| `components/contact-form.tsx` | Form fields, validation, feedback, and Formspree endpoint |
| `app/articles/article-list.ts` | Article titles, summaries, categories, and slugs |
| `app/articles/<slug>/page.tsx` | Individual article content |
| `components/article-cards.tsx` and `components/article-cards.css` | Homepage article previews |
| `app/articles/articles.css` | Article page styling |
| `public/favicon.svg` | Favicon and navigation logo |
| `public/logos/` | BDAI, World Bank, and CUSS PNG logos |
| `public/Sadman_Sami_Khan_CV.pdf` | Downloadable CV |
| `public/thesis/AdaPrunerKGQA-thesis.pdf` | Downloadable thesis |
| `public/certificates/` | Course and voluntary certificate PDFs |

## Add Recent News

Add an object to the `news` array in `app/news/news-list.ts`. Replace the example text and date with your actual update:

```ts
{
  id: "portfolio-update",
  date: "2026-10-03",
  text: "Updated my portfolio with recent projects and experience.",
  href: "#projects",
  linkLabel: "View projects",
},
```

Use a unique `id` and a valid date in `YYYY-MM-DD` format. `href` and `linkLabel` are optional. Entries are automatically sorted newest first and shown with the day, month, and year. An empty news array hides the section.

## Update Projects and Cover Images

Edit the `projects` array in `app/page.tsx`. Each entry contains its category, placeholder icon, image path, title, description, tags, and repository URL. The thesis also has supervisor, PDF, and research-result fields.

To add a cover, create `public/projects/`, place an image there, and change the project's empty `image` value:

```ts
image: "/projects/adapruner-kgqa.webp",
```

Covers use a **37:16 aspect ratio** and crop to fill the frame. An image such as 1110 × 480 pixels matches this ratio. When `image` is empty, the placeholder icon remains visible. Project footers use a GitHub Code link and, where provided, a Download Thesis link.

## Add an Article

1. Create `app/articles/<your-slug>/page.tsx` with the article content and a default page export. Use an existing article as a starting point.
2. Add its `title`, matching `slug`, `category`, and `summary` to `app/articles/article-list.ts`.
3. Open `/articles/<your-slug>` locally and check its homepage preview.

## CV, Thesis, and Certificates

Files inside `public/` are referenced without `public` in their URLs. For example:

```ts
pdf: "/certificates/python-basics.pdf"
```

Course certificates are configured in `components/certifications.tsx`:

- `data-science-machine-learning.pdf`
- `python-basics.pdf`
- `data-science-math-skills.pdf`

Voluntary certificates are configured in `components/voluntary-certificates.tsx`:

- `cuss-website-secretary-cert.pdf`
- `Chitagong-science-carnival-4.0.pdf`
- `itfest-org-2024.pdf`

Keep filenames and capitalization identical to their code references. The spelling `Chitagong` above matches the existing PDF filename. If renaming a file, update its link too. Replace the CV or thesis at its existing path to keep download links working.

## Navigation and Motion

Navigation targets must match section IDs. Recent News uses `news`; Projects & Thesis uses `projects`. Keep the desktop links and section tracking in `app/page.tsx` consistent with the links in `components/mobile-nav.tsx`.

Scroll reveals use IntersectionObserver and stop observing an element after it appears. Animation styles are in `app/globals.css`. Reduced-motion preferences disable the entry animations; no animation library is required.

## Contact Form

The form submits name, email, subject, and message directly to Formspree. It shows a sending state and success or error feedback, with a direct email link as a fallback.

Names are validated for letters and spaces, including Unicode letters. Email validation uses the browser's `type="email"` support and is not restricted to Gmail or any other provider. This checks input format, not whether an inbox exists.

The endpoint is configured through `FORM_ENDPOINT` in `components/contact-form.tsx`. Email notification recipients are managed in the Formspree dashboard; the displayed email link does not configure delivery. For this portfolio, the intended recipient is **samisadman6@gmail.com**.

If you reuse this repository, create your own [Formspree](https://formspree.io/) form and replace the endpoint. Verify its notification recipient and test delivery. A success message means Formspree accepted the submission, not that inbox delivery has been confirmed.

The current implementation requires no application environment variables or Gmail password.

## Deployment and Version Control

The portfolio is hosted on Vercel. Import the GitHub repository into Vercel, use the directory containing `package.json` as the project root, and retain the Next.js framework defaults. See [Vercel's Git deployment documentation](https://vercel.com/docs/git) for repository and production-branch settings.

For updates, work on a branch, inspect the diff, run the relevant checks, and commit only the intended files. For a README-only update:

```bash
git diff -- README.md
git add README.md
git commit -m "docs: update portfolio features and maintenance guide"
```

Do not commit `node_modules/`, `.next/`, `.vercel/`, or private credentials.

## Contact

- Email: [samisadman6@gmail.com](mailto:samisadman6@gmail.com)
- GitHub: [sadmantihan](https://github.com/sadmantihan)
- LinkedIn: [Md Sadman Sami Khan](https://www.linkedin.com/in/md-sadman-sami-khan)