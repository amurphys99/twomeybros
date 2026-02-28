import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    { src: "/images/sedum-roof-37b64c8c-297b-460b-966c-89741077d69c.png", title: "Green Roof Office", location: "Cork" },
    { src: "/images/Guildford-Garden-Room-Heading-73f94ff0-2c4e-42c8-ba96-88d554ceb997.png", title: "Guildford Garden Room", location: "Cork" },
    { src: "/images/garden-room-9e56a14f-dae5-4a76-b025-0c20830ddaaa.png", title: "Bi-Fold Living Space", location: "Cork" },
    { src: "/images/garden-room-on-landscaped-garden-905eb673-ae12-4d15-aa82-230f9334607a.png", title: "Landscaped Garden Room", location: "Cork" },
    { src: "/images/original_3-0-x-4-8m-garden-room-f--b-french-gray-b7c6783c-7b7f-4dd4-a046-3d3a2fb130ad.png", title: "French Gray Garden Room", location: "Cork" },
    { src: "/images/26c80bfd-3bf2-4abd-b237-4363d0a20bde-21f6caa6-865e-4a5e-9c06-416af5130813.png", title: "Modern Garden Office", location: "Cork" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Recent Creations</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore our portfolio of bespoke garden rooms across County Cork. Each project is unique, built to the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <h4 className="text-white font-bold text-xl">{img.title}</h4>
                <p className="text-white/70 text-sm">{img.location}, Cork</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
