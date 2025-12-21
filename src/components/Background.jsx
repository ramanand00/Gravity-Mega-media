import React from 'react';
import { motion } from 'framer-motion';

const waveVariants = {
  animate: (i) => ({
    y: [0, -15, 0],
    x: [0, 10, 0],
    rotate: [0, 1.5, 0],
    transition: {
      duration: 10 + i * 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const particleVariants = {
  animate: {
    y: [0, -25, 0],
    x: [0, 15, -15, 0],
    opacity: [0.1, 0.7, 0.1],
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Floating neon waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-[200%] h-[50%] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 opacity-30 blur-3xl`}
          style={{
            top: `${i * 25}%`,
            left: '-50%',
          }}
          variants={waveVariants}
          animate="animate"
          custom={i}
        />
      ))}

      {/* Small glowing particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-20 shadow-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      {/* Subtle dark gradient shift */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            'linear-gradient(120deg, #0f0f0f, #111827)',
            'linear-gradient(120deg, #111827, #0f0f0f)',
            'linear-gradient(120deg, #0f0f0f, #111827)',
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Background;
