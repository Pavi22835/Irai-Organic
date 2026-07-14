import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { BsFillLeafFill, BsShieldCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8F7F2] h-screen flex items-center">
      {/* Background Image Banner */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/hero/hero-bg.png"
          alt="Premium Organic Food Showcase"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* Soft fading gradient overlays for optimal readability of the text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2] via-[#F8F7F2]/85 to-transparent max-md:from-[#F8F7F2]/95 max-md:via-[#F8F7F2]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="px-6 lg:px-0"
          >
            <div className="mb-8 space-y-6">
              <h1 className="text-5xl sm:text-6xl xl:text-[72px] font-extrabold leading-tight tracking-[-0.04em] text-[#1C2C1A]">
                Pure by Nature,
                <br />
                <span className="text-[#306E30]">Perfect for <i>You</i></span>
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-[#55604D] leading-relaxed">
                Premium organic foods made with traditional goodness and modern care for a healthy you and a better tomorrow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 bg-[#306E30] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#306E3080] transition hover:bg-[#225522]"
              >
                <span>Shop Now</span>
                <FiArrowRight className="text-sm" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2.5 border border-[#306E30] bg-white text-[#306E30] px-8 py-3 rounded-full text-sm font-semibold transition hover:bg-[#F0F6F0]"
              >
                <span>Explore Products</span>
                <FiArrowRight className="text-sm" />
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-4 rounded-[28px] bg-white/70 p-4 shadow-[0_18px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <div className="flex items-center gap-3 sm:border-r sm:border-gray-200 sm:pr-6 sm:py-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F2E6] text-2xl text-[#2F5525]">
                  <BsFillLeafFill />
                </span>
                <p className="text-sm font-semibold text-[#2F442F]">100% Natural</p>
              </div>
              <div className="flex items-center gap-3 sm:border-r sm:border-gray-200 sm:px-6 sm:py-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EDF7F1] text-2xl text-[#2F5525]">
                  <BsShieldCheck />
                </span>
                <p className="text-sm font-semibold text-[#2F442F]">No Preservatives</p>
              </div>
              <div className="flex items-center gap-3 sm:pl-6 sm:py-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FDEAEA] text-2xl text-[#B33A26]">
                  <AiOutlineHeart />
                </span>
                <p className="text-sm font-semibold text-[#2F442F]">Made with Love</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
