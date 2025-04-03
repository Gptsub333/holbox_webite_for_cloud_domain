import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function CustomerService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                AI-Powered Customer Service Platform
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                In today's data-driven world, businesses face challenges like information overload, repetitive tasks,
                and limited assistant capabilities. At HolboxAI, we believe there's a smarter way to work.
              </p>
            </div>
            <div>
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e57c7427841f4a40e23857_Group%20129.png"
                alt="AI-Powered Customer Service"
                width={600}
                height={480}
                className="w-full h-auto max-h-[480px] object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10">
          <div className="w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 dark:opacity-5">
          <div className="w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Customer Experience Challenges Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Customer Experience Challenges</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Why businesses need smart assistants powered by GenAI?
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  title: "Long Wait Times & Inefficient Support",
                  content: "Customers grapple with lengthy hold times and repetitive interactions with chatbots.",
                },
                {
                  title: "Impersonal Interaction",
                  content: "Generic communication leaves customers feeling unheard and undervalued.",
                },
                {
                  title: "Difficulty Finding Answers & Products",
                  content: "Navigating complex websites and finding relevant information or products is a struggle.",
                },
                {
                  title: "Limited Accessibility & Omnichannel Support",
                  content: "Reaching support through preffered channels or during desired hours isn't always possible",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Inefficiency Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Cost of Inefficiency</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Are you leaving money on table?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lost Productivity",
                description: "Inefficient process and information overload cost and lost productivity",
                icon: "/placeholder.svg?height=50&width=50&text=LP",
              },
              {
                title: "Missed Opportunities",
                description:
                  "Slow decision-making and limited skill access hinder innovation and market responsiveness.",
                icon: "/placeholder.svg?height=50&width=50&text=MO",
              },
              {
                title: "Increased Costs",
                description:
                  "Repetitive tasks, manual data entry, and unnecessary errors lead to higher operational cost.",
                icon: "/placeholder.svg?height=50&width=50&text=IC",
              },
              {
                title: "Damaged Customer Experience",
                description:
                  "Impersonal interactions and long wait times lead to customer dissatisfaction and lost sales.",
                icon: "/placeholder.svg?height=50&width=50&text=DC",
              },
              {
                title: "Unhappy Employee",
                description: "Disengaged and frustrated employees are Z% less productive and more likely to leave.",
                icon: "/placeholder.svg?height=50&width=50&text=UE",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Benefits of full Customer Service team powered by GenAI
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Human Parity - answer 90% of user queries first time",
              "Allows you to re-direct users across channels-channel shift*",
              "Engage with users 24/7 no matter time, place, language",
              "Shields agents from simple queries by resolving without intervention",
              "Quicker resolutions to users with self-service",
              "Avoids need for new agent software/training rapid environment",
              "Improve retention and satisfaction of staff",
              "Reduce costs / save people-hours dedicated to first-line support",
              "Provides user-friendly, accurate and instant interactions",
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <div className="text-primary text-2xl font-bold mb-4">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e585da3e6acfdfc0375aa5_Group%20146.png"
                alt="Smart Assistant for Customer Support"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Onboard a best performing Smart Assistant for Customer Support
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Delve into intricate cases with confidence using an AI agent that effortlessly combines insights about
                your company, products, and policies. With seamless integrations and no need for coding, it crafts
                tailored solutions as individual as each customer it assists.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Reduce inquiry to resolution time drastically
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                HolboxAI's AI-powered platform seamlessly integrates with your current knowledge sources and business
                systems, automating the resolution of customer conversations in real-time.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-full flex items-center justify-center">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65e59fb7e55f1f4518234c11_1.png"
                alt="Reduce resolution time"
                width={600}
                height={450}
                className="w-full h-auto max-h-[450px] object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why HolboxAI Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why HolboxAI?</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deterministic Responses",
                description:
                  "Generate accurate, consistent responses by utilizing a retrieval-augmented generative architecture that separates the enterprise knowledge base from the large language model.",
              },
              {
                title: "Traceable to Ground Truth",
                description:
                  "Enable the ability to trace back to source documents and data for every insight that is generated.",
              },
              {
                title: "Enterprise Access Control",
                description:
                  "Use a solution that automatically inherits enterprise access controls during data ingestion.",
              },
              {
                title: "No LLM-Caused Data Leakage",
                description:
                  "Prevent LLM-caused data and IP leakage with enterprise security applied to user queries and separation of LLM from enterprise knowledge base.",
              },
              {
                title: "Hallucination Free",
                description:
                  'Get accurate answers with embedded relevance scoring and a solution that answers "I don\'t know" when the relevance threshold is not met.',
              },
              {
                title: "LLM Agnostic",
                description:
                  "Future proof investments and leverage the latest advancements in generative AI and deep learning with an LLM-agnostic solution architecture.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

