import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah O'Connor",
      location: "Douglas, Cork",
      text: "Twomey Bros transformed our garden. The home office they built is warmer than our actual house! Professional from start to finish.",
      outcome: "Increased productivity by 40%",
      rating: 5,
      avatar: 20
    },
    {
      name: "Liam Murphy",
      location: "Kinsale, Cork",
      text: "The quality of the joinery is exceptional. It's not just a room, it's a piece of architecture. Highly recommend for anyone in Cork.",
      outcome: "Added €35k to property value",
      rating: 5,
      avatar: 22
    },
    {
      name: "Emma Walsh",
      location: "Ballincollig, Cork",
      text: "We use it as a home gym and yoga studio. The natural light is amazing. It was finished ahead of schedule too!",
      outcome: "Saved €1,200/yr on gym fees",
      rating: 5,
      avatar: 21
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Trusted by Families Across Cork</h2>
            <p className="text-slate-500 text-lg">
              Don't take our word for it. Hear from the people who are already living their best life in a Twomey Bros garden room.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-accent">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-primary">4.9/5 from 120+ builds</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group"
            >
              <Quote className="absolute top-6 right-8 text-slate-100 group-hover:text-accent/20 transition-colors" size={48} />
              <div className="flex text-accent mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="mb-6 py-2 px-4 bg-accent/10 rounded-lg inline-block">
                <span className="text-accent font-bold text-sm">Outcome: {t.outcome}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${t.avatar}`} alt={t.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
