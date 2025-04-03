export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Founded in 2023, HolboxAI has rapidly emerged as a leader in the generative AI industry, specializing in
                delivering cutting-edge consulting services, development, and managed services tailored to the unique
                needs of businesses across various sectors.
                <br />
                <br />
                Our portfolio includes state-of-the-art GenAI-powered solutions such as intelligent customer service
                assistants and smart tools designed to enhance employee productivity and decision-making.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What we offer?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "GenAI Consulting",
                description:
                  "Engage with our GenAI consulting team through a series of workshops to identify the right use-cases & long-term strategy for GenAI adoption.",
              },
              {
                number: "02",
                title: "GenAI App Development",
                description:
                  "Leverage holboxAI fine-tuned LLMs, and custom pipelines to build and deploy GenAI-powered apps 70% faster.",
              },
              {
                number: "03",
                title: "LLM Ops",
                description:
                  "Manage your GenAI workloads in production with SLA–based monitoring, ensuring continuous accuracy of your models.",
              },
              {
                number: "04",
                title: "GenAI Discovery Workshop",
                description:
                  "An interactive session designed to help clients explore the potential of generative AI, understand its applications, and identify how it can drive innovation and value in their business.",
              },
              {
                number: "05",
                title: "Infrastructure & Data Engineering",
                description:
                  "Focuses on building robust, scalable infrastructure and data solutions. It helps businesses design, implement, and optimize data pipelines, cloud architectures, and data platforms to enable seamless operations, enhance performance, and support data-driven decision-making",
              },
              {
                number: "06",
                title: "GenAI APIs & Open Source Packages",
                description:
                  "Helps clients to integrate AI capabilities into their existing systems, accelerating development and innovation by leveraging open-source technologies, we offer flexible, cost-effective solutions that are easy to adapt and scale to meet specific needs.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="text-primary text-2xl font-bold mb-4">{service.number}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

