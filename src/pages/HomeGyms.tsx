import PageHero from '../components/PageHero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const HomeGyms = () => {
  return (
    <main>
      <PageHero 
        title="Home Gyms" 
        subtitle="Your personal fitness studio. No commute, no crowds, just pure performance in your own garden."
        image="https://picsum.photos/seed/gym/1920/1080"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/home-gym-featured.png" alt="Home Gym Interior" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Your Private Fitness Sanctuary</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Ditch the monthly gym fees and crowded changing rooms. Our purpose-built garden gyms are engineered for serious training—with shock-absorbent rubber flooring for heavy lifts, industrial-grade ventilation to keep you cool during HIIT sessions, and floor-to-ceiling mirrors so you can perfect your form. Train whenever you want, however you want.
              </p>
              <ul className="space-y-4">
                {['Heavy-duty rubber flooring for weights & cardio', 'Industrial ventilation for intense workouts', 'Built-in sound system for your workout playlist', 'Custom storage for racks, bars & equipment'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <ContactForm />
    </main>
  );
};

export default HomeGyms;
