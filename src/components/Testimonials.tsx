'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: "- RAMYA SREE",
    text: "This cohort completely transformed my editing skills. From beginner to landing high-paying freelance gigs in just 3 months!",
  },
  {
    name: "- GNANENDRA",
    text: "Best decision ever. Got placed at a top agency right after completing the cohort. The mentorship is unmatched.",
  },
  {
    name: "- DEVI PRASANNA",
    text: "Ratna's teaching style is incredible. The AI tools module alone was worth the entire course. Highly recommend!",
  },
  {
    name: "- GANESH",
    text: "Practical, real-world focused, and super supportive community. Went from zero clients to running my own small agency.",
  },
  {
    name: "- KAVYA",
    text: "Went from zero clients to running my own small agency.",
  },
  {
    name: "- ROHITH",
    text: "The freelancing and agency-building lessons are gold. Already scaled my side hustle into a full-time income!",
  },
  {
    name: "- LAHARI",
    text: "Loved the social media growth strategies. My reels went viral after applying the storytelling techniques taught here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-bg-dark">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What Students Say About Us
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-bg-dark/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-text-gray italic mb-6">"{review.text}"</p>
            <p className="text-text-white font-bold text-lg">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}