import type { Metadata } from "next"
import { Inter, Inria_Serif } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inria-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Brand Monitoring Guys - Stop Brand Impersonation",
    template: "%s | Brand Monitoring Guys",
  },
  description:
    "We help our customers find and take down scams when someone pretends to be your brand - providing monitoring and escalation of fake stores, scam ads, and impersonation accounts.",
  keywords: [
    "brand monitoring",
    "brand protection",
    "impersonation detection",
    "scam detection",
    "fake store detection",
    "brand security",
  ],
  authors: [{ name: "Brand Monitoring Guys" }],
  creator: "Brand Monitoring Guys",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandmonitoringguys.com",
    title: "Brand Monitoring Guys - Stop Brand Impersonation",
    description:
      "We help our customers find and take down scams when someone pretends to be your brand.",
    siteName: "Brand Monitoring Guys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Monitoring Guys - Stop Brand Impersonation",
    description:
      "We help our customers find and take down scams when someone pretends to be your brand.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${inriaSerif.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
