"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleDropdownItemClick = () => {
    setActiveDropdown(null)
    scrollToTop()
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.2 } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className={`navbar ${scrolled ? "py-2 shadow-md" : "py-4"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={scrollToTop}>
            <img
              src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8aae88cca859143b1ef0_full-logo.svg"
              alt="HolboxAI"
              className="h-8 w-auto transition-all duration-300 dark:filter dark:brightness-0 dark:invert dark:sepia dark:hue-rotate-[170deg] dark:saturate-[6]"
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <nav className="flex space-x-6">
              <div
                className="relative group dropdown-container"
                onMouseEnter={() => handleMouseEnter("aiPlatform")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="px-3 py-2 flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                  aria-expanded={activeDropdown === "aiPlatform"}
                  aria-controls="ai-platform-dropdown"
                >
                  AI Platform{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "aiPlatform" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "aiPlatform" && (
                    <motion.div
                      id="ai-platform-dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <Link
                        href="/smart-assistant-for-employees"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        Smart Assistant For Employees
                      </Link>
                      <Link
                        href="/customer-service"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        AI Powered Customer Service
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative group dropdown-container"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="px-3 py-2 flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                  aria-expanded={activeDropdown === "solutions"}
                  aria-controls="solutions-dropdown"
                >
                  Solutions{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "solutions" && (
                    <motion.div
                      id="solutions-dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <Link
                        href="/type-of-service"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        By Type Of Services
                      </Link>
                      <Link
                        href="/industry"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        By Industry
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative group dropdown-container"
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="px-3 py-2 flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                  aria-expanded={activeDropdown === "company"}
                  aria-controls="company-dropdown"
                >
                  Company{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "company" && (
                    <motion.div
                      id="company-dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <Link
                        href="/about-us"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/blogs"
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                        onClick={handleDropdownItemClick}
                      >
                        Blogs
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Link href="/contact-us" className="hidden md:inline-flex btn-primary" onClick={scrollToTop}>
              Contact us
            </Link>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden mt-4 py-4 border-t border-border"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-foreground"
                    onClick={() => toggleDropdown("aiPlatformMobile")}
                    aria-expanded={activeDropdown === "aiPlatformMobile"}
                    aria-controls="ai-platform-mobile-dropdown"
                  >
                    <span>AI Platform</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === "aiPlatformMobile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "aiPlatformMobile" && (
                      <motion.div
                        id="ai-platform-mobile-dropdown"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 space-y-2 border-l-2 border-border"
                      >
                        <Link
                          href="/smart-assistant-for-employees"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          Smart Assistant For Employees
                        </Link>
                        <Link
                          href="/customer-service"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          AI Powered Customer Service
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-foreground"
                    onClick={() => toggleDropdown("solutionsMobile")}
                    aria-expanded={activeDropdown === "solutionsMobile"}
                    aria-controls="solutions-mobile-dropdown"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === "solutionsMobile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "solutionsMobile" && (
                      <motion.div
                        id="solutions-mobile-dropdown"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 space-y-2 border-l-2 border-border"
                      >
                        <Link
                          href="/type-of-service"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          By Type Of Services
                        </Link>
                        <Link
                          href="/industry"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          By Industry
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-foreground"
                    onClick={() => toggleDropdown("companyMobile")}
                    aria-expanded={activeDropdown === "companyMobile"}
                    aria-controls="company-mobile-dropdown"
                  >
                    <span>Company</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === "companyMobile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "companyMobile" && (
                      <motion.div
                        id="company-mobile-dropdown"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 space-y-2 border-l-2 border-border"
                      >
                        <Link
                          href="/about-us"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          About Us
                        </Link>
                        <Link
                          href="/blogs"
                          className="block py-1 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={scrollToTop}
                        >
                          Blogs
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/contact-us" className="btn-primary w-full mt-4" onClick={scrollToTop}>
                  Contact us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

