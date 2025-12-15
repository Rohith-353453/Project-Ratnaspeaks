'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essential",
    price: "4999",
    oldPrice: "8999",
    tag: "For students passionate about video editing",
    accent: "from-white/10 via-white/5 to-transparent",
    glow: "shadow-white/10",
    priceColor: "text-white",
    features: [
      "Studio Quality Lectures",
      "Weekly 2 live classes",
      "Access to the community",
    ],
  },
  {
    name: "Elite",
    price: "6999",
    oldPrice: "12999",
    tag: "For creative minds eager to excel",
    popular: true,
    accent: "from-[#c9b37e]/40 via-[#c9b37e]/20 to-transparent",
    glow: "shadow-[#c9b37e]/20",
    priceColor: "text-[#c9b37e]",
    features: [
      "Everything in Essential",
      "Dedicated Mentors",
      "Weekly Social Media Masterclasses",
      "Access to Edit Battles / Community Games",
    ],
  },
  {
    name: "Ultimate",
    price: "14999",
    oldPrice: "25999",
    tag: "For students serious about building a career",
    accent: "from-white/15 via-white/5 to-transparent",
    glow: "shadow-white/15",
    priceColor: "text-white",
    features: [
      "Everything in Elite",
      "Personal Learning Manager",
      "Access to placement worth 30k / Month",
      "Special Group with Ratna",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl bg-gradient-to-br ${plan.accent} p-[1px]`}
          >
            <div
              className={`relative bg-bg-dark/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl ${plan.glow}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2
                             bg-[#c9b37e]/90 text-black
                             px-5 py-1.5 rounded-full text-xs tracking-widest font-semibold"
                >
                  MOST POPULAR
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-3xl font-semibold mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-text-gray mb-4">
                <s className="opacity-60">₹{plan.oldPrice}</s>{" "}
                <span className={`${plan.priceColor} text-4xl font-semibold`}>
                  ₹{plan.price}
                </span>{" "}
                + GST
              </p>

              {/* Tagline */}
              <p className="text-text-gray mb-8 leading-relaxed">
                {plan.tag}
              </p>

              {/* CTA */}
              <motion.button
                className="w-full bg-white/90 text-black py-4 rounded-full font-semibold mb-8"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Join Now
              </motion.button>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-text-gray"
                  >
                    <Check className="text-white/70" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
