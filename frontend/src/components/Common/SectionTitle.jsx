import React from 'react';
import { motion } from 'framer-motion';

function SectionTitle({ title, highlight, subtitle, align = 'center', light = false }) {
  const isCenter = align === 'center';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className={`inline-block text-xs md:text-sm font-bold tracking-widest uppercase mb-3 ${light ? 'text-light-green' : 'text-primary-green'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-text-dark'}`}>
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-accent-gold' : 'text-primary-green'}>
            {highlight}
          </span>
        )}
      </h2>
      <div className={`h-1 w-16 rounded-full mt-4 ${isCenter ? 'mx-auto' : ''} ${light ? 'bg-accent-gold' : 'bg-primary-green'}`} />
    </motion.div>
  );
}

export default SectionTitle;
