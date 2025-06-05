"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Users, GraduationCap, Clock, Target, MapPin, Briefcase, Calendar, Star } from "lucide-react"

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work alongside talented professionals in a supportive team atmosphere focused on innovation.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    },
    {
      icon: GraduationCap,
      title: "Career Growth & Learning",
      description: "Continuous learning opportunities with mentorship programs and skill development resources.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements and policies designed to help you thrive both personally and professionally.",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
    },
    {
      icon: Target,
      title: "Projects with Impact",
      description: "Work on meaningful projects that solve real-world challenges and make a difference.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
  ]

  const openPositions = [
    {
      title: "ReactJS Frontend Developer",
      location: "Hyderabad / Remote",
      type: "Full-Time",
      experience: "2-5 years",
      description:
        "Design and implement responsive user interfaces using React, Redux, and modern frontend technologies.",
    },
    {
      title: "Backend Developer (Node.js/Java)",
      location: "Hyderabad / Remote",
      type: "Full-Time",
      experience: "3-6 years",
      description: "Develop scalable backend services and APIs using Node.js, Express, and Java Spring Boot.",
    },
    {
      title: "HR/Recruitment Executive",
      location: "Hyderabad",
      type: "Full-Time",
      experience: "2-4 years",
      description: "Manage full-cycle recruitment process and implement effective HR strategies to attract top talent.",
    },
    {
      title: "DevOps Engineer",
      location: "Hyderabad / Remote",
      type: "Full-Time",
      experience: "3-5 years",
      description: "Implement CI/CD pipelines and manage cloud infrastructure using Docker, Kubernetes, and AWS/Azure.",
    },
    {
      title: "UI/UX Designer",
      location: "Hyderabad / Remote",
      type: "Full-Time",
      experience: "2-5 years",
      description: "Create intuitive and engaging user experiences through research, wireframing, and prototyping.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Senior Developer",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working at SRNR has been the highlight of my career. The collaborative culture and challenging projects have helped me grow both professionally and personally.",
    },
    {
      name: "Rahul Verma",
      position: "DevOps Engineer",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "SRNR truly values work-life balance. I've been able to pursue my passion for technology while having time for my family and personal interests.",
    },
    {
      name: "Anjali Patel",
      position: "UI/UX Designer",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The supportive environment at SRNR encourages creativity and innovation. I've had the opportunity to work on diverse projects that have significantly expanded my skill set.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full">
              <span className="text-emerald-200 font-medium">Careers at SRNR IT Solutions</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Join</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Shape the future of tech with SRNR IT Solutions. We're looking for passionate individuals who thrive on
              innovation and collaboration.
            </p>

            <div className="pt-8">
              <button
                onClick={() => {
                  const openingsSection = document.getElementById("openings-section")
                  if (openingsSection) {
                    openingsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  View Open Roles
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose a Career at SRNR?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We believe in creating an environment where talent thrives and innovation flourishes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className={`group transition-all duration-700 delay-${index * 100} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-black/10 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings-section" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Current Openings</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our open positions and find the perfect role for your skills and aspirations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={position.title}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <MapPin className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <Briefcase className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <Calendar className="w-4 h-4 mr-2 text-emerald-500 dark:text-emerald-400" />
                        {position.experience} experience
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Life at SRNR IT Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Hear from our team members about their experiences working with us
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Team Culture Image */}
          <div className="mt-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="SRNR IT Solutions team culture"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end">
                <div className="p-8 sm:p-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    We're more than just coworkers — we're innovators.
                  </h3>
                  <p className="text-slate-200 max-w-2xl">
                    At SRNR IT Solutions, we foster a culture of collaboration, creativity, and continuous growth. Join
                    us and be part of a team that's shaping the future of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Can't find a role that fits? We still want to hear from you.
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in
              mind for future opportunities.
            </p>

            <div className="pt-8">
              <button className="group bg-white text-emerald-600 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Send Us Your Resume
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
