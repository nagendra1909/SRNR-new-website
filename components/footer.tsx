import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-lg mr-3">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">S</div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SRNR IT SOLUTIONS</span>
                <span className="text-xs text-slate-400">Pvt Ltd</span>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-slate-300 leading-relaxed">
              Delivering excellence in IT and staffing services with innovative solutions that drive business growth and
              digital transformation.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog's", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {["Software Development", "IT Consulting", "HR Solutions", "Cloud & AI"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white flex items-center group transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Quick Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white flex items-start group">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Hyderabad, India</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919494751795" className="text-slate-300 hover:text-white flex items-center group">
                    <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <span>+91 94947 51795</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@srnritsolutions.com"
                    className="text-slate-300 hover:text-white flex items-center group"
                  >
                    <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <span>info@srnritsolutions.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Use", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white flex items-center group transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-slate-300">Stay updated with the latest news and insights from SRNR IT Solutions</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-l-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-r-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 SRNR IT Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Terms
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Privacy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
