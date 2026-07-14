import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-bg-green flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 rounded-full border-4 border-light-green border-t-primary-green mb-4"
      />
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-primary-green font-semibold tracking-wider font-playfair text-xl"
      >
        IRAI ORGANIC FOODS
      </motion.h3>
      <p className="text-xs text-gray-500 mt-1">Nourishing Lives Naturally...</p>
    </div>
  );
}

export default Loader;
