"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Search, Calendar, Clock, ChevronRight, Mail } from "lucide-react"
import Link from "next/link"

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Technology", "Development", "Design", "Culture", "Product Updates"]

  const featuredPost = {
    id: "building-scalable-web-apps",
    title: "Building Scalable Web Applications with ReactJS and Node.js",
    excerpt:
      "Learn how to architect and develop highly scalable web applications using ReactJS for the frontend and Node.js for the backend. This comprehensive guide covers best practices, performance optimization techniques, and real-world examples.",
    author: "Rahul Sharma",
    role: "Lead Developer",
    date: "June 2, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Development",
  }

  const blogPosts = [
    {
      id: "ai-ml-business-transformation",
      title: "How AI and ML are Transforming Business Operations",
      excerpt:
        "Artificial Intelligence and Machine Learning are revolutionizing how businesses operate. Discover the practical applications and benefits of implementing AI/ML solutions.",
      author: "Priya Patel",
      role: "AI Specialist",
      date: "May 28, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
    },
    {
      id: "cloud-migration-strategies",
      title: "Effective Cloud Migration Strategies for Enterprises",
      excerpt:
        "Planning a cloud migration? Learn about the most effective strategies to ensure a smooth transition while minimizing downtime and maximizing ROI.",
      author: "Vikram Singh",
      role: "Cloud Architect",
      date: "May 22, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
    },
    {
      id: "ux-design-principles",
      title: "Essential UX Design Principles for Modern Web Applications",
      excerpt:
        "User experience can make or break your application. Explore the key UX design principles that will help you create intuitive and engaging user interfaces.",
      author: "Anjali Desai",
      role: "UX Designer",
      date: "May 15, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Design",
    },
    {
      id: "devops-best-practices",
      title: "DevOps Best Practices for Continuous Integration and Deployment",
      excerpt:
        "Implementing DevOps practices can significantly improve your development workflow. Learn about CI/CD pipelines, automation, and collaboration strategies.",
      author: "Arjun Kumar",
      role: "DevOps Engineer",
      date: "May 10, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Development",
    },
    {
      id: "remote-work-culture",
      title: "Building a Strong Remote Work Culture in Tech Companies",
      excerpt:
        "Remote work is here to stay. Discover strategies for fostering collaboration, maintaining productivity, and building a strong company culture in a remote environment.",
      author: "Neha Gupta",
      role: "HR Director",
      date: "May 5, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Culture",
    },
    {
      id: "new-product-features",
      title: "Exciting New Features in Our Project Management Tool",
      excerpt:
        "We've added several new features to our project management solution. Learn how these updates can help streamline your workflow and improve team collaboration.",
      author: "Sanjay Mehta",
      role: "Product Manager",
      date: "April 28, 2025",
      readTime: "3 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Product Updates",
    },
  ]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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

          {/* Abstract Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2310b981' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <span className="text-emerald-200 font-medium">SRNR IT Solutions Blog</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Insights &</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Innovations
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Explore trends, ideas, and updates from the minds at SRNR IT Solutions. Stay informed about the latest in
              technology and innovation.
            </p>

            <div className="pt-8">
              <button
                onClick={() => {
                  const latestSection = document.getElementById("latest-articles")
                  if (latestSection) {
                    latestSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Explore Posts
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Editor's Pick</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=${featuredPost.author.charAt(0)}`}
                          alt={featuredPost.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{featuredPost.author}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{featuredPost.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300"
                      >
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest-articles" className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Latest Articles</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Stay updated with our latest insights, tutorials, and industry trends
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img
                            src={`/placeholder.svg?height=32&width=32&text=${post.author.charAt(0)}`}
                            alt={post.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-slate-900 dark:text-white">{post.author}</div>
                          <div className="text-slate-500 dark:text-slate-400">{post.date}</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300"
                      >
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                No articles found in this category. Please try another category.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="inline-flex rounded-xl overflow-hidden">
                <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors duration-300">
                  Previous
                </button>
                <button className="px-4 py-2 bg-emerald-500 text-white border border-emerald-500">1</button>
                <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                  2
                </button>
                <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                  3
                </button>
                <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Stay Updated</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Get the latest tech insights delivered to your inbox
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>

            <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
