import PageHero from '../components/PageHero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const LivingSpaces = () => {
  return (
    <main>
      <PageHero 
        title="Living Spaces" 
        subtitle="Extended living for modern families. From guest suites to hobby rooms, we create space that feels like home."
        image="/images/living-spaces-hero.png"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">More Room for Life</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Need a guest suite for visiting family? A den for the kids? A quiet art studio or music room? Our living spaces are built to the same standards as a house extension—fully insulated, plumbed, and finished to feel like a natural part of your home. Open the bi-folds on a summer evening and bring the garden inside.
              </p>
              <ul className="space-y-4">
                {['Full plumbing & en-suite bathroom options', 'Premium finishes—timber, tiles, underfloor heating', 'Wide bi-fold doors for indoor-outdoor flow', 'Smart home & climate control ready'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/living-spaces-featured.png" alt="Garden Living Space" />
            </div>
          </div>
        </div>
      </section>
      <Features />
      <ContactForm />
    </main>
  );
};

export default LivingSpaces;
