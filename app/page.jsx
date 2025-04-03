"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, BarChart, Zap, Award, Globe } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Home() {
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

  const featuresRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true })

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true })

  const partnersRef = useRef(null)
  const isPartnersInView = useInView(partnersRef, { once: true })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      document.documentElement.style.setProperty("--mouse-x", `${x}%`)
      document.documentElement.style.setProperty("--mouse-y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const canvas = document.getElementById("interactive-canvas")
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []
    const particleCount = 80
    const connectionDistance = 150
    const mouseRadius = 150

    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let mouseTimeout

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement.offsetHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      isMouseMoving = true

      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 100)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      canvas.dispatchEvent(mouseEvent)
    })

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.baseColor = `hsl(${Math.random() * 60 + 210}, 100%, 70%)`
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.isAttracted = false
      }

      update() {
        // Normal movement
        this.x += this.speedX
        this.y += this.speedY

        // Mouse attraction
        if (isMouseMoving) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            this.isAttracted = true
            const force = (mouseRadius - distance) / mouseRadius
            this.speedX += dx * force * 0.02
            this.speedY += dy * force * 0.02
          } else {
            this.isAttracted = false
          }
        }

        // Apply friction
        this.speedX *= 0.98
        this.speedY *= 0.98

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)

        const baseColor = this.isAttracted ? "hsl(280, 100%, 70%)" : this.baseColor

        gradient.addColorStop(0, baseColor)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.size * (this.isAttracted ? 2 : 1), 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw connections between particles
    function drawConnections() {
      ctx.strokeStyle = "rgba(120, 160, 255, 0.15)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      drawConnections()
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleMouseMove)
      cancelAnimationFrame(animate)
    }
  }, [])

  useEffect(() => {
    // This will only run on the client
    const particlesContainer = document.getElementById("particles-container")
    if (!particlesContainer) return

    // Clear any existing particles
    particlesContainer.innerHTML = ""

    // Generate particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Set styles
      const width = Math.random() * 20 + 5
      const height = Math.random() * 20 + 5
      const left = Math.random() * 100
      const top = Math.random() * 100
      const animationDuration = Math.random() * 15 + 10
      const animationDelay = Math.random() * 5

      particle.style.width = `${width}px`
      particle.style.height = `${height}px`
      particle.style.left = `${left}%`
      particle.style.top = `${top}%`
      particle.style.animation = `float-up ${animationDuration}s linear infinite`
      particle.style.animationDelay = `${animationDelay}s`

      particlesContainer.appendChild(particle)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-section relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        <canvas id="interactive-canvas" className="absolute inset-0 w-full h-full z-0" />
        <div className="container-custom py-32 flex flex-col items-center justify-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise grade <span className="gradient-text">Generative AI</span> deployed on your cloud
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions that enhance productivity, drive innovation, and
              deliver measurable results. Our enterprise-ready platform adapts to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/type-of-service" className="btn-primary btn-lg group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact-us" className="btn-outline btn-lg">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b1ead8feda806a24bd2_what-we-do.jpg"
                alt="Our Mission & Expertise"
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Mission & Expertise</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                At HolboxAI, we harness cutting-edge generative AI to empower businesses with advanced solutions that
                transform operational efficiency, drive innovation, and maximize customer engagement. Our specialized
                approach ensures every solution is tailored to your organization's unique needs—delivering tangible
                results and sustainable growth.
              </p>
              <Link href="/about-us" className="btn-primary group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Key Features</span> of Our AI Platform
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform combines powerful capabilities to deliver exceptional results for your
              business. Discover how our features can transform your operations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
          >
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "Deterministic Responses",
                description:
                  "Generate accurate, consistent responses by utilizing a retrieval-augmented generative architecture that separates the enterprise knowledge base from the large language model.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Enterprise Access Controls",
                description:
                  "Use a solution that automatically inherits enterprise access controls during data ingestion, ensuring security and compliance.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Traceable to Ground Truth",
                description:
                  "Enable the ability to trace back to source documents and data for every insight that is generated, providing transparency and trust.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "No LLM-Caused Data Leakage",
                description:
                  "Prevent LLM-caused data and IP leakage with enterprise security applied to user queries and separation of LLM from enterprise knowledge base.",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Hallucination Free",
                description:
                  'Get accurate answers with embedded relevance scoring and a solution that answers "I don\'t know" when the relevance threshold is not met.',
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "LLM Agnostic",
                description:
                  "Future proof investments and leverage the latest advancements in generative AI and deep learning with an LLM-agnostic solution architecture.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInVariants} className="feature-card">
                <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI-Driven Customer Service Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                The Case for AI-Driven Customer Service
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                In the digital era, customers expect lightning-fast, personalized support. GenAI-driven customer service
                revolutionizes how businesses respond to inquiries by providing consistent, efficient, and context-aware
                interactions. By reducing wait times, improving customer satisfaction, and streamlining workflows,
                generative AI offers a clear advantage over traditional chatbots. Unlock the potential of frictionless
                service experiences, enhanced loyalty, and a better bottom line.
              </p>
              <Link href="/customer-service" className="btn-primary group">
                Discover Our AI Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e57c7427841f4a40e23857_Group%20129.png"
                alt="AI-Driven Customer Service"
                className="max-w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 min-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Assistants Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e585da3e6acfdfc0375aa5_Group%20146.png"
                alt="Intelligent Employee Assistants"
                className="max-w-full h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 min-h-[400px] object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Empowering Teams with Intelligent Employee Assistants
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Modern employees juggle countless tasks daily—from data retrieval and process management to rapid
                decision-making. With a dedicated AI-driven assistant, businesses can empower their teams to focus on
                strategic initiatives, cutting through the noise of repetitive, manual work. The result? Higher
                productivity, sharper insights, and a workplace culture rooted in agility and innovation.
              </p>
              <Link href="/smart-assistant-for-employees" className="btn-primary group">
                Learn About Smart Assistants
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Transforming</span> Businesses with AI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable results across industries. See the impact we've made for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
          >
            {[
              { value: "90%", label: "First-time query resolution" },
              { value: "75%", label: "Reduction in response time" },
              { value: "40%", label: "Increase in employee productivity" },
              { value: "60%", label: "Cost reduction in customer service" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInVariants} className="stats-card">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unified Knowledge Hub Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              A Unified Knowledge Hub for Enterprise
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Imagine a centralized repository that seamlessly integrates all of your organization's data and
              processes—accessible with a single, intuitive query. Our Unified Knowledge Hub ensures deterministic and
              traceable responses, enterprise-grade access control, and a hallucination-free environment. By
              consolidating knowledge in one place, your teams can quickly find information, make informed decisions,
              and collaborate with confidence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b2f3f3f594ed9447224_Group%20116%20(1).svg"
              alt="Knowledge Hub Architecture"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Deterministic Responses",
              "Traceable to Ground Truth",
              "Enterprise Access Controls",
              "No LLM-Caused Data Leakage",
              "Hallucination Free",
              "LLM Agnostic",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-3"
              >
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our AI solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
          >
            {[
              {
                quote:
                  "HolboxAI's smart assistant has revolutionized how our team accesses information. We've seen a 40% increase in productivity since implementation.",
                name: "Sarah Johnson",
                title: "CTO, TechInnovate",
                image: "/placeholder.svg?height=80&width=80&text=SJ",
              },
              {
                quote:
                  "The customer service AI has transformed our support operations. Response times are down 75%, and customer satisfaction is at an all-time high.",
                name: "Michael Chen",
                title: "Head of Customer Success, RetailPlus",
                image: "/placeholder.svg?height=80&width=80&text=MC",
              },
              {
                quote:
                  "Implementing HolboxAI's knowledge hub has streamlined our internal processes and significantly reduced the time spent searching for information.",
                name: "Emily Rodriguez",
                title: "Operations Director, HealthCare Solutions",
                image: "/placeholder.svg?height=80&width=80&text=ER",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInVariants} className="testimonial-card">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={
                        testimonial.image ||
                        "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e6_healthcare.png" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Core Solutions & Key Offerings</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              HolboxAI offers a portfolio of advanced AI offerings designed to help you gain and maintain a competitive
              edge. From enterprise-ready virtual assistants to robust generative AI consulting, and from large language
              model fine-tuning to streamlined data engineering, each service is purpose-built to meet real business
              challenges. Let our specialized solutions drive your digital transformation.
            </p>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Assistants for Employees",
                description: "AI-powered tools that enhance productivity and decision-making",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
                href: "/smart-assistant-for-employees",
              },
              {
                title: "AI Powered Customer Service",
                description: "Intelligent support systems that elevate customer experiences",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716548_Layer_1%20(1).png",
                href: "/customer-service",
              },
              {
                title: "Generative AI Consulting",
                description: "Expert guidance for implementing AI in your business",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654c_Layer_1%20(2).png",
                href: "/type-of-service",
              },
              {
                title: "Generative AI POC/Pilot",
                description: "Validate AI concepts with minimal investment",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654f_Filled.png",
                href: "/type-of-service",
              },
              {
                title: "Large Language Model Fine Tuning",
                description: "Customize AI models for your specific use cases",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716552_Layer_1%20(3).png",
                href: "/type-of-service",
              },
              {
                title: "Data Engineering & Infrastructure",
                description: "Build robust foundations for AI implementation",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716555_Layer_1%20(4).png",
                href: "/type-of-service",
              },
              {
                title: "LLMOps - Developer Tooling",
                description: "Streamline AI development and deployment",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716558_Layer_1%20(5).png",
                href: "/type-of-service",
              },
              {
                title: "GenAI Discovery Workshop",
                description: "Explore AI opportunities specific to your business",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71655b_Layer_1%20(6).png",
                href: "/type-of-service",
              },
            ].map((solution, index) => (
              <Link href={solution.href} key={index} className="block group">
                <div className="feature-card flex flex-col items-center text-center">
                  <img
                    src={solution.icon || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-16 h-16 mb-4 solution-icon"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{solution.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              How We Build Next-Generation AI Solutions
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Building sophisticated AI solutions demands a careful blend of strategic planning, technological
              expertise, and iterative development. At HolboxAI, we start with a deep dive into your business goals,
              refining concepts and collecting top-tier data. Next, we meticulously design and train the right model,
              evaluating performance at each step for optimal accuracy and compliance. Post-deployment, continuous
              monitoring ensures your AI solution evolves seamlessly with your business.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="grid md:grid-cols-7 gap-4">
              {[
                {
                  step: "1",
                  title: "Discovery & Planning",
                  description: "Understand business needs and define objectives",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca230f3c582b5778e2fc0_Export%20for%20website%20(1).svg",
                },
                {
                  step: "2",
                  title: "Data Collection",
                  description: "Gather and prepare quality training data",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08cf8af0783f363193d_2.svg",
                },
                {
                  step: "3",
                  title: "Model Selection",
                  description: "Choose the optimal AI architecture",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b7079139a2997aca2_3.svg",
                },
                {
                  step: "4",
                  title: "Training & Testing",
                  description: "Develop and validate the model",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b2e6db7912db2ae9f_4.svg",
                },
                {
                  step: "5",
                  title: "Refinement",
                  description: "Optimize for performance and accuracy",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b2fc7eee45825fd83_5.svg",
                },
                {
                  step: "6",
                  title: "Deployment",
                  description: "Integrate with existing systems",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08f08a5e0578da0bb7c_6.svg",
                },
                {
                  step: "7",
                  title: "Monitoring",
                  description: "Ensure continuous improvement",
                  icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca08b015b030c6b2658a4_7.svg",
                },
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-white dark:bg-gray-900 rounded-full p-4 shadow-lg mb-4 w-16 h-16 flex items-center justify-center">
                    <img src={step.icon || "/placeholder.svg"} alt={step.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Flexible Engagement Models</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We understand that every organization has unique requirements. Our flexible engagement models—ranging from
              turnkey, ready-to-use solutions and dedicated development teams, to specialized team extensions and
              project-focused collaborations—reflect our commitment to delivering outcomes tailored to your scope,
              timeline, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Turnkey Solutions",
                description: "Pre-built AI applications ready for immediate implementation",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59d79cc5291f93b6ebb42_1.png",
              },
              {
                title: "Dedicated Teams",
                description: "Full-service AI development teams for complex projects",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59d797f7912fba35903f9_2.png",
              },
              {
                title: "Team Extension",
                description: "AI specialists who integrate with your existing team",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59d79721b4b82a995f56d_3.png",
              },
              {
                title: "Project-Based",
                description: "Focused collaboration with defined deliverables and timelines",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59d794827a4723a633dfc_4.png",
              },
            ].map((model, index) => (
              <div key={index} className="feature-card flex flex-col items-center text-center">
                <img src={model.icon || "/placeholder.svg"} alt={model.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{model.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary group">
              Which Model Fits You Best? Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 full-width-gradient relative overflow-hidden">
        <div id="particles-container" className="animated-bg">
          {/* Particles will be generated client-side only */}
        </div>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team today to discover how our AI solutions can drive innovation and efficiency in your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/type-of-service"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

