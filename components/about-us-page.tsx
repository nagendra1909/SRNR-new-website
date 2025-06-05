"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Shield, Award, CheckCircle, Quote } from "lucide-react"

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our business practices and relationships.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Our clients' success is our success. We go above and beyond to exceed expectations.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    },
    {
      icon: Shield,
      title: "Commitment",
      description: "We are dedicated to delivering on our promises with unwavering reliability and consistency.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "We believe in open communication and honest relationships with all our stakeholders.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence is not an option but a standard we maintain in every project we undertake.",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full mb-8">
              <span className="text-emerald-200 font-medium">About Our Company</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">About</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                SRNR IT Solutions
              </span>
            </h1>

            <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Driven by innovation, powered by people
            </p>

            <div className="pt-8">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                <span className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Who We Are</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">SRNR IT Solutions</span> is a dynamic
                  software company committed to transforming the way businesses operate through innovative IT solutions.
                  From software development to HR consulting, we offer scalable and intelligent solutions tailored for
                  growth.
                </p>

                <p>
                  Founded with a vision to bridge the gap between technology and business success, we have evolved into
                  a trusted partner for organizations seeking digital transformation. Our team of skilled professionals
                  brings together years of experience and cutting-edge expertise to deliver solutions that drive real
                  business value.
                </p>

                <p>
                  We believe that technology should empower businesses, not complicate them. That's why we focus on
                  creating user-friendly, efficient, and robust solutions that help our clients achieve their goals
                  while staying ahead of the competition.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">500+</div>
                  <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
                  <div className="text-slate-600 dark:text-slate-400">Expert Team Members</div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/20">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="SRNR IT Solutions team working together"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-teal-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Vision & Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-10 border border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  To deliver client-centric software and staffing solutions that are agile, reliable, and
                  cost-effective. We strive to empower businesses with technology that drives growth, efficiency, and
                  innovation while maintaining the highest standards of quality and service excellence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-10 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  To be a global leader in IT services by enabling transformation with technology. We envision a future
                  where businesses of all sizes can leverage cutting-edge technology solutions to achieve unprecedented
                  growth and success in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our decisions, shape our culture, and define our commitment to excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className={`group transition-all duration-700 delay-${index * 100} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${value.bgColor} rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Highlight */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-900/20 rounded-3xl p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Sri Nivas Rao Ravella - Founder & Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Sri Nivas Rao Ravella</h3>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                      Founder & Director
                    </p>
                  </div>

                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "At SRNR IT Solutions, we believe that technology should be a catalyst for growth, not a barrier to
                    success. Our commitment to delivering excellence in every project stems from our deep understanding
                    of our clients' needs and our passion for innovation. We don't just build software; we build
                    partnerships that last."
                  </blockquote>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">10+</div>
                      <div className="text-slate-600 dark:text-slate-400">Years of Leadership</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">500+</div>
                      <div className="text-slate-600 dark:text-slate-400">Successful Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Let's discuss how SRNR IT Solutions can help transform your business with innovative technology solutions
            tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
