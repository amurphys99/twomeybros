import { motion } from 'motion/react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle motion */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/c5f331bf24a88d48032f85216529c507712a653c_600x435-e4b63068-e418-4b32-b660-44d581a7adf1.png" 
          alt="Luxury Garden Room" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
        
        {/* Animated beam background effect */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            Based in Cork, Ireland
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 text-balance">
            Your Garden Room,<br />
            <span className="italic text-accent">Perfectly Crafted.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Stop dreaming of space. Start living in it. We build bespoke, sustainable garden rooms that transform how you work, rest, and play.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 overflow-hidden shadow-2xl shadow-accent/20"
            >
              <span className="relative z-10">Start Your Design</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
            >
              <MousePointer2 size={16} />
              See our recent builds (2 min scroll)
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
