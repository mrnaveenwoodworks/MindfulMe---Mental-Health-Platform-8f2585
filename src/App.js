import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const element = e.target;
      if (element.tagName === "A" && element.hash) {
        e.preventDefault();
        const targetId = element.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Handle scroll to top button visibility
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    
    if (scrollToTopBtn) {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.remove("hidden");
        } else {
          scrollToTopBtn.classList.add("hidden");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Us Section */}
        <AboutUs />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <button
        id="scrollToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hidden"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M200,176V64a24,24,0,0,0-24-24H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="92" x2="164" y2="92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="132" x2="164" y2="132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
      </button>

      {/* Skip to Main Content - Accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-purple-600 text-white px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* Cookie Consent Banner */}
      <div
        id="cookie-banner"
        className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-50"
      >
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <a href="/privacy" className="underline hover:text-purple-300">
            Learn more
          </a>
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => document.getElementById("cookie-banner")?.remove()}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            Accept
          </button>
          <button
            onClick={() => document.getElementById("cookie-banner")?.remove()}
            className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors text-sm font-medium"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;