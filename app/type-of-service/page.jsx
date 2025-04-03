"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { serviceIcons } from "@/components/image-library"

export default function TypeOfService() {
  const services = [
    {
      title: "Enterprise Smart Assistants",
      description: "AI-powered tools that enhance employee productivity and decision-making capabilities",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
      href: "/smart-assistant-for-employees",
    },
    {
      title: "GenAI platform for enterprise",
      description: "Comprehensive AI platform tailored for enterprise-level implementation and integration",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716548_Layer_1%20(1).png",
      href: "#",
    },
    {
      title: "Generative AI Consulting",
      description: "Expert guidance for implementing AI strategies aligned with your business goals",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654c_Layer_1%20(2).png",
      href: "#",
    },
    {
      title: "Generative AI POC/Pilot",
      description: "Validate AI concepts with minimal investment before full-scale implementation",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71654f_Filled.png",
      href: "#",
    },
    {
      title: "GenAI Integrations Services",
      description: "Seamlessly integrate AI capabilities with your existing systems and workflows",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716552_Layer_1%20(3).png",
      href: "#",
    },
    {
      title: "GenAI Solutions Development",
      description: "Custom AI solution development tailored to your specific business requirements",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716555_Layer_1%20(4).png",
      href: "#",
    },
    {
      title: "Large Language Model Fine Tuning",
      description: "Customize AI models for your specific use cases and industry requirements",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716558_Layer_1%20(5).png",
      href: "#",
    },
    {
      title: "Data Engineering & Infrastructure",
      description: "Build robust foundations for AI implementation with optimized data pipelines",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a71655b_Layer_1%20(6).png",
      href: "#",
    },
    {
      title: "LLMOps - Developer Tooling",
      description: "Tools and frameworks to streamline AI development and deployment processes",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e3_9.png",
      href: "#",
    },
    {
      title: "GenAI as a Code Deployment",
      description: "Implement AI capabilities directly into your codebase for seamless integration",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353e0_10.png",
      href: "#",
    },
    {
      title: "GenAI Corporate Training Program",
      description: "Comprehensive training to help your team leverage AI technologies effectively",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353dd_11.png",
      href: "#",
    },
    {
      title: "GenAI APIs & Open Source Packages",
      description: "Access to powerful AI capabilities through APIs and open-source solutions",
      icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a1c0e55f1f45182353da_12.png",
      href: "#",
    },
  ]

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

  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true })

  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate={isHeroInView ? "visible" : "hidden"} variants={fadeInVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Generative AI <span className="gradient-text">Development Company</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                <strong>
                  Discover the potential of AI with our customized generative AI development services. We provide expert
                  guidance and create strong solutions that seamlessly incorporate advanced models such as GPT-4, Llama,
                  and PaLM-2. Our goal is to be at the forefront of AI technology, exploring new opportunities in
                  artificial intelligence. Our generative AI solutions assist businesses in automating tasks and
                  improving productivity and efficiency.
                </strong>
              </p>
              <Link href="/contact-us" className="btn-primary group">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b1ead8feda806a24bd2_what-we-do.jpg"
                alt="Generative AI Development"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10">
          <div className="w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 dark:opacity-5">
          <div className="w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="gradient-text">AI Services</span> Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI services designed to help businesses leverage the power of
              generative AI technology. From consulting to development and deployment, we offer end-to-end solutions.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Link href={service.href} className="block group">
                  <div className="feature-card flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                      <img
                        src={
                          service.icon ||
                          serviceIcons[service.title.toLowerCase().replace(/\s+/g, "")] ||
                          `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(service.title.charAt(0)) || "/placeholder.svg"}`
                        }
                        alt={service.title}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(service.title.charAt(0))}`
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7e55f1f4518234c11_1.png"
                alt="AI Benefits"
                className="w-full h-auto rounded-xl shadow-lg min-h-[400px] object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Why Choose Our AI Services?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our AI solutions are designed to deliver tangible business value through innovation, efficiency, and
                strategic implementation. We focus on creating practical applications that address real-world
                challenges.
              </p>
              <div className="space-y-4">
                {[
                  "Customized solutions tailored to your specific business needs",
                  "Expertise across multiple AI frameworks and technologies",
                  "Seamless integration with your existing systems and workflows",
                  "Scalable architecture that grows with your business",
                  "Ongoing support and optimization to ensure long-term success",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our AI Development Process</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Building sophisticated AI solutions demands a careful blend of strategic planning, technological
              expertise, and iterative development. Our structured approach ensures optimal results for your business.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="mb-16"
          >
            <img
              src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dca230f3c582b5778e2fc0_Export%20for%20website%20(1).svg"
              alt="Process diagram"
              className="w-full max-w-2xl h-auto mx-auto rounded-xl shadow-lg max-h-[400px] object-contain"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Identify the Business Problem",
                description:
                  "Understand the specific business challenges or opportunities where generative AI can provide a solution.",
                icon: "1",
              },
              {
                title: "Define Project Scope and Objectives",
                description:
                  "Clearly define what the AI solution aims to achieve, including specific goals and metrics for success.",
                icon: "2",
              },
              {
                title: "Data Collection and Preparation",
                description: "Identify and collect relevant data sources needed to train the AI model.",
                icon: "3",
              },
              {
                title: "Select and Design the AI Model",
                description: "Choose the right type of generative AI model based on the problem and data.",
                icon: "4",
              },
              {
                title: "Training and Testing",
                description:
                  "Train the model using the prepared dataset, adjusting parameters to optimize performance.",
                icon: "5",
              },
              {
                title: "Evaluation and Refinement",
                description:
                  "Evaluate the model comprehensively using quantitative metrics and qualitative assessments.",
                icon: "6",
              },
              {
                title: "Integration and Deployment",
                description:
                  "Integrate the AI model into existing enterprise systems and workflows, ensuring compatibility and smooth operation.",
                icon: "7",
              },
              {
                title: "Monitoring and Maintenance",
                description:
                  "Continuously monitor the model's performance and the quality of its outputs in real-world applications.",
                icon: "8",
              },
              {
                title: "Ethics and Compliance",
                description:
                  "Ensure the solution adheres to ethical guidelines and industry standards, particularly regarding data privacy and security.",
                icon: "9",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInVariants} className="feature-card">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4 w-12 h-12 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-16">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 full-width-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8">
              Contact our team today to discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/industry"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300"
              >
                Explore Industry Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

