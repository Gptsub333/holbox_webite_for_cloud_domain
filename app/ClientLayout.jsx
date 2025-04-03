"use client"

import { useEffect } from "react"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Inter, Poppins } from "next/font/google"

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Function to scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Add event listener for route changes
    window.addEventListener("popstate", handleRouteChange)

    // Clean up event listener
    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65eae6cb4b51ae867d094d49_Frame%201%20(1).png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65eae7b3f468e4922f44f89b_Frame%202.png"
        />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSXH96BL');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSXH96BL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

