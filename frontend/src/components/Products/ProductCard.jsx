import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const categoryBgColors = {
  'Honey': 'from-[#FFFDF9] to-[#FDF4E3]',
  'Milk Mix': 'from-[#F6FBF6] to-[#EAF6EC]',
  'Breakfast': 'from-[#F8FCF8] to-[#EBF3EB]',
  'Herbal Powder': 'from-[#FAFDF8] to-[#EEF7E8]',
  'Pickles': 'from-[#FFF9F7] to-[#FFEFEA]',
  'Country Sugar': 'from-[#FCFCFA] to-[#F8F3E8]',
};

const ProductCard = ({ product }) => {
  // Safe rendering of rating stars to prevent RangeError crashes on decimal values
  const ratingStars = [];
  const productRating = product.rating || 5;
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(productRating)) {
      ratingStars.push(<FaStar key={i} className="text-amber-500 text-[11px]" />);
    } else if (i === Math.ceil(productRating) && productRating % 1 !== 0) {
      ratingStars.push(<FaStar key={i} className="text-amber-500 opacity-60 text-[11px]" />);
    } else {
      ratingStars.push(<FaStar key={i} className="text-gray-200 text-[11px]" />);
    }
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group bg-white rounded-[24px] overflow-hidden shadow-premium hover:shadow-premium-hover border border-light-green/20 hover:border-primary-green/25 hover:bg-green-50 transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Product Tag (e.g. Best Seller) */}
      {product.tag && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-accent-gold to-yellow-600 text-white text-[9px] uppercase tracking-widest font-black px-3.5 py-1.5 rounded-full z-10 shadow-sm">
          {product.tag}
        </span>
      )}

      {/* Product Image Frame */}
      <div className={`relative bg-gradient-to-br ${categoryBgColors[product.category] || "from-white to-light-green/10"} h-64 flex items-center justify-center p-6 overflow-hidden border-b border-light-green/10`}>
        
        {/* Soft background shape glow */}
        <div className="absolute w-36 h-36 rounded-full bg-light-green/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <img
          src={product.image}
          alt={product.name}
          className="h-44 object-contain transition duration-500 group-hover:scale-105"
        />
        
        {/* Weight indicator card */}
        <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-luxury-charcoal text-[10px] tracking-wider uppercase font-bold px-2.5 py-1.5 rounded-xl border border-light-green/20 shadow-sm">
          {product.weight}
        </span>
      </div>

      {/* Details Frame */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <span className="text-[9px] text-primary-green uppercase tracking-widest font-black mb-1.5">
          {product.category}
        </span>
        
        <h3 className="text-lg font-bold text-luxury-charcoal font-playfair tracking-wide leading-tight mb-2 group-hover:text-primary-green transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating Line */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">{ratingStars}</div>
          <span className="text-[10px] text-gray-400 font-bold tracking-wider mt-0.5 uppercase">
            {product.rating} ({product.reviews} Reviews)
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow font-medium">
          {product.desc}
        </p>

        {/* Price & Buy Now Group */}
        <div className="flex justify-between items-center pt-4 border-t border-light-green/10 mt-auto">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
              PRICE
            </span>
            <span className="text-xl font-black text-dark-green font-playfair tracking-wide">
              {product.price}
            </span>
          </div>

          <a 
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95 border border-white/10"
          >
            <FiShoppingBag className="text-xs" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;