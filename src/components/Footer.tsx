'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark">
      {/* Background Image Section with Centered Join Now Button */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <img
          src="/images/footer-bg.jpg"
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Join Now Button - Visible only on medium screens and up */}
        <motion.button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold text-lg
                     shadow-lg shadow-[#ccff00]/50 hidden md:block z-10"
          whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(204, 255, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://forms.gle/hjN8kVeUWp29HeL16', '_blank')}
        >
          Join Now
        </motion.button>
      </div>

      {/* Bottom Section: Logo, Social Links, Navigation */}
      <div className="py-10 px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Left: Brand + Social + Email */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-4 text-xl">ratnaspeaks.in</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <a
              href="https://instagram.com/your_instagram_handle" // Replace with your actual handle
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>

            <a
              href="https://youtube.com/@your_youtube_channel" // Replace with your channel
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>

            <a
              href="https://linkedin.com/company/your_company_or_personal" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:contact@ratnaspeaks.in"
            className="flex items-center justify-center md:justify-start text-text-gray hover:text-accent transition-colors"
            aria-label="Email us"
          >
            <Mail className="mr-2" size={18} />
            contact@ratnaspeaks.in
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-col space-y-3 text-text-gray text-center md:text-right">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link>
          <Link href="/404" className="hover:text-accent transition-colors">404/Pages</Link>
          {/* Add more links if needed */}
        </div>
      </div>
    </footer>
  );
}