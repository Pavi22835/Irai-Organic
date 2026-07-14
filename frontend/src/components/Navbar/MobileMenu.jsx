import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ isOpen, setIsOpen, navItems = [], activeSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[99] bg-dark-green/30 backdrop-blur-md"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-[100] bg-bg-green/95 backdrop-blur-xl border-l border-light-green/20 shadow-premium flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-light-green/20 bg-white">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Irai Organic Logo"
                  className="h-10 w-10 object-contain rounded-full border border-primary-green/20"
                />
                <h2 className="text-xl font-bold text-dark-green font-playfair leading-none">
                  Irai Organic
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-primary-green hover:text-dark-green p-2 transition"
                aria-label="Close Menu"
              >
                <FiX />
              </button>
            </div>

            {/* Links Block */}
            <div className="flex-1 flex flex-col gap-5 px-8 justify-center text-left">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold font-playfair py-2.5 border-b border-light-green/10 flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-primary-green"
                        : "text-text-dark/80 hover:text-primary-green"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent-gold" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-light-green/20 bg-white flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white font-bold py-4 rounded-full text-sm uppercase tracking-wider transition shadow-md active:scale-95"
              >
                Contact Us / Order
              </a>
              <p className="text-center text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                🌱 Direct Farm Sourced & Chemical Free
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;