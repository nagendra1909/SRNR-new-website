"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ArrowRight, MessageSquare, FileText, Rocket, ChevronDown, ChevronUp, Users } from "lucide-react"

const GetStartedPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectBrief: "",
    budget: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const steps = [
    {
      icon: MessageSquare,
      title: "Share Your Requirements",
      description: "Tell us about your project goals, challenges, and vision through our simple form.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Get a Free Consultation",
      description: "Schedule a call with our experts to discuss your needs and explore solutions.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: FileText,
      title: "Receive a Custom Proposal",
      description: "Get a detailed proposal with timeline, technology stack, and transparent pricing.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Rocket,
      title: "Start Building with SRNR",
      description: "Begin your project with our dedicated team and agile development process.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple web applications typically take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines in our proposals.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), and mobile development. Our team stays updated with the latest industry trends.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Pricing depends on project scope, complexity, and timeline requirements.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We provide various support packages to meet your needs.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We can integrate with your existing development team, provide staff augmentation, or work as an independent development partner based on your preferences.",
    },
  ]

  const testimonials = [
    {
      quote: "SRNR IT Solutions transformed our business with their innovative approach and technical expertise.",
      author: "Rajesh Kumar",
      company: "TechCorp India",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      quote: "Professional, reliable, and delivered exactly what we needed on time and within budget.",
      author: "Priya Sharma",
      company: "Digital Ventures",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
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
              <span className="text-emerald-200 font-medium">Start Your Journey</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Let's Build Something</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Great Together
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Kickstart your digital transformation journey with SRNR IT Solutions. From concept to deployment, we're
              here to turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => {
                  const formSection = document.getElementById("contact-form")
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Start a Project
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                <span className="flex items-center justify-center">
                  Book a Consultation
                  <MessageSquare className="w-6 h-6 ml-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Getting Started is Easy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures your project gets off to the right start
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 delay-${index * 150} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-emerald-500" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Tell Us About Your Project
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Share your requirements and we'll get back to you within 24 hours
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectBrief"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Project Brief *
                  </label>
                  <textarea
                    id="projectBrief"
                    name="projectBrief"
                    required
                    rows={6}
                    value={formData.projectBrief}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project goals, requirements, timeline, and any specific features you need..."
                  />
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      Send Request
                      <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    We'll respond within 24 hours with next steps
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              FAQs Before You Begin
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Common questions about working with SRNR IT Solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-700 delay-${index * 200} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</div>
                  </div>
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.company}
                    className="h-8 opacity-60 dark:opacity-40"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to take the first step?</h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
              Let's discuss how we can help you achieve your goals.
            </p>

            <div className="pt-8">
              <button
                onClick={() => {
                  const formSection = document.getElementById("contact-form")
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group bg-white text-emerald-600 px-12 py-5 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Let's Talk
                  <MessageSquare className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStartedPage
