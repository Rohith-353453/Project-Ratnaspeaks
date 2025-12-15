'use client';

import { motion } from 'framer-motion';

const logos = ["Swish", "100x", "Google", "Unacademy", "Growth School", "Munchable"];

export default function HiringPartners() {
  return (
    <section id="hire" className="py-20 px-6 text-center">
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Look who's hiring from us
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center max-w-6xl mx-auto">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            className="bg-gray-800/50 rounded-2xl h-32 flex items-center justify-center text-2xl font-bold text-gray-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}