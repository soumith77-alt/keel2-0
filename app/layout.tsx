import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import StartupLoader from "@/components/startup-loader";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keel - AI Receptionist for Service Businesses",
  description:
    "Turn every missed call into a booked client with 24/7 AI-powered receptionist and follow-up automations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {/* <StartupLoader /> */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
