import React from "react";
import type { Testimonial } from "../data/testimonials";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.name}</h2>
      <p className="text-gray-600 mb-4 italic">"{testimonial.message}"</p>
      {testimonial.projectLink && (
        <a
          href={testimonial.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default TestimonialCard;

