import { motion } from "framer-motion";

const CategoryCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`rounded-[24px] p-8 bg-gradient-to-br ${item.color || 'from-[#18251b] via-[#233523] to-[#101b12]'} border border-[#3c5237] shadow-[0_14px_35px_rgba(10,20,12,0.35)] hover:shadow-[0_18px_45px_rgba(10,20,12,0.45)] hover:border-[#7cb342]/50 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center relative overflow-hidden`}
    >
      {/* Decorative background glow (behind content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_55%)] pointer-events-none -z-10" />
      <div className="absolute right-[-18%] bottom-[-18%] w-28 h-28 rounded-full bg-[#7cb342]/20 blur-2xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute left-4 top-4 h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />

      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5b7b2f] via-[#3e5b24] to-[#21351b] shadow-inner flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#7cb342] group-hover:to-[#5b7b2f] transition-all duration-300 relative z-10">
        <Icon className="text-2xl text-[#f5e9c8] group-hover:text-white transition duration-200" />
      </div>

      <h3 className="text-lg font-bold text-[#12200f] mb-2 font-playfair tracking-wide group-hover:text-[#263b1e] transition duration-200 relative z-10">
        {item.title}
      </h3>

      <p className="text-xs text-[#23361f] font-semibold leading-relaxed max-w-[200px] relative z-10">
        {item.description}
      </p>
      
      {/* Underline link action */}
      <div className="text-[10px] font-black text-[#2f451f] mt-6 uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-[#4b6a2b] group-hover:gap-2 transition-all relative z-10">
        <span>Explore</span>
        <span>&rarr;</span>
      </div>
    </motion.div>
  );
};

export default CategoryCard;