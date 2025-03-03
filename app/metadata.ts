import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://resumate.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "ResuMate - AI-Powered Resume Builder & Interview Coach",
    template: "%s | ResuMate"
  },
  description: "Create professional resumes and prepare for interviews with AI-powered tools, real-time feedback, and personalized coaching.",
  keywords: [
    "resume builder",
    "AI interview coach",
    "career development",
    "job search",
    "interview preparation",
    "professional resume",
    "career guidance"
  ],
  authors: [
    {
      name: "ResuMate Team",
      url: baseUrl,
    },
  ],
  creator: "ResuMate",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "ResuMate - AI-Powered Resume Builder & Interview Coach",
    description: "Create professional resumes and prepare for interviews with AI-powered tools.",
    siteName: "ResuMate",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ResuMate - AI-Powered Resume Builder & Interview Coach"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ResuMate - AI-Powered Resume Builder & Interview Coach",
    description: "Create professional resumes and prepare for interviews with AI-powered tools.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@resumate"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${baseUrl}/site.webmanifest`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}