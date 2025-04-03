"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  BarChart,
  Search,
  FileText,
  Mail,
  Laptop,
  ClipboardList,
  GraduationCap,
  ChevronDown,
  Workflow,
} from "lucide-react"

export default function SmartAssistantForEmployees() {
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

  const challengesRef = useRef(null)
  const isChallengesInView = useInView(challengesRef, { once: true })

  const knowledgeRef = useRef(null)
  const isKnowledgeInView = useInView(knowledgeRef, { once: true })

  const useCasesRef = useRef(null)
  const isUseCasesInView = useInView(useCasesRef, { once: true })

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
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Smart Assistants for <span className="gradient-text">Employees</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Empower your workforce with AI-powered assistants that enhance productivity, streamline workflows, and
              provide instant access to critical information.
            </p>
            <Link href="/contact-us" className="btn-primary group">
              Transform Your Workplace
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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

      {/* What is Generative AI Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What is <span className="gradient-text">Generative AI</span>?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Generative AI represents a revolutionary approach to artificial intelligence that can create new
                content, insights, and solutions based on existing data and patterns.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Definition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A form of AI that generates content closely resembling human-created output, suitable for a wide range
                of real-world applications.
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Foundation and Capability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Driven by Foundation Models (FMs) that are pre-trained on extensive datasets, encompassing several
                hundred billion parameters.
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Scope of Application</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Applicable to a diverse array of fields such as text generation, digital art, coding, multimedia, and
                more.
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Multiple users</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Capable of being tailored to meet the unique requirements of different industries, enhancing its
                practical utility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Challenges Section */}
      <section ref={challengesRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Internal Employee <span className="gradient-text">Challenges</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Today's employees face numerous obstacles that impact productivity, satisfaction, and overall
                performance. Our AI assistants address these key challenges.
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate={isChallengesInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              {[
                {
                  title: "Information Overload",
                  content:
                    "Feeling swamped by information? Employees spend a significant portion of their time searching for data, hindering their ability to be productive and innovative.",
                },
                {
                  title: "Repetitive Tasks",
                  content:
                    "Are mundane tasks sucking the life out of your workday? Countless employees find themselves bogged down by repetitive work, leading to disengagement and frustration.",
                },
                {
                  title: "Decision Paralysis",
                  content:
                    "Feeling overwhelmed by mountains of data? Analyzing vast datasets can lead to paralysis by analysis, hindering optimal decision-making.",
                },
                {
                  title: "Expertise Bottlenecks",
                  content:
                    "Need niche skills, but can't find them within your team? Limited access to specialized expertise can slow down project efficiency and progress.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInVariants} className="feature-card">
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Source Section */}
      <section ref={knowledgeRef} className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Unified <span className="gradient-text">Knowledge Source</span> for Enterprise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our AI platform integrates seamlessly with your existing knowledge bases, databases, and systems to
              provide a single source of truth for your employees.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={isKnowledgeInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="flex justify-center"
          >
            <Image
              src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b2f3f3f594ed9447224_Group%20116%20(1).svg"
              alt="Knowledge Source Diagram"
              width={1200}
              height={700}
              className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-lg my-8"
            />
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-card">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-1 mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Centralized Information Access</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-10">
                Consolidate information from multiple sources into a single, easily accessible platform.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-1 mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Real-time Updates</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-10">
                Ensure employees always have access to the most current information and resources.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-1 mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Secure Access Controls</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-10">
                Maintain robust security with role-based access controls and data protection measures.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full mt-1 mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Seamless Integration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-10">
                Connect with your existing tools and systems without disrupting established workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="gradient-text">Use Cases</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Enhance employee productivity and improve operational efficiency
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate={isUseCasesInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Knowledge Base Assistant",
                description:
                  "Instantly access company information, policies, and procedures without searching through multiple systems.",
                icon: <Search className="h-8 w-8 text-primary" />,
              },
              {
                title: "Meeting Summarizer",
                description:
                  "Automatically generate concise summaries of meetings, complete with action items and key decisions.",
                icon: <FileText className="h-8 w-8 text-primary" />,
              },
              {
                title: "Data Analysis Helper",
                description:
                  "Transform complex data into actionable insights with natural language queries instead of complex formulas.",
                icon: <BarChart className="h-8 w-8 text-primary" />,
              },
              {
                title: "Email Composer",
                description:
                  "Draft professional emails quickly with AI assistance that matches your company's tone and style.",
                icon: <Mail className="h-8 w-8 text-primary" />,
              },
              {
                title: "Process Automation",
                description:
                  "Streamline repetitive tasks and workflows with intelligent automation that learns from user behavior.",
                icon: <Workflow className="h-8 w-8 text-primary" />,
              },
              {
                title: "Learning & Development",
                description:
                  "Personalized training recommendations and on-demand learning resources tailored to each employee's role.",
                icon: <GraduationCap className="h-8 w-8 text-primary" />,
              },
              {
                title: "IT Support Assistant",
                description:
                  "Resolve common technical issues instantly without waiting for IT support tickets to be processed.",
                icon: <Laptop className="h-8 w-8 text-primary" />,
              },
              {
                title: "Project Management",
                description:
                  "Keep projects on track with intelligent task prioritization, resource allocation, and timeline management.",
                icon: <ClipboardList className="h-8 w-8 text-primary" />,
              },
              {
                title: "Customer Insights",
                description:
                  "Access comprehensive customer information and interaction history to provide personalized service.",
                icon: <Users className="h-8 w-8 text-primary" />,
              },
            ].map((useCase, index) => (
              <motion.div key={index} variants={fadeInVariants} className="feature-card">
                <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/contact-us" className="btn-primary group">
              Explore How These Use Cases Can Transform Your Workplace
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

