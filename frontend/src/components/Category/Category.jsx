import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const Category = () => {
  return (
    <section id="categories" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Organic Shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-light-green/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute left-[-5%] bottom-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-[90px] pointer-events-none -z-10" />
      
      {/* Floating vector leaf */}
      <svg
        className="absolute right-10 top-16 text-primary-green/10 animate-float-slow pointer-events-none -z-10"
        viewBox="0 0 24 24"
        width="64"
        height="64"
      >
        <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C12,19.7 18,12 17,8M16,2C14.93,2.24 13.87,2.52 12.86,2.9C13.5,4.72 13.9,6.72 13.9,8.77C15,7.9 15.9,6.97 16.5,5.9C16.89,5.2 17.2,4.45 17.39,3.68C17,3 16.55,2.44 16,2Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Explore Our"
          highlight="Organic Categories"
          subtitle="Shop By Category"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {categories.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              key={item.id}
            >
              <CategoryCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;