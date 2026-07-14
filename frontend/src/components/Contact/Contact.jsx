import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import SectionTitle from "../Common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute right-[-10%] top-[10%] w-96 h-96 bg-light-green/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute left-[-5%] bottom-[5%] w-80 h-80 bg-accent-gold/4 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="text-left">
            <SectionTitle
              title="Let's Start a"
              highlight="Healthy Conversation"
              subtitle="Contact Us"
              align="left"
            />

            <p className="text-gray-600 leading-relaxed max-w-md mt-6 font-medium">
              Have questions about our organic preparation methods, bulk orders, or customizable gift packages? Get in touch with us today. Our team is happy to help you.
            </p>

            <div className="space-y-8 mt-12">
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-bg-green flex items-center justify-center shadow-inner border border-light-green/30 text-primary-green text-2xl flex-shrink-0 hover:bg-primary-green hover:text-white transition duration-300">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-bold text-luxury-charcoal font-playfair text-lg leading-tight">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 hover:text-primary-green transition font-medium cursor-pointer">
                    +91 94884 89248
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-bg-green flex items-center justify-center shadow-inner border border-light-green/30 text-primary-green text-2xl flex-shrink-0 hover:bg-primary-green hover:text-white transition duration-300">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-bold text-luxury-charcoal font-playfair text-lg leading-tight">
                    Email Address
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 hover:text-primary-green transition font-medium cursor-pointer">
                    support@iraiorganicfoods.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-bg-green flex items-center justify-center shadow-inner border border-light-green/30 text-primary-green text-2xl flex-shrink-0 hover:bg-primary-green hover:text-white transition duration-300">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-bold text-luxury-charcoal font-playfair text-lg leading-tight">
                    Our Farm Office
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed font-medium">
                    Plot No. 44, Organic Greens Estate, Alanganallur, Madurai, Tamil Nadu - 625501
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-[28px] p-8 md:p-10 border border-light-green/25 hover:border-accent-gold/45 shadow-premium hover:shadow-premium-hover transition-all duration-350 text-left relative overflow-hidden group">
            
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bg-green opacity-40 -z-10" />
            
            <h3 className="text-2xl font-bold font-playfair text-luxury-charcoal mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-2xl bg-bg-green/40 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-green/20 transition duration-200 text-sm text-luxury-charcoal placeholder-gray-400 font-medium"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full px-5 py-3.5 rounded-2xl bg-bg-green/40 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-green/20 transition duration-200 text-sm text-luxury-charcoal placeholder-gray-400 font-medium"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 rounded-2xl bg-bg-green/40 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-green/20 transition duration-200 text-sm text-luxury-charcoal placeholder-gray-400 resize-none font-medium"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white font-bold py-4 rounded-2xl transition duration-300 transform active:scale-95 shadow-premium hover:shadow-premium-hover text-sm uppercase tracking-wider border border-white/10"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}