"use client"

import { useEffect, useState } from "react"
import { Quote, CheckCircle, Users, Target, MessageSquare, Award, DollarSign, Zap } from "lucide-react"

const DirectorAndWhyChoose = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("director-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Target,
      title: "Deep Industry Expertise",
      description: "Years of specialized knowledge across multiple technology domains and business sectors.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "End-to-End IT Solutions",
      description: "Comprehensive services from consultation to deployment and ongoing support.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Agile and Scalable Teams",
      description: "Flexible team structures that adapt to your project requirements and timelines.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear, honest communication throughout every phase of your project journey.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Commitment to Quality",
      description: "Rigorous quality assurance processes ensuring exceptional deliverables every time.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Delivery",
      description: "Optimized solutions that maximize value while maintaining the highest standards.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <div>
      {/* Meet Our Director Section */}
      <section
        id="director-section"
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Meet Our Director</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Director Card */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-slate-200/50 border border-white/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=600"
                      alt="Sri Nivas Rao Ravella - Founder & Director"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-indigo-600/20"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Name and Title */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Sri Nivas Rao Ravella</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">Founder & Director, SRNR IT Solutions</p>
                  </div>

                  {/* Description */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed italic">
                    "With a mission to deliver excellence in IT and staffing services, Sri Nivas Rao brings over a
                    decade of experience in tech innovation and business growth. Under his leadership, SRNR IT Solutions
                    has successfully served clients with smart, scalable, and future-proof solutions."
                  </blockquote>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">10+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">500+</div>
                      <div className="text-sm text-slate-600">Projects Led</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose SRNR IT Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart and makes us the preferred choice for businesses seeking exceptional IT
              solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className={`group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Check Icon */}
                    <div className="mt-6 flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Verified Advantage</span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-6 text-lg">Ready to experience the SRNR IT Solutions difference?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
                <span className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group flex items-center justify-center space-x-2 px-8 py-4 text-slate-700 hover:text-blue-600 transition-all duration-300 border border-slate-200 hover:border-blue-300 rounded-xl hover:bg-blue-50">
                <span className="font-semibold">Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DirectorAndWhyChoose
