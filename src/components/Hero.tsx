'use client';

import { motion, Variants } from 'framer-motion';

const floatVariants: Variants = {
  float: {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
<section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden bg-bg-dark pt-24">      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark" />
      </div>

      {/* Central Portrait */}
      <div className="relative z-10 mt-32 md:mt-40">
        <motion.img
          src="/images/hero-portrait.jpg"
          alt="Ratna"
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-8 border-accent/50 shadow-2xl shadow-accent/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* 4 Orbiting Badges – Exact Positions like Screenshot 1 */}
        <motion.div className="absolute -top-8 -left-12 md:-top-12 md:-left-20 bg-bg-dark/90 rounded-2xl px-4 py-3 text-center shadow-2xl backdrop-blur-md border border-white/20" variants={floatVariants} animate="float">
          <p className="font-bold">Quantum Project</p>
          <p className="text-accent">501K Subscribers</p>
        </motion.div>

        <motion.div className="absolute -top-8 -right-12 md:-top-12 md:-right-20 bg-bg-dark/90 rounded-2xl px-4 py-3 text-center shadow-2xl backdrop-blur-md border border-white/20" variants={floatVariants} animate="float" transition={{ delay: 0.5 }}>
          <p className="font-bold">Indian Video School</p>
          <p className="text-accent">65.9K Followers</p>
        </motion.div>

        <motion.div className="absolute -bottom-8 -left-12 md:-bottom-12 md:-left-20 bg-bg-dark/90 rounded-2xl px-4 py-3 text-center shadow-2xl backdrop-blur-md border border-white/20" variants={floatVariants} animate="float" transition={{ delay: 1 }}>
          <p className="font-bold">Ratna Naik</p>
          <p className="text-accent">234K Followers</p>
        </motion.div>

        <motion.div className="absolute -bottom-8 -right-12 md:-bottom-12 md:-right-20 bg-bg-dark/90 rounded-2xl px-4 py-3 text-center shadow-2xl backdrop-blur-md border border-white/20" variants={floatVariants} animate="float" transition={{ delay: 1.5 }}>
          <p className="font-bold">RatnaSpeaks</p>
          <p className="text-accent">846K Subscribers</p>
        </motion.div>
      </div>

      {/* Bottom Title Section – Exact like Screenshot 2 */}
      <motion.div
        className="relative z-10 text-center pb-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-text-gray mb-4">RatnaSpeaks presents</p>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight">
          not just a<br />
          Video Editing Cohort
        </h1>
        <p className="text-text-gray text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          the ultimate beginner-friendly video editing cohort,<br />
          now powered with the most insane AI tools ever.
        </p>
        <motion.button
  className="absolute left-1/2 bottom-10 -translate-x-1/2
             bg-[#ccff00] text-black px-10 py-4 rounded-full
             font-bold text-lg shadow-lg shadow-[#ccff00]/50"
  whileHover={{ scale: 1.08, boxShadow: '0 0 100px rgba(85, 212, 222, 0.6)' }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open('https://forms.gle/hjN8kVeUWp29HeL16', '_blank')}
>
  Join Now
</motion.button>

      </motion.div>
    </section>
  );
}