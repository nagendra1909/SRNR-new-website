"use client"

import { Monitor, Code, Lightbulb, Headphones } from "lucide-react"

const OurServices = () => {
  const services = [
    {
      icon: Monitor,
      title: "Technology Consulting",
      description: "Strategic IT guidance to transform your business operations and drive digital innovation.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your unique requirements.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Creative problem-solving approaches that leverage emerging technologies for competitive advantage.",
    },
    {
      icon: Headphones,
      title: "IT Support & Maintenance",
      description: "Comprehensive technical support and maintenance services to ensure optimal system performance.",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/services-bg.png')`,
          }}
        ></div>

        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-slate-900/95 dark:bg-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900/50 to-teal-900/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={service.title} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Card */}
                <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="inline-flex items-center text-emerald-400 text-sm font-medium">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">Ready to transform your business with our expert services?</p>
          <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1">
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
        </div>
      </div>
    </section>
  )
}

export default OurServices
