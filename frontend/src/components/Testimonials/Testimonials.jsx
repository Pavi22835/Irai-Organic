import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

const reviews = [
  {
    name: "Dr. Ananya Iyer",
    city: "Chennai",
    role: "Nutritionist & Mother",
    review:
      "As a nutritionist, I am extremely selective about health mixes. Irai's ABC Milk Mix has become our daily staple. The flavor is authentic, with zero refined sugar or chemicals. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Siddharth Rajan",
    city: "Coimbatore",
    role: "Fitness Coach",
    review:
      "The Karupatti Muesli is a game changer for my morning breakfast. Natural palm jaggery sweetness instead of sugar makes a massive difference in energy levels. The packaging keeps it fresh.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Meera Krishnan",
    city: "Bangalore",
    role: "Homemaker",
    review:
      "My children love the Fig Honey and Moringa Milk Mix. Finding pure, unadulterated organic products in the city is rare. Irai has earned my family's complete trust.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bg-green relative overflow-hidden">
      
      {/* Visual Depth Glow Layers */}
      <div className="absolute right-[-5%] top-[10%] w-96 h-96 bg-primary-green/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Loved By Our"
          highlight="Happy Customers"
          subtitle="Testimonials"
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-[24px] p-8 border border-light-green/20 hover:border-primary-green/25 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between h-full text-left relative overflow-hidden group">
                  
                  {/* Decorative faint card pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bg-green opacity-40 -z-10" />
                  
                  {/* Quote icon overlay */}
                  <div className="absolute right-6 top-6 text-primary-green/5 group-hover:text-primary-green/10 text-5xl transition duration-300 pointer-events-none -z-10">
                    <FaQuoteLeft />
                  </div>

                  <div>
                    {/* Rating stars */}
                    <div className="flex gap-1 text-amber-500 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed italic mb-6 font-medium">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Customer Info Frame */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-light-green/15">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border border-dashed border-primary-green/30 group-hover:scale-110 transition duration-300 -z-10" />
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white bg-white shadow-sm relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-luxury-charcoal font-playfair leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider text-primary-green font-bold block mt-1">
                        {item.role}, {item.city}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}