import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

const ProductImageFallback = ({ category, name }) => {
  // Select gradient and icon paths based on category
  let gradient = "from-[#FFFDF9] to-[#FDF4E3]";
  let iconColor = "text-[#E28A18]"; // Amber
  let iconSvg = null;

  switch (category) {
    case 'Honey':
      gradient = "from-amber-50 to-orange-100/50";
      iconColor = "text-[#E28A18]";
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Jar */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8v3H8V3zM6 6h12v3H6V6zM5 9c0 4 1 10 7 10s7-6 7-10H5z" />
          {/* Honey drip */}
          <path strokeLinecap="round" strokeLinejoin="round" fill="currentColor" d="M12 9c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-.6.4-1 1-1z" />
          {/* Honeycomb pattern */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14h4M9 16.5h6" />
        </svg>
      );
      break;
    case 'Country Sugar':
      gradient = "from-[#FCFCFA] to-[#F8F3E8]";
      iconColor = "text-[#B45309]"; // Brown
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Bag of sugar */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l1-4h10l1 4M5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
          {/* Sugar sparkles */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4M10 13h4M12 6v1M15 15l1 1M8 15l-1 1" />
        </svg>
      );
      break;
    case 'Pickles':
      gradient = "from-[#FFF9F7] to-[#FFEFEA]";
      iconColor = "text-[#DC2626]"; // Red
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Jar */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8v2H8V4zM6 6h12v13a2 2 0 01-2 2H8a2 2 0 01-2-2V6z" />
          {/* Pickle slice */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v2M11 12h2" />
        </svg>
      );
      break;
    case 'Herbal Powder':
      gradient = "from-[#FAFDF8] to-[#EEF7E8]";
      iconColor = "text-[#15803D]"; // Green
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Mortar & Pestle */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10c0 4 2 8 7 8s7-4 7-8H5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 6l-3-3a1 1 0 00-1.4 0l-4 4a1 1 0 000 1.4L8 11" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3M9 21h6" />
        </svg>
      );
      break;
    case 'Milk Mix':
      gradient = "from-[#F6FBF6] to-[#EAF6EC]";
      iconColor = "text-[#16A34A]"; // Green
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Glass */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10v14a3 3 0 01-3 3H10a3 3 0 01-3-3V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13c1.5 0 3-1.5 3-3s-1.5 0-3 1.5c0-1.5-3-1.5-3 .5s1.5 1 3 1z" />
        </svg>
      );
      break;
    default:
      gradient = "from-[#F8FCF8] to-[#EBF3EB]";
      iconColor = "text-[#15803D]";
      iconSvg = (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Leaf */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-8 3.5-8 8s3.5 8 8 10c4.5-2 8-5.5 8-10s-3.5-8-8-8z" />
        </svg>
      );
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-6 relative`}>
      <div className={`${iconColor} filter drop-shadow-sm mb-2`}>
        {iconSvg}
      </div>
      <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 mt-2">
        Organic {category}
      </span>
    </div>
  );
};

const categoryBgColors = {
  'Honey': 'from-[#FFFDF9] to-[#FDF4E3]',
  'Milk Mix': 'from-[#F6FBF6] to-[#EAF6EC]',
  'Breakfast': 'from-[#F8FCF8] to-[#EBF3EB]',
  'Herbal Powder': 'from-[#FAFDF8] to-[#EEF7E8]',
  'Pickles': 'from-[#FFF9F7] to-[#FFEFEA]',
  'Country Sugar': 'from-[#FCFCFA] to-[#F8F3E8]',
};

const ProductCard = ({ product, onAddToCart }) => {
  const [imgError, setImgError] = useState(false);

  // Helper to safely join BASE_URL with image path
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${cleanBaseUrl}${cleanImagePath}`;
  };

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

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
      <div className={`relative bg-gradient-to-br ${categoryBgColors[product.category] || "from-white to-light-green/10"} h-64 flex items-center justify-center overflow-hidden border-b border-light-green/10`}>
        
        {/* Soft background shape glow */}
        <div className="absolute w-36 h-36 rounded-full bg-light-green/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {imgError ? (
          <ProductImageFallback category={product.category} name={product.name} />
        ) : (
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        
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

          <button 
            onClick={handleOrderClick}
            className="flex items-center gap-2 bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95 border border-white/10"
          >
            <FiShoppingBag className="text-xs" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;