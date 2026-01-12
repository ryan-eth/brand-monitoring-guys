"use client"

import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg sm:text-xl text-white font-serif" style={{ fontWeight: 300 }}>
              Brand Monitoring Guys
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-zinc-900 border-zinc-800">
                <DropdownMenuItem asChild className="text-white/80 focus:text-white focus:bg-zinc-800">
                  <Link href="/blog">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-white/80 focus:text-white focus:bg-zinc-800">
                  <Link href="#case-studies">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-white/80 focus:text-white focus:bg-zinc-800">
                  <Link href="#faq">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Buttons */}
            <Link href="#contact">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30 rounded-md px-5"
              >
                Talk about coverage
              </Button>
            </Link>
            <Link href="#report">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90 rounded-md px-5 font-normal"
              >
                Report an Issue
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/blog"
              className="block text-sm text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#case-studies"
              className="block text-sm text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="#faq"
              className="block text-sm text-white/80 hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 space-y-3">
              <Link href="#contact" className="block">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Talk about coverage
                </Button>
              </Link>
              <Link href="#report" className="block">
                <Button size="sm" className="w-full bg-white text-black hover:bg-white/90">
                  Report an Issue
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
