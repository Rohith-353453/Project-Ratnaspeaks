import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Curriculum from '@/components/Curriculum';
import WhyCohort from '@/components/WhyCohort';
import Pricing from '@/components/Pricing';
import HiringPartners from '@/components/HiringPartners';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-bg min-h-screen`}>
      <Navbar />
      <Hero />
      <Curriculum />
      <WhyCohort />
      <Pricing />
      <HiringPartners />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}