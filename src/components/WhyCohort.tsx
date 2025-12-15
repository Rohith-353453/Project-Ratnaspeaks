'use client';

import { motion } from 'framer-motion';

export default function WhyCohort() {
  return (
    <section id="why" className="relative py-32 px-6 bg-bg-dark overflow-hidden">
      {/* Faint Massive Title */}
      <h2 className="absolute top-10 left-1/2 -translate-x-1/2
               whitespace-nowrap text-center
               text-3xl md:text-4xl lg:text-[96px]
               font-extrabold uppercase tracking-[0.12em]
               text-transparent bg-clip-text
               bg-gradient-to-b from-white/15 to-white/5
               pointer-events-none select-none">
  WHY THIS COHORT?
</h2>



      {/* Main Diagram - Smaller & Perfectly Aligned */}
      <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px] flex items-center justify-center">
        {/* SVG for Overlapping Circles & Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 700">
          {/* Left Circle */}
          <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />

          {/* Right Circle */}
          <circle cx="650" cy="350" r="220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />

          {/* Horizontal Line */}
          <line x1="130" y1="350" x2="870" y2="350" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />

          {/* Green Accent Line on Right Half */}
          <line x1="500" y1="350" x2="870" y2="350" stroke="#ccff00" strokeWidth="4" opacity="0.6" />
        </svg>

        {/* Learn the Skill - Left */}
        <motion.div
          className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 text-left max-w-xs"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl md:text-5xl font-light text-text-white leading-tight">Learn the</p>
          <p className="text-5xl md:text-6xl font-bold text-text-white italic -mt-2">Skill</p>
        </motion.div>

        {/* Make Money - Right */}
        <motion.div
          className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 text-right max-w-xs"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-5xl md:text-7xl font-black text-accent leading-none">Make<br />Money</p>
        </motion.div>

        {/* Freelance / Grow an Agency - Top */}
        <motion.div
          className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl font-medium text-text-white leading-tight">
            Freelance/<br />Grow an Agency
          </p>
        </motion.div>

        {/* Grow on Social Media - Bottom */}
        <motion.div
          className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-medium text-text-white leading-tight">
            Grow on<br />Social Media
          </p>
        </motion.div>

        {/* Get a Placement - Center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl font-bold text-text-white leading-tight">
            Get a<br />Placement
          </p>
        </motion.div>
      </div>
    </section>
  );
}