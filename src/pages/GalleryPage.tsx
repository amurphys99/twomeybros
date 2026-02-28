import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const GalleryPage = () => {
  return (
    <main>
      <PageHero 
        title="Project Gallery" 
        subtitle="Be inspired by our recent builds across Cork. Quality craftsmanship in every detail."
        image="https://picsum.photos/seed/galleryhero/1920/1080"
      />
      <Gallery />
      <ContactForm />
    </main>
  );
};

export default GalleryPage;
