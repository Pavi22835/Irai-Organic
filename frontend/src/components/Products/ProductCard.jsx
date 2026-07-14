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
  'Honey': 'from-[#2a2318] via-[#44341f] to-[#1d1710]',
  'Milk Mix': 'from-[#1d2b1d] via-[#243424] to-[#161f17]',
  'Breakfast': 'from-[#1c241b] via-[#243123] to-[#151d16]',
  'Herbal Powder': 'from-[#20261c] via-[#2a3423] to-[#171c15]',
  'Pickles': 'from-[#2c1d1b] via-[#3b2422] to-[#1c1413]',
  'Country Sugar': 'from-[#29231b] via-[#3d2f20] to-[#1b1511]',
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
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_18px_45px_rgba(8,16,10,0.35)] hover:shadow-[0_22px_55px_rgba(8,16,10,0.45)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-transparent" />
      <div className="absolute inset-0 rounded-[24px] border border-white/20" />
      <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#7cb342]/20 blur-3xl" />
      <div className="relative flex h-full flex-col">
      {/* Product Tag (e.g. Best Seller) */}
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-[#f4c96d] via-[#f7e3a8] to-[#d89b2a] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#231a0d] shadow-[0_6px_16px_rgba(216,155,42,0.24)]">
          {product.tag}
        </span>
      )}

      {/* Product Image Frame */}
      <div className={`relative h-64 overflow-hidden border-b border-white/15 bg-gradient-to-br ${categoryBgColors[product.category] || "from-white to-light-green/10"}`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
        <div className="absolute w-36 h-36 rounded-full bg-[#7cb342]/20 blur-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

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
        <span className="absolute bottom-4 right-4 rounded-xl border border-white/15 bg-[#0f1912]/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f5e9c8] shadow-sm backdrop-blur-md">
          {product.weight}
        </span>
      </div>

      {/* Details Frame */}
      <div className="relative flex flex-grow flex-col p-6 text-left">
        <span className="text-[9px] text-[#9bd565] uppercase tracking-widest font-black mb-1.5">
          {product.category}
        </span>
        
        <h3 className="text-lg font-bold text-[#f7f0dc] font-playfair tracking-wide leading-tight mb-2 group-hover:text-[#dff1b2] transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating Line */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">{ratingStars}</div>
          <span className="text-[10px] text-[#9aa792] font-bold tracking-wider mt-0.5 uppercase">
            {product.rating} ({product.reviews} Reviews)
          </span>
        </div>

        <p className="text-sm text-[#b7c2a8] leading-relaxed mb-6 flex-grow font-medium">
          {product.desc}
        </p>

        {/* Price & Buy Now Group */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-[#9aa792] font-bold block mb-1">
              PRICE
            </span>
            <span className="text-xl font-black text-[#f7e9c2] font-playfair tracking-wide">
              {product.price}
            </span>
          </div>

          <button 
            onClick={handleOrderClick}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-[#6f8f2f] to-[#3f5d26] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:from-[#7cb342] hover:to-[#4b6a2b] hover:shadow active:scale-95"
          >
            <FiShoppingBag className="text-xs" />
            <span>Order</span>
          </button>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;