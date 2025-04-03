import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About HolboxAI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to transform businesses through the power of artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white text-black py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2020, HolboxAI was born from a simple yet powerful idea: to make advanced AI technology
                accessible to businesses of all sizes. Our founders, a team of AI researchers and industry veterans,
                recognized that while AI had enormous potential to transform businesses, many organizations struggled to
                implement and benefit from these technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We set out to bridge this gap by creating an AI platform that combines cutting-edge technology with
                intuitive design, making it easy for businesses to harness the power of AI without requiring specialized
                expertise.
              </p>
              <p className="text-lg text-gray-700">
                Today, HolboxAI serves clients across multiple industries, helping them automate processes, gain
                insights from their data, and make better decisions faster than ever before.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc8b1ead8feda806a24bd2_what-we-do.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Mission & Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To democratize artificial intelligence by creating powerful, accessible solutions that enable businesses
                to innovate, grow, and thrive in an increasingly complex world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-lg text-gray-700">
                A world where every business, regardless of size or industry, can harness the transformative power of AI
                to solve their most challenging problems.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI technology",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e3_innovation.svg",
              },
              {
                title: "Accessibility",
                description: "We believe powerful technology should be accessible to all businesses",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e0_accessibility.svg",
              },
              {
                title: "Integrity",
                description: "We operate with transparency and ethical responsibility in everything we do",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e6_integrity.svg",
              },
              {
                title: "Customer Success",
                description: "We measure our success by the success of our customers",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e1_customer-success.svg",
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients to ensure their needs are met",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e5_colaboration.svg",
              },
              {
                title: "Excellence",
                description: "We strive for excellence in our products, services, and support",
                icon: "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc905549c90966197551e2_excellence.svg",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <Image
                  src={value.icon || "/placeholder.svg"}
                  alt={value.title}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2 gradient-text">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet the experts behind HolboxAI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                title: "Chief Executive Officer",
                bio: "With over 15 years of experience in AI and machine learning, Alex leads our company vision and strategy.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849b_alex-johnson.jpg",
              },
              {
                name: "Sarah Chen",
                title: "Chief Technology Officer",
                bio: "Sarah oversees our technical direction and ensures we remain at the cutting edge of AI innovation.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849d_sarah-chen.jpg",
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Product Officer",
                bio: "Michael leads our product development, focusing on creating intuitive and powerful AI solutions.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849c_michael-rodriguez.jpg",
              },
              {
                name: "Emily Williams",
                title: "Chief Operating Officer",
                bio: "Emily ensures our operations run smoothly and efficiently to deliver the best service to our clients.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849a_emily-williams.jpg",
              },
              {
                name: "David Kim",
                title: "Chief Revenue Officer",
                bio: "David leads our sales and marketing efforts, helping businesses discover the power of our AI solutions.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849e_david-kim.jpg",
              },
              {
                name: "Lisa Patel",
                title: "Chief Customer Officer",
                bio: "Lisa ensures our customers receive exceptional support and achieve success with our platform.",
                image:
                  "https://cdn.prod.website-files.com/65d3654e33fff13105d1a83e/65dc92966899958959e5849f_lisa-patel.jpg",
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1 gradient-text">{leader.name}</h3>
                <p className="text-blue-600 mb-3">{leader.title}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-gradient py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and technology.
            </p>
            <Link
              href="/company/careers"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

