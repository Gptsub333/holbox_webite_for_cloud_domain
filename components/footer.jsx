"use client"

import Link from "next/link"
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-muted dark:bg-gray-900 py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8aae88cca859143b1ef0_full-logo.svg"
                alt="HolboxAI Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Enterprise grade Generative AI deployed on your cloud. Our solutions transform businesses through
              cutting-edge artificial intelligence, enhancing productivity and driving innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+15551234567" className="hover:text-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@holboxai.cloud" className="hover:text-foreground transition-colors">
                  info@holboxai.cloud
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>701 Tillery Street Unit 12 1850, Austin, TX 78702</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              <Link
                href="/about-us"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <nav className="space-y-2">
              <Link
                href="/type-of-service"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                By Type Of Services
              </Link>
              <Link
                href="/industry"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                By Industry
              </Link>
              <Link
                href="/smart-assistant-for-employees"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Smart Assistant For Employees
              </Link>
              <Link
                href="/customer-service"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                AI Powered Customer Service
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              <Link
                href="/blogs"
                onClick={scrollToTop}
                className="block py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 HolboxAI. All rights reserved</p>

            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex gap-3">
                <a
                  href="https://in.linkedin.com/company/holboxai"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://twitter.com/holboxai"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                  rel="noreferrer"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="mailto:info@holboxai.cloud"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="flex gap-6">
                <Link
                  href="/privacy-policy"
                  onClick={scrollToTop}
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  onClick={scrollToTop}
                  className="text-muted-foreground text-sm hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

