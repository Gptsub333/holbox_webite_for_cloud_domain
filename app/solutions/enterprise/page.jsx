import Link from "next/link"
import Image from "next/image"

export default function EnterpriseSolutions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Enterprise AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powerful AI solutions designed specifically for enterprise-level businesses
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Overview */}
      <section className="bg-white text-black py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e585da3e6acfdfc0375aa5_Group%20146.png"
                alt="Enterprise Solutions"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Transform Your Enterprise</h2>
              <p className="text-lg text-gray-700 mb-6">
                HolboxAI's enterprise solutions are designed to address the complex challenges faced by large
                organizations. Our AI platform provides the tools and capabilities needed to streamline operations,
                enhance decision-making, and drive innovation across your entire organization.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With scalable architecture and enterprise-grade security, our solutions can be deployed across your
                organization with confidence.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Enterprise Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How our AI solutions deliver value to enterprise organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Operational Efficiency",
                description: "Automate complex processes and workflows to reduce costs and improve efficiency",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
              {
                title: "Data-Driven Insights",
                description: "Transform vast amounts of data into actionable business intelligence",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
              {
                title: "Enhanced Decision Making",
                description: "Provide executives and managers with the insights needed for better decisions",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
              {
                title: "Scalable Architecture",
                description: "Solutions that grow with your business needs and adapt to changing requirements",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
              {
                title: "Enterprise Security",
                description: "Robust security features to protect your sensitive data and maintain compliance",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
              {
                title: "Seamless Integration",
                description: "Connect with your existing enterprise systems and technology stack",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5935955298965918919e9_Frame%201321318444.svg",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-3 gradient-text">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Enterprise Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications of our AI solutions in enterprise environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Supply Chain Optimization",
                description: "Predict disruptions, optimize inventory levels, and improve logistics efficiency",
                image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7e55f1f4518234c11_1.png",
              },
              {
                title: "Customer Experience Enhancement",
                description: "Personalize interactions and anticipate customer needs across all touchpoints",
                image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a0195698196f5574554b_2.png",
              },
              {
                title: "Financial Forecasting",
                description: "Improve accuracy of financial projections and identify growth opportunities",
                image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a02a5698196f55745561_3.png",
              },
              {
                title: "Risk Management",
                description: "Identify potential risks early and implement mitigation strategies",
                image: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e5a0385698196f55745577_4.png",
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <Link
                    href={`/solutions/use-cases/${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-gradient py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Enterprise-Grade AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our enterprise team today to discuss your specific needs and how our AI solutions can help.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg"
            >
              Contact Enterprise Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

