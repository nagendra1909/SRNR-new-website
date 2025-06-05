"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code, Users, UserCheck, Cloud, Palette, Bot, Clock, Shield, Target } from "lucide-react"

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom web and mobile applications built with cutting-edge technologies to meet your specific business requirements.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Strategic technology guidance and digital transformation consulting to optimize your business operations.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    },
    {
      icon: UserCheck,
      title: "HR Outsourcing & Staffing",
      description:
        "Comprehensive human resource solutions including recruitment, staffing, and workforce management services.",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    },
    {
      icon: Cloud,
      title: "DevOps and Cloud Solutions",
      description:
        "Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices for efficient software delivery.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design Services",
      description:
        "User-centered design solutions that create intuitive and engaging digital experiences for your customers.",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    },
    {
      icon: Bot,
      title: "Automation & AI Integration",
      description:
        "Intelligent automation solutions and AI-powered systems to streamline processes and boost productivity.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
  ]

  const whyChoosePoints = [
    {
      icon: Shield,
      title: "Transparent Process & Reporting",
      description: "Complete visibility into project progress with regular updates and clear communication.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround Time",
      description: "Agile development methodologies ensuring faster delivery without compromising quality.",
    },
    {
      icon: Target,
      title: "Dedicated Expert Teams",
      description: "Specialized teams with deep domain expertise assigned to your specific project needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">Our Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-900 dark:text-white">Our</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Scalable, efficient, and customized IT solutions for every business. We deliver technology that drives
              growth and innovation.
            </p>

            <div className="pt-8">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                <span className="flex items-center">
                  Get in touch
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">What We Offer</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.title}
                  className={`group transition-all duration-700 delay-${index * 100} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-black/10 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="inline-flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Partner with SRNR IT Solutions?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Description */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-lg border border-slate-200 dark:border-slate-700">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  We combine technical expertise, agile delivery, and deep domain understanding to build solutions that
                  scale with your business. Our proven methodologies and client-centric approach ensure that every
                  project delivers measurable value and drives sustainable growth.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">500+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Successful Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">99%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6">
              {whyChoosePoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <div
                    key={point.title}
                    className={`flex items-start space-x-4 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 delay-${index * 100}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{point.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Our experts can help tailor solutions to your unique needs. Let's discuss how we can transform your
              business with innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-white text-emerald-600 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Talk to Us
                  <ArrowRight className="w-6 h-6 ml-2" />
                </span>
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-12 border-t border-emerald-400/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-100">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Call Us</div>
                  <div>+91 94947 51795</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Email Us</div>
                  <div>info@srnritsolutions.com</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">Location</div>
                  <div>Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
