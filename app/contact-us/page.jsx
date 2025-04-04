"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: data.message,
      })

      // Reset form after successful submission
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.message || "An unexpected error occurred. Please try again.",
      })
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 text-black dark:text-white pt-20 pb-12 overflow-hidden">
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
            animate="visible"
            variants={fadeInVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions about our AI solutions? Our team is ready to help you transform your business with
              cutting-edge technology.
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

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-gray-900 text-black dark:text-white pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-form"
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Send Us a Message</h2>
                {formStatus.isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-900">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {formStatus.message || "Your message has been received. We'll get back to you shortly."}
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {formStatus.isError && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-4">
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-3" />
                          <p className="text-red-600 dark:text-red-400">{formStatus.message}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={formState.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={formState.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Company*
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your company name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your project or inquiry"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3 flex items-center justify-center"
                      disabled={formStatus.isSubmitting}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md h-full border border-border/40">
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Our Location</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          701 Tillery Street Unit 12 1850
                          <br />
                          Austin, TX 78702
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="mailto:info@holboxai.cloud" className="hover:text-primary transition-colors">
                            info@holboxai.cloud
                          </a>
                          <br />
                          <a href="mailto:support@holboxai.cloud" className="hover:text-primary transition-colors">
                            support@holboxai.cloud
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                            +1 (555) 123-4567
                          </a>
                          <br />
                          Mon-Fri, 9am-5pm PST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://in.linkedin.com/company/holboxai"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                        rel="noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://twitter.com/holboxai"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="Twitter"
                        rel="noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:info@holboxai.cloud"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

