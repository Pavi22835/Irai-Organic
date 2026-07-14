import { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "categories", "products", "why-choose", "benefits", "process", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Categories", href: "#categories", id: "categories" },
    { label: "Products", href: "#products", id: "products" },
    { label: "Why Us", href: "#why-choose", id: "why-choose" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className={`mx-auto max-w-7xl w-full rounded-full transition-all duration-300 pointer-events-auto bg-white/95 backdrop-blur-md border border-light-green/30 ${
            scrolled ? "shadow-premium py-2" : "py-3"
          }`}
        >
          <div className="px-6 flex items-center justify-between h-14">
            
            {/* Logo Group */}
            <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src="/logo.png"
                alt="Irai Organic Logo"
                className="h-10 w-10 object-contain rounded-full bg-white border border-primary-green/20"
              />
              <span className="font-extrabold text-lg text-[#2E7D32] tracking-tight font-playfair group-hover:text-dark-green transition">
                Irai Organic
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`font-semibold text-xs tracking-wider relative py-2 px-3 rounded-full transition duration-200 ${
                      isActive
                        ? "text-white bg-primary-green shadow-sm"
                        : "text-text-dark/70 hover:text-primary-green hover:bg-primary-green/10"
                    }`}
                  >
                    {item.label}
                    
                    {/* Flat Underline Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-1 right-1 h-[3px] bg-primary-green rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Search, Profile, Cart */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-bg-green/80 border border-light-green/20 rounded-full py-1.5 pl-4 pr-9 text-xs focus:bg-white focus:outline-none focus:border-primary-green/40 w-48 text-text-dark font-medium transition-all"
                />
                <FiSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>

              {/* Profile Icon */}
              <a
                href="#contact"
                className="w-8 h-8 rounded-full border border-light-green/20 bg-bg-green/50 flex items-center justify-center text-text-dark/70 hover:text-primary-green hover:bg-white transition"
                aria-label="User Account"
              >
                <FiUser className="text-base" />
              </a>

              {/* Order Cart Button */}
              <a
                href="#contact"
                className="flex items-center gap-1.5 bg-primary-green hover:bg-dark-green text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
              >
                <FiShoppingBag className="text-sm" />
                <span>Order (0)</span>
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-2xl text-primary-green hover:text-dark-green transition"
              aria-label="Toggle Menu"
            >
              <FiMenu />
            </button>
          </div>
        </motion.header>
      </div>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;