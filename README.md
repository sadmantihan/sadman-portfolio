# Md. Sadman Sami Khan — Personal Portfolio

My personal portfolio showcasing projects, research, technical skills, education, certifications, and articles, with a focus on data analysis, AI/ML, and software development.

**Website:** [sadman-sami-khan.vercel.app](https://sadman-sami-khan.vercel.app/)

**Repository:** [sadmantihan/sadman-portfolio](https://github.com/sadmantihan/sadman-portfolio)

## Features

- Responsive layout with desktop navigation and a mobile sidebar.
- Light and dark themes with a saved theme preference.
- Project cards with technology logos and GitHub Source Code buttons.
- Toolkit section with technology icons, including MASM.
- Education details and HSC/SSC Board-merit scholarship recognition.
- Certifications with PDF links and a separate Other Training group for the Flutter EDGE course.
- Downloadable CV and individual article pages.
- Contact form that submits through Formspree without opening an email application.

## Technology Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4, global CSS, and CSS Modules
- Radix UI, Lucide React, and React Icons
- Formspree for contact submissions and email notifications
- Vercel for hosting

## Run Locally

Install Git and Node.js 22.13.0 or newer, with npm. Run these commands in your terminal or Windows PowerShell:

```bash
git clone https://github.com/sadmantihan/sadman-portfolio.git
cd sadman-portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you already have the project locally, open the folder containing `package.json` and run the npm commands above.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build locally |

To check the production version:

```bash
npm run build
npm start
```

## Where to Make Changes

| File or directory | What to edit |
| --- | --- |
| `app/page.tsx` | Homepage content, projects, education, and section layout |
| `app/globals.css` | Global colors, typography, layout, and Source Code button styles |
| `app/layout.tsx` | Site metadata and root layout |
| `components/mobile-nav.tsx` | Mobile sidebar navigation |
| `components/toolkit.tsx` | Skill categories, technology names, and logos |
| `components/toolkit.module.css` | Toolkit and project technology badge styles |
| `components/project-tags.tsx` | Project technology icons |
| `components/certifications.tsx` | Course details, training groups, and certificate links |
| `components/certifications.module.css` | Certification layout and responsive styles |
| `components/contact-form.tsx` | Contact form fields, submission handling, and Formspree endpoint |
| `app/articles/article-list.ts` | Article titles, summaries, categories, and slugs |
| `app/articles/<slug>/page.tsx` | Individual article content |
| `public/Sadman_Sami_Khan_CV.pdf` | Downloadable CV |
| `public/certificates/` | Certificate PDFs |

## Certificates

Keep the certificate files in `public/certificates/`:

- `data-science-machine-learning.pdf`
- `python-basics.pdf`
- `data-science-math-skills.pdf`
- `edge-flutter.pdf`

Reference them without `public` in the URL. For example:

```tsx
pdf: "/certificates/python-basics.pdf"
```

When adding or renaming a certificate, update its entry in `components/certifications.tsx` and commit the PDF alongside the code change.

## Contact Form

The form collects the visitor's name, email, subject, and message, then submits them to Formspree. It displays a sending state and a success or error message. A direct email link remains available as a fallback.

Formspree manages submission storage and email notifications. The notification recipient should be configured as **samisadman6@gmail.com** in the Formspree dashboard.

To configure your own copy:

1. Create a [Formspree account](https://formspree.io/) and verify your email.
2. Create a form and configure its notification recipient.
3. Copy the form endpoint from the Integration section.
4. Replace `FORM_ENDPOINT` in `components/contact-form.tsx` with your endpoint.
5. Submit a test message and check both the Formspree dashboard and the recipient's inbox or Spam folder.

A website success message confirms that Formspree accepted the submission; inbox delivery should be checked separately. Formspree account limits and notification settings apply.

The current implementation does not require environment variables or a Gmail password. If you fork this repository, replace the endpoint so submissions go to your own Formspree form.

## Deploy to Vercel

1. Sign in to [Vercel](https://vercel.com/) and import the GitHub repository as a new project.
2. Select **Next.js** as the framework and the folder containing `package.json` as the root directory.
3. Use `npm run build` as the build command and keep the default Next.js output settings.
4. Deploy the project.

For a connected Git repository, pushes to the configured production branch trigger production deployments. Other branches can generate preview deployments.

For future changes, create a Git branch, review the diff, run the relevant checks, and commit your changes. Push the branch and merge it into the production branch when ready.

## Contact

- Email: [samisadman6@gmail.com](mailto:samisadman6@gmail.com)
- GitHub: [sadmantihan](https://github.com/sadmantihan)
- LinkedIn: [Md. Sadman Sami Khan](https://linkedin.com/in/md-sadman-sami-khan)

## Documentation

- [Next.js documentation](https://nextjs.org/docs)
- [Vercel Git deployment](https://vercel.com/docs/git)
- [Formspree form setup](https://help.formspree.io/articles/building-your-form/building-an-html-form)