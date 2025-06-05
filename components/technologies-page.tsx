"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code, Server, Database, Cloud, Layers, Workflow, Zap, Shield, Rocket } from "lucide-react"

const TechnologiesPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      technologies: [
        { name: "React", level: "High" },
        { name: "Angular", level: "High" },
        { name: "HTML/CSS", level: "High" },
        { name: "Bootstrap", level: "High" },
        { name: "Tailwind CSS", level: "High" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      technologies: [
        { name: "Node.js", level: "High" },
        { name: "Java", level: "High" },
        { name: "Python", level: "High" },
        { name: ".NET", level: "Mid" },
      ],
    },
    {
      title: "DevOps",
      icon: Workflow,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      technologies: [
        { name: "Docker", level: "High" },
        { name: "Jenkins", level: "High" },
        { name: "GitHub Actions", level: "High" },
        { name: "Kubernetes", level: "Mid" },
      ],
    },
    {
      title: "Cloud",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      technologies: [
        { name: "AWS", level: "High" },
        { name: "Azure", level: "High" },
        { name: "Google Cloud", level: "Mid" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      technologies: [
        { name: "MongoDB", level: "High" },
        { name: "MySQL", level: "High" },
        { name: "PostgreSQL", level: "High" },
        { name: "Firebase", level: "Mid" },
      ],
    },
    {
      title: "Others",
      icon: Layers,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      technologies: [
        { name: "Selenium", level: "Mid" },
        { name: "Figma", level: "High" },
        { name: "AI/ML", level: "Mid" },
        { name: "REST APIs", level: "High" },
      ],
    },
  ]

  const approachSteps = [
    {
      icon: Zap,
      title: "Analyze Requirements",
      description: "We begin by thoroughly understanding your business needs, project scope, and long-term goals.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Evaluate Technologies",
      description:
        "We assess various technologies based on performance, scalability, security, and alignment with your needs.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Rocket,
      title: "Implement & Optimize",
      description: "We implement the chosen stack with best practices and continuously optimize for peak performance.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Page Hero */}
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

          {/* Circuit Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2310b981' strokeWidth='1'%3E%3Cpath d='M10 10 L90 10 M10 30 L30 30 L30 50 M70 30 L90 30 M30 50 L50 50 M50 50 L50 70 M50 70 L70 70 M70 70 L70 90 M70 90 L90 90' /%3E%3Ccircle cx='10' cy='10' r='2' fill='%2310b981' /%3E%3Ccircle cx='30' cy='30' r='2' fill='%2310b981' /%3E%3Ccircle cx='50' cy='50' r='2' fill='%2310b981' /%3E%3Ccircle cx='70' cy='70' r='2' fill='%2310b981' /%3E%3Ccircle cx='90' cy='90' r='2' fill='%2310b981' /%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>
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
              <span className="text-emerald-200 font-medium">Our Technology Stack</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Technologies</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                We Specialize In
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              We leverage modern tools and frameworks to deliver reliable, scalable, and high-performance solutions that
              drive business growth.
            </p>

            <div className="pt-8">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                <span className="flex items-center">
                  Explore Our Projects
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Expertise Includes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We stay at the forefront of technology to deliver cutting-edge solutions that meet your business needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.title}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-black/10 border border-slate-200 dark:border-slate-700 h-full">
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                          <div className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{tech.name}</div>
                          <div className="flex items-center">
                            <div
                              className={`h-1.5 rounded-full flex-grow ${
                                tech.level === "High"
                                  ? "bg-emerald-500 dark:bg-emerald-400"
                                  : tech.level === "Mid"
                                    ? "bg-yellow-500 dark:bg-yellow-400"
                                    : "bg-blue-500 dark:bg-blue-400"
                              }`}
                            ></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">{tech.level}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Approach Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              How We Choose the Right Technology
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our technology selection process is driven by your specific business requirements, focusing on
              performance, scalability, security, and long-term maintainability.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {approachSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 dark:border-emerald-400 flex items-center justify-center text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line (except for last item) */}
                  {index < approachSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-500 dark:bg-emerald-400"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Looking to build with cutting-edge technologies?
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Our team of experts can help you select the right technology stack for your next project, ensuring optimal
              performance, scalability, and long-term success.
            </p>

            <div className="pt-8">
              <button className="group bg-white text-emerald-600 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Let's Discuss Your Project
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

export default TechnologiesPage
