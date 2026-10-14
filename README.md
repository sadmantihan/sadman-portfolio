# Md Sadman Sami Khan — Personal Portfolio

My personal portfolio showcasing research, software projects, professional experience, voluntary activities, and qualifications.

I’m a Computer Science and Engineering graduate from the University of Chittagong, interested in data science, machine learning, and their applications in FinTech. Previously, I worked as a Data Annotator on the World Bank-funded BDAI-HEAT Sub-project (HEAT-13211-CU).

**Live website:** [sadman-sami-khan.vercel.app](https://sadman-sami-khan.vercel.app/)

## Design

The portfolio uses a light-only claymorphism design with forest accents and a cream background.

- Rounded cards with defined outlines, offset shadows, and inner highlights.
- Fredoka display typography and Nunito body typography, loaded through `next/font`.
- Consistent spacing based primarily on an 8px scale.
- Persistent navigation with a compact mobile sidebar.
- Responsive project grids, education cards, and technology chips.
- Professional portrait, custom SVG branding, and organization logos.
- Original brand colors for technology logos.
- Visible keyboard focus states and reduced-motion support.

### Responsive Hero

The hero introduces me with:

- “HELLO, THIS IS”
- My animated name.
- An availability badge with a pulsing green dot.
- “CSE Graduate | Data Science & ML Enthusiast”
- A short professional introduction.
- Explore My Work and Download CV actions.

On mobile, the portrait block appears directly below the availability badge, followed by the designation, introduction, and action buttons. The desktop retains its side-by-side layout.

## Features

- Animated name introduction and scroll entrance effects.
- Hover and pressed interactions for selected interactive elements.
- Recent News with exact dates, including the weekday.
- Project cards with cover images or fallback icons, technology tags, and GitHub links.
- Thesis supervisor attribution, research results, and a thesis PDF link.
- Work experience and leadership and voluntary activities.
- Organization logos and expandable voluntary certificate links.
- Grouped toolkit with technology logos.
- Separate undergraduate, HSC, and SSC education cards.
- Education year badges, GPA/CGPA badges, and relevant coursework tags.
- Board-merit scholarship recognition for HSC and SSC.
- Certifications and training with certificate PDF links.
- Article previews with an empty state when no articles are published.
- An in-page CV preview dialog with download and close controls.
- Contact form with validation, sending feedback, and Formspree integration.
- Social and contact links.
- A centered copyright footer.

## Sections

Hero → Recent News → About → Projects & Thesis → Experience → Articles → Skills → Education & Certifications → Contact

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js App Router | Routing, page rendering, metadata, and production builds |
| React | User interface components |
| TypeScript | Type checking |
| Tailwind CSS | Utility styling |
| Global CSS and CSS Modules | Theme, layout, and component styles |
| Motion | Name and component animations |
| IntersectionObserver | Viewport-based animation triggers |
| Lucide React | Interface and decorative icons |
| React Icons | Technology and social brand icons |
| Radix UI | UI primitives |
| `next/font` | Font loading and optimization |
| `next/image` | Image rendering and optimization |
| Formspree | Contact form submission handling |
| pnpm | Dependency management |
| Vercel | Hosting and deployment |
| Git and GitHub | Version control and source hosting |

See `package.json` for dependencies and scripts, and `pnpm-lock.yaml` for resolved dependency versions. The `packageManager` field specifies the project's pnpm version.

## Selected Projects

| Project | Description |
| --- | --- |
| [AdaPruner-KGQA](https://github.com/sadmantihan/AdaPruner-KGQA) | Undergraduate research on adaptive, uncertainty-aware search-space pruning for multi-hop knowledge graph reasoning. |
| [BuildMaster](https://github.com/sadmantihan/buildmaster) | A PHP and MySQL application with role-based dashboards for workforce and project management. |

## Run Locally

### Prerequisites

- Node.js compatible with the `engines` requirement in `package.json`.
- Git.
- The pnpm version specified in `package.json`.

### Installation

```powershell
git clone https://github.com/sadmantihan/sadman-portfolio.git
cd sadman-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

`--frozen-lockfile` installs dependencies without modifying the lockfile. If `package.json` and the lockfile disagree, resolve the mismatch before continuing.

### Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm run typecheck` | Check TypeScript types |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm audit` | Check dependencies for known vulnerabilities |
| `pnpm add package-name` | Add a dependency |
| `pnpm add -D package-name` | Add a development dependency |
| `pnpm remove package-name` | Remove a dependency |

To check and preview a production build:

```powershell
pnpm run typecheck
pnpm build
pnpm start
```

Run commands one at a time and resolve errors before continuing.

Use `pnpm dev` while editing. `pnpm start` serves the most recent production build; changes require rebuilding.

## Files and Maintenance

Paths are relative to the repository root.

| File or directory | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage content, hero, project data, education, and section composition |
| `app/layout.tsx` | Root layout, fonts, metadata, and stylesheet imports |
| `app/globals.css` | Base styles and shared rules |
| `app/clay.css` | Clay styling and component treatments |
| `app/forest.css` | Forest-and-cream theme overrides |
| `app/spacing.css` | Spacing, alignment, and responsive layout adjustments |
| `app/robots.ts` | Crawler instructions |
| `app/sitemap.ts` | Sitemap generation |
| `components/portfolio-motion.tsx` | Portfolio animation behavior |
| `components/animated-name.tsx` | Hero name animation |
| `components/mobile-nav.tsx` | Mobile navigation |
| `components/cv-preview.tsx` | CV preview dialog and download control |
| `components/cv-preview.module.css` | CV dialog styling |
| `app/news/news-list.ts` | News entries and dates |
| `components/recent-news.tsx` | News rendering and date formatting |
| `components/recent-news.module.css` | News styles |
| `components/experience.tsx` | Work experience and voluntary roles |
| `components/experience.module.css` | Experience layout and organization logos |
| `components/voluntary-certificates.tsx` | Expandable voluntary certificate links |
| `components/toolkit.tsx` | Technology groups and icons |
| `components/toolkit.module.css` | Toolkit styling |
| `components/project-tags.tsx` | Project technology tags |
| `components/certifications.tsx` | Certifications, training, and PDF links |
| `components/certifications.module.css` | Certification layout |
| `components/contact-form.tsx` | Contact validation, submission, and feedback |
| `app/articles/article-list.ts` | Published article metadata |
| `components/article-cards.tsx` | Article previews and empty state |
| `app/articles/` | Article pages and shared article styling |
| `public/images/` | Portrait and other image assets |
| `public/favicon.svg` | Custom favicon |
| `public/logos/` | Organization logos |
| `public/projects/` | Project cover images |
| `public/Sadman_Sami_Khan_CV.pdf` | CV document |
| `public/thesis/AdaPrunerKGQA-thesis.pdf` | Thesis document |
| `public/certificates/` | Certificate PDFs |
| `package.json` | Dependencies, scripts, and package-manager version |
| `pnpm-lock.yaml` | Resolved dependency versions |

Stylesheets are imported in this order:

```tsx
import "./globals.css";
import "./clay.css";
import "./forest.css";
import "./spacing.css";
```

Later styles can override earlier rules. When changing an existing layout, update its relevant rules and remove obsolete overrides to avoid conflicting styles.

## Updating Content

### Hero and About

Edit `app/page.tsx`.

Keep the name, designation, availability badge, introduction, and action controls in their existing elements so their responsive styles continue to apply.

### Recent News

Edit `app/news/news-list.ts` using the existing entry structure.

Use unique IDs and dates in `YYYY-MM-DD` format. The news component handles the displayed date format.

### Projects

Edit the `projects` array in `app/page.tsx`.

Keep repository links, technology tags, supervisor details, and downloadable document paths accurate.

Place project cover images in `public/projects/` and reference them without the `public` prefix:

```ts
image: "/projects/adapruner-kgqa.webp",
```

Keep cover images consistent with the aspect ratio defined by the project-cover styles.

### Education

Edit the education section in `app/page.tsx`.

The section includes:

- Undergraduate degree with the year `2026`, CGPA, and relevant coursework.
- HSC with the year `2020`, GPA, and scholarship recognition.
- SSC with the year `2018`, GPA, and scholarship recognition.

Coursework is displayed as wrapping tags. Keep course names readable on small screens.

### Articles

1. Create the article page under `app/articles/<your-slug>/page.tsx`.
2. Add its content and export the page component.
3. Add matching metadata to `app/articles/article-list.ts`.
4. Add page-specific SEO metadata and a canonical URL.
5. Check the article page, homepage preview, and sitemap.

Keep the article array explicitly typed when empty. The homepage displays “No articles for now.” when no entries are published.

### CV, Thesis, and Certificates

Store documents inside `public/`. Public URLs omit the directory name:

```text
File: public/certificates/python-basics.pdf
URL:  /certificates/python-basics.pdf
```

The hero's Download CV action opens an in-page preview. Visitors can download the PDF using the control inside the dialog.

PDF preview support depends on the browser. The download link remains available if the embedded preview cannot be displayed.

Update certificate links in:

- `components/certifications.tsx`
- `components/voluntary-certificates.tsx`

Match filenames and capitalization exactly. When renaming an asset, update all references to it.

## Animation and Accessibility

- Motion powers the animated name and selected component effects.
- Viewport observation triggers entrance animations.
- The availability dot uses a repeating CSS pulse.
- Reduced-motion preferences should be respected by animated components.
- Interactive controls include visible keyboard focus states.
- The CV preview uses a native dialog with a labeled close control.
- Navigation links must match their destination section IDs.

Mount `PortfolioMotion` once on the homepage. Avoid applying multiple entrance-animation systems to the same elements.

When adjusting the persistent navbar, preserve enough anchor offset to keep section headings visible.

## Contact Form

The form submits the visitor's name, email, subject, and message to Formspree without opening an email application.

It includes:

- Required fields and input validation.
- Length limits.
- A sending state that prevents repeated submissions.
- Success and error messages.
- A direct email link as a fallback.

Email validation checks formatting, not whether an inbox exists.

The Formspree endpoint is configured in `components/contact-form.tsx`. Notification recipients are managed through the Formspree dashboard.

A successful request confirms that Formspree accepted the submission; it does not independently confirm inbox delivery.

To reuse the project, replace the endpoint with your own Formspree form. Do not add Gmail passwords or private SMTP credentials to frontend code.

## SEO and Sharing

SEO configuration includes page metadata, crawler instructions, and sitemap generation.

When changing the production domain or adding pages, review:

- `metadataBase` and page metadata.
- Canonical URLs.
- Open Graph and Twitter preview metadata and images.
- The sitemap URL in `app/robots.ts`.
- URLs generated by `app/sitemap.ts`.

Only include published article pages in the sitemap. Check that social preview images are publicly accessible after deployment.

## Deployment

The portfolio is hosted on Vercel.

### GitHub Deployment

With the repository connected to Vercel and `main` configured as the production branch:

```powershell
git push origin main
```

Keep `pnpm-lock.yaml` committed and use the pnpm version specified in `package.json`.

Review the deployment logs and wait for the deployment to become Ready before checking the live site.

### Manual Deployment

From the repository root:

```powershell
pnpm dlx vercel@latest --prod --scope sadmantihan
```

If authentication is required:

```powershell
pnpm dlx vercel@latest login
```

Link to the existing `sadman-sami-khan` project when prompted.

Commit intended changes before deploying so the deployed version can be traced through Git history. A separate manual deployment is unnecessary when Git integration has already deployed the same commit.

## Version Control

Before committing functional changes:

```powershell
git status
git diff
pnpm run typecheck
pnpm build
```

Stage only the intended files.

When changing dependencies, commit both `package.json` and `pnpm-lock.yaml`. Use pnpm consistently rather than generating another `package-lock.json`.

Do not commit:

- `node_modules/`
- `.next/`
- `.vercel/`
- Private environment files or credentials

Run `pnpm audit` when reviewing dependency security. Investigate findings before applying updates.

For a README-only update:

```powershell
git add README.md
git commit -m "docs: update portfolio features and maintenance guide"
git push origin main
```

## Contact

- **Email:** [samisadman6@gmail.com](mailto:samisadman6@gmail.com)
- **GitHub:** [sadmantihan](https://github.com/sadmantihan)
- **LinkedIn:** [Md Sadman Sami Khan](https://www.linkedin.com/in/md-sadman-sami-khan)
- **WhatsApp:** [Send a message](https://wa.me/8801704776493)