"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Technology", href: "#tech" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100/50 p-2 text-[#EC4899] shadow-sm">
            <Activity size={24} strokeWidth={2.5} />
          </div>
          <span className="hidden font-bold tracking-tight text-slate-800 sm:inline-block">
            Detection of <span className="text-[#EC4899]">Breast Cancer</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#EC4899]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="rounded-full shadow-lg hover:-translate-y-0.5 transition-transform">
            <Link href="https://yaxhjbdpx2c3neepbau2hd.streamlit.app/" target="_blank" rel="noreferrer">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-b border-pink-100 bg-white"
        >
          <div className="container flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#EC4899]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-[80%] rounded-full shadow-lg">
              <Link href="https://yaxhjbdpx2c3neepbau2hd.streamlit.app/" target="_blank" rel="noreferrer">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
