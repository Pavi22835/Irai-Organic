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
    color: "bg-[#EBF5E8]",
  },
  {
    icon: FaHeartbeat,
    title: "Vitals & Immunity",
    desc: "Brimming with vital nutrients that bolster immunity and overall metabolic health.",
    color: "bg-[#FDF4E3]",
  },
  {
    icon: FaSeedling,
    title: "Cold Pressed Purity",
    desc: "Handcrafted in traditional slow stone-grinds to protect organic nutrients.",
    color: "bg-[#F0F8EC]",
  },
  {
    icon: FaAppleAlt,
    title: "High Bio-Absorption",
    desc: "Packed with active whole-food fibers, promoting healthy digestion.",
    color: "bg-[#FFF0EB]",
  },
];

const BenefitCard = ({ item, index }) => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.03 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setGlowPosition({ x: 0, y: 0 })}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-[24px] border border-white/20 bg-[#102318]/80 p-8 text-center shadow-[0_18px_45px_rgba(8,16,10,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#8fcf43]/50"
    >
      <div
        className="absolute inset-0 rounded-[24px] opacity-80 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,255,255,0.24), transparent 32%)`,
        }}
      />
      <div className="absolute inset-0 rounded-[24px] border border-white/10" />
      <motion.div
        animate={{ y: [0, -4, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="text-2xl text-[#f7e8b3]" />
      </motion.div>

      <h3 className="mb-3 font-playfair text-lg font-bold text-[#fff9e8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {item.title}
      </h3>

      <p className="flex-grow text-sm font-semibold leading-relaxed text-[#f3f6e5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
        {item.desc}
      </p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute left-[-10%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-primary-green/5 blur-[100px]" />

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