import PageHero from '../components/PageHero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const GardenOffices = () => {
  return (
    <main>
      <PageHero 
        title="Garden Offices" 
        subtitle="The ultimate work-from-home sanctuary. Quiet, professional, and just steps from your back door."
        image="https://picsum.photos/seed/office/1920/1080"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Reclaim Your Work-Life Balance</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Our garden offices are designed to provide a professional environment that separates your work life from your home life. Built with premium materials and A-rated insulation, they are comfortable year-round.
              </p>
              <ul className="space-y-4">
                {['High-speed data connectivity', 'Acoustic soundproofing', 'Custom built-in storage', 'Climate control systems'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/garden-office-featured.png" alt="Garden Office Interior" />
            </div>
          </div>
        </div>
      </section>
      <Features />
      <ContactForm />
    </main>
  );
};

export default GardenOffices;
