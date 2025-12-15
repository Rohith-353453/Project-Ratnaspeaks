'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Curriculum() {
  return (
    <section id="learn" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What you'll learn in this Cohort
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Large Card 1 */}
        <motion.div
          className="md:col-span-2 bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">1. Advanced Video Editing</h3>
          <div className="flex gap-4 mb-6">
            <span className="bg-gray-800 px-4 py-2 rounded-lg">Ae</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">Pr</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">DaVinci Resolve</span>
          </div>
          <p className="text-text-gray mb-6">Unleash your creativity with cutting-edge AI tools and professional techniques.</p>
          <ul className="space-y-4">
            {["A-Z of Video Editing", "Advanced Motion Graphics", "Advanced Color Grading"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div className="bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold mb-6">2. Social Media Growth</h3>
          <ul className="space-y-4 text-text-gray">
            {["Content Planning", "Scripting", "Storytelling", "SEO", "Basics of Cinematography"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div className="bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="text-2xl font-bold mb-6">3. Freelancing & Agency Building</h3>
          <ul className="space-y-4 text-text-gray">
            {["How/Where to reach clients?", "Basics of Marketing", "Negotiating Prices", "How to Scale an Agency?"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 4 with New Badge */}
        <motion.div className="md:col-span-2 bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <span className="absolute top-4 right-6 bg-secondary text-black px-4 py-1 rounded-full text-sm font-bold">New</span>
          <h3 className="text-3xl font-bold mb-6">4. Introducing the AI Creative Studio</h3>
          <p className="text-text-gray">Unleash creativity with the latest AI tools for editing, design, and automation.</p>
        </motion.div>
      </div>
    </section>
  );
}