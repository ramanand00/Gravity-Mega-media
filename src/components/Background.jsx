import React from 'react';
import { motion } from 'framer-motion';

const blobVariants = {
  animate: (i) => ({
    x: [0, i % 2 === 0 ? 200 : -200, 0],
    y: [0, i % 3 === 0 ? 150 : -100, 0],
    rotate: [0, 180, 360],
    scale: [1, 1.25, 1],
    opacity: [0.9, 0.45, 0.9],
    transition: {
      duration: 18 + i * 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const particleVariants = {
  animate: {
    y: [0, -50, 0],
    x: [0, 50, -50, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gray-900">
      {/* Animated Blobs */}
      <motion.div
        className="absolute left-[-10%] top-10 w-80 h-80 rounded-full blur-3xl opacity-80 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
        variants={blobVariants}
        animate="animate"
        custom={1}
      />
      <motion.div
        className="absolute right-[-12%] top-1/4 w-96 h-96 rounded-full blur-3xl opacity-80 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600"
        variants={blobVariants}
        animate="animate"
        custom={2}
      />
      <motion.div
        className="absolute left-1/4 bottom-[-8%] w-72 h-72 rounded-full blur-2xl opacity-70 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
        variants={blobVariants}
        animate="animate"
        custom={3}
      />
      <motion.div
        className="absolute right-1/3 bottom-10 w-56 h-56 rounded-full blur-xl opacity-60 bg-gradient-to-r from-green-400 via-lime-300 to-yellow-300"
        variants={blobVariants}
        animate="animate"
        custom={4}
      />

      {/* Small Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      {/* Background gradient shift */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: [
            'linear-gradient(120deg, #1f2937, #111827)',
            'linear-gradient(120deg, #111827, #1f2937)',
            'linear-gradient(120deg, #1f2937, #111827)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Background;
