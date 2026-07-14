import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import productImage1 from "../../assets/product-abc-milk-mix.jpeg";
import productImage2 from "../../assets/product-moringa-milk-mix.jpeg";
import productImage3 from "../../assets/product-karupatti-muesli.jpeg";
import productImage4 from "../../assets/product-pickle.jpeg";

const galleryItems = [
  {
    url: productImage1,
    title: "Organic Milk Mix",
    category: "Real Product"
  },
  {
    url: productImage2,
    title: "Fresh Mix Jar",
    category: "Authentic"
  },
  {
    url: productImage3,
    title: "Karupatti Muesli Pack",
    category: "Healthy Breakfast"
  },
  {
    url: productImage4,
    title: "Traditional Pickle Jar",
    category: "Homemade"
  },
  {
    url: "/products/honey-blackdates.png",
    title: "Honey Blackdates",
    category: "Signature Honey"
  },
  {
    url: "/products/fig-honey.png",
    title: "Fig Honey",
    category: "Premium Honey"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Visual depth glows */}
      <div className="absolute left-[-10%] top-[20%] w-80 h-80 bg-light-green/25 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Moments From Our"
          highlight="Organic Journey"
          subtitle="Our Gallery"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[28px] shadow-premium hover:shadow-premium-hover border border-light-green/25 hover:border-accent-gold/45 relative cursor-pointer group h-80 transition-all duration-350"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Glassmorphic Overlay Panel on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold font-black mb-1.5">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold font-playfair text-white">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}