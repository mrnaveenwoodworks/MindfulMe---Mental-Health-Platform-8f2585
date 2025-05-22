import React, { useState, useEffect, useMemo } from "react";
import { testimonialsData } from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Validate and memoize testimonials data
  const validTestimonials = useMemo(() => {
    if (!Array.isArray(testimonialsData)) {
      console.error("Testimonials data is not an array");
      return [];
    }
    return testimonialsData.filter(testimonial => 
      testimonial && 
      typeof testimonial === "object" &&
      testimonial.name &&
      testimonial.quote &&
      testimonial.title
    );
  }, []);

  const testimonialCount = validTestimonials.length;

  // Auto-advance carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying && testimonialCount > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialCount]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    if (testimonialCount > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
    }
  };

  const prevSlide = () => {
    if (testimonialCount > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount);
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < testimonialCount) {
      setCurrentIndex(index);
    }
  };

  // If no valid testimonials, don't render the section
  if (testimonialCount === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-purple-100 max-w-xl mx-auto">
            Hear from individuals who have transformed their mental wellbeing with our support and guidance.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large screen view - Show 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {[
              (currentIndex - 1 + testimonialCount) % testimonialCount,
              currentIndex,
              (currentIndex + 1) % testimonialCount,
            ].map((index, i) => {
              const testimonial = validTestimonials[index];
              if (!testimonial) return null;

              return (
                <div
                  key={testimonial.id || `lg-${index}`}
                  className={`transform transition-all duration-300 ${
                    i === 0 ? "scale-90 opacity-70" : i === 1 ? "scale-100 z-10" : "scale-90 opacity-70"
                  }`}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    rating={testimonial.rating || 5}
                    image={testimonial.image || null}
                  />
                </div>
              );
            })}
          </div>

          {/* Medium screen view - Show 2 cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
            {[
              currentIndex,
              (currentIndex + 1) % testimonialCount
            ].map((index) => {
              const testimonial = validTestimonials[index];
              if (!testimonial) return null;

              return (
                <div
                  key={testimonial.id || `md-${index}`}
                  className="transform transition-all duration-300"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    rating={testimonial.rating || 5}
                    image={testimonial.image || null}
                  />
                </div>
              );
            })}
          </div>

          {/* Small screen view - Show 1 card */}
          <div className="md:hidden">
            {validTestimonials[currentIndex] && (
              <div className="transform transition-all duration-300">
                <TestimonialCard {...validTestimonials[currentIndex]} />
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-20 px-2">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/40 backdrop-blur-sm transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
                <rect width="256" height="256" fill="none"/>
                <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/40 backdrop-blur-sm transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
                <rect width="256" height="256" fill="none"/>
                <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-8 gap-2">
          {validTestimonials.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View all testimonials button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-purple-700 transition-colors"
          >
            View All Success Stories
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
                <rect width="256" height="256" fill="none"/>
                <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;