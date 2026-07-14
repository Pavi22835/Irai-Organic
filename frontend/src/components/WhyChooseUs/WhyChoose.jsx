import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const list = [
  {
    title: "100% Organic Ingredients",
    desc: "Sourced directly from certified chemical-free fields."
  },
  {
    title: "Traditional Processing",
    desc: "Prepared using time-tested heritage methods to preserve nutrition."
  },
  {
    title: "Zero Preservatives",
    desc: "No artificial chemicals, stabilizers, or synthetic flavorings."
  },
  {
    title: "Eco-Friendly Packaging",
    desc: "Sustainably packed to keep items fresh while protecting nature."
  },
  {
    title: "Direct From Farmers",
    desc: "Empowering rural farming communities through fair-trade sourcing."
  },
  {
    title: "Rigorous Quality Checks",
    desc: "Every batch is inspected for freshness, purity, and organic standards."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 bg-gradient-to-br from-dark-green to-[#0E241B] text-white relative overflow-hidden">
      
      {/* Visual Depth Glowing Orbs */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-accent-gold/4 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-primary-green/6 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Why Choose"
          highlight="Irai Organic"
          subtitle="Our Commitment"
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="flex gap-5 bg-white/5 backdrop-blur-md rounded-[28px] p-8 border border-white/10 hover:border-accent-gold/45 hover:bg-white/10 transition-all duration-350 text-left group"
            >
              <div className="flex-shrink-0 mt-1">
                <FaCheckCircle className="text-3xl text-accent-gold group-hover:scale-110 transition duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair tracking-wide text-white group-hover:text-accent-gold transition-colors duration-250 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-green-100/75 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;