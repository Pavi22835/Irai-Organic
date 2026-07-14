import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX, FiPlus, FiMinus, FiTrash2, FiCheckCircle, FiShoppingBag } from "react-icons/fi";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) {
  const [checkoutStep, setCheckoutStep] = useState("cart"); // "cart", "checkout", "success"
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [orderId, setOrderId] = useState("");

  const totalAmount = cartItems.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace("₹", "")) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    const newOrderId = "IRAI-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setCheckoutStep("success");
  };

  const handleCloseSuccess = () => {
    onClearCart();
    setCheckoutStep("cart");
    setFormData({ name: "", phone: "", address: "" });
    onClose();
  };

  // Helper to safely join BASE_URL with image path
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${cleanBaseUrl}${cleanImagePath}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={checkoutStep === "success" ? handleCloseSuccess : onClose}
            className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
          />

          {/* Cart Sidebar Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[1000] shadow-2xl flex flex-col h-full border-l border-light-green/20"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-bg-green/45">
              <div className="flex items-center gap-2.5">
                <FiShoppingBag className="text-primary-green text-xl" />
                <h2 className="text-xl font-bold font-playfair text-luxury-charcoal">
                  {checkoutStep === "success" ? "Order Confirmed" : "Your Shopping Cart"}
                </h2>
              </div>
              <button
                onClick={checkoutStep === "success" ? handleCloseSuccess : onClose}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto p-6 text-left">
              {checkoutStep === "cart" && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-80 text-center">
                      <div className="w-16 h-16 rounded-full bg-bg-green flex items-center justify-center text-primary-green mb-4 border border-light-green/20">
                        <FiShoppingBag className="text-2xl" />
                      </div>
                      <p className="text-lg font-bold text-luxury-charcoal font-playfair">Your cart is empty</p>
                      <p className="text-xs text-gray-400 mt-1 max-w-[220px]">Add fresh, organic foods from our store to start your order.</p>
                      <button
                        onClick={onClose}
                        className="mt-6 bg-primary-green hover:bg-dark-green text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition"
                      >
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cartItems.map((item) => {
                        const itemPrice = parseInt(item.price.replace("₹", "")) || 0;
                        return (
                          <div key={item.id} className="flex gap-4 pb-5 border-b border-gray-100 items-start">
                            {/* Product Thumb */}
                            <div className="w-20 h-20 bg-bg-green rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2 border border-light-green/10">
                              <img
                                src={getImageUrl(item.image)}
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            </div>

                            {/* Details */}
                            <div className="flex-grow">
                              <h3 className="font-bold text-luxury-charcoal font-playfair text-base leading-tight">
                                {item.name}
                              </h3>
                              <p className="text-[10px] text-primary-green uppercase font-black tracking-widest mt-1">
                                {item.category} • {item.weight}
                              </p>
                              <div className="flex items-center justify-between mt-3">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 border border-gray-200 rounded-full px-2.5 py-1">
                                  <button
                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                    className="text-gray-400 hover:text-primary-green p-0.5 rounded-full transition"
                                  >
                                    <FiMinus className="text-xs" />
                                  </button>
                                  <span className="text-xs font-bold text-luxury-charcoal w-4 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                    className="text-gray-400 hover:text-primary-green p-0.5 rounded-full transition"
                                  >
                                    <FiPlus className="text-xs" />
                                  </button>
                                </div>

                                <div className="flex items-center gap-3">
                                  <span className="font-black text-dark-green text-sm">
                                    ₹{itemPrice * item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.id, 0)}
                                    className="text-gray-400 hover:text-red-500 transition"
                                  >
                                    <FiTrash2 className="text-sm" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {checkoutStep === "checkout" && (
                <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                  <div className="bg-bg-green/40 p-4 rounded-2xl border border-light-green/20 mb-6">
                    <p className="text-xs font-bold text-dark-green tracking-wide uppercase mb-1">Order Summary</p>
                    <p className="text-lg font-black text-luxury-charcoal font-playfair">Total Amount: ₹{totalAmount}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{cartItems.length} unique products in cart</p>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-2xl bg-bg-green/20 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none transition duration-200 text-sm text-luxury-charcoal font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 rounded-2xl bg-bg-green/20 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none transition duration-200 text-sm text-luxury-charcoal font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Complete street address, landmarks, and city"
                      className="w-full px-4 py-3 rounded-2xl bg-bg-green/20 border border-light-green/20 focus:border-primary-green focus:bg-white focus:outline-none transition duration-200 text-sm text-luxury-charcoal font-medium resize-none"
                      required
                    />
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep("cart")}
                      className="w-1/3 border border-gray-200 text-gray-500 font-bold py-3.5 rounded-2xl transition duration-300 hover:bg-gray-50 text-xs uppercase tracking-wider"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white font-bold py-3.5 rounded-2xl transition duration-300 transform active:scale-95 shadow-premium text-xs uppercase tracking-wider border border-white/10"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              )}

              {checkoutStep === "success" && (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-100"
                  >
                    <FiCheckCircle className="text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-luxury-charcoal font-playfair mb-3">
                    Order Placed!
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-sm px-4">
                    Thank you for ordering with Irai Organic Foods, <span className="font-bold text-dark-green">{formData.name}</span>!
                  </p>
                  <div className="my-6 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 w-full">
                    <p className="text-[10px] text-emerald-600 font-black tracking-widest uppercase mb-1">Order Details</p>
                    <p className="text-sm text-luxury-charcoal font-bold">ID: {orderId}</p>
                    <p className="text-xs text-gray-400 mt-1">Phone: {formData.phone}</p>
                  </div>
                  <p className="text-xs text-gray-400 px-4 leading-relaxed">
                    We will call you shortly to confirm delivery schedules and coordinate cash/UPI payment.
                  </p>
                  <button
                    onClick={handleCloseSuccess}
                    className="mt-8 w-full bg-primary-green hover:bg-dark-green text-white font-bold py-4 rounded-2xl transition shadow-premium text-xs uppercase tracking-wider"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary / CTA */}
            {checkoutStep === "cart" && cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/80">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Total Amount
                  </span>
                  <span className="text-2xl font-black text-dark-green font-playfair">
                    ₹{totalAmount}
                  </span>
                </div>
                <button
                  onClick={() => setCheckoutStep("checkout")}
                  className="w-full bg-gradient-to-r from-primary-green to-dark-green hover:from-dark-green hover:to-emerald-950 text-white font-bold py-4 rounded-2xl transition duration-300 transform active:scale-95 shadow-premium text-xs uppercase tracking-wider border border-white/10"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
