'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Glassmorphic Navbar - Exact Match to Original */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-bg-dark/70 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl shadow-black/50 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-text-white">
            RatnaSpeaks
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-text-gray">
            <Link href="#why" className="hover:text-text-white transition duration-200">
              Why us
            </Link>
            <Link href="#learn" className="hover:text-text-white transition duration-200">
              What you&apos;ll learn
            </Link>
            <Link href="#pricing" className="hover:text-text-white transition duration-200">
              Pricing
            </Link>
            <Link href="#hire" className="hover:text-text-white transition duration-200">
              Hire from us
            </Link>
          </div>

          {/* Join Now Button */}
         <motion.button
  className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-[#ccff00]/50 hidden md:block"
  whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(204, 255, 0, 0.6)' }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open('https://forms.gle/hjN8kVeUWp29HeL16', '_blank')}
>
  Join Now
</motion.button>



          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-xs bg-bg-dark/90 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-8 shadow-2xl md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col space-y-6 text-center">
            <Link href="#why" onClick={() => setOpen(false)} className="text-lg hover:text-text-white">
              Why us
            </Link>
            <Link href="#learn" onClick={() => setOpen(false)} className="text-lg hover:text-text-white">
              What you&apos;ll learn
            </Link>
            <Link href="#pricing" onClick={() => setOpen(false)} className="text-lg hover:text-text-white">
              Pricing
            </Link>
            <Link href="#hire" onClick={() => setOpen(false)} className="text-lg hover:text-text-white">
              Hire from us
            </Link>
            <motion.button
              className="bg-accent text-black px-8 py-3 rounded-full font-bold"
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpen(false)}
            >
              Join Now
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}