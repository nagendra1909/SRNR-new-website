"use client"

import { useEffect, useState } from "react"
import { Palette, Coffee, Code, Settings, Cloud, BarChart3, Globe, Bot } from "lucide-react"

const OurTechnologies = () => {
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

    const section = document.getElementById("technologies-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const technologies = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      icon: Coffee,
      title: "Java",
      description: "Enterprise-grade applications and solutions",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: Code,
      title: "Python",
      description: "Versatile programming for modern applications",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Settings,
      title: "DevOps",
      description: "Streamlined development and deployment processes",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable and secure cloud infrastructure solutions",
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Transforming data into actionable business insights",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive, and performant web applications",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
    },
    {
      icon: Bot,
      title: "Automation & AI",
      description: "Intelligent automation and AI-powered solutions",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
    },
  ]

  return (
    <section
      id="technologies-section"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Technologies We Work With</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies to deliver innovative solutions that drive your business forward
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={tech.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white/90 hover:border-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-200/50 group">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {tech.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {tech.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                      ></div>
                    </div>

                    {/* Expertise Level */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        Expert Level
                      </span>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">8+</div>
            <div className="text-slate-600">Core Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-slate-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Expert Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">99%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">Ready to leverage these technologies for your next project?</p>
          <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
            <span className="flex items-center space-x-2">
              <span>Start Your Project</span>
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

export default OurTechnologies
