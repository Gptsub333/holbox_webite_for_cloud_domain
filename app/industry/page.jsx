"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Factory,
  ShoppingCart,
  Building2,
  Car,
  Hotel,
  Video,
  Truck,
} from "lucide-react"
import { industryImages } from "@/components/image-library"

export default function Industry() {
  const industries = [
    {
      title: "GenAI for Healthcare & Life-sciences",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/health-data.png",
      description:
        "Transform patient care, accelerate drug discovery, and streamline operations with our specialized healthcare AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7e55f1f4518234c11_1.png",
      solutions: [
        {
          title: "Assistance in Drug Discovery",
          description:
            "Generative AI can analyze vast datasets and assist in the discovery of potential drugs and treatment options.",
        },
        {
          title: "Automated Telemedicine Notes",
          description:
            "Implement generative AI to automate the generation of telemedicine notes, capturing key details of virtual patient consultations and improving documentation.",
        },
        {
          title: "Patient Data Analysis",
          description:
            "Generative models can automate the generation of reports based on patient data analysis, summarizing key findings for medical professionals.",
        },
        {
          title: "Clinical Decision Support",
          description:
            "Generative AI can assist healthcare providers by analyzing patient data and offering evidence-based recommendations for diagnosis and treatment plans.",
        },
        {
          title: "Automated Literature Review",
          description:
            "Utilize generative AI to automate the review of medical research papers, articles, and documents, streamlining the process by summarizing content and extracting key insights to support pharmaceutical research.",
        },
        {
          title: "Patient Engagement Chatbots",
          description:
            "Implement generative AI-powered chatbots for patient engagement, answering queries, providing information about medications, and offering support throughout treatment.",
        },
        {
          title: "Virtual Drug Trial",
          description:
            "Generative AI speeds up drug development by simulating new drug effects on virtual patients, predicting outcomes and side effects, thus reducing early testing needs and cutting time and costs in bringing new treatments to market.",
        },
        {
          title: "Genomic Editing",
          description:
            "Our GenAI streamlines genomic editing, using AI to identify optimal therapeutic targets and CRISPR sites quickly, enhancing personalized medicine and therapy innovation.",
        },
      ],
    },
    {
      title: "GenAI for Manufacturing",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/factory.png",
      description:
        "Optimize production processes, predict maintenance needs, and enhance quality control with our manufacturing AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7a25024eff690fad7_2.png",
      solutions: [
        {
          title: "Predictive Maintenace",
          description:
            "Implement generative AI to predict equipment failures and optimize maintenance schedules, reducing downtime in manufacturing processes.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Leverage generative models to optimize supply chain logistics, predicting demand and improving overall efficiency.",
        },
        {
          title: "Production Process Optimization",
          description:
            "Deploy generative AI to analyze and optimize manufacturing processes, improving efficiency and reducing costs.",
        },
        {
          title: "Maintenance Assistant",
          description:
            "Empower technicians with an interactive GenAI-powered assistant that offers step-by-step troubleshooting guidance based on real-time data and expert knowledge.",
        },
        {
          title: "Automated Quality Control Documentation",
          description:
            "Generative AI can generate detailed documentation for quality control inspections, ensuring accuracy and compliance.",
        },
      ],
    },
    {
      title: "GenAI for Retail & E-commerce",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/shopping-cart.png",
      description:
        "Enhance customer experiences, personalize recommendations, and optimize inventory management with our retail AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb77a1e2cec342ed95c_3.png",
      solutions: [
        {
          title: "Personalized Product Reccomendations",
          description:
            "Generative models analyze customer data to provide personalized product recommendations, elevating the shopping experience.",
        },
        {
          title: "Automated Customer Support",
          description:
            "Generative AI-powered chatbots can handle customer inquiries, offer product information, and assist in the purchasing process.",
        },
        {
          title: "Dynamic Pricing Optimization",
          description:
            "Employ generative algorithms to analyze market trends and competitor pricing, enabling dynamic pricing adjustments for maximizing revenue.",
        },
        {
          title: "Fraud Detection",
          description:
            "Leverage generative models to identify patterns indicative of fraudulent activities, enhancing security and trust in online transactions.",
        },
        {
          title: "Inventory Management Forecasting",
          description:
            "Implement generative algorithms to predict demand and optimize inventory levels, reducing the risk of stockouts or overstock situations.",
        },
        {
          title: "Style Recommendations",
          description:
            "Implement generative AI for personalized style recommendations, enhancing the online shopping experience for fashion consumers.",
        },
        {
          title: "Virtual Fashion Try-ons",
          description:
            "Generative models can create virtual try-on experiences, allowing customers to visualize clothing items before purchase.",
        },
      ],
    },
    {
      title: "GenAI for Finance & Banking",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/bank-building.png",
      description:
        "Strengthen security, automate processes, and deliver personalized financial services with our finance AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f9644_4.png",
      solutions: [
        {
          title: "Fraud Detection",
          description:
            "Utilize generative AI to analyze transaction patterns and detect unusual activities, enhancing fraud detection capabilities.",
        },
        {
          title: "Personalized Financial Advice",
          description:
            "Implement generative models to deliver tailored investment recommendations aligned with individual financial goals and risk preferences.",
        },
        {
          title: "Credit Scoring Automation",
          description:
            "Use generative algorithms to automate and improve the accuracy of credit scoring processes for loan approvals.",
        },
        {
          title: "Customer Service Chatbots",
          description:
            "Deploy generative AI-powered chatbots for efficient and personalized customer support in banking services.",
        },
        {
          title: "Market Trend Analysis",
          description:
            "Leverage generative models to analyze market trends and make data-driven predictions for investment decisions.",
        },
      ],
    },
    {
      title: "GenAI for Automotive",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/car.png",
      description:
        "Drive innovation in vehicle design, enhance user experiences, and optimize maintenance with our automotive AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f9647_5.png",
      solutions: [
        {
          title: "Automated Service Manual Generation",
          description:
            "Generative AI can automate the creation of comprehensive service manuals, providing detailed instructions for maintenance and repairs.",
        },
        {
          title: "Natural Language Interaction in Car Interfaces",
          description:
            "Implementing generative AI apps can enable natural language interaction within car interfaces, enhancing the user experience for hands-free commands and information retrieval.",
        },
        {
          title: "Predictive Maintenance Reports",
          description:
            "Generative AI can analyze sensor data from vehicles to generate predictive maintenance reports, helping anticipate and address potential issues before they become critical.",
        },
        {
          title: "Customized In-car Entertainment Recommendations",
          description:
            "Generative AI can analyze user preferences to generate personalized recommendations for in-car entertainment, creating a tailored and enjoyable driving experience.",
        },
      ],
    },
    {
      title: "GenAI for Hospitality",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/hotel.png",
      description:
        "Elevate guest experiences, optimize pricing strategies, and streamline operations with our hospitality AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f964a_6.png",
      solutions: [
        {
          title: "Automated Guest Communication",
          description:
            "Generative AI can automate personalized guest communication, providing tailored recommendations, event information, and local insights.",
        },
        {
          title: "Dynamic Pricing Strategies",
          description:
            "Implementing generative AI enables the optimization of dynamic pricing strategies for hotel rooms and services based on real-time demand and market conditions.",
        },
        {
          title: "Virtual Concierge Services",
          description:
            "Generative AI can power virtual concierge services, assisting guests with inquiries, local recommendations, and personalized experiences.",
        },
        {
          title: "Guest Feedback Analysis",
          description:
            "Analyze guest feedback using generative AI to generate actionable insights for improving services, addressing concerns, and enhancing overall guest satisfaction.",
        },
        {
          title: "Automated Reservation Confirmations and Updates",
          description:
            "Generative AI can automate the generation of reservation confirmations, updates, and reminders, streamlining the booking process.",
        },
      ],
    },
    {
      title: "GenAI for Media",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/video.png",
      description:
        "Create engaging content, personalize user experiences, and streamline production with our media AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f964d_7.png",
      solutions: [
        {
          title: "Content Creation",
          description:
            "Leverage generative AI for automated content creation in media, including news articles, blog posts, and video scripts.",
        },
        {
          title: "Personalized News Recommendations",
          description:
            "Use generative models to analyze user preferences and provide personalized news recommendations.",
        },
        {
          title: "Speech-to-text Transcription",
          description:
            "Utilize generative AI for accurate and efficient speech-to-text transcription in media production.",
        },
        {
          title: "Interactive Storytelling",
          description:
            "Implement generative AI for creating interactive and personalized storytelling experiences in digital media.",
        },
      ],
    },
    {
      title: "GenAI for Logistics",
      icon: "https://img.icons8.com/fluency-systems-regular/96/000000/delivery.png",
      description:
        "Optimize routes, forecast demand, and enhance supply chain visibility with our logistics AI solutions.",
      image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7c1c148287e2f9650_8.png",
      solutions: [
        {
          title: "Route Optimization",
          description:
            "Use generative AI to optimize delivery routes, reducing transportation costs and improving efficiency in logistics operations.",
        },
        {
          title: "Demand Forecasting",
          description:
            "Leverage generative models for accurate demand forecasting, optimizing inventory levels and reducing stockouts.",
        },
        {
          title: "Supply Chain Visibility",
          description:
            "Implement generative algorithms for real-time visibility into the supply chain, improving coordination and responsiveness.",
        },
        {
          title: "Warehouse Automation",
          description:
            "Utilize generative AI for automating warehouse processes, including inventory tracking and order fulfillment.",
        },
      ],
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
              AI Solutions <span className="gradient-text">By Industry</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover how our specialized AI solutions can transform operations and drive innovation across various
              industries. Our tailored approaches address the unique challenges and opportunities in each sector.
            </p>
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

      {/* Industry Selection Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Link
                  href={`#${industry.title.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`}
                  className="block group"
                >
                  <div className="feature-card flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                      {index === 0 ? (
                        <Stethoscope className="h-16 w-16 text-primary" />
                      ) : index === 1 ? (
                        <Factory className="h-16 w-16 text-primary" />
                      ) : index === 2 ? (
                        <ShoppingCart className="h-16 w-16 text-primary" />
                      ) : index === 3 ? (
                        <Building2 className="h-16 w-16 text-primary" />
                      ) : index === 4 ? (
                        <Car className="h-16 w-16 text-primary" />
                      ) : index === 5 ? (
                        <Hotel className="h-16 w-16 text-primary" />
                      ) : index === 6 ? (
                        <Video className="h-16 w-16 text-primary" />
                      ) : (
                        <Truck className="h-16 w-16 text-primary" />
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{industry.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Sections */}
      {industries
        .map((industry, index) => {
          // Extract the key word from the industry title (e.g., "Healthcare", "Manufacturing")
          const industryKey = industry.title.toLowerCase().split(" ")[2]?.toLowerCase().replace(/[&]/g, "")
          return {
            ...industry,
            image: industry.image || industryImages[industryKey] || "/placeholder.svg?height=350&width=600",
          }
        })
        .map((industry, index) => (
          <section
            key={index}
            id={industry.title.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}
            className={`py-16 ${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}`}
          >
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <span className="gradient-text">{industry.title}</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">{industry.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industry.solutions.map((solution, sIndex) => (
                  <div key={sIndex} className="feature-card">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary/10 dark:bg-primary/20 p-1.5 rounded-full mt-1 mr-3 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-10">{solution.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/contact-us" className="btn-primary group">
                  Discuss Your {industry.title.split(" ").pop()} AI Needs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        ))}

      {/* CTA Section */}
      <section className="py-16 full-width-gradient">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8">
              Our team of AI experts is ready to help you implement cutting-edge solutions tailored to your industry's
              unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/type-of-service"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

