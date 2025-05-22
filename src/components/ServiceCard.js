import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ title, description, icon, features, ctaLink, highlighted }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl ${
      highlighted 
        ? "bg-gradient-to-br from-purple-600 to-indigo-700 text-white"
        : "bg-white shadow-lg hover:translate-y-[-4px]"
    }`}>
      {/* Decorative background circle */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-8 -translate-y-8 ${
        highlighted ? "bg-white opacity-10" : "bg-purple-100"
      }`}></div>

      {/* Icon wrapper */}
      <div className={`relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
        highlighted ? "bg-white" : "bg-purple-100"
      }`}>
        <span className={highlighted ? "text-purple-600" : "text-purple-600"}>
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-3 ${highlighted ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>
        <p className={`mb-6 ${highlighted ? "text-purple-100" : "text-gray-600"}`}>
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`mr-2 ${highlighted ? "text-purple-200" : "text-purple-600"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
              <span className={highlighted ? "text-purple-100" : "text-gray-600"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={ctaLink}
          className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            highlighted
              ? "bg-white text-purple-600 hover:bg-purple-50"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Learn More
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </span>
        </a>
      </div>

      {/* Popular tag if highlighted */}
      {highlighted && (
        <div className="absolute top-5 right-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm">
            Popular
          </span>
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  ctaLink: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
};

ServiceCard.defaultProps = {
  highlighted: false
};

export default ServiceCard;