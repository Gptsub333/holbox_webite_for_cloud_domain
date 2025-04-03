import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "HolboxAI: Leading Generative AI Solutions for Business Efficiency and Innovation",
  description:
    "Discover HolboxAI's cutting-edge generative AI solutions that transform businesses. Our expert consulting and development services harness the power of AI to boost efficiency, innovation, and customer satisfaction.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return <ClientLayout children={children} />
}



import './globals.css'