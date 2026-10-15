# Md Sadman Sami Khan — Personal Portfolio

My personal portfolio showcasing research, full-stack projects, professional experience, leadership activities, and qualifications.

I am a Computer Science and Engineering graduate from the University of Chittagong, interested in data science, machine learning, knowledge graphs, and their applications in FinTech.

**Website:** [sadman-sami-khan.vercel.app](https://sadman-sami-khan.vercel.app/)

## Overview

The portfolio uses a responsive, light-only claymorphism design with forest accents and a cream background.

It includes:

- A responsive hero with an animated name, professional portrait, availability badge, and social links.
- Recent news with exact dates.
- Professional background and interests.
- Interactive project and thesis previews.
- Work experience and voluntary activities.
- A grouped technology toolkit with brand logos.
- Education, relevant coursework, certifications, and training.
- Article previews with an empty state.
- An in-page CV viewer and PDF downloads.
- A contact form connected to Formspree.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js App Router | Application framework, routing, metadata, and builds |
| React | User interface components |
| TypeScript | Static type checking |
| Tailwind CSS | Utility styling |
| CSS and CSS Modules | Theme, responsive layouts, and component styling |
| Motion | Name animation, scroll reveals, and interaction feedback |
| React-PDF and PDF.js | In-page CV rendering |
| Radix UI | Accessible UI primitives, including mobile navigation |
| Lucide React | Interface and decorative icons |
| React Icons | Social and technology brand icons |
| `next/font` | Font loading and optimization |
| `next/image` | Image rendering and optimization |
| Formspree | Contact form submission handling |
| pnpm | Dependency management |
| Vercel | Hosting and deployment |
| Git and GitHub | Version control and source hosting |

See `package.json` for declared dependencies and `pnpm-lock.yaml` for resolved versions.

## Design and Responsive Layout

- Forest-and-cream color theme.
- Rounded cards with outlines, offset shadows, and inner highlights.
- Fredoka display typography and locally loaded Nunito body typography.
- Spacing organized primarily around an 8px scale.
- Persistent navigation and a compact mobile sidebar.
- Responsive project grids and education cards.
- Wrapping technology and coursework tags.
- Original brand colors for technology logos.
- Visible keyboard focus states.
- Reduced-motion handling for portfolio animations.

### Hero

The hero includes:

- “HELLO, THIS IS”
- Md Sadman Sami Khan
- An availability badge with a pulsing green dot
- “CSE Graduate | Data Science & ML Enthusiast”
- A professional introduction
- Explore My Work and Download CV actions
- Portrait, location, and social links

On mobile, the portrait block appears below the availability badge, followed by the designation, introduction, and action buttons. Desktop retains a side-by-side layout.

## Sections

1. Hero
2. Recent News
3. About
4. Projects & Thesis
5. Experience
6. Articles
7. Skills
8. Education and Certifications
9. Contact

## Features

### Project Previews

Project cards open an in-page detail dialog.

Each preview can display:

- A cover image or fallback icon.
- A category label.
- Project title and description.
- Technology tags.
- A GitHub source-code link.
- Supervisor attribution and research results, where applicable.
- A thesis download link, where applicable.

The preview avoids repeating the project type beneath the category label. It includes a close control, a scrollable content area, and focus restoration when closed.

The project title is a button so the preview can also be opened using a keyboard.

### Featured Projects

| Project | Description |
| --- | --- |
| [BuildMaster](https://github.com/sadmantihan/buildmaster) | A PHP and MySQL workforce management application with role-based dashboards. |
| [AdaPruner-KGQA](https://github.com/sadmantihan/AdaPruner-KGQA) | Undergraduate research on adaptive, uncertainty-aware search-space pruning for multi-hop knowledge graph reasoning. |

### CV Preview

The hero’s Download CV action opens a dialog within the portfolio.

- React-PDF renders the document instead of relying on a browser PDF iframe.
- Pages resize to the available preview width.
- The document area supports scrolling.
- Text and annotation layers support selectable text and PDF links.
- Loading and error messages provide feedback.
- A separate Download control saves the PDF.
- The PDF renderer is dynamically loaded when the preview is opened.
- Background page scrolling is disabled while the dialog is open.

The PDF.js worker is configured in `components/cv-document.tsx`.

### Motion and Interactions

- Animated name introduction.
- Scroll-triggered entrance effects for selected sections and cards.
- Hover feedback for supported mouse and trackpad interactions.
- Press feedback for selected buttons and links.
- Touch feedback for cards and the portrait.
- Touch effects cancel when the gesture becomes a scroll.
- Reduced-motion and print handling in the portfolio motion controller.

Touch devices use press feedback rather than persistent hover states.

### Experience and Qualifications

- Work experience on the World Bank-funded BDAI-HEAT project.
- Leadership and voluntary activities.
- Organization logos and certificate links.
- Separate undergraduate, HSC, and SSC cards.
- Education year badges: 2026, 2020, and 2018.
- GPA and CGPA badges.
- Relevant undergraduate coursework tags.
- Board-merit scholarship recognition.
- Certifications and training with PDF links.

### Articles and News

Recent News displays dated updates, including the weekday.

Articles are maintained separately from their preview component. When no articles are published, the homepage displays an empty-state message.

### Contact

The contact form submits name, email, subject, and message to Formspree.

It includes:

- Required fields and input validation.
- Input length limits.
- Sending feedback and duplicate-submission prevention while sending.
- Success and error messages.
- A direct email link.

Email validation checks formatting; it does not confirm that an inbox exists. A successful submission confirms acceptance by Formspree, not delivery to the recipient’s inbox.

## Local Development

### Requirements

- Node.js 22.13.0 or later, as declared in `package.json`.
- pnpm 10.34.7, as declared in the `packageManager` field.
- Git.

### Installation

```powershell
git clone https://github.com/sadmantihan/sadman-portfolio.git
cd sadman-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm run typecheck` | Run TypeScript checks |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm audit` | Check dependencies for reported vulnerabilities |

To preview a production build:

```powershell
pnpm run typecheck
pnpm build
pnpm start
```

Run each command separately and resolve errors before continuing.

`pnpm start` serves the existing production build. Rebuild after changing source files.

### React-PDF and pnpm Configuration

The root `.npmrc` contains:

```ini
public-hoist-pattern[]=pdfjs-dist
```

Keep this configuration committed alongside the dependency files.

If pnpm reports `ERR_PNPM_PUBLIC_HOIST_PATTERN_DIFF` after changing `.npmrc`, run:

```powershell
pnpm install
```

Allow pnpm to recreate the modules directory if prompted, then retry the original command.

## Important Files

Paths below are relative to the repository root.

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage content, navigation, project data, education, and section composition |
| `app/layout.tsx` | Fonts, root layout, metadata, and stylesheet imports |
| `app/globals.css` | Base and shared styles |
| `app/clay.css` | Clay component styling |
| `app/forest.css` | Forest-and-cream theme |
| `app/spacing.css` | Spacing, alignment, and responsive adjustments |
| `app/fonts/Nunito-Variable.ttf` | Local body font |
| `app/robots.ts` | Crawler instructions |
| `app/sitemap.ts` | Sitemap generation |
| `components/mobile-nav.tsx` | Mobile sidebar navigation |
| `components/animated-name.tsx` | Hero name animation |
| `components/portfolio-motion.tsx` | Scroll, hover, press, and touch effects |
| `components/cv-preview.tsx` | CV dialog and download controls |
| `components/cv-document.tsx` | React-PDF rendering and worker setup |
| `components/cv-preview.module.css` | CV dialog and PDF viewer styling |
| `components/project-preview.tsx` | Project detail dialog |
| `components/project-preview.module.css` | Project preview styling |
| `components/project-tags.tsx` | Project technology tags |
| `app/news/news-list.ts` | News data |
| `components/recent-news.tsx` | News rendering and date formatting |
| `components/recent-news.module.css` | News styling |
| `components/experience.tsx` | Work and voluntary experience |
| `components/experience.module.css` | Experience styling |
| `components/voluntary-certificates.tsx` | Expandable voluntary certificate links |
| `components/toolkit.tsx` | Technology groups and icons |
| `components/toolkit.module.css` | Toolkit styling |
| `components/certifications.tsx` | Certifications and training |
| `components/certifications.module.css` | Certification styling |
| `components/contact-form.tsx` | Contact validation and submission |
| `app/articles/article-list.ts` | Published article metadata |
| `components/article-cards.tsx` | Article previews and empty state |
| `.npmrc` | pnpm configuration for PDF.js resolution |
| `package.json` | Dependencies, scripts, and package-manager version |
| `pnpm-lock.yaml` | Resolved dependency versions |

### Stylesheet Order

The root layout imports styles in this order:

```tsx
import "./globals.css";
import "./clay.css";
import "./forest.css";
import "./spacing.css";
```

Later rules can override earlier rules depending on specificity. When adjusting layouts, update the relevant existing rules and remove obsolete overrides.

## Updating Content

### Hero, About, and Education

Edit `app/page.tsx`.

Keep the existing structural classes when changing text so responsive layouts continue to work.

Education includes the undergraduate degree, relevant coursework, HSC, SSC, results, and scholarship recognition.

### Navigation

Desktop navigation is defined in `app/page.tsx`.

Mobile navigation is defined in `components/mobile-nav.tsx`.

Keep both lists synchronized. Each link must match a section ID.

The brand logo links to `#home`, which can remain available even without a Home menu item.

### Projects

Edit the `projects` array in `app/page.tsx`.

The card and preview dialog use the same project data. Optional fields include:

- `supervisor`
- `supervisorUrl`
- `thesisPdf`
- `detail`

To add a cover image, place it in `public/projects/` and reference it without the `public` prefix:

```ts
image: "/projects/buildmaster.webp",
```

An empty image value uses the configured fallback icon.

Choose images that remain readable when cropped to the card and preview cover proportions.

### Recent News

Edit `app/news/news-list.ts` using the existing data structure.

Use unique IDs and dates in `YYYY-MM-DD` format. The news component handles display formatting.

### Articles

1. Create a page under `app/articles/<slug>/page.tsx`.
2. Add the article content.
3. Add matching metadata to `app/articles/article-list.ts`.
4. Set article-specific metadata and its canonical URL.
5. Check the page, homepage preview, and sitemap.

Keep the article array explicitly typed when it is empty. Only list published pages.

### Documents and Images

| Asset | Location |
| --- | --- |
| Portrait | `public/images/sadman-profile.jpeg` |
| Favicon | `public/favicon.svg` |
| Organization logos | `public/logos/` |
| Project covers | `public/projects/` |
| CV | `public/Sadman_Sami_Khan_CV.pdf` |
| Thesis | `public/thesis/AdaPrunerKGQA-thesis.pdf` |
| Certificates | `public/certificates/` |

Public URLs omit `public`:

```text
File: public/certificates/example.pdf
URL:  /certificates/example.pdf
```

Match filenames and capitalization exactly.

Update certificate links in:

- `components/certifications.tsx`
- `components/voluntary-certificates.tsx`

If the CV filename changes, update `CV_URL` in `components/cv-preview.tsx`.

## Contact Form Configuration

The Formspree endpoint is configured in `components/contact-form.tsx`.

Notification recipients are managed through the Formspree dashboard. To reuse this project, configure your own form endpoint.

The endpoint is a public submission URL. Private email passwords, SMTP credentials, and other secrets must not be placed in frontend code.

## SEO and Social Sharing

The portfolio includes:

- Page titles and descriptions.
- A metadata base URL.
- A homepage canonical URL.
- Open Graph metadata.
- Twitter large-image card metadata.
- Favicon configuration.
- Crawler instructions.
- Sitemap generation.

Social preview metadata references:

```text
/opengraph-image.png
/twitter-image.png
```

When changing the domain, review:

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- Page-specific metadata

New article pages should define their own canonical URLs rather than inherit the homepage canonical.

Check that social preview images and downloadable documents are publicly accessible after deployment.

## Accessibility and Performance

Implementation choices include:

- Optimized font loading with `display: swap`.
- Next.js image rendering.
- Dynamically loaded CV rendering.
- Viewport-based animation triggers.
- Reduced-motion handling.
- Labeled dialogs and close controls.
- Keyboard-accessible project preview buttons.
- Visible focus styles.
- Touch feedback that preserves scrolling.

These features do not replace testing. Check keyboard navigation, mobile scrolling, contrast, document previews, and production performance after significant changes.

## Deployment

The portfolio is hosted on Vercel.

### GitHub Integration

When the repository is connected to Vercel and `main` is configured as the production branch:

```powershell
git push origin main
```

Wait for the deployment to become Ready before checking the live site.

Keep `pnpm-lock.yaml`, `.npmrc`, and the `packageManager` field committed.

### Manual Deployment

From the repository root:

```powershell
pnpm dlx vercel@latest --prod --scope sadmantihan
```

If authentication is required:

```powershell
pnpm dlx vercel@latest login
```

Use the existing `sadman-sami-khan` Vercel project when linking.

A separate manual deployment is unnecessary when Git integration has already deployed the same commit.

## Version Control

Before committing code changes:

```powershell
git status
git diff
pnpm run typecheck
pnpm build
```

Stage only the intended files.

When changing dependencies, commit both `package.json` and `pnpm-lock.yaml`. Commit `.npmrc` changes when package-manager configuration changes.

Use pnpm consistently rather than generating another `package-lock.json`.

Do not commit generated directories or private credentials, including:

- `node_modules/`
- `.next/`
- `.vercel/`
- Private environment files

For a documentation-only update:

```powershell
git add README.md
git commit -m "docs: document project previews, React-PDF viewer and responsive interactions"
git push origin main
```

## Contact

- **Email:** [samisadman6@gmail.com](mailto:samisadman6@gmail.com)
- **GitHub:** [sadmantihan](https://github.com/sadmantihan)
- **LinkedIn:** [Md Sadman Sami Khan](https://www.linkedin.com/in/md-sadman-sami-khan)
- **WhatsApp:** [Send a message](https://wa.me/8801704776493)