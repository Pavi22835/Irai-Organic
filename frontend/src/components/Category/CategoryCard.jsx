import { motion } from "framer-motion";

const CategoryCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`rounded-[24px] p-8 bg-gradient-to-br ${item.color || 'from-white to-light-green/20'} border border-light-green/20 shadow-premium hover:shadow-premium-hover hover:border-primary-green/25 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center relative overflow-hidden`}
    >
      {/* Soft category colored blur on hover */}
      <div className="absolute right-[-20%] bottom-[-20%] w-24 h-24 rounded-full bg-white/20 blur-xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500" />

      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full bg-white shadow-inner flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-primary-green transition-all duration-300">
        <Icon className="text-2xl text-primary-green group-hover:text-white transition duration-200" />
      </div>

      <h3 className="text-lg font-bold text-luxury-charcoal mb-2 font-playfair tracking-wide group-hover:text-primary-green transition duration-200">
        {item.title}
      </h3>

      <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[200px]">
        {item.description}
      </p>
      
      {/* Underline link action */}
      <div className="text-[10px] font-black text-primary-green mt-6 uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-[#2e7d32] group-hover:gap-2 transition-all">
        <span>Explore</span>
        <span>&rarr;</span>
      </div>
    </motion.div>
  );
};

export default CategoryCard;