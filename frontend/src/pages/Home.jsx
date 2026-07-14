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

const Home = () => {
  const [loading, setLoading] = useState(true);

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
      <Navbar />
      <Hero />
      <Category />
      <ProductSection />
      <Benefits />
      <WhyChoose />
      <FarmToHome />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;