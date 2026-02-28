import { motion, useScroll, useSpring } from 'motion/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <main>
        <Hero />
        
        {/* Value Prop Section */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-4xl font-bold text-accent italic">100%</h3>
                <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Bespoke Design</p>
                <p className="text-sm text-white/50">No flat-packs. Every room is built from scratch to your exact dimensions.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-4xl font-bold text-accent italic">A-Rated</h3>
                <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Energy Efficiency</p>
                <p className="text-sm text-white/50">High-performance insulation keeps your space usable 365 days a year.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-4xl font-bold text-accent italic">48 Hours</h3>
                <p className="text-white/70 uppercase tracking-widest text-xs font-bold">Quote Turnaround</p>
                <p className="text-sm text-white/50">Instant clarity on costs. No hidden fees, no surprises.</p>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
        </section>

        <Features />
        
        {/* Social Proof Marquee */}
        <div className="bg-slate-50 py-12 border-y border-slate-100 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center gap-12 mx-12">
                <span className="text-2xl font-serif font-bold text-primary/20">CORK CITY COUNCIL APPROVED</span>
                <span className="text-2xl font-serif font-bold text-primary/20">10 YEAR WARRANTY</span>
                <span className="text-2xl font-serif font-bold text-primary/20">SUSTAINABLE IRISH WOOD</span>
                <span className="text-2xl font-serif font-bold text-primary/20">FULLY INSURED</span>
              </div>
            ))}
          </div>
        </div>

        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>

      {/* Sticky CTA */}
      <motion.div 
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <button className="bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 hover:bg-slate-800 transition-all group">
          <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
          Get Instant Quote
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.div>
        </button>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
