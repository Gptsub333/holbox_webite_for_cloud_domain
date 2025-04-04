"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, AlertCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import NewsletterForm from "@/components/newsletter-form"

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchStatus, setSearchStatus] = useState({
    isSearching: false,
    isError: false,
    message: "",
  })

  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setSearchStatus({
        isSearching: false,
        isError: true,
        message: "Please enter a search term",
      })
      return
    }

    setSearchStatus({
      isSearching: true,
      isError: false,
      message: "",
    })

    // Simulate search
    setTimeout(() => {
      setSearchStatus({
        isSearching: false,
        isError: false,
        message: "",
      })
      // In a real implementation, you would filter blog posts based on the search query
      // or redirect to a search results page
    }, 1000)
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const blogListRef = useRef(null)
  const isBlogListInView = useInView(blogListRef, { once: true })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="animated-bg">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-up ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <div className="text-sm uppercase font-medium text-primary mb-2">Blog</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Articles & Resources</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Explore the latest insights, trends, and innovations in AI technology and business transformation.
            </p>

            <div className="relative max-w-xl mx-auto">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  disabled={searchStatus.isSearching}
                >
                  {searchStatus.isSearching ? (
                    <svg
                      className="animate-spin h-5 w-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </button>
              </form>
              {searchStatus.isError && (
                <div className="absolute mt-2 text-red-600 dark:text-red-400 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>{searchStatus.message}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10">
          <div className="w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 dark:opacity-5">
          <div className="w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <Link
            href="https://www.holbox.ai/main-blog/stable-diffusion-3-api-goes-live-everything-you-need-to-know"
            target="_blank"
            className="block mb-16 group"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border/40">
              <div className="overflow-hidden">
                <div className="overflow-hidden h-full">
                  <Image
                    src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e3_9.png"
                    alt="Stable Diffusion 3 API"
                    width={700}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[400px]"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  Featured
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  Stable Diffusion 3 API Goes Live: Everything You Need to Know
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Stability AI has implemented numerous innovations in Stable Diffusion 3 with the integration of the
                  Multimodal Diffusion Transformer (MMDiT) bringing a transformative approach to text understanding
                  within image generation. This breakthrough enables more accurate and contextually relevant image
                  creation from text prompts.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353da_12.png"
                      alt="Nikhil Ezhava"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Nikhil Ezhava</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">April 18, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="mb-12">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest articles</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm font-medium rounded-md bg-primary/10 text-primary">All</button>
                <button className="px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  AI
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Business
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  Technology
                </button>
              </div>
            </div>
          </div>

          <motion.div
            ref={blogListRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate={isBlogListInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
          >
            {/* Real Blog Post */}
            <motion.div variants={fadeInVariants}>
              <Link
                href="https://www.holbox.ai/post/unleashing-ai-power-at-the-edge-qualcomms-models-on-hugging-face"
                target="_blank"
                className="block group"
              >
                <div className="blog-card h-full">
                  <div className="overflow-hidden h-60">
                    <Image
                      src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e3_9.png"
                      alt="Qualcomm AI Models"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                        AI
                      </span>
                      <div className="text-sm text-gray-500 dark:text-gray-400">March 26, 2024</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      Unleashing AI Power at the Edge: Qualcomm's Models on Hugging Face
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Qualcomm's pre-trained AI models on Hugging Face enable faster, private, and battery-efficient AI
                      performance on devices like phones and wearables, unlocking possibilities in computer vision,
                      voice assistants, and more.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Sample Blog Posts */}
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Link href="#" className="block group">
                  <div className="blog-card h-full">
                    <div className="overflow-hidden h-60">
                      <Image
                        src={`https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e3_9.png`}
                        alt={`Blog post ${index}`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                          {index % 2 === 0 ? "Technology" : "Business"}
                        </span>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Jan {10 + index}, 2024</div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                        How AI is Transforming Business Operations in {2024 + index}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Exploring the latest advancements in artificial intelligence and how they're revolutionizing the
                        way businesses operate across various industries.
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:underline">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <button className="btn-outline">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Stay Updated with <span className="gradient-text">HolboxAI</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and innovations in AI technology.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}

