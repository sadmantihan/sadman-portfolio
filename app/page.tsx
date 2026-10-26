import type { Metadata } from "next";
import Home from "./home";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Md Sadman Sami Khan",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Md Sadman Sami Khan — CSE, University of Chittagong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/twitter-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Md Sadman Sami Khan",
      alternateName: "Md. Sadman Sami Khan",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/sadman-profile.png`,
      description: HOME_DESCRIPTION,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Chittagong",
        url: "https://cu.ac.bd/cse/",
      },
      knowsAbout: [
        "Computer Science and Engineering",
        "Data Science",
        "Machine Learning",
        "Knowledge Graphs",
      ],
      sameAs: [
        "https://github.com/sadmantihan",
        "https://www.linkedin.com/in/md-sadman-sami-khan",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Md Sadman Sami Khan",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: HOME_TITLE,
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <Home />
    </>
  );
}