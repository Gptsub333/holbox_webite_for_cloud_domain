import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const data = await request.json()
    const { email } = data

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Add the email to your newsletter service (Mailchimp, SendGrid, etc.)
    // 2. Store the subscription in a database
    // 3. Send a confirmation email

    console.log("Newsletter subscription:", { email })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to our newsletter!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
  }
}

