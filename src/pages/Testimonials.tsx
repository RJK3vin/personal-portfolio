import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-center">Testimonials</h1>
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-600">Coming soon — check back later for client feedback!</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;

