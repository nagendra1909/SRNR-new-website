"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Play, Star, Zap, Shield, Award } from "lucide-react"

const PremiumHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Realistic Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.png')`,
          }}
        ></div>

        {/* Gradient Overlays for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75 dark:from-black/95 dark:via-black/85 dark:to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60 dark:from-black/90 dark:via-transparent dark:to-black/60"></div>

        {/* Emerald Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div
            className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full">
              <Star className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-200 font-medium">Premium IT Solutions Provider</span>
            </div>

            {/* Headline */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Greatness Starts with</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Teamwork and Innovation
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Streamline, manage, and optimize your IT processes effortlessly. Experience seamless collaboration,
                real-time monitoring, and innovative solutions — all in one platform.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  label: "Lightning Fast",
                  color: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
                },
                {
                  icon: Shield,
                  label: "Secure & Reliable",
                  color: "bg-blue-500/20 text-blue-400 border-blue-400/30",
                },
                {
                  icon: Award,
                  label: "Award Winning",
                  color: "bg-purple-500/20 text-purple-400 border-purple-400/30",
                },
              ].map((feature, index) => (
                <div
                  key={feature.label}
                  className={`flex flex-col items-center p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} border flex items-center justify-center mb-3`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-white text-sm font-medium text-center">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get started now
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group flex items-center justify-center space-x-3 px-10 py-5 text-white hover:text-emerald-400 transition-all duration-300 border border-white/30 hover:border-emerald-400/50 rounded-xl hover:bg-white/10 backdrop-blur-xl">
                <Play className="w-6 h-6" />
                <span className="font-semibold text-lg">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "99.9%", label: "Uptime" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src="/placeholder.svg?height=700&width=600"
                  alt="Team of professionals collaborating on IT solutions"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-transparent to-teal-600/30"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">System Online</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg animate-float delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">98%</div>
                  <div className="text-slate-300 text-xs">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumHero
