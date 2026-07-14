import { motion } from "framer-motion";

const CategoryCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`rounded-[24px] p-8 bg-gradient-to-br ${item.color || 'from-[#fffdf6] via-[#f7ffe8] to-[#e8f5d7]'} border border-[#dceecb] shadow-[0_14px_35px_rgba(54,92,45,0.12)] hover:shadow-[0_18px_45px_rgba(54,92,45,0.2)] hover:border-[#7cb342]/40 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center relative overflow-hidden`}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_55%)] pointer-events-none" />
      <div className="absolute right-[-18%] bottom-[-18%] w-28 h-28 rounded-full bg-[#7cb342]/20 blur-2xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute left-4 top-4 h-10 w-10 rounded-full border border-white/60 bg-white/40 backdrop-blur-sm" />

      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fef3c7] via-[#f7f0d7] to-[#d9f2c5] shadow-inner flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-primary-green group-hover:to-[#2e7d32] transition-all duration-300">
        <Icon className="text-2xl text-[#6b8f2f] group-hover:text-white transition duration-200" />
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