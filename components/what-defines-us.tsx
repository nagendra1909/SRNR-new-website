"use client"

import { ArrowRight } from "lucide-react"

const WhatDefinesUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Realistic Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/what-defines-bg.png')`,
          }}
        ></div>

        {/* Light Overlay for Text Readability */}
        <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white/80 to-teal-50/50 dark:from-emerald-900/20 dark:via-slate-900/80 dark:to-teal-900/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">What defines us?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/20 transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Professional working on computer in modern tech environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/10 border border-slate-200/50 dark:border-slate-700/50">
              <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-slate-900 dark:text-white">SRNR IT Solutions Pvt Ltd</span> is one
                  of the Software organizations to develop better Software applications, Software development and
                  Software consultancy. Beyond the type and size of your business, our certified and skilled developers
                  are here to help you with solutions to your business problems through advanced software solutions.
                </p>

                <p className="text-lg">
                  Our <span className="font-semibold text-emerald-600 dark:text-emerald-400">HR Team</span> is prepared
                  to assist you with competent candidates for your expanding company. We also provide all HR policies
                  and HR services, which help you identify the best HR solutions tailored to your needs.
                </p>

                <p className="text-lg">
                  We offer human resource expertise that is aware of business requirements, as well as can offer
                  workforce and resource management in unorganized manufacturing industries in need. We can supply
                  resource management while maintaining our{" "}
                  <span className="font-semibold text-teal-600 dark:text-teal-400">security</span>.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">500+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-200 dark:border-teal-800">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Expert Developers</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1">
                  <span>Know More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatDefinesUs
