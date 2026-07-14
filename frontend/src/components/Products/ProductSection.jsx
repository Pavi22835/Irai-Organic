import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import SectionTitle from "../Common/SectionTitle";

const ProductSection = () => {
  return (
    <section id="products" className="py-24 bg-bg-green relative overflow-hidden">
      
      {/* Redesign Background Blob Layers */}
      <div className="absolute left-[-10%] top-[20%] w-96 h-96 bg-primary-green/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] bg-accent-gold/4 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Background SVG Organic leaf decorations */}
      <svg
        className="absolute left-6 top-1/3 text-primary-green/8 animate-float-slow pointer-events-none -z-10"
        viewBox="0 0 24 24"
        width="80"
        height="80"
      >
        <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C12,19.7 18,12 17,8M16,2C14.93,2.24 13.87,2.52 12.86,2.9C13.5,4.72 13.9,6.72 13.9,8.77C15,7.9 15.9,6.97 16.5,5.9C16.89,5.2 17.2,4.45 17.39,3.68C17,3 16.55,2.44 16,2Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Best Selling"
          highlight="Featured Products"
          subtitle="Featured Products"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
              key={product.id}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;