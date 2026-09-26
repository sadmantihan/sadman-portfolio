# Sadman Sami Khan — Next.js portfolio

Standard Next.js App Router + TypeScript + Tailwind CSS. Ready for Vercel.
White/violet light theme and black/violet dark theme are preserved.
The portrait and About statistics row have been removed. Articles remain.

## Run on Windows / PowerShell
Install Node.js 22.13+ (Node 22 LTS is suitable).
Extract this ZIP into a NEW folder; do not merge with the old Vinext project.
Open the extracted folder containing package.json in VS Code.

```powershell
npm install
npm run dev
```
Open http://localhost:3000. No pnpm is required.

## Verify production
```powershell
npm run build
npm start
```

## Deploy to Vercel without GitHub
1. Create or sign in to your account at https://vercel.com.
2. Open PowerShell in this project's folder (where package.json is).
3. Run `npx vercel login` and finish login in your browser.
4. Run `npx vercel --prod`.
5. Accept setup, select your account, choose not to link an existing project,
   name the project `sadman-portfolio`, and use `./` for the code directory.
6. Accept the detected Next.js settings. No environment variables are needed.
7. Open the production URL printed by Vercel.

If asked to install the Vercel CLI package by npx, choose yes.
For subsequent updates, run `npx vercel --prod` in this same folder.

## Optional GitHub deployment
Create a GitHub repository and push the CONTENTS of this project folder.
Do not commit node_modules, .next, or .vercel.
On Vercel select Add New > Project, import the GitHub repository, and use:
- Framework preset: Next.js
- Root directory: directory containing package.json
- Build command: npm run build
- Output directory: leave the Next.js default
- Install command: npm install (or npm ci if the included lockfile is present)
- Environment variables: none
Click Deploy. Future pushes to the production branch trigger redeployment.

## Contact form
The form collects name, reply email, subject, and message, then opens an email
application using mailto. It does NOT send mail from a server or store messages.
Visitors review and send the draft in their mail application. A direct email
link is also supplied. Actual in-page email delivery needs an email provider
and a server-side integration; no credentials are included or required here.

## Edit
- app/page.tsx: portfolio sections and text
- app/globals.css: colors, typography, layout
- components/contact-form.tsx: email draft form
- app/layout.tsx: metadata
- public/Sadman_Sami_Khan_CV.pdf: downloadable CV

Your CGPA remains under Education and in the original downloadable CV.
The previous ChatGPT-hosted site is separate from this Vercel-ready export.

Official deployment references:
https://vercel.com/docs/frameworks/full-stack/nextjs
https://vercel.com/docs/cli/deploy
