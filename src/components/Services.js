import React, { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData, serviceCategories } from "../data/servicesData";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredServices = useMemo(() => {
    if (!Array.isArray(servicesData)) {
      console.error("Services data is not an array");
      return [];
    }
    return activeCategory === "all" 
      ? servicesData 
      : servicesData.filter(service => service && service.category === activeCategory);
  }, [activeCategory]);

  const renderServiceIcon = (iconType) => {
    if (!iconType) return null;
    
    switch (iconType) {
      case "therapy":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
            <rect width="256" height="256" fill="none"/>
            <circle cx="104" cy="120" r="16"/>
            <circle cx="152" cy="120" r="16"/>
            <path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        );
      case "meditation":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
            <rect width="256" height="256" fill="none"/>
            <path d="M152,208V160l-24-48-24,48v48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M128,80a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80H64V80A32,32,0,0,1,96,48h0A32,32,0,0,1,128,80Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        );
      case "workshop":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
            <rect width="256" height="256" fill="none"/>
            <rect x="32" y="72" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        );
      case "community":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
            <rect width="256" height="256" fill="none"/>
            <circle cx="88" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M16,197.4a88,88,0,0,1,144,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <path d="M169.5,160a87.9,87.9,0,0,1,72,37.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24">
            <rect width="256" height="256" fill="none"/>
            <path d="M128,32V224M32,128H224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mental Health Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover personalized support for your mental wellbeing through our comprehensive range of services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {serviceCategories?.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Service */}
        {activeCategory === "all" && servicesData?.[0] && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 text-white">
                  <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
                    Featured Service
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{servicesData[0].title}</h3>
                  <p className="mb-6">{servicesData[0].description}</p>
                  {servicesData[0].features && (
                    <ul className="space-y-3 mb-8">
                      {servicesData[0].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-purple-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
                              <rect width="256" height="256" fill="none"/>
                              <polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                              <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition duration-300"
                  >
                    Schedule a Session
                    <span className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
                        <rect width="256" height="256" fill="none"/>
                        <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                        <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="h-64 md:h-full">
                    {servicesData[0].image && (
                      <img 
                        src={servicesData[0].image} 
                        alt={servicesData[0].title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            service && (
              <ServiceCard
                key={service.id || index}
                title={service.title || ""}
                description={service.description || ""}
                icon={renderServiceIcon(service.iconType)}
                features={service.features || []}
                ctaLink={service.ctaLink || "#"}
                highlighted={service.highlighted || false}
              />
            )
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
          >
            View All Services
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

export default Services;