'use client';

import { motion } from 'framer-motion';

const faqs = [
  "WHAT EDITING SOFTWARE DO YOU TEACH?",
  "I'M UNABLE TO ACCESS THE COHORT CONTENT, WHAT SHOULD I DO?",
  "DO YOU TEACH VIDEO EDITING FROM THE BASICS?",
  "DO I NEED TO BUY THE SOFTWARE AFTER JOINING THE COHORT?",
  "DO YOU GUARANTEE PLACEMENTS?",
];

export default function Faq() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        FAQ
      </motion.h2>

      <div className="space-y-6">
        {faqs.map((q, i) => (
          <motion.details
            key={q}
            className="bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <summary className="font-bold text-xl list-none">{q}</summary>
            <p className="text-text-gray mt-4">
              {q.includes("SOFTWARE") && "We teach Adobe Premiere Pro, After Effects, and DaVinci Resolve."}
              {q.includes("ACCESS") && "Please email contact@ratnaspeaks.in with your registered email."}
              {q.includes("BASICS") && "Yes! We start from fundamentals and go all the way to pro level."}
              {q.includes("BUY") && "No, we guide you on free trials and student discounts."}
              {q.includes("PLACEMENTS") && "We provide strong placement assistance and industry connections."}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}