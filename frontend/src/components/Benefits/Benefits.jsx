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

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background ambient detail */}
      <div className="absolute left-[-10%] top-[20%] w-[350px] h-[350px] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Health & Nutrition"
          highlight="Benefits"
          subtitle="Health Benefits"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[24px] p-8 text-center border border-light-green/20 hover:border-primary-green/25 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col items-center h-full relative overflow-hidden group"
              >
                {/* Visual Category Background Icon Frame */}
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="text-primary-green text-2xl" />
                </div>

                <h3 className="text-lg font-bold text-luxury-charcoal font-playfair mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed flex-grow font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;