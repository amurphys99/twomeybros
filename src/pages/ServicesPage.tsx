import PageHero from '../components/PageHero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const ServicesPage = () => {
  return (
    <main>
      <PageHero 
        title="Our Services" 
        subtitle="From initial design to final installation, we handle every aspect of your garden room project."
        image="https://picsum.photos/seed/services/1920/1080"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Design & Planning', description: 'We work with you to create a 3D model of your garden room, ensuring it fits perfectly in your space.' },
              { title: 'Groundwork & Foundations', description: 'Our team handles all site preparation, including specialized foundation systems for any terrain.' },
              { title: 'Full Installation', description: 'Our expert joiners and electricians build your room to the highest standards of quality.' },
              { title: 'Electrical & Data', description: 'Complete electrical fit-out including high-speed internet and smart home features.' },
              { title: 'Internal Finishing', description: 'Plastering, flooring, and custom cabinetry to make your space feel like home.' },
              { title: 'Landscaping', description: 'We can also help integrate your new room into your garden with custom decking and paths.' },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Features />
      <ContactForm />
    </main>
  );
};

export default ServicesPage;
