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

const FarmToHome = () => {
  return (
    <section id="process" className="py-24 bg-bg-green relative overflow-hidden">
      
      {/* Background visual details */}
      <div className="absolute right-[-10%] top-[30%] w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="From Nature To"
          highlight="Your Doorstep"
          subtitle="Farm To Home Timeline"
        />

        <div className="relative mt-20">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-primary-green/20 -z-10" />

          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[28px] p-6 border border-light-green/30 hover:border-accent-gold/45 shadow-premium hover:shadow-premium-hover transition-all duration-350 text-center flex flex-col items-center group h-full"
                >
                  {/* Step Bubble with glowing ring */}
                  <div className="w-20 h-20 rounded-full bg-light-green text-primary-green mx-auto flex items-center justify-center shadow-inner group-hover:bg-primary-green group-hover:text-white transition-all duration-300 relative">
                    <Icon className="text-3xl" />
                    
                    {/* Golden step number badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-accent-gold to-yellow-600 text-white text-[10px] font-black flex items-center justify-center shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-luxury-charcoal font-playfair mt-6 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmToHome;