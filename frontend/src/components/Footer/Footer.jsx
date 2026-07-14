import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#09130e] text-white pt-20 pb-10 border-t border-accent-gold/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(46,125,50,0.18),transparent_30%)] pointer-events-none -z-10" />
      
      {/* Subtle organic details in footer */}
      <div className="absolute right-[-10%] top-[-10%] w-[350px] h-[350px] rounded-full bg-primary-green/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="text-left">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Irai Organic Logo"
                className="h-10 w-auto max-w-[150px] object-contain bg-white/80 p-1 rounded-lg border border-primary-green/10"
              />
              <h2 className="text-2xl font-bold font-playfair tracking-wide text-white">
                Irai Organic
              </h2>
            </div>
            <p className="mt-5 text-sm text-green-100/70 leading-relaxed font-medium">
              Bringing chemical-free, nutrient-rich, traditionally prepared organic foods directly from trusted local farmlands to your dining table.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaWhatsapp, href: "https://wa.me/919488489248" },
                { icon: FaTwitter, href: "#" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-100 hover:bg-accent-gold hover:text-white hover:border-accent-gold hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-left lg:pl-10">
            <h3 className="text-xs uppercase tracking-widest font-black mb-6 text-accent-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 font-semibold">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Categories", href: "#categories" },
                { label: "Best Sellers", href: "#products" },
                { label: "Why Choose Us", href: "#why-choose" },
                { label: "Timeline Process", href: "#process" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-green-100/70 hover:text-accent-gold hover:pl-1.5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Column */}
          <div className="text-left lg:pl-6">
            <h3 className="text-xs uppercase tracking-widest font-black mb-6 text-accent-gold">
              Our Specialties
            </h3>
            <ul className="space-y-3 font-semibold">
              {[
                { label: "Wild Forest Honey", href: "#products" },
                { label: "Herbal Milk Mix", href: "#products" },
                { label: "Traditional Muesli", href: "#products" },
                { label: "Stone-Ground Powders", href: "#products" },
                { label: "Traditional Pickles", href: "#products" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-green-100/70 hover:text-accent-gold hover:pl-1.5 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-left">
            <h3 className="text-xs uppercase tracking-widest font-black mb-6 text-accent-gold">
              Newsletter
            </h3>
            <p className="text-sm text-green-100/70 leading-relaxed mb-4 font-medium">
              Subscribe to get organic health recipes, updates on new launches, and seasonal discounts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-gold focus:outline-none text-sm text-white placeholder-green-100/40 pr-12 transition-all duration-300 font-medium"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-10 h-10 rounded-xl bg-accent-gold hover:bg-yellow-600 transition flex items-center justify-center text-white"
                aria-label="Subscribe"
              >
                <FiSend />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-green-200/50">
          <p>© {currentYear} Irai Organic Foods. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-semibold">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}