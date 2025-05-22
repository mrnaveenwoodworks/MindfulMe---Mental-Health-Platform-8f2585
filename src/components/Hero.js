import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Abstract background shapes */}
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-300 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-300 -ml-40 -mb-40"></div>
        <div className="absolute top-1/2 left-1/3 w-44 h-44 rounded-full bg-pink-300 -ml-10 -mt-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Mental Wellness <span className="text-purple-600">Journey</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Access professional therapy, guided resources, and a supportive community to help you thrive. Your wellbeing matters, and we're here for every step of your journey.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white text-center font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 text-center font-medium rounded-lg transition duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx1c2VyJTJCdGVzdGltb25pYWwlMkJwcm9maWxlJTJCaW1hZ2UlMkIxfGVufDB8fHx8MTc0Nzc0Mjk1OHww&ixlib=rb-4.1.0&q=80&w=1080" alt="user testimonial profile image 1" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx1c2VyJTJCdGVzdGltb25pYWwlMkJwcm9maWxlJTJCaW1hZ2UlMkIyfGVufDB8fHx8MTc0Nzc0Mjk2NHww&ixlib=rb-4.1.0&q=80&w=1080" alt="user testimonial profile image 2" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx1c2VyJTJCdGVzdGltb25pYWwlMkJwcm9maWxlJTJCaW1hZ2UlMkIzfGVufDB8fHx8MTc0Nzc0Mjk3MHww&ixlib=rb-4.1.0&q=80&w=1080" alt="user testimonial profile image 3" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx1c2VyJTJCdGVzdGltb25pYWwlMkJwcm9maWxlJTJCaW1hZ2UlMkI0fGVufDB8fHx8MTc0Nzc0Mjk3NHww&ixlib=rb-4.1.0&q=80&w=1080" alt="user testimonial profile image 4" />
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">4.9/5</span> from over <span className="font-bold">1,200+</span> users
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-white p-2 rounded-2xl shadow-2xl relative z-10">
              <div className="bg-purple-50 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519540393135-f52583f80e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUaGVyYXBpc3QlMkJoYXZpbmclMkJhJTJCdmlkZW8lMkJjYWxsJTJCc2Vzc2lvbiUyQndpdGglMkJwYXRpZW50fGVufDB8fHx8MTc0Nzc0Mjk3OHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Therapist having a video call session with patient" />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs py-1 px-2 rounded-full">Live Session</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-24 -left-10 bg-white p-4 rounded-lg shadow-lg w-48 transform -translate-y-1/2 z-20">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><circle cx="128" cy="128" r="16"/><circle cx="176" cy="128" r="16"/><circle cx="80" cy="176" r="16"/><circle cx="128" cy="176" r="16"/><circle cx="176" cy="176" r="16"/></svg>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Next Session</p>
                  <p className="text-sm font-semibold">Today, 3:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-lg shadow-lg w-56 z-20">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/></svg>
                <p className="ml-2 text-sm font-medium">Mental Health Check-in</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>
              <p className="text-xs text-gray-500 text-right">68% completed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted partners section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <p className="text-sm text-gray-500 text-center mb-6">TRUSTED BY LEADING ORGANIZATIONS</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQYXJ0bmVyJTI1MkZDb21wYW55JTJCbG9nbyUyQiUyNTI0JTI1N0JpJTI1N0R8ZW58MHx8fHwxNzQ3NzQyOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt={`PartnerCompany logo ${i}`}
                className="h-8 w-auto max-w-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;