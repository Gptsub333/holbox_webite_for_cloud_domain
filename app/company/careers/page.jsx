import Link from "next/link"
import Image from "next/image"

export default function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Join Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us build the future of AI and grow your career with HolboxAI
            </p>
            <Link href="#open-positions" className="btn-primary">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Why Join Us"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Why Join HolboxAI?</h2>
              <p className="text-lg text-gray-700 mb-6">
                At HolboxAI, you'll be part of a team that's pushing the boundaries of what's possible with artificial
                intelligence. We're solving complex problems, creating innovative solutions, and making a real impact on
                businesses across industries.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe in fostering a collaborative, inclusive environment where diverse perspectives are valued and
                everyone has the opportunity to grow and succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Work on cutting-edge AI technology</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Collaborative, inclusive work environment</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Competitive compensation and benefits</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Opportunities for growth and development</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Flexible work arrangements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                items: [
                  "Comprehensive health insurance",
                  "Dental and vision coverage",
                  "Mental health support",
                  "Wellness stipend",
                ],
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Work-Life Balance",
                items: ["Flexible work hours", "Remote work options", "Generous PTO policy", "Paid parental leave"],
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Growth & Development",
                items: [
                  "Learning and development budget",
                  "Conference attendance",
                  "Mentorship programs",
                  "Career advancement opportunities",
                ],
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Financial Benefits",
                items: ["Competitive salary", "Equity options", "401(k) matching", "Performance bonuses"],
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Office Perks",
                items: [
                  "Catered lunches",
                  "Fully stocked kitchen",
                  "Modern, comfortable workspace",
                  "Team building events",
                ],
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                title: "Community",
                items: [
                  "Volunteer opportunities",
                  "Charitable donation matching",
                  "Community engagement",
                  "Diversity and inclusion initiatives",
                ],
                icon: "/placeholder.svg?height=64&width=64",
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
                <h3 className="text-xl font-bold mb-4 gradient-text">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Open Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our team and help shape the future of AI</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Senior Machine Learning Engineer",
                department: "Engineering",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
              {
                title: "AI Research Scientist",
                department: "Data Science",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
              {
                title: "Frontend Developer",
                department: "Engineering",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
              {
                title: "Product Manager - AI Solutions",
                department: "Product",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
              {
                title: "Enterprise Sales Representative",
                department: "Sales",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold gradient-text">{job.title}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Department:</span> {job.department}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Location:</span> {job.location}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Type:</span> {job.type}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/company/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-4 md:mt-0 btn-primary"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-gradient py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Apply today and be part of our mission to transform businesses through AI.
            </p>
            <Link
              href="#open-positions"
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

