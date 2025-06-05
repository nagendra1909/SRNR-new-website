import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const CompactFooter = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-lg mr-3">
                <div className="w-5 h-5 flex items-center justify-center font-bold text-sm">S</div>
              </div>
              <div>
                <span className="text-lg font-bold text-white">SRNR IT SOLUTIONS</span>
                <div className="text-xs text-slate-400">Premium Technology</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Delivering excellence in IT solutions with innovation that drives business transformation.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Twitter, color: "hover:bg-blue-400" },
                { icon: Linkedin, color: "hover:bg-blue-700" },
                { icon: Instagram, color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4 text-slate-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {["Software Development", "IT Consulting", "HR Solutions", "Cloud & AI"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-emerald-400 text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                Hyderabad, India
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                +91 94947 51795
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-emerald-400 flex-shrink-0" />
                info@srnritsolutions.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 SRNR IT Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CompactFooter
