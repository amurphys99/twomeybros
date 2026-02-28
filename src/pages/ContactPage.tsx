import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <main>
      <PageHero 
        title="Contact Us" 
        subtitle="Let's discuss your project. We're here to answer any questions and help you get started."
        image="https://picsum.photos/seed/contacthero/1920/1080"
      />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
