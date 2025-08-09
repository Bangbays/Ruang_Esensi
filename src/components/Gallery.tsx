import React from "react";
import Image from "next/image";

const projects = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    title: "Serene Master Bedroom",
    details: "450 sq ft • Manhattan, NY",
    quote: '"Finally, a bedroom that helps me sleep better." - Sarah M.',
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg", // <-- GANTI DENGAN URL BARU INI
    title: "Open Living Space",
    details: "680 sq ft • Brooklyn, NY",
    quote: '"Our home finally feels like a sanctuary." - David & Lisa K.',
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    title: "Zen Kitchen Space",
    details: "320 sq ft • Queens, NY",
    quote: '"Cooking has become my meditation time." - Maria R.',
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    title: "Focused Home Office",
    details: "180 sq ft • Manhattan, NY",
    quote: '"My productivity has never been higher." - James T.',
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    title: "Spa-Like Bathroom",
    details: "95 sq ft • Bronx, NY",
    quote: '"Every morning feels like a spa retreat." - Anna L.',
  },
  {
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg", // <-- GANTI INI
    title: "Family Gathering Space",
    details: "520 sq ft • Staten Island, NY",
    quote:
      '"Our kids actually want to spend time at home now." - The Johnson Family',
  },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            Transformation Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped homeowners create serene, functional spaces
            that enhance daily living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <h3 className="font-inter font-medium text-lg text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm mb-2">
                {project.details}
              </p>
              <p className="text-text-secondary text-sm italic">
                {project.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
