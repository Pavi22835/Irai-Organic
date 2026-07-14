import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaTractor,
  FaBoxOpen,
  FaTruck,
  FaHome,
} from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const processSteps = [
  {
    icon: FaSeedling,
    title: "Organic Farming",
    desc: "Planted in nutrition-rich soil using zero synthetic inputs or pesticides."
  },
  {
    icon: FaTractor,
    title: "Careful Harvest",
    desc: "Harvested at peak nutritional maturity using traditional methods."
  },
  {
    icon: FaBoxOpen,
    title: "Quality Packing",
    desc: "Hygienically sorted and packed in eco-conscious premium packaging."
  },
  {
    icon: FaTruck,
    title: "Secure Delivery",
    desc: "Shipped swiftly under optimal storage to retain farm-fresh quality."
  },
  {
    icon: FaHome,
    title: "Healthy Families",
    desc: "Delivered to your doorstep, bringing premium wellness to your home."
  },
];

const ProcessCard = ({ item, index }) => {
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
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-[28px] border border-white/20 bg-[#102318]/80 p-6 text-center shadow-[0_18px_45px_rgba(8,16,10,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#8fcf43]/50"
    >
      <div
        className="absolute inset-0 rounded-[28px] opacity-80 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,255,255,0.24), transparent 32%)`,
        }}
      />
      <div className="absolute inset-0 rounded-[28px] border border-white/10" />

      <motion.div
        animate={{ y: [0, -4, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#244625]/80 text-[#f7e8b3] shadow-inner transition-all duration-300 group-hover:bg-[#3c6d2d] group-hover:text-white"
      >
        <Icon className="text-3xl" />
        <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#d89b2a] to-[#f3c867] text-[10px] font-black text-[#231a0d] shadow-md">
          {index + 1}
        </span>
      </motion.div>

      <h3 className="mb-2 mt-6 font-playfair text-lg font-bold text-[#fff9e8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {item.title}
      </h3>

      <p className="text-sm font-semibold leading-relaxed text-[#f3f6e5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
        {item.desc}
      </p>
    </motion.div>
  );
};

const FarmToHome = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-bg-green py-24">
      <div className="pointer-events-none absolute right-[-10%] top-[30%] -z-10 h-[400px] w-[400px] rounded-full bg-primary-green/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionTitle
          title="From Nature To"
          highlight="Your Doorstep"
          subtitle="Farm To Home Timeline"
        />

        <div className="relative mt-20">
          <div className="absolute left-[10%] right-[10%] top-[52px] -z-10 hidden h-[2px] border-t-2 border-dashed border-primary-green/20 lg:block" />

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <ProcessCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmToHome;