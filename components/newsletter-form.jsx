"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: data.message,
      })

      // Reset form after successful submission
      setEmail("")
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.message || "An unexpected error occurred. Please try again.",
      })
    }
  }

  return (
    <div>
      {status.isSubmitted ? (
        <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span>{status.message || "Thank you for subscribing!"}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            {status.isError && (
              <div className="mb-2 text-red-600 dark:text-red-400 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{status.message}</span>
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <button type="submit" className="btn-primary flex items-center justify-center" disabled={status.isSubmitting}>
            {status.isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

