import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import ProductSection from "../components/Products/ProductSection";
import Benefits from "../components/Benefits/Benefits";
import WhyChoose from "../components/WhyChooseUs/WhyChoose";
import FarmToHome from "../components/Process/FarmToHome";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import CartDrawer from "../components/Cart/CartDrawer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open cart drawer when product is added
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2s delay for loading screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Hero />
      <Category />
      <ProductSection searchQuery={searchQuery} onAddToCart={addToCart} />
      <Benefits />
      <WhyChoose />
      <FarmToHome />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
    </>
  );
};

export default Home;