// import { NextResponse } from "next/server"

// export async function POST(request) {
//   try {
//     const data = await request.json()
//     const { firstName, lastName, email, company, message } = data

//     // Validate form data
//     if (!firstName || !lastName || !email || !company || !message) {
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 })
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
//     }

//     // In a real implementation, you would send the form data to info@holboxai.cloud
//     // Example implementation (commented out as it requires actual email service setup):
//     /*
//     const emailContent = `
//       New Contact Form Submission:
      
//       Name: ${firstName} ${lastName}
//       Email: ${email}
//       Company: ${company}
//       Message: ${message}
//     `
    
//     // Send email to info@holboxai.cloud
//     // This would use a service like SendGrid, AWS SES, Nodemailer, etc.
//     await sendEmail({
//       to: "info@holboxai.cloud",
//       subject: "New Contact Form Submission from HolboxAI Website",
//       text: emailContent
//     })
//     */

//     console.log("Contact form submission to info@holboxai.cloud:", { firstName, lastName, email, company, message })

//     // Simulate API delay
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Thank you for your message. We will get back to you shortly.",
//       },
//       { status: 200 },
//     )
//   } catch (error) {
//     console.error("Contact form error:", error)
//     return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
//   }
// }

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, company, message } = data

    // Validate form data
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Message: ${message}
    `
    
    // Configure transporter - Make sure to use SMTP server, not IMAP
    const transporter = nodemailer.createTransport({
      host: "smtp.privateemail.com", // Use SMTP not IMAP
      port: 587, 
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@holboxai.cloud",
      subject: "New Contact Form Submission from HolboxAI Website",
      text: emailContent
    })

    console.log("Contact form submission sent successfully:", { firstName, lastName, email, company, message })

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you shortly.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
  }
}