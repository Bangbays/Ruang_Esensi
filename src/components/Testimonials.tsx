import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Manhattan Homeowner",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop", // <-- GANTI DENGAN URL BARU INI
    quote:
      '"The transformation of our bedroom was incredible. I never realized how much visual clutter was affecting my sleep quality. Now I wake up feeling refreshed and peaceful every morning."',
  },
  {
    name: "David Chen",
    title: "Brooklyn Professional",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    quote:
      '"Working from home became so much more productive after the office redesign. The Japandi principles created a space that actually helps me focus instead of distracting me."',
  },
  {
    name: "Lisa Rodriguez",
    title: "Queens Family Mother",
    imageSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote:
      '"Our family room went from chaos to calm. The kids actually prefer playing at home now instead of always wanting to go out. It\'s brought our family closer together."',
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-3xl sm:text-4xl text-text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real transformations, real results, real peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-card group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-inter font-medium text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-text-secondary italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
