import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Detection of Breast Cancer | Explainable AI System",
  description: "Adaptive Hybrid Deep-Radiomic Feature Fusion System for Explainable Breast Cancer Detection. A modern AI-assisted healthcare tool.",
  authors: [{ name: "Drishti Verma" }, { name: "Arush Pradhan" }, { name: "Aarav Parikh" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
