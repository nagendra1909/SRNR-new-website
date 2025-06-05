import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PremiumNavbar from "@/components/premium-navbar"

export const metadata: Metadata = {
  title: "SRNR IT Solutions - Premium Technology Services",
  description: "Transform your business with cutting-edge technology solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {/* Global Navbar - Present on all pages */}
          <PremiumNavbar />

          {/* Page Content with top padding to account for fixed navbar */}
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
