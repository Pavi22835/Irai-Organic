import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeartbeat,
  FaSeedling,
  FaAppleAlt,
} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const benefits = [
  {
    icon: FaLeaf,
    title: "100% Natural Sourcing",
    desc: "Sourced direct from organic farmlands free from synthetic chemical treatments.",
    color: "bg-gradient-to-br from-[#e6f6e7] to-[#dff5de]",
  },
  {
    icon: FaHeartbeat,
    title: "Vitals & Immunity",
    desc: "Brimming with vital nutrients that bolster immunity and overall metabolic health.",
    color: "bg-gradient-to-br from-[#f7fff6] to-[#eafdeb]",
  },
  {
    icon: FaSeedling,
    title: "Cold Pressed Purity",
    desc: "Handcrafted in traditional slow stone-grinds to protect organic nutrients.",
    color: "bg-gradient-to-br from-[#f1fff3] to-[#e6fce8]",
  },
  {
    icon: FaAppleAlt,
    title: "High Bio-Absorption",
    desc: "Packed with active whole-food fibers, promoting healthy digestion.",
    color: "bg-gradient-to-br from-[#fffef8] to-[#f3fff0]",
  },
];

const BenefitCard = ({ item, index }) => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setGlowPosition({ x: 0, y: 0 })}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-[24px] border border-white/20 bg-gradient-to-br from-white/95 to-[#f7fff6] p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#7cb342]/30"
    >
      <div
        className="absolute inset-0 rounded-[24px] opacity-50 transition-all duration-300 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,255,255,0.95), transparent 28%)`,
        }}
      />

      <div className="absolute inset-0 rounded-[24px] border border-white/10" />

      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-105 relative z-10`}>
        <Icon className="text-2xl text-[#2c4b24]" />
      </div>

      <h3 className="mb-3 font-playfair text-lg font-bold text-[#12200f] relative z-10">
        {item.title}
      </h3>

      <p className="flex-grow text-sm font-medium leading-relaxed text-[#324129] relative z-10">
        {item.desc}
      </p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Health & Nutrition"
          highlight="Benefits"
          subtitle="Health Benefits"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <BenefitCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
