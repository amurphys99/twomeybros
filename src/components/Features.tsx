import { motion } from 'motion/react';
import { Home, Briefcase, Zap, ShieldCheck, TreePine, Thermometer } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="text-accent" />,
      title: "Home Office",
      description: "A professional, quiet space to boost your productivity without leaving home.",
      highlight: false
    },
    {
      icon: <Zap className="text-accent" />,
      title: "Fully Powered",
      description: "Complete electrical packages including high-speed data and smart lighting.",
      highlight: true
    },
    {
      icon: <Thermometer className="text-accent" />,
      title: "A-Rated Insulation",
      description: "Stay warm in winter and cool in summer with our premium insulation systems.",
      highlight: false
    },
    {
      icon: <ShieldCheck className="text-accent" />,
      title: "10-Year Warranty",
      description: "Built to last with high-quality materials and expert Irish craftsmanship.",
      highlight: false
    },
    {
      icon: <TreePine className="text-accent" />,
      title: "Sustainable Wood",
      description: "Sourced from responsibly managed forests, ensuring a low carbon footprint.",
      highlight: false
    },
    {
      icon: <Home className="text-accent" />,
      title: "Bespoke Design",
      description: "Every room is custom-built to fit your garden and your specific needs.",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Built for Life, Designed for You</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We don't just build sheds. We create high-performance living spaces that add real value to your home and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 md:p-8 rounded-3xl border transition-all ${
                feature.highlight 
                  ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20 md:scale-105 z-10' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.highlight ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${feature.highlight ? 'text-white' : 'text-primary'}`}>{feature.title}</h3>
              <p className={feature.highlight ? 'text-white/70' : 'text-slate-500'}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
