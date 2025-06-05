"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "./theme-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"

const PremiumNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || pathname !== "/"
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 shadow-xl shadow-slate-900/5"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-xl mr-4">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">SRNR IT SOLUTIONS</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium tracking-wider">
                  PREMIUM TECHNOLOGY
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div
                    className={`absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-lg ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </Link>
              )
            })}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 ml-4"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* Premium CTA */}
            <div className="ml-4">
              <Link
                href="/get-started"
                className="relative group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/20 dark:border-slate-700/20 px-6 py-6 space-y-4">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-800"
                    : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
          <Link
            href="/get-started"
            className="block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default PremiumNavbar
