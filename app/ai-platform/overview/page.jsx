import Link from "next/link"
import Image from "next/image"

export default function PlatformOverview() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI Platform Overview</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive AI platform delivers powerful solutions to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-white text-black py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Comprehensive AI Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                HolboxAI platform combines cutting-edge artificial intelligence technologies to provide a complete
                solution for businesses of all sizes. Our platform is designed to be flexible, scalable, and easy to
                integrate with your existing systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With our AI platform, you can automate complex processes, gain valuable insights from your data, and
                make better decisions faster than ever before.
              </p>
              <Link href="/ai-platform/features" className="btn-primary inline-block">
                Explore Features
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e57c7427841f4a40e23857_Group%20129.png"
                alt="AI Platform"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Key Platform Components</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform consists of several powerful components working together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Processing Engine",
                description: "Process and analyze large volumes of data quickly and efficiently",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
              {
                title: "Machine Learning Models",
                description: "Pre-trained and custom models to solve complex business problems",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
              {
                title: "Natural Language Processing",
                description: "Understand and generate human language for improved communication",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
              {
                title: "Computer Vision",
                description: "Analyze and interpret visual information from images and videos",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
              {
                title: "Predictive Analytics",
                description: "Forecast trends and anticipate future outcomes with high accuracy",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
              {
                title: "Integration Framework",
                description: "Seamlessly connect with your existing systems and workflows",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b37abb110585a716545_Layer_1.png",
              },
            ].map((component, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <Image
                  src={component.icon || "/placeholder.svg"}
                  alt={component.title}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-3 gradient-text">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform follows a simple but powerful workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Data Collection",
                description: "Gather and organize your data from multiple sources",
              },
              {
                step: "2",
                title: "Processing & Analysis",
                description: "Our AI engine processes and analyzes your data",
              },
              {
                step: "3",
                title: "Insight Generation",
                description: "Discover patterns and generate actionable insights",
              },
              {
                step: "4",
                title: "Implementation",
                description: "Apply insights to improve your business processes",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-gradient py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to learn how our AI platform can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/ai-platform/features"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

