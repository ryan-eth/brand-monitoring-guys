import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-base sm:text-lg text-white font-serif" style={{ fontWeight: 300, letterSpacing: '0.02em' }}>
                Brand Monitoring Guys
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-white/60">
              Protecting your brand from impersonators and scams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-extralight mb-3 sm:mb-4 text-white text-sm sm:text-base">Product</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/60">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-extralight mb-3 sm:mb-4 text-white text-sm sm:text-base">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/60">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-extralight mb-3 sm:mb-4 text-white text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/60">
              <li>
                <Link href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
          <p className="text-xs sm:text-sm text-center text-white/60">
            &copy; {currentYear} Brand Monitoring Guys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
