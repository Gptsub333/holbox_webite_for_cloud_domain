import Link from "next/link"
import Image from "next/image"
import { teamMembers } from "@/components/image-library"

export default function Team() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">Meet the talented individuals behind HolboxAI's success</p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                title: "Chief Executive Officer",
                bio: "With over 15 years of experience in AI and machine learning, Alex leads our company vision and strategy.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Chen",
                title: "Chief Technology Officer",
                bio: "Sarah oversees our technical direction and ensures we remain at the cutting edge of AI innovation.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Product Officer",
                bio: "Michael leads our product development, focusing on creating intuitive and powerful AI solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Williams",
                title: "Chief Operating Officer",
                bio: "Emily ensures our operations run smoothly and efficiently to deliver the best service to our clients.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                title: "Chief Revenue Officer",
                bio: "David leads our sales and marketing efforts, helping businesses discover the power of our AI solutions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Patel",
                title: "Chief Customer Officer",
                bio: "Lisa ensures our customers receive exceptional support and achieve success with our platform.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={
                    leader.image || teamMembers[leader.title.toLowerCase().replace(/\s+/g, "")] || "/placeholder.svg"
                  }
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 gradient-text">{leader.name}</h3>
                  <p className="text-blue-600 mb-3">{leader.title}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Our Departments</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Engineering",
                description:
                  "Our engineers build and maintain the cutting-edge technology that powers our AI platform.",
                count: "25+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Data Science",
                description: "Our data scientists develop the algorithms and models that drive our AI solutions.",
                count: "15+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Product",
                description: "Our product team ensures our solutions meet the needs of our customers.",
                count: "10+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Customer Success",
                description: "Our customer success team helps clients get the most value from our platform.",
                count: "12+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Sales & Marketing",
                description: "Our sales and marketing team helps businesses discover our AI solutions.",
                count: "18+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Operations",
                description: "Our operations team ensures our business runs smoothly and efficiently.",
                count: "8+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "HR & Talent",
                description: "Our HR team finds and nurtures the talent that drives our innovation.",
                count: "6+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
              {
                name: "Finance",
                description: "Our finance team manages our resources to fuel our growth and success.",
                count: "5+ members",
                icon: "/placeholder.svg?height=64&width=64",
              },
            ].map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <Image src={dept.icon || "/placeholder.svg"} alt={dept.name} width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-2 gradient-text">{dept.name}</h3>
                <p className="text-gray-600 mb-2">{dept.description}</p>
                <p className="text-blue-600 font-medium">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What makes working at HolboxAI special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Company Culture"
                width={700}
                height={500}
                className="w-full h-auto min-h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Work With Purpose</h3>
              <p className="text-lg text-gray-700 mb-6">
                At HolboxAI, we believe in creating a workplace where innovation thrives, collaboration is celebrated,
                and every team member has the opportunity to make a meaningful impact. Our culture is built on a
                foundation of respect, transparency, and a shared passion for pushing the boundaries of what AI can
                achieve.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We foster an environment where diverse perspectives are valued, continuous learning is encouraged, and
                work-life balance is respected. Our team members enjoy flexible work arrangements, comprehensive
                benefits, and regular team-building activities that strengthen our connections.
              </p>
              <Link href="/company/careers" className="btn-primary inline-block">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="full-width-gradient py-16 md:py-24 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Career With Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our team of talented professionals and help shape the future of AI.
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

